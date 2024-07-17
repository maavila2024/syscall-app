<template>
  <v-table class="border-opacity-100">
    <thead>
      <tr>
        <th class="text-left" style="width: 100px;">Chamado</th>
        <th class="text-left" style="width: 150px;">Título</th>
        <th class="text-left" style="width: 200px;">Descrição</th>
        <th class="text-left" style="width: 120px;">Solicitante
          <v-btn icon @click="showOwnerFilter = !showOwnerFilter">
            <FilterIcon />
          </v-btn>
        </th>
        <th class="text-left" style="width: 150px;">Responsável
          <v-btn icon @click="showResponsibleFilter = !showResponsibleFilter">
            <FilterIcon />
          </v-btn>
        </th>
        <th class="text-left" style="width: 120px;">Status
          <v-btn icon @click="showStatusFilter = !showStatusFilter">
            <FilterIcon />
          </v-btn>
        </th>
        <th class="text-left" style="width: 120px;">Prioridade
          <v-btn icon @click="showPriorityFilter = !showPriorityFilter">
            <FilterIcon />
          </v-btn>
        </th>
        <th class="text-left" style="width: 150px;">Complexidade
          <v-btn icon @click="showComplexityFilter = !showComplexityFilter">
            <FilterIcon />
          </v-btn>
        </th>
        <th class="text-left" style="width: 100px;">Ações</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <!-- Filtros -->
      <tr v-if="showOwnerFilter || showResponsibleFilter || showStatusFilter || showPriorityFilter || showComplexityFilter">
        <td></td>
        <td></td>
        <td></td>
        <td v-if="showOwnerFilter">
          <v-select
            v-model="selectedOwners"
            :items="ownerOptions"
            label="Filtro Solicitante"
            multiple
            @change="handleOwnerChange"
          >
            <template v-slot:prepend-item>
              <v-list-item>
                <v-checkbox
                  v-model="selectAllOwners"
                  :label="selectAllOwners ? 'Desmarcar todos' : 'Selecionar todos'"
                  @change="toggleSelectAllOwners"
                ></v-checkbox>
              </v-list-item>
              <v-divider></v-divider>
            </template>
          </v-select>
        </td>
        <td v-else></td>
        <td v-if="showResponsibleFilter">
          <v-select
            v-model="selectedResponsibles"
            :items="responsibleOptions"
            label="Filtro Responsável"
            multiple
            @change="handleResponsibleChange"
          >
            <template v-slot:prepend-item>
              <v-list-item>
                <v-checkbox
                  v-model="selectAllResponsibles"
                  :label="selectAllResponsibles ? 'Desmarcar todos' : 'Selecionar todos'"
                  @change="toggleSelectAllResponsibles"
                ></v-checkbox>
              </v-list-item>
              <v-divider></v-divider>
            </template>
          </v-select>
        </td>
        <td v-else></td>
        <td v-if="showStatusFilter">
          <v-select
            v-model="selectedStatuses"
            :items="statusOptions"
            label="Filtro Status"
            multiple
            @change="handleStatusChange"
          >
            <template v-slot:prepend-item>
              <v-list-item>
                <v-checkbox
                  v-model="selectAllStatuses"
                  :label="selectAllStatuses ? 'Desmarcar todos' : 'Selecionar todos'"
                  @change="toggleSelectAllStatuses"
                ></v-checkbox>
              </v-list-item>
              <v-divider></v-divider>
            </template>
          </v-select>
        </td>
        <td v-else></td>
        <td v-if="showPriorityFilter">
          <v-select
            v-model="selectedPriorities"
            :items="priorityOptions"
            label="Filtro Prioridade"
            multiple
            @change="handlePriorityChange"
          >
            <template v-slot:prepend-item>
              <v-list-item>
                <v-checkbox
                  v-model="selectAllPriorities"
                  :label="selectAllPriorities ? 'Desmarcar todos' : 'Selecionar todos'"
                  @change="toggleSelectAllPriorities"
                ></v-checkbox>
              </v-list-item>
              <v-divider></v-divider>
            </template>
          </v-select>
        </td>
        <td v-else></td>
        <td v-if="showComplexityFilter">
          <v-select
            v-model="selectedComplexities"
            :items="complexityOptions"
            label="Filtro Complexidade"
            multiple
            @change="handleComplexityChange"
          >
            <template v-slot:prepend-item>
              <v-list-item>
                <v-checkbox
                  v-model="selectAllComplexities"
                  :label="selectAllComplexities ? 'Desmarcar todos' : 'Selecionar todos'"
                  @change="toggleSelectAllComplexities"
                ></v-checkbox>
              </v-list-item>
              <v-divider></v-divider>
            </template>
          </v-select>
        </td>
        <td v-else></td>
        <td></td>
        <td></td>
      </tr>

      <!-- Conteúdo da tabela -->
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
import { ref, computed, watch } from 'vue';
import { PencilIcon, TrashIcon, NotesIcon, PaperclipIcon, FilterIcon } from "vue-tabler-icons";
import { useTasksStore } from "@/stores/apps/tasks";
import { storeToRefs } from "pinia";

const tasksStore = useTasksStore();
const { tasks, toEdit, toDelete, taskFiles } = storeToRefs(tasksStore);

// Filtros para cada coluna
const selectedStatuses = ref([]);
const selectedOwners = ref([]);
const selectedResponsibles = ref([]);
const selectedPriorities = ref([]);
const selectedComplexities = ref([]);

// Controle de seleção de todos
const selectAllStatuses = ref(false);
const selectAllOwners = ref(false);
const selectAllResponsibles = ref(false);
const selectAllPriorities = ref(false);
const selectAllComplexities = ref(false);

// Visibilidade dos filtros
const showStatusFilter = ref(false);
const showOwnerFilter = ref(false);
const showResponsibleFilter = ref(false);
const showPriorityFilter = ref(false);
const showComplexityFilter = ref(false);

// Criação das opções únicas para cada filtro
const statusOptions = computed(() => {
  const statuses = tasks.value.map(task => task.task_status.name);
  return [...new Set(statuses)];
});

const ownerOptions = computed(() => {
  const owners = tasks.value.map(task => task.user_owner.first_name);
  return [...new Set(owners)];
});

const responsibleOptions = computed(() => {
  const responsibles = tasks.value.map(task => task.user_responsible?.first_name || "Nenhum responsável");
  return [...new Set(responsibles)];
});

const priorityOptions = computed(() => {
  const priorities = tasks.value.map(task => task.priority.name);
  return [...new Set(priorities)];
});

const complexityOptions = computed(() => {
  const complexities = tasks.value.map(task => task.complexity.name);
  return [...new Set(complexities)];
});

// Handle changes para os filtros
const handleStatusChange = (value) => {
  if (value.length === statusOptions.value.length) {
    selectAllStatuses.value = true;
  } else {
    selectAllStatuses.value = false;
  }
};

const handleOwnerChange = (value) => {
  if (value.length === ownerOptions.value.length) {
    selectAllOwners.value = true;
  } else {
    selectAllOwners.value = false;
  }
};

const handleResponsibleChange = (value) => {
  if (value.length === responsibleOptions.value.length) {
    selectAllResponsibles.value = true;
  } else {
    selectAllResponsibles.value = false;
  }
};

const handlePriorityChange = (value) => {
  if (value.length === priorityOptions.value.length) {
    selectAllPriorities.value = true;
  } else {
    selectAllPriorities.value = false;
  }
};

const handleComplexityChange = (value) => {
  if (value.length === complexityOptions.value.length) {
    selectAllComplexities.value = true;
  } else {
    selectAllComplexities.value = false;
  }
};

// Funções para alternar seleção de todos
const toggleSelectAllStatuses = () => {
  if (selectAllStatuses.value) {
    selectedStatuses.value = [];
  } else {
    selectedStatuses.value = statusOptions.value.slice();
  }
};

const toggleSelectAllOwners = () => {
  if (selectAllOwners.value) {
    selectedOwners.value = [];
  } else {
    selectedOwners.value = ownerOptions.value.slice();
  }
};

const toggleSelectAllResponsibles = () => {
  if (selectAllResponsibles.value) {
    selectedResponsibles.value = [];
  } else {
    selectedResponsibles.value = responsibleOptions.value.slice();
  }
};

const toggleSelectAllPriorities = () => {
  if (selectAllPriorities.value) {
    selectedPriorities.value = [];
  } else {
    selectedPriorities.value = priorityOptions.value.slice();
  }
};

const toggleSelectAllComplexities = () => {
  if (selectAllComplexities.value) {
    selectedComplexities.value = [];
  } else {
    selectedComplexities.value = complexityOptions.value.slice();
  }
};

// Watchers para atualizar selectAll com base nos selecionados
watch(selectedStatuses, (newValue) => {
  selectAllStatuses.value = newValue.length === statusOptions.value.length;
});

watch(selectedOwners, (newValue) => {
  selectAllOwners.value = newValue.length === ownerOptions.value.length;
});

watch(selectedResponsibles, (newValue) => {
  selectAllResponsibles.value = newValue.length === responsibleOptions.value.length;
});

watch(selectedPriorities, (newValue) => {
  selectAllPriorities.value = newValue.length === priorityOptions.value.length;
});

watch(selectedComplexities, (newValue) => {
  selectAllComplexities.value = newValue.length === complexityOptions.value.length;
});

// Filtragem das tarefas com base nos filtros selecionados
const filteredTasks = computed(() => {
  return tasks.value.filter(task => {
    const statusMatch = selectedStatuses.value.length === 0 || selectedStatuses.value.includes(task.task_status.name);
    const ownerMatch = selectedOwners.value.length === 0 || selectedOwners.value.includes(task.user_owner.first_name);
    const responsibleMatch = selectedResponsibles.value.length === 0 || selectedResponsibles.value.includes(task.user_responsible?.first_name || "Nenhum responsável");
    const priorityMatch = selectedPriorities.value.length === 0 || selectedPriorities.value.includes(task.priority.name);
    const complexityMatch = selectedComplexities.value.length === 0 || selectedComplexities.value.includes(task.complexity.name);
    return statusMatch && ownerMatch && responsibleMatch && priorityMatch && complexityMatch;
  });
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
