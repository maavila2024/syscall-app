<template>
  {{  tasksStore }}
  <v-table class="border-opacity-100">
    <thead>
      <tr>
        <th class="text-left">Número do chamado</th>
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
      <tr v-for="(task, i) in tasks" :key="i">
        <td>
          {{ task.task_code }}
        </td>

        <td>
          {{ task.name }}
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

        <td>
          {{ task.description }}
        </td>

        <td>
          {{ task.user_owner.first_name }}
        </td>

        <td>
          {{ task.user_responsible?.first_name || "Nenhum responsável" }}
        </td>

        <td>
          {{ task.task_status.name }}
        </td>

        <td>
          {{ task.priority.name }}
        </td>
        
        <td>
          <v-tooltip :text="task.complexity_justification || 'Aguardando análise'">
              <template v-slot:activator="{ props }">
                <span>{{ task.complexity?.name || "Aguardando análise" }}</span>
              </template>
          </v-tooltip>
        </td>
       

        <td class="text-right">
          <div class="d-flex align-center">
            <v-tooltip text="Editar Chamado">
              <template v-slot:activator="{ props }">
                <v-btn icon flat @click="toEdit = task" v-bind="props"
                  ><PencilIcon
                    stroke-width="1.5"
                    size="20"
                    class="text-primary"
                /></v-btn>
              </template>
            </v-tooltip>
            <v-tooltip text="Deletar Chamado">
              <template v-slot:activator="{ props }">
                <v-btn icon flat @click="toDelete = task" v-bind="props"
                  ><TrashIcon stroke-width="1.5" size="20" class="text-error"
                /></v-btn>
              </template>
            </v-tooltip>
            <v-tooltip text="Consultar Notas de Trabalho">
              <template v-slot:activator="{ props }">
                <v-btn icon flat @click="$emit('openChat', task)" v-bind="props"
                  ><NotesIcon stroke-width="1.5" size="20" class="text-primary"
                /></v-btn>
              </template>
            </v-tooltip>
            <!-- <v-tooltip text="Adicionar Nota de Trabalho">
              <template v-slot:activator="{ props }">
                <v-btn icon flat @click="$emit('addNote', task)" v-bind="props"
                  ><PencilPlusIcon
                    stroke-width="1.5"
                    size="20"
                    class="text-primary"
                /></v-btn>
              </template>
            </v-tooltip> -->
          </div>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import {
  PencilIcon,
  PencilPlusIcon,
  TrashIcon,
  NotesIcon,
} from "vue-tabler-icons";
import { useTasksStore } from "@/stores/apps/tasks";
import { storeToRefs } from "pinia";

const tasksStore = useTasksStore();
const { tasks, toEdit, toDelete } = storeToRefs(tasksStore);
</script>
