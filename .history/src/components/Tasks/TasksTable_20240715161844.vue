<template>
  <v-table class="border-opacity-100">
    <thead>
      <tr>
        <th class="text-left" style="width: 100px;">Chamado</th>
        <th class="text-left" style="width: 150px;">Título</th>
        <th class="text-left" style="width: 200px;">Descrição</th>
        <th class="text-left" style="width: 120px;">Solicitante</th>
        <th class="text-left" style="width: 150px;">Responsável</th>
        <th class="text-left" style="width: 120px;">Status</th>
        <th class="text-left" style="width: 120px;">Prioridade</th>
        <th class="text-left" style="width: 150px;">Complexidade</th>
        <th class="text-left" style="width: 100px;">Ações</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(task, i) in tasks" :key="i" :style="getStatusStyle(task.task_status)">
        <td>{{ task.task_code }}</td>
        <td class="line-clamp-2">
          {{ task.name }}
        </td>
        <td class="line-clamp-2">{{ task.description }}</td>
        <td>{{ task.user_owner.first_name }}</td>
        <td>{{ task.user_responsible?.first_name || "Nenhum responsável" }}</td>
        <td class="line-clamp-1">{{ task.task_status.name }}</td>
       
        <td class="text-right">
          <div class="d-flex align-center">
            <v-tooltip :text="task.priority_justification">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                  <span v-bind="attrs" v-on="on">
                    {{ task.priority.name }}
                  </span>
                </v-btn>
              </template>
            </v-tooltip>
          </div>
        </td>

        <td class="text-right">
          <div class="d-flex align-center">
            <v-tooltip :text="task.complexity_justification || 'Aguardando análise'">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                  <span v-bind="attrs" v-on="on">
                    {{ task.complexity?.name || "Aguardando análise" }}
                  </span>
                </v-btn>  
              </template>
            </v-tooltip>
          </div>
        </td>

        <td class="text-right">
          <div class="d-flex align-center">
            <v-tooltip text="Editar Chamado">
              <template v-slot:activator="{ props }">
                <v-btn icon flat @click="toEdit = task" v-bind="props">
                  <PencilIcon
                    stroke-width="1.5"
                    size="20"
                    class="text-primary"
                  />
                </v-btn>
              </template>
            </v-tooltip>
            <v-tooltip text="Deletar Chamado">
              <template v-slot:activator="{ props }">
                <v-btn icon flat @click="toDelete = task" v-bind="props">
                  <TrashIcon stroke-width="1.5" size="20" class="text-error" />
                </v-btn>
              </template>
            </v-tooltip>
            <v-tooltip text="Consultar Notas de Trabalho">
              <template v-slot:activator="{ props }">
                <v-btn
                  icon
                  flat
                  @click="$emit('openChat', task)"
                  v-bind="props"
                >
                  <NotesIcon
                    stroke-width="1.5"
                    size="20"
                    class="text-primary"
                  />
                </v-btn>
              </template>
            </v-tooltip>
            <v-tooltip text="Anexos">
              <template v-slot:activator="{ props }">
                <v-btn
                  icon
                  flat
                  @click="$emit('openAttachments', task)"
                  v-bind="props"
                >
                  <PaperclipIcon
                    stroke-width="1.5"
                    size="20"
                    class="text-primary"
                  />
                </v-btn>
              </template>
            </v-tooltip>
          </div>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { ref } from 'vue';
import { PencilIcon, TrashIcon, NotesIcon, PaperclipIcon } from "vue-tabler-icons";
import { useTasksStore } from "@/stores/apps/tasks";
import { storeToRefs } from "pinia";

const tasksStore = useTasksStore();
const { tasks, toEdit, toDelete, taskFiles } = storeToRefs(tasksStore);

const getStatusStyle = (taskStatus) => {
  return {
    color: taskStatus.color,
    // backgroundColor: taskStatus.bg_color,
  };
};

// Função para truncar texto
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};
</script>

<style>
.truncate-text {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Número máximo de linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
