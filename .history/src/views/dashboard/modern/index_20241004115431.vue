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
  <v-row no-gutters>
   <v-col cols="12" lg="1" md="2">
     <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-4 bg-total">
       <div>
         <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-total">Total de Chamados</div>
         <h4 class="text-h4 mt-1 text-total">{{ taskStatistics.totalTasks }}</h4>
       </div>
     </div>
   </v-col>
   <v-col cols="12" lg="1" md="2">
     <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-4 bg-aberto">
       <div>
         <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-aberto">Em Aberto</div>
         <h4 class="text-h4 mt-1 text-aberto">{{ taskStatistics.statusOpen }}</h4>
       </div>
     </div>
   </v-col>
   <v-col cols="12" lg="1" md="2">
     <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-4 bg-desenvolvimento">
       <div>
         <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-desenvolvimento">em desenvolvimento</div>
         <h4 class="text-h4 mt-1 text-desenvolvimento">{{ taskStatistics.statusInDevelopment }}</h4>
       </div>
     </div>
   </v-col>
   <v-col cols="12" lg="1" md="2">
     <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-4 bg-aguardando">
       <div>
         <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-aguardando">aguardando resposta</div>
         <h4 class="text-h4 mt-1 text-aguardando">{{ taskStatistics.statusWaitingResponse }}</h4>
       </div>
     </div>
   </v-col>
   <v-col cols="12" lg="1" md="2">
     <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-4 bg-teste">
       <div>
         <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-teste">teste TI</div>
         <h4 class="text-h4 mt-1 text-teste">{{ taskStatistics.statusSentForTesting }}</h4>
       </div>
     </div>
   </v-col>
   <v-col cols="12" lg="1" md="2">
     <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-4 bg-concluido">
       <div>
         <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-concluido">concluídos</div>
         <h4 class="text-h4 mt-1 text-concluido">{{ taskStatistics.statusCompleted }}</h4>
       </div>
     </div>
   </v-col>
   <v-col cols="12" lg="1" md="2">
     <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-4 bg-homologacao">
       <div>
         <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-homologacao">Homologação</div>
         <h4 class="text-h4 mt-1 text-homologacao">{{ taskStatistics.statusSentForTesting }}</h4>
       </div>
     </div>
   </v-col>
   <v-col cols="12" lg="1" md="2">
     <div class="text-decoration-none d-flex align-center justify-center text-center rounded-md pa-4 bg-cancelado">
       <div>
         <div class="text-subtitle-1 text-capitalize font-weight-bold mt-3 text-cancelado">Cancelado</div>
         <h4 class="text-h4 mt-1 text-cancelado">{{ taskStatistics.statusSentForTesting }}</h4>
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
.bg-total {
  background-color: #0D47A1 !important; /* Dark Blue */
  min-height: 120px; 
}
.text-total {
  color: #FFFFFF !important; /* White for good contrast */
}


.bg-aberto {
  background-color: #80D8FF !important;  
}

.text-aberto {
  color: #004c6d !important;
}

.bg-desenvolvimento {
  background-color: #CCFF90 !important;
}

.text-desenvolvimento {
  color: #004d00 !important;
}

.bg-aguardando {
  background-color: #FF5722 !important;
}

.text-aguardando {
  color: #FFD700 !important;
}

.bg-teste {
  background-color: #FFEB3B !important;
}

.text-teste {
  color: #444400 !important;
}

.bg-concluido {
  background-color: #4CAF50 !important;
}

.text-concluido {
  color: #FFFFFF !important;
}

.bg-homologacao {
  background-color: #EA80FC !important;
}

.text-homologacao {
  color: #3F51B5 !important;
}

.bg-cancelado {
  background-color: #BDBDBD !important;
}

.text-cancelado {
  color: #424242 !important;
}

.bg-aberto, .bg-desenvolvimento, .bg-aguardando, .bg-teste, .bg-concluido, .bg-homologacao, .bg-cancelado {
  min-height: 120px; /* Manter a mesma altura para todos */
}

.text-total, .text-aberto, .text-desenvolvimento, .text-aguardando, .text-teste, .text-concluido, .text-homologacao, .text-cancelado {
  color: white; /* Mantendo a cor do texto */
}

.text-subtitle-1 {
  font-size: 0.9rem; /* Ajusta o tamanho da fonte */
  white-space: normal; /* Permite a quebra de linha */
  word-wrap: break-word; /* Quebra a palavra grande */
  max-width: 100%; /* Garante que o texto não saia do card */
}

.text-desenvolvimento {
  font-size: 0.9rem; /* Ajuste o tamanho da fonte para caber melhor */
  white-space: nowrap; /* Impede a quebra de linha */
}

</style>

