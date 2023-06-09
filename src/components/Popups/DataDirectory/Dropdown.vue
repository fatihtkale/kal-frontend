<template>
  <div class="absolute left-0 font-inter flex items-start gap-x-2 text-[13px] text-gray-600 z-20" :class="[topMargin, fullWidth ? 'w-full' : 'w-auto']" v-click-outside="hidePopup">
    <div class="bg-white h-auto shadow-md rounded-b-md border border-gray-200 min-w-[200px]" :class="fullWidth ? 'w-full' : ''">
      <div class="max-h-[250px] max-w-[250px] overflow-y-scroll relative" v-if="global.containerDirectories && global.containerDirectories.length">
        <div v-for="(directory, index) in global.containerDirectories" @click="setActiveDirectory(directory)" :class="{'bg-gray-200 font-medium': activeDirectory?.id === directory.id, 'border-t border-gray-200': index !== 0}" class="p-2 hover-transition hover:bg-gray-200 text-[12px] cursor-pointer flex justify-between items-center">
          <div class="w-11/12 line-clamp-1">{{ directory.title }}</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <RouterLink v-if="showCreate" to="/new/directory" class="pl-1 py-2 hover-transition bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center font-semibold justify-start rounded-b-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 text-primary-Darker1 mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
        </svg>
        Opret ny kartotek
      </RouterLink>
      <div v-if="!showCreate && (!Array.isArray(global.containerDirectories) || !global.containerDirectories.length)" class="p-2 font-medium">
        Ingen kartotek fundet
      </div>
    </div>
    <div>
      <div class="bg-white border border-gray-200 rounded z-30 shadow-md" v-if="activeDirectory">
        <div class="max-h-[250px] w-[250px] overflow-y-scroll relative">
          <div v-for="(data, index) in getNonDeletedDataDirectory(activeDirectory.data)" v-if="activeDirectory.data && getNonDeletedDataDirectory(activeDirectory.data).length" :key="data.id" @click="chooseDirectoryData(data)" :class="[{'border-t border-gray-200': index !== 0}, inChosenDirectories(data) ? 'bg-primary text-white font-medium cursor-default rounded' : 'hover:bg-gray-200']" class="p-2 hover-transition text-[12px] cursor-pointer flex justify-between items-center">
            <span class="line-clamp-1">{{ getDataDirectoryIdentifier(data) }}</span>
          </div>
          <div v-else class="p-2 hover-transition text-[12px] font-medium flex justify-between items-center">
            Ingen data fundet
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  import fieldHandler from "@/composables/fieldHandler";
  import { Global } from "@/store/global";

  const props = defineProps({
    showCreate: {
      type: Boolean,
      default: true
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    chosenDirectories: {
      type: Array
    },
    topMargin: {
      type: String,
      default: ' top-[45px]'
    }
  })

  const global = Global();
  const emits = defineEmits(['hide', 'onChosen']);
  const activeDirectory = ref();
  const { getDataDirectoryIdentifier, getNonDeletedDataDirectory } = fieldHandler();

  const hidePopup = () => {
    emits('hide');
  }

  const setActiveDirectory = (directory) => {
    if (!activeDirectory.value || activeDirectory.value !== directory)
      activeDirectory.value = directory;
    else
      activeDirectory.value = null;
  }

  const inChosenDirectories = (data) => {
    let isIn = false;

    if (props.chosenDirectories && props.chosenDirectories.length) {
      props.chosenDirectories.filter((chosenData) => {
        if (chosenData.id === data.id) {
          isIn = true;
        }
      });
    }

    return isIn;
  }

  const chooseDirectoryData = (directory) => {
    // Set directory id
    let emitDirectory = directory;
    emitDirectory['directory_id'] = activeDirectory.value.id;
    emitDirectory['directory_title'] = activeDirectory.value.title;

    emits('onChosen', emitDirectory)
    hidePopup();
  }
</script>