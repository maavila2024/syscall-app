<script setup>
import { onMounted } from 'vue';
import { useTasksStore } from '@/stores/apps/tasks';
import { storeToRefs } from 'pinia';

const tasksStore = useTasksStore();
const { taskStatistics } = storeToRefs(tasksStore);

onMounted(() => {
  tasksStore.fetchTaskStatistics();
});
</script>

<template>
  <v-row>
    <v-col cols="12" lg="2" md="4" sm="4">
      <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-6 bg-lightprimary">
        <div class="bg-lightprimary">
          <img src="@/assets/images/svgs/icon-mailbox.svg" alt="icon" />
          <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-primary">Tasks Created This Month</div>
          <h4 class="text-h4 mt-1 text-primary">{{ taskStatistics.totalTasks }}</h4>
        </div>
      </div>
    </v-col>
    <!-- Repeat similar blocks for other statistics like statusOpen, statusInDevelopment, etc. -->
  </v-row>
</template>
