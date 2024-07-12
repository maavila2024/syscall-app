<template>
  <v-table class="border-opacity-100">
    <thead>
    <tr>
      <th class="text-left">
        Time
      </th>

      <th class="text-left">
        Cargo
      </th>
      <th class="text-left">
        Ações
      </th>
      <th></th>
    </tr>
    </thead>

    <tbody>
    <tr
      v-for="team in teams"
      :key="team.name"
    >
      <td>
        {{ team.name }}
        <v-chip
          v-if="team.default"
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
          v-for="role in team.roles"
          :key="`${team.token}_${role.name}`"
          size="small"
          variant="tonal"
        >
          {{ role.name }}
        </v-chip>
      </td>

      <td class="text-right">
        <div class="d-flex align-center" v-if="team.is_admin">
              <v-tooltip text="Edit">
                  <template v-slot:activator="{ props }">
                      <v-btn icon flat @click="toEdit = team" v-bind="props" 
                          ><PencilIcon stroke-width="1.5" size="20" class="text-primary"
                      /></v-btn>
                  </template>
              </v-tooltip>
              <v-tooltip text="Delete">
                  <template v-slot:activator="{ props }">
                      <v-btn icon flat @click="toDelete = team" v-bind="props"
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
import {PencilIcon, TrashIcon} from 'vue-tabler-icons';
import {useTeamsStore} from '@/stores/apps/teams';
import {storeToRefs} from 'pinia';

const teamsStore = useTeamsStore()
const {teams, toEdit, toDelete} = storeToRefs(teamsStore)
</script>
