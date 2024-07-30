<template>
  <div class="tasks-table-container">
    <div class="table-wrapper">
      <v-table class="border-opacity-100">
        <thead>
          <tr>
            <th class="text-left" style="width: 50px" @click="sortTable('task_code')">
              Chamado
              <v-icon v-if="sortBy === 'task_code'">{{ sortOrder === 'asc' ? 'mdi-arrow-up' : 'mdi-arrow-down' }}</v-icon>
            </th>
            <th class="text-left" style="width: 50px" @click="sortTable('sequence')">
              Sequência
              <v-icon v-if="sortBy === 'sequence'">{{ sortOrder === 'asc' ? 'mdi-arrow-up' : 'mdi-arrow-down' }}</v-icon>
            </th>
            <th class="text-left" style="width: 50px" @click="sortTable('name')">
              Título
              <v-icon v-if="sortBy === 'name'">{{ sortOrder === 'asc' ? 'mdi-arrow-up' : 'mdi-arrow-down' }}</v-icon>
            </th>
            <th class="text-left" style="width: 175px">
              Solicitante
              <v-btn icon @click="showOwnerFilter = !showOwnerFilter">
                <FilterIcon />
              </v-btn>
            </th>
            <th class="text-left" style="width: 185px">
              Responsável
              <v-btn icon @click="showResponsibleFilter = !showResponsibleFilter">
                <FilterIcon />
              </v-btn>
            </th>
            <th class="text-left" style="width: 135px">
              Status
              <v-btn icon @click="showStatusFilter = !showStatusFilter">
                <FilterIcon />
              </v-btn>
            </th>
            <th class="text-left" style="width: 165px">
              Prioridade
              <v-btn icon @click="showPriorityFilter = !showPriorityFilter">
                <FilterIcon />
              </v-btn>
            </th>
            <th class="text-left" style="width: 235px">
              Complexidade
              <v-btn icon @click="showComplexityFilter = !showComplexityFilter">
                <FilterIcon />
              </v-btn>
            </th>
            <th class="text-left" style="width: 100px">Ações</th>
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
              <v-select v-model="selectedOwners" :items="ownerOptions" label="Filtro Solicitante" multiple @change="handleOwnerChange">
                <template v-slot:prepend-item>
                  <v-list-item>
                    <v-checkbox v-model="selectAllOwners" :label="selectAllOwners ? 'Desmarcar todos' : 'Selecionar todos'" @change="toggleSelectAllOwners"></v-checkbox>
                  </v-list-item>
                  <v-divider></v-divider>
                </template>
              </v-select>
            </td>
            <td v-else></td>
            <td v-if="showResponsibleFilter">
              <v-select v-model="selectedResponsibles" :items="responsibleOptions" label="Filtro Responsável" multiple @change="handleResponsibleChange">
                <template v-slot:prepend-item>
                  <v-list-item>
                    <v-checkbox v-model="selectAllResponsibles" :label="selectAllResponsibles ? 'Desmarcar todos' : 'Selecionar todos'" @change="toggleSelectAllResponsibles"></v-checkbox>
                  </v-list-item>
                  <v-divider></v-divider>
                </template>
              </v-select>
            </td>
            <td v-else></td>
            <td v-if="showStatusFilter">
              <v-select v-model="selectedStatuses" :items="statusOptions" label="Filtro Status" multiple @change="handleStatusChange">
                <template v-slot:prepend-item>
                  <v-list-item>
                    <v-checkbox v-model="selectAllStatuses" :label="selectAllStatuses ? 'Desmarcar todos' : 'Selecionar todos'" @change="toggleSelectAllStatuses"></v-checkbox>
                  </v-list-item>
                  <v-divider></v-divider>
                </template>
              </v-select>
            </td>
            <td v-else></td>
            <td v-if="showPriorityFilter">
              <v-select v-model="selectedPriorities" :items="priorityOptions" label="Filtro Prioridade" multiple @change="handlePriorityChange">
                <template v-slot:prepend-item>
                  <v-list-item>
                    <v-checkbox v-model="selectAllPriorities" :label="selectAllPriorities ? 'Desmarcar todos' : 'Selecionar todos'" @change="toggleSelectAllPriorities"></v-checkbox>
                  </v-list-item>
                  <v-divider></v-divider>
                </template>
              </v-select>
            </td>
            <td v-else></td>
            <td v-if="showComplexityFilter">
              <v-select v-model="selectedComplexities" :items="complexityOptions" label="Filtro Complexidade" multiple @change="handleComplexityChange">
                <template v-slot:prepend-item>
                  <v-list-item>
                    <v-checkbox v-model="selectAllComplexities" :label="selectAllComplexities ? 'Desmarcar todos' : 'Selecionar todos'" @change="toggleSelectAllComplexities"></v-checkbox>
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
          <tr v-for="(task, i) in filteredTasks" :key="task?.id || i">
            <td>{{ task?.task_code }}</td>
            <td>{{ task?.sequence }}</td>
            <td>
              <div class="text-clamp">{{ task?.name }}</div>
              <v-chip v-if="task?.default" size="small" variant="tonal" color="primary" class="ml-2">Default</v-chip>
            </td>
            <td>
              <div class="text-clamp">{{ task?.user_owner?.first_name }}</div>
            </td>
            <td>
              <div class="text-clamp">{{ task?.user_responsible?.first_name || "Nenhum responsável" }}</div>
            </td>
            <td>
              <div class="text-clamp" :style="getStatusStyle(task?.task_status)">{{ task?.task_status?.name }}</div>
            </td>
            <td class="text-right">
              <div class="d-flex align-center">
                <v-tooltip :text="task?.priority_justification">
                  <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">
                      <span v-bind="attrs" v-on="on">
                        <div class="text-clamp">{{ task?.priority?.name }}</div>
                      </span>
                    </v-btn>
                  </template>
                </v-tooltip>
              </div>
            </td>
            <td class="text-right">
              <div class="d-flex align-center">
                <v-tooltip :text="task?.complexity_justification || 'Aguardando análise'">
                  <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">
                      <span v-bind="attrs" v-on="on">
                        <div class="text-clamp">{{ task?.complexity?.name || "Aguardando análise" }}</div>
                      </span>
                    </v-btn>
                  </template>
                </v-tooltip>
              </div>
            </td>
            <td class="text-right">
              <div class="d-flex align-center">
                <v-tooltip text="Visualizar Chamado">
                  <template v-slot:activator="{ props }">
                    <v-btn icon flat @click="toShow = task" v-bind="props">
                      <EyeIcon stroke-width="1.5" size="20" class="text-primary" />
                    </v-btn>
                  </template>
                </v-tooltip>
                <v-tooltip v-if="isAdmin" text="Editar Chamado">
                  <template v-slot:activator="{ props }">
                    <v-btn icon flat @click="toEdit = task" v-bind="props">
                      <PencilIcon stroke-width="1.5" size="20" class="text-primary" />
                    </v-btn>
                  </template>
                </v-tooltip>
                <v-tooltip v-if="isAdmin" text="Deletar Chamado">
                  <template v-slot:activator="{ props }">
                    <v-btn icon flat @click="toDelete = task" v-bind="props">
                      <TrashIcon stroke-width="1.5" size="20" class="text-error" />
                    </v-btn>
                  </template>
                </v-tooltip>
                <v-tooltip text="Consultar Notas de Trabalho">
                  <template v-slot:activator="{ props }">
                    <v-btn icon flat @click="$emit('openChat', task)" v-bind="props">
                      <NotesIcon stroke-width="1.5" size="20" class="text-primary" />
                    </v-btn>
                  </template>
                </v-tooltip>
                <v-tooltip text="Anexos">
                  <template v-slot:activator="{ props }">
                    <v-btn icon flat @click="$emit('openAttachments', task)" v-bind="props">
                      <PaperclipIcon stroke-width="1.5" size="20" class="text-primary" />
                    </v-btn>
                  </template>
                </v-tooltip>
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import {
  PencilIcon,
  TrashIcon,
  NotesIcon,
  PaperclipIcon,
  FilterIcon,
  EyeIcon,
} from "vue-tabler-icons";
import { useTasksStore } from "@/stores/apps/tasks";
import { storeToRefs } from "pinia";
import { useMeStore } from "@/stores/me";
import { useRoute, useRouter } from "vue-router";

const meStore = useMeStore();
const tasksStore = useTasksStore();
const route = useRoute();
const router = useRouter();
const { tasks, toShow, toEdit, toDelete, taskFiles } = storeToRefs(tasksStore);
const isAdmin = computed(() =>
  meStore.user.teams.some((team) => team.is_admin)
);

// Filtros para cada coluna
const selectedStatuses = ref([]);
const selectedOwners = ref([]);
const selectedResponsibles = ref([]);
const selectedPriorities = ref([]);
const selectedComplexities = ref([]);

// Visibilidade dos filtros
const showStatusFilter = ref(false);
const showOwnerFilter = ref(false);
const showResponsibleFilter = ref(false);
const showPriorityFilter = ref(false);
const showComplexityFilter = ref(false);

// Opções de filtros únicas
const statusOptions = computed(() => [
  ...new Set(tasks.value.map((task) => task.task_status.name)),
]);
const ownerOptions = computed(() => [
  ...new Set(tasks.value.map((task) => task.user_owner.first_name)),
]);
const responsibleOptions = computed(() => [
  ...new Set(
    tasks.value.map(
      (task) => task.user_responsible?.first_name || "Nenhum responsável"
    )
  ),
]);
const priorityOptions = computed(() => [
  ...new Set(tasks.value.map((task) => task.priority.name)),
]);
const complexityOptions = computed(() => [
  ...new Set(tasks.value.map((task) => task.complexity.name)),
]);

// Estado do checkbox "Selecionar todos"
const selectAllStatuses = ref(false);
const selectAllOwners = ref(false);
const selectAllResponsibles = ref(false);
const selectAllPriorities = ref(false);
const selectAllComplexities = ref(false);

// Funções de manipulação dos filtros
const handleStatusChange = () => {
  selectAllStatuses.value =
    selectedStatuses.value.length === statusOptions.value.length;
};

const handleOwnerChange = () => {
  selectAllOwners.value =
    selectedOwners.value.length === ownerOptions.value.length;
};

const handleResponsibleChange = () => {
  selectAllResponsibles.value =
    selectedResponsibles.value.length === responsibleOptions.value.length;
};

const handlePriorityChange = () => {
  selectAllPriorities.value =
    selectedPriorities.value.length === priorityOptions.value.length;
};

const handleComplexityChange = () => {
  selectAllComplexities.value =
    selectedComplexities.value.length === complexityOptions.value.length;
};

const toggleSelectAllStatuses = () => {
  if (selectAllStatuses.value) {
    selectedStatuses.value = [];
  } else {
    selectedStatuses.value = [...statusOptions.value];
  }
};

const toggleSelectAllOwners = () => {
  if (selectAllOwners.value) {
    selectedOwners.value = [];
  } else {
    selectedOwners.value = [...ownerOptions.value];
  }
};

const toggleSelectAllResponsibles = () => {
  if (selectAllResponsibles.value) {
    selectedResponsibles.value = [];
  } else {
    selectedResponsibles.value = [...responsibleOptions.value];
  }
};

const toggleSelectAllPriorities = () => {
  if (selectAllPriorities.value) {
    selectedPriorities.value = [];
  } else {
    selectedPriorities.value = [...priorityOptions.value];
  }
};

const toggleSelectAllComplexities = () => {
  if (selectAllComplexities.value) {
    selectedComplexities.value = [];
  } else {
    selectedComplexities.value = [...complexityOptions.value];
  }
};

// Ordenação
const sortBy = ref('');
const sortOrder = ref('asc');

const sortTable = (key) => {
  if (sortBy.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortBy.value = key;
    sortOrder.value = 'asc';
  }
};

const sortedTasks = computed(() => {
  const sorted = [...tasks.value];
  sorted.sort((a, b) => {
    const keyA = a[sortBy.value];
    const keyB = b[sortBy.value];
    if (keyA < keyB) return sortOrder.value === 'asc' ? -1 : 1;
    if (keyA > keyB) return sortOrder.value === 'asc' ? 1 : -1;
    return 0;
  });
  return sorted;
});

// // Chamada inicial ao montar o componente
// onMounted(() => {
//   if (route.query.search) {
//     const query = route.query.search || '';
//     tasksStore.getTasks(query);
//   } else {
//     tasksStore.getTasks();
//   }
// });

// Filtragem das tarefas com base nos filtros selecionados
const filteredTasks = computed(() => {
  if (!tasks.value) {
    return []; // ou alguma ação padrão
  }

  return sortedTasks.value.filter((task) => {
    if (!task) return false;

    const statusMatch =
      selectedStatuses.value.length === 0 ||
      selectedStatuses.value.includes(task.task_status.name);
    const ownerMatch =
      selectedOwners.value.length === 0 ||
      selectedOwners.value.includes(task.user_owner.first_name);
    const responsibleMatch =
      selectedResponsibles.value.length === 0 ||
      selectedResponsibles.value.includes(
        task.user_responsible?.first_name || "Nenhum responsável"
      );
    const priorityMatch =
      selectedPriorities.value.length === 0 ||
      selectedPriorities.value.includes(task.priority.name);
    const complexityMatch =
      selectedComplexities.value.length === 0 ||
      selectedComplexities.value.includes(task.complexity.name);
      const segmentMatch = meStore.user?.default_segment == 0 || task.segment == meStore.user?.default_segment;
    
    return (
      statusMatch &&
      ownerMatch &&
      responsibleMatch &&
      priorityMatch &&
      complexityMatch &&
      segmentMatch
    );
  });
});

const getStatusStyle = (taskStatus) => {
  return {
    color: taskStatus.color,
    // backgroundColor: taskStatus.bg_color,
  };
};

// Adicionando a chamada para `getTasks`
onMounted(() => {
  alert('mounted taskstable')
  const query = route.query.search || '';
  if (query) {
    tasksStore.getTasks(query);
  }
});

// Adicionando watch para monitorar mudanças na rota
watch(
  () => route.query.search,
  (newSearch) => {
    const query = newSearch || '';
    alert('watch taskstable')
    tasksStore.getTasks(query);
  }
);
</script>


<style scoped>
.tasks-table-container {
  max-height: 500px;
  overflow-y: auto;
}

.table-wrapper {
  display: block;
  font-size: 12px; /* Adicionado para fixar o tamanho da fonte */
}

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

.v-table th, .v-table td {
  font-size: 12px; /* Adicionado para manter o tamanho da fonte */
}

.v-select, .v-input, .v-btn {
  font-size: 12px; /* Adicionado para manter o tamanho da fonte nos inputs e botões */
}

.v-table thead th {
  position: sticky;
  top: 0;
  background-color: #2A3447; /* ajuste conforme necessário */ 
  z-index: 1;
  border-bottom: 1px solid #424242; 
}

</style>
