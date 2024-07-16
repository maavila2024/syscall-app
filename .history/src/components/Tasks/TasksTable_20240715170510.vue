<template>
  <v-table class="border-opacity-100">
    <thead>
      <tr>
        <th class="text-left" style="width: 100px;">Chamado</th>
        <th class="text-left" style="width: 150px;">Título</th>
        <th class="text-left" style="width: 200px;">Descrição</th>
        <th class="text-left" style="width: 120px;">Solicitante</th>
        <th class="text-left" style="width: 150px;">Responsável</th>
        <th class="text-left" style="width: 120px;">
          Status
          <v-select
            v-model="selectedStatus"
            :items="statusOptions"
            label="Filtro Status"
            class="ml-2"
          ></v-select>
        </th>
        <th class="text-left" style="width: 120px;">Prioridade</th>
        <th class="text-left" style="width: 150px;">Complexidade</th>
        <th class="text-left" style="width: 100px;">Ações</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(task, i) in filteredTasks" :key="i" :style="getStatusStyle(task.task_status)">
        <td>{{ task.task_code }}</td>
        <td>
          <div class="text-clamp">{{ task.name }}</div>
          <v-chip
            v-if="task.default"
            size="small"
            variant="tonal"
            color="primary"
            class="ml-2"
          >
            Default
          </v-chip>
        </td>
        <td><div class="text-clamp">{{ task.description }}</div></td>
        <td><div class="text-clamp">{{ task.user_owner.first_name }}</div></td>
        <td><div class="text-clamp">{{ task.user_responsible?.first_name || "Nenhum responsável" }}</div></td>
        <td><div class="text-clamp">{{ task.task_status.name }}</div></td>
        <td class="text-right">
          <div class="d-flex align-center">
            <v-tooltip :text="task.priority_justification">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                  <span v-bind="attrs" v-on="on">
                    <div class="text-clamp">{{ task.priority.name }}</div>
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
                    <div class="text-clamp">{{ task.complexity?.name || "Aguardando análise" }}</div>
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
import { ref, computed } from 'vue';
import { PencilIcon, TrashIcon, NotesIcon, PaperclipIcon } from "vue-tabler-icons";
import { useTasksStore } from "@/stores/apps/tasks";
import { storeToRefs } from "pinia";

const tasksStore = useTasksStore();
const { tasks, toEdit, toDelete, taskFiles } = storeToRefs(tasksStore);

// Status filter
const selectedStatus = ref(null);

// Create a list of unique status options
const statusOptions = computed(() => {
  const statuses = tasks.value.map(task => task.task_status.name);
  return [...new Set(statuses)];
});

// Filter tasks based on the selected status
const filteredTasks = computed(() => {
  if (!selectedStatus.value) {
    return tasks.value;
  }
  return tasks.value.filter(task => task.task_status.name === selectedStatus.value);
});

const getStatusStyle = (taskStatus) => {
  return {
    color: taskStatus.color,
    // backgroundColor: taskStatus.bg_color,
  };
};
</script>

<style>
.text-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  hyphens: auto;
  word-break: keep-all; /* Impede quebra inadequada de palavras */
  white-space: normal; /* Permite quebra de linha */
}
</style>
