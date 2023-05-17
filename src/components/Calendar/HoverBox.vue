<template>
  <div class="bg-gray-700 text-white min-w-[80%] absolute p-[6px] left-0 rounded-md shadow-md" v-if="secondsWaited">
    <p class="text-[11px] leading-[13px] tracking-tight">{{ task.title }}</p>

    <div class="mt-2 text-[11px]">
      <div>
        <span v-if="task.task_date">{{ dateCalender(task.task_date, false) }}</span>
        <span v-if="task.task_date_end"> - {{ dateCalender(task.task_date_end, false) }}</span>
      </div>
      <div>
        <span v-if="task.task_time">{{ task.task_time.slice(0, 5) }}</span>
        <span v-if="task.task_time_end"> - {{ task.task_time_end.slice(0, 5) }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
  import dateHandler from "@/composables/dateHandler";
  import { onBeforeMount, ref } from "vue";

  const props = defineProps({
    task: {
      type: Object,
      required: true
    }
  });

  const { dateCalender } = dateHandler();

  const secondsWaited = ref();

  onBeforeMount(() => {
    setTimeout(() => secondsWaited.value = true, 750)
  })
</script>