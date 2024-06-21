<template>
  <v-table class="border-opacity-100">
    <thead>
      <tr>
        <th class="text-left">Nome</th>
        <th class="text-left">Padrão</th>
        <th class="text-left">Ativo/Inativo</th>
        <th class="text-left">Ações</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="taskStatus in tasksStatus" :key="taskStatus.name">
        <td>
          {{ taskStatus.name }}
          <v-chip
            v-if="taskStatus.default"
            size="small"
            variant="tonal"
            color="primary"
            class="ml-2"
          >
            Default
          </v-chip>
        </td>
        <td>
          <v-chip
            v-if="taskStatus.is_default"
            size="small"
            variant="tonal"
            color="primary"
            class="ml-2"
          >
            Default
          </v-chip>
        </td>
        <td>
          <v-chip size="small" variant="tonal" color="primary" class="ml-2">
            {{ taskStatus.status ? "Ativo" : "Inativo" }}
          </v-chip>
        </td>
        <td class="text-right">
          <div class="d-flex align-center">
            <v-tooltip text="Edit">
              <template v-slot:activator="{ props }">
                <v-btn icon flat @click="toEdit = taskStatus" v-bind="props"
                  ><PencilIcon
                    stroke-width="1.5"
                    size="20"
                    class="text-primary"
                /></v-btn>
              </template>
            </v-tooltip>
            <v-tooltip text="Delete">
              <template v-slot:activator="{ props }">
                <v-btn icon flat @click="toDelete = taskStatus" v-bind="props"
                  ><TrashIcon stroke-width="1.5" size="20" class="text-error"
                /></v-btn>
              </template>
            </v-tooltip>
          </div>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { DotsVerticalIcon, EditIcon, TrashIcon } from "vue-tabler-icons";
import { useTasksStatusStore } from "@/stores/apps/tasksStatus";
import { storeToRefs } from "pinia";

const tasksStatusStore = useTasksStatusStore();
const { tasksStatus, toEdit, toDelete } = storeToRefs(tasksStatusStore);
</script>
