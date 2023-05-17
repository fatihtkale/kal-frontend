<template>
  <div class="relative">
    <div class="absolute gap-x-2 flex ml-5 mt-10 bg-gray-50 p-3 shadow-xl rounded hover-transition z-20" v-click-outside="hideColor">
      <div class="w-0 h-0 border-[15px] absolute top-0 -mt-7 border-l-transparent border-r-transparent border-t-transparent border-b-gray-100"></div>
      <div v-for="color in colors" :key="color" :class="[ color.css, { 'border-black border-2': activeColors.find((activeColor) => activeColor === color.name) } ]" class="w-10 h-10 rounded shadow-md hover-transition cursor-pointer hover:scale-[103%] hover:shadow-xl" @click="setColors(color);"></div>
    </div>
  </div>
</template>
<script setup>
  import colorHandler from "@/composables/colorHandler";
  import { ref } from "vue";

  const props = defineProps({
    savedColors: {
      type: Array,
    }
  });

  const emits = defineEmits(['hide', 'colors']);
  const { colors } = colorHandler();
  const activeColors = ref([]);

  activeColors.value = props.savedColors ? props.savedColors : [];

  const hideColor = () => {
    emits('hide');
  }

  const setColors = (chosenColor) => {
    let isDuplicate = false;

    // Check if the clicked color not already exists in array
    activeColors.value.forEach((color) => {
      if (color === chosenColor.name) {
        isDuplicate = true;
      }
    });

    if (!isDuplicate) {
      activeColors.value.push(chosenColor.name);
    } else {
      activeColors.value = activeColors.value.filter(removedData => chosenColor.name !== removedData);
    }

    emits('colors', activeColors.value);
  }
</script>