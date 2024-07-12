<template>
  
  <v-table class="border-opacity-100">
    <thead>
      <tr>
        <th class="text-left">Nome</th>
        <th class="text-left">Ativo/Inativo</th>
        <th class="text-left">Ações</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(complexity, i) in complexities" :key="i">
        <td>
          {{ complexity.name }}
          <v-chip
            v-if="complexity.is_default"
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
            {{ complexity.status ? "Ativo" : "Inativo" }}
          </v-chip>
        </td>

        <td class="text-right">
          <div class="d-flex align-center">
            <v-tooltip text="Edit">
              <template v-slot:activator="{ props }">
                <v-btn icon flat @click="toEdit = complexity" v-bind="props"
                  ><PencilIcon
                    stroke-width="1.5"
                    size="20"
                    class="text-primary"
                /></v-btn>
              </template>
            </v-tooltip>
            <v-tooltip text="Delete">
              <template v-slot:activator="{ props }">
                <v-btn icon flat @click="toDelete = complexity" v-bind="props"
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
import { PencilIcon, TrashIcon } from "vue-tabler-icons";
import { useComplexitiesStore } from "@/stores/apps/complexities";
import { storeToRefs } from "pinia";

const complexitiesStore = useComplexitiesStore();
const { complexities, toEdit, toDelete } = storeToRefs(complexitiesStore);
</script>
