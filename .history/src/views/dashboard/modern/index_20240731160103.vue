<script setup>
import { onMounted } from 'vue';
import { useTasksStore } from '@/stores/apps/tasks';
import { storeToRefs } from 'pinia';
import RevenueUpdates from "../dashboardComponents/modern/RevenueUpdates.vue";

const tasksStore = useTasksStore();
const { taskStatistics } = storeToRefs(tasksStore);

onMounted(() => {
  tasksStore.fetchTaskStatistics();
});
</script> 

<template>
  <v-row>
    <v-col cols="12" lg="2" md="4" sm="4">
      <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-6 bg-lightwarning">
        <div class="bg-lightwarning">
          <img src="@/assets/images/svgs/icon-mailbox.svg" alt="icon" />
          <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-warning">Total de Chamados</div>
          <h4 class="text-h4 mt-1 text-warning">{{ taskStatistics.totalTasks }}</h4>
        </div>
      </div>
    </v-col>
    <!-- Repeat similar blocks for other statistics like statusOpen, statusInDevelopment, etc. -->
    <v-col cols="12" lg="2" md="4" sm="4">
      <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-6 bg-lightprimary">
        <div class="bg-lightprimary">
          <img src="@/assets/images/svgs/icon-mailbox.svg" alt="icon" />
          <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-primary">Chamados em Aberto</div>
          <h4 class="text-h4 mt-1 text-primary">{{ taskStatistics.statusOpen }}</h4>
        </div>
      </div>
    </v-col>
    <v-col cols="12" lg="2" md="4" sm="4">
      <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-6 bg-lightsecondary">
        <div class="bg-lightsecondary">
          <img src="@/assets/images/svgs/icon-mailbox.svg" alt="icon" />
          <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-secondary">Chamados em desenvolvimento</div>
          <h4 class="text-h4 mt-1 text-secondary">{{ taskStatistics.statusInDevelopment }}</h4>
        </div>
      </div>
    </v-col>
    <v-col cols="12" lg="2" md="4" sm="4">
      <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-6 bg-lighterror">
        <div class="bg-lighterror">
          <img src="@/assets/images/svgs/icon-mailbox.svg" alt="icon" />
          <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-error">Chamados aguardando resposta</div>
          <h4 class="text-h4 mt-1 text-error">{{ taskStatistics.statusWaitingResponse }}</h4>
        </div>
      </div>
    </v-col>
    <v-col cols="12" lg="2" md="4" sm="4">
      <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-6 bg-lightyellow">
        <div class="bg-lightyellow">
          <img src="@/assets/images/svgs/icon-mailbox.svg" alt="icon" />
          <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-yellow">Chamados enviado para teste</div>
          <h4 class="text-h4 mt-1 text-yellow">{{ taskStatistics.statusSentForTesting }}</h4>
        </div>
      </div>
    </v-col>
    <v-col cols="12" lg="2" md="4" sm="4">
      <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-6 bg-lightsuccess">
        <div class="bg-lightsuccess">
          <img src="@/assets/images/svgs/icon-mailbox.svg" alt="icon" />
          <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-success">Chamados concluídos</div>
          <h4 class="text-h4 mt-1 text-success">{{ taskStatistics.statusCompleted }}</h4>
        </div>
      </div>
    </v-col>
    <v-col cols="12">
           <v-row>
                <!-- Revenue Updates -->
                <v-col cols="12" lg="8" md="12">
                    <RevenueUpdates/>
                </v-col>
           </v-row>
        </v-col>    
  </v-row>
</template>
<style>
.bg-lightyellow {
  background-color: #FFFF00 !important; /* Um amarelo claro */
}

.text-yellow {
  color: #FBC02D !important; /* Um amarelo mais forte */
}
</style>