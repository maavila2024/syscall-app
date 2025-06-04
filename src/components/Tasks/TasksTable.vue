<template>
  <div class="tasks-table-container">
    <div class="scrollable-table-wrapper">
      <v-table class="v-table-fixed-header border-opacity-100">
        <thead>
          <tr>
            <th class="text-left" @click="sortTable('task_code')">
              Chamado
              <v-icon v-if="props.sortBy === 'task_code'" :color="props.sortOrder === 'asc' ? 'primary' : 'secondary'">
                {{ props.sortOrder === 'asc' ? 'mdi-arrow-up' : 'mdi-arrow-down' }}
              </v-icon>
            </th>
            <th class="text-left" @click="sortTable('sequence')">
              Sequência
              <v-icon v-if="props.sortBy === 'sequence'" :color="props.sortOrder === 'asc' ? 'primary' : 'secondary'">
                {{ props.sortOrder === 'asc' ? 'mdi-arrow-up' : 'mdi-arrow-down' }}
              </v-icon>
            </th>
            <th class="text-left" @click="sortTable('name')">
              Título
              <v-icon v-if="props.sortBy === 'name'" :color="props.sortOrder === 'asc' ? 'primary' : 'secondary'">
                {{ props.sortOrder === 'asc' ? 'mdi-arrow-up' : 'mdi-arrow-down' }}
              </v-icon>
            </th>
            <th class="text-left" v-if="showExpectedDate" @click="sortTable('expected_date')">
              Data Prevista
              <v-icon v-if="props.sortBy === 'expected_date'" :color="props.sortOrder === 'asc' ? 'primary' : 'secondary'">
                {{ props.sortOrder === 'asc' ? 'mdi-arrow-up' : 'mdi-arrow-down' }}
              </v-icon>
            </th>
            <th class="text-left">
              <div class="d-flex align-center gap-1">
                Solicitante
                <v-btn icon @click="toggleFilter('owner')">
                  <FilterIcon />
                </v-btn>
              </div>
            </th>
            <th class="text-left" v-if="showResponsible">
              <div class="d-flex align-center gap-1">
                Responsável
                <v-btn icon @click="toggleFilter('responsible')">
                  <FilterIcon />
                </v-btn>
              </div>
            </th>
            <th class="text-left">
              <div class="d-flex align-center gap-1">
                Status
                <v-btn icon @click="toggleFilter('status')">
                  <FilterIcon />
                </v-btn>
              </div>
            </th>
            <th class="text-left" v-if="showPriority">
              <div class="d-flex align-center gap-1">
                Prioridade
                <v-btn icon @click="toggleFilter('priority')">
                  <FilterIcon />
                </v-btn>
              </div>
            </th>
            <th class="text-left">Ações</th>
            <th class="text-right">
              <v-menu v-model="showColumnSettings" location="bottom end">
                <template v-slot:activator="{ props }">
                  <v-btn icon v-bind="props">
                    <SettingsIcon />
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-checkbox
                      v-model="showExpectedDate"
                      label="Exibir Data Prevista"
                      density="compact"
                      hide-details
                    />
                  </v-list-item>
                  <v-list-item>
                    <v-checkbox
                      v-model="showPriority"
                      label="Exibir Prioridade"
                      density="compact"
                      hide-details
                    />
                  </v-list-item>
                  <v-list-item>
                    <v-checkbox
                      v-model="showResponsible"
                      label="Exibir Responsável"
                      density="compact"
                      hide-details
                    />
                  </v-list-item>
                </v-list>
              </v-menu>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-if="showOwnerFilter || showResponsibleFilter || showStatusFilter || showPriorityFilter" class="filtro-row">
            <td :colspan="10">
              <div class="d-flex align-center gap-4 px-2">
                <v-select
                  v-if="showOwnerFilter"
                  v-model="selectedOwners"
                  :items="ownerOptions"
                  label="Solicitante"
                  multiple chips hide-details density="compact"
                />
                <v-select
                  v-if="showResponsibleFilter"
                  v-model="selectedResponsibles"
                  :items="responsibleOptions"
                  label="Responsável"
                  multiple chips hide-details density="compact"
                />
                <v-select
                  v-if="showStatusFilter"
                  v-model="selectedStatuses"
                  :items="statusOptions"
                  label="Status"
                  multiple chips hide-details density="compact"
                />
                <v-select
                  v-if="showPriorityFilter"
                  v-model="selectedPriorities"
                  :items="priorityOptions"
                  label="Prioridade"
                  multiple chips hide-details density="compact"
                />
                <v-btn color="primary" @click="emitAllFilters">Aplicar</v-btn>
                <v-btn color="error" @click="resetAllFilters">Limpar</v-btn>
              </div>
            </td>
          </tr>
          
          <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.task_code }}</td>
          <td>{{ task.sequence }}</td>
          <td>{{ task.name }}</td>
          <td v-if="showExpectedDate">{{ task.expected_date }}</td>
          <td>{{ task.user_owner?.first_name }}</td>
          <td v-if="showResponsible">{{ task.user_responsible?.first_name || 'Nenhum' }}</td>
          <td>{{ task.task_status?.name }}</td>
          <td v-if="showPriority">{{ task.priority?.name }}</td>
          <td class="text-right">
            <div class="d-flex align-center">
              <v-tooltip text="Visualizar Chamado">
                <template v-slot:activator="{ props }">
                  <v-btn icon flat @click="toShow = task" v-bind="props">
                    <EyeIcon stroke-width="1.5" size="20" class="text-primary" />
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
              <template v-if="isAdmin">
                <v-menu location="bottom end">
                  <template v-slot:activator="{ props }">
                    <v-tooltip text="Mais ações">
                      <template v-slot:activator="{ props: tooltipProps }">
                        <v-btn icon flat v-bind="Object.assign({}, props, tooltipProps)">
                          <SettingsIcon stroke-width="1.5" size="20" class="text-primary" />
                        </v-btn>
                      </template>
                    </v-tooltip>
                  </template>
                  <v-list>
                    <v-list-item @click="toEdit = task">
                      <PencilIcon stroke-width="1.5" size="18" class="mr-2 text-primary" />
                      <span>Editar</span>
                    </v-list-item>
                    <v-list-item @click="toDelete = task">
                      <TrashIcon stroke-width="1.5" size="18" class="mr-2 text-error" />
                      <span>Deletar</span>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </div>
          </td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
    <div class="d-flex justify-space-between align-center mt-4">
      <span>Total de Chamados: {{ tasks.length }}</span>
      <v-btn icon @click="exportCSV"><FileSpreadsheetIcon /></v-btn>
    </div>
    <v-pagination
      v-model="pagination.current_page"
      :length="pagination.last_page"
      @update:model-value="handlePageChange"
    />

  </div>
</div>
</template>

<script setup>
import { useMeStore } from "@/stores/me"; 
import { useRoute, useRouter } from "vue-router"; 
import { exportToCSV } from "@/utils/exportToCSV"; 
import { formatDateToBR } from "@/utils/helpers.js"; 
import { ref, computed, watch, defineEmits, onMounted } from 'vue';
import { useTasksStore } from '@/stores/apps/tasks';
import { storeToRefs } from 'pinia';
import {
  PencilIcon,
  TrashIcon,
  NotesIcon,
  PaperclipIcon,
  FilterIcon,
  EyeIcon,
  TableExportIcon,
  SettingsIcon,
} from "vue-tabler-icons";
import { debounce } from 'lodash';

const emit = defineEmits(["edit", "delete", "show", "openChat", "openAttachments", "update:filters", "update:page"]);

const meStore = useMeStore();

const isAdmin = computed(() =>
  meStore.user?.teams?.some((team) => team.is_admin) || false
);


const tasksStore = useTasksStore();
const { tasks, pagination, toShow, toEdit, toDelete } = storeToRefs(tasksStore);
const currentPage = ref(1);

const props = defineProps({
  perPage: Number,
  sortBy: String,
  sortOrder: String,
  filters: {
    type: Object,
    default: () => ({
      taskStatus: [],
      userOwner: [],
      userResponsible: [],
      priority: []
    })
  }
});

const selectedStatuses = ref([...props.filters.taskStatus]);
const selectedOwners = ref([...props.filters.userOwner]);
const selectedResponsibles = ref([...props.filters.userResponsible]);
const selectedPriorities = ref([...props.filters.priority]);

const showStatusFilter = ref(false);
const showOwnerFilter = ref(false);
const showResponsibleFilter = ref(false);
const showPriorityFilter = ref(false);

const showExpectedDate = ref(
  localStorage.getItem('showExpectedDate') !== null
    ? JSON.parse(localStorage.getItem('showExpectedDate'))
    : false
);
const showPriority = ref(
  localStorage.getItem('showPriority') !== null
    ? JSON.parse(localStorage.getItem('showPriority'))
    : false
);
const showResponsible = ref(
  localStorage.getItem('showResponsible') !== null
    ? JSON.parse(localStorage.getItem('showResponsible'))
    : false
);
const showColumnSettings = ref(false);

const statusOptions = computed(() => 
tasksStore.filterOptions.statuses?.map(s => ({
    title: s.name,
    value: s.name
  })) || []
);
const ownerOptions = computed(() => 
tasksStore.filterOptions.owners?.map(o => ({
    title: o.first_name,
    value: o.first_name
  })) || []
);
//const responsibleOptions = computed(() => tasksStore.filterOptions.responsibles?.map(r => r.first_name) || []);
const responsibleOptions = computed(() =>
  tasksStore.filterOptions.responsibles?.map(r => ({
    title: r.first_name,
    value: r.first_name
  })) || []
);
const priorityOptions = computed(() => 
tasksStore.filterOptions.priorities?.map(p => ({
    title: p.name,
    value: p.name
  })) || []
);

const debouncedEmitFilters = debounce(() => {
  emitAllFilters();
}, 600);

/*
Comentado temporariamente para impedir que o v-select feche após a primeira seleção.
watch(
  [selectedStatuses, selectedOwners, selectedResponsibles, selectedPriorities],
  () => {
    emitAllFilters();
  },
  { deep: true }
);
*/

onMounted(() => {
  tasksStore.fetchFilterOptions();
});

const emitAllFilters = () => {
  emit("update:filters", {
    taskStatus: selectedStatuses.value,
    userOwner: selectedOwners.value,
    userResponsible: selectedResponsibles.value,
    priority: selectedPriorities.value,
    page: currentPage.value,
    per_page: props.perPage,
    sort_by: props.sortBy,
    sort_order: props.sortOrder,
  });
};


const totalPages = computed(() => Math.ceil(pagination.value.total / pagination.value.per_page));
const handlePageChange = (page) => {
  currentPage.value = page;
  emit("update:page", page);
 // emitAllFilters();
};

const sortTable = (column) => {
  const newSortOrder = props.sortBy === column
    ? (props.sortOrder === 'asc' ? 'desc' : 'asc')
    : 'asc';

  emit("update:filters", {
    taskStatus: selectedStatuses.value,
    userOwner: selectedOwners.value,
    userResponsible: selectedResponsibles.value,
    priority: selectedPriorities.value,
    page: currentPage.value,
    per_page: props.perPage,
    sort_by: column,
    sort_order: newSortOrder,
  });
};
const resetAllFilters = () => {
  selectedStatuses.value = []
  selectedOwners.value = []
  selectedResponsibles.value = []
  selectedPriorities.value = []
  emitAllFilters()
}

watch(showExpectedDate, (val) => {
  localStorage.setItem('showExpectedDate', JSON.stringify(val));
});
watch(showPriority, (val) => {
  localStorage.setItem('showPriority', JSON.stringify(val));
});
watch(showResponsible, (val) => {
  localStorage.setItem('showResponsible', JSON.stringify(val));
});

const toggleFilter = (type) => {
  showOwnerFilter.value = type === 'owner';
  showResponsibleFilter.value = type === 'responsible';
  showStatusFilter.value = type === 'status';
  showPriorityFilter.value = type === 'priority';
};
</script>

<style>
.v-table-fixed-header {
  width: 100%;
  table-layout: fixed;
  border-spacing: 0;
}

.v-table-fixed-header thead,
.v-table-fixed-header tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

.v-table-fixed-header thead th {
  position: sticky;
  top: 0;
  background-color: #2a3447;
  z-index: 5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.v-table-fixed-header tbody {
  display: block;
  max-height: 60vh;
  overflow-y: auto;
}

.v-table-fixed-header th,
.v-table-fixed-header td {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  padding: 8px;
}

.v-table-fixed-header th:nth-child(1),
.v-table-fixed-header td:nth-child(1) { width: 70px; }
.v-table-fixed-header th:nth-child(2),
.v-table-fixed-header td:nth-child(2) { width: 80px; }
.v-table-fixed-header th:nth-child(3),
.v-table-fixed-header td:nth-child(3) { width: 180px; }
.v-table-fixed-header th:nth-child(4),
.v-table-fixed-header td:nth-child(4) { width: 120px; }
.v-table-fixed-header th:nth-child(5),
.v-table-fixed-header td:nth-child(5) { width: 120px; }
.v-table-fixed-header th:nth-child(6),
.v-table-fixed-header td:nth-child(6) { width: 120px; }
.v-table-fixed-header th:nth-child(7),
.v-table-fixed-header td:nth-child(7) { width: 120px; }
.v-table-fixed-header th:nth-child(8),
.v-table-fixed-header td:nth-child(8) { width: 120px; }
.v-table-fixed-header th:nth-child(9),
.v-table-fixed-header td:nth-child(9) { width: 132px; }

.v-table-fixed-header tbody::-webkit-scrollbar {
  width: 6px;
}
.v-table-fixed-header tbody::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
</style>


<!-- Estilos locais -->
<style>
.tasks-table-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scrollable-table-wrapper {
  flex-grow: 1;
  overflow-y: auto;
  max-height: calc(100vh - 280px);
}

.v-select,
.v-input {
  font-size: 12px;
}

.v-table th .v-btn {
  padding: 0 !important;
  min-width: 24px;
}

.text-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  hyphens: auto;
}

.totalizer {
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
}
.totalizer-number {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}

.v-table th .v-btn {
  padding: 0 !important;
  min-width: 24px;
}
.v-table-fixed-header tbody::-webkit-scrollbar {
  width: 6px;
}

.v-table-fixed-header tbody::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.v-table-fixed-header th:last-child,
.v-table-fixed-header td:last-child {
  width: 20px; /* ou 30px, o mínimo necessário para o botão de engrenagem */
  padding-right: 4px;
}

.filtro-row {
  background-color: #2a3447;
  height: auto;
  padding: 0 16px;
}
.filtro-row .v-select {
  max-width: 200px;
}
</style>