<template>
  <v-table class="border-opacity-100">
    <thead>
      <tr>
        <th class="text-left">Chamado</th>
        <th class="text-left">Título</th>
        <th class="text-left">Descrição</th>
        <th class="text-left">Solicitante</th>
        <th class="text-left">Responsável</th>
        <th class="text-left">Status</th>
        <th class="text-left">Prioridade</th>
        <th class="text-left">Complexidade</th>
        <th class="text-left">Ações</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(task, i) in tasks" :key="i" :style="getStatusStyle(task.task_status)">
        <td>{{ task.task_code }}</td>
        <td>{{ truncateText(task.name, 15) }}</td>
        <td>{{ truncateText(task.description, 20) }}</td>
        <td>{{ task.user_owner.first_name }}</td>
        <td>{{ task.user_responsible?.first_name || "Nenhum responsável" }}</td>
        <td>{{ truncateText(task.task_status.name, 20) }}</td>
        <td class="text-right">{{ truncateText(task.priority.name, 10) }}</td>
        <td class="text-right">{{ truncateText(task.complexity?.name || "Aguardando análise", 12) }}</td>
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
                <v-btn icon flat @click="$emit('openChat', task)" v-bind="props">
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
                <v-btn icon flat @click="$emit('openAttachments', task)" v-bind="props">
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

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};
</script>

<style>
/* Adicione estilos se necessário */
</style>
