<template> 
  <div class="tasks-table-container">
    <div class="table-wrapper">
      <v-table class="border-opacity-100">
        <thead>
          <tr>
            <th
              class="text-left"
              style="width: 50px"
              @click="sortTable('task_code')"
            >
              Chamado
              <v-icon v-if="sortBy === 'task_code'">{{
                sortOrder === "asc" ? "mdi-arrow-up" : "mdi-arrow-down"
              }}</v-icon>
            </th>
            <th
              class="text-left"
              style="width: 50px"
              @click="sortTable('sequence')"
            >
              Sequência
              <v-icon v-if="sortBy === 'sequence'">{{
                sortOrder === "asc" ? "mdi-arrow-up" : "mdi-arrow-down"
              }}</v-icon>
            </th>
            <th
              class="text-left"
              style="width: 250px"
              @click="sortTable('name')"
            >
              Título
              <v-icon v-if="sortBy === 'name'">{{
                sortOrder === "asc" ? "mdi-arrow-up" : "mdi-arrow-down"
              }}</v-icon>
            </th>
            <th
              class="text-left"
              style="width: 250px"
              @click="sortTable('expected_date')"
            >
              Data Prevista
              <v-icon v-if="sortBy === 'expected_date'">{{
                sortOrder === "asc" ? "mdi-arrow-up" : "mdi-arrow-down"
              }}</v-icon>
            </th>
            <th class="text-left" style="width: 175px">
              Solicitante
              <v-btn icon @click="showOwnerFilter = !showOwnerFilter">
                <FilterIcon />
              </v-btn>
            </th>
            <th class="text-left" style="width: 185px">
              Responsável
              <v-btn
                icon
                @click="showResponsibleFilter = !showResponsibleFilter"
              >
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
            <!-- <th class="text-left" style="width: 235px">
              Complexidade
              <v-btn icon @click="showComplexityFilter = !showComplexityFilter">
                <FilterIcon />
              </v-btn>
            </th> -->
            <th class="text-left" style="width: 100px">Ações</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <!-- Filtros -->
          <tr
            v-if="
              showOwnerFilter ||
              showResponsibleFilter ||
              showStatusFilter ||
              showPriorityFilter ||
              showComplexityFilter
            "
          >
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
                      :label="
                        selectAllOwners ? 'Desmarcar todos' : 'Selecionar todos'
                      "
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
                      :label="
                        selectAllResponsibles
                          ? 'Desmarcar todos'
                          : 'Selecionar todos'
                      "
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
                      :label="
                        selectAllStatuses
                          ? 'Desmarcar todos'
                          : 'Selecionar todos'
                      "
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
                      :label="
                        selectAllPriorities
                          ? 'Desmarcar todos'
                          : 'Selecionar todos'
                      "
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
                      :label="
                        selectAllComplexities
                          ? 'Desmarcar todos'
                          : 'Selecionar todos'
                      "
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
          <tr v-for="(task, i) in filteredTasks" :key="task?.id || i">
            <td>{{ task?.task_code }}</td>
            <td>{{ task?.sequence }}</td>
            <td>
              <div class="text-clamp">{{ task?.name }}</div>
              <v-chip
                v-if="task?.default"
                size="small"
                variant="tonal"
                color="primary"
                class="ml-2"
                >Default</v-chip
              >
            </td>
            <td>{{ formatDateToBR(task?.expected_date) }}</td>
            <td>
              <div class="text-clamp">{{ task?.user_owner?.first_name }}</div>
            </td>
            <td>
              <div class="text-clamp">
                {{ task?.user_responsible?.first_name || "Nenhum responsável" }}
              </div>
            </td>
            <td>
              <div
                class="text-clamp"
                :style="getStatusStyle(task?.task_status)"
              >
                {{ task?.task_status?.name }}
              </div>
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
            <!-- <td class="text-right">
              <div class="d-flex align-center">
                <v-tooltip
                  :text="task?.complexity_justification || 'Em análise'"
                >
                  <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">
                      <span v-bind="attrs" v-on="on">
                        <div class="text-clamp">
                          {{ task?.complexity?.name || "Em análise" }}
                        </div>
                      </span>
                    </v-btn>
                  </template>
                </v-tooltip>
              </div>
            </td> -->
            <td class="text-right">
              <div class="d-flex align-center">
                <v-tooltip text="Visualizar Chamado">
                  <template v-slot:activator="{ props }">
                    <v-btn icon flat @click="toShow = task" v-bind="props">
                      <EyeIcon
                        stroke-width="1.5"
                        size="20"
                        class="text-primary"
                      />
                    </v-btn>
                  </template>
                </v-tooltip>
                <v-tooltip v-if="isAdmin" text="Editar Chamado">
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
                <v-tooltip v-if="isAdmin" text="Deletar Chamado">
                  <template v-slot:activator="{ props }">
                    <v-btn icon flat @click="toDelete = task" v-bind="props">
                      <TrashIcon
                        stroke-width="1.5"
                        size="20"
                        class="text-error"
                      />
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
                <!--
                <v-tooltip text="Exportar CSV">
                  <template v-slot:activator="{ props }">
                    <v-btn icon flat @click="handleExportCSV" v-bind="props">
                      <TableExportIcon
                        stroke-width="1.5"
                        size="20"
                        class="text-primary"
                      />
                    </v-btn>
                  </template>
                </v-tooltip>
                -->
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="8" class="text-right">
              <strong class="totalizer">Total de Chamados:</strong>
              <span class="totalizer-number">{{ filteredTasks.length }}</span>
            </td>
            <td class="text-left">
            <span class="ml-2">Exportar CSV</span>
            <v-tooltip text="Exportar CSV">
              <template v-slot:activator="{ props }">
                <v-btn icon flat @click="handleExportCSV" v-bind="props">
                  <TableExportIcon stroke-width="1.5" size="20" class="text-primary" />
                </v-btn>
              </template>
            </v-tooltip>
          </td>
          </tr>
        </tfoot>
      </v-table>
    </div>

    <div class="d-flex justify-space-between align-center mt-4">
      <span class="text-caption">
        Mostrando {{ (pagination.current_page - 1) * pagination.per_page + 1 }} 
        até {{ Math.min(pagination.current_page * pagination.per_page, pagination.total) }}
        de {{ pagination.total }} registros
      </span>
      
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        :total-visible="7"
        @update:model-value="handlePageChange"
      ></v-pagination>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, defineEmits } from "vue";
import {
  PencilIcon,
  TrashIcon,
  NotesIcon,
  PaperclipIcon,
  FilterIcon,
  EyeIcon,
  TableExportIcon,
} from "vue-tabler-icons";
import { useTasksStore } from "@/stores/apps/tasks";
import { storeToRefs } from "pinia";
import { useMeStore } from "@/stores/me";
import { useRoute, useRouter } from "vue-router";
import { exportToCSV } from "@/utils/exportToCSV";
import { formatDateToBR } from '@/utils/helpers.js';

const meStore = useMeStore();
const tasksStore = useTasksStore();
const route = useRoute();
const router = useRouter();
const { tasks, toShow, toEdit, toDelete, taskFiles, pagination } = storeToRefs(tasksStore);
const isAdmin = computed(() => 
  meStore.user?.teams?.some((team) => team.is_admin) || false
);
const emit = defineEmits(["update:filters", "update:page"]);

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
  ...new Set(tasks.value.map((task) => task.complexity?.name || "Em análise")),
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
  console.log("Emitting status filters:", selectedStatuses.value);
  emit("update:filters", { taskStatus: selectedStatuses.value });
};

const handleOwnerChange = () => {
  selectAllOwners.value =
    selectedOwners.value.length === ownerOptions.value.length;
  console.log("Emitting status filters:", selectedOwners.value);
  emit("update:filters", { userOwner: selectedOwners.value });
};

const handleResponsibleChange = () => {
  selectAllResponsibles.value =
    selectedResponsibles.value.length === responsibleOptions.value.length;
  console.log("Emitting status filters:", selectedResponsibles.value);
  emit("update:filters", { userResponsible: selectedResponsibles.value });
};

const handlePriorityChange = () => {
  console.log("handlePriorityChange called");
  selectAllPriorities.value =
    selectedPriorities.value.length === priorityOptions.value.length;
  console.log("Emitting status filters:", selectedPriorities.value);
  emit("update:filters", { priority: selectedPriorities.value });
};

const handleComplexityChange = () => {
  selectAllComplexities.value =
    selectedComplexities.value.length === complexityOptions.value.length;
  console.log("Emitting status filters:", selectedComplexities.value);
  emit("update:filters", { complexity: selectedComplexities.value });
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
watch(selectedPriorities, (newVal) => {
  console.log("Selected priorities changed:", newVal);
});
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
const sortBy = ref("");
const sortOrder = ref("asc");

const sortTable = (key) => {
  if (sortBy.value === key) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortBy.value = key;
    sortOrder.value = "asc";
  }
};

const sortedTasks = computed(() => {
  const sorted = [...tasks.value];
  sorted.sort((a, b) => {
    const keyA = a[sortBy.value];
    const keyB = b[sortBy.value];
    if (keyA < keyB) return sortOrder.value === "asc" ? -1 : 1;
    if (keyA > keyB) return sortOrder.value === "asc" ? 1 : -1;
    return 0;
  });
  return sorted;
});

// Filtragem das tarefas com base nos filtros selecionados
const filteredTasks = computed(() => {
  console.log('🔍 Filtrando tasks:', {
    totalTasks: tasks.value?.length,
    filters: {
      status: selectedStatuses.value,
      owners: selectedOwners.value,
      responsibles: selectedResponsibles.value
    }
  });

  if (!tasks.value) {
    console.warn('⚠️ tasks.value está vazio');
    return [];
  }

  return tasks.value.filter((task) => {
    if (!task) {
      console.warn('⚠️ Task inválida encontrada');
      return false;
    }

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
      selectedComplexities.value.includes(
        task.complexity?.name || "Em análise"
      );
    const segmentMatch =
      meStore.user?.default_segment == 0 ||
      String(task.segment) === String(meStore.user?.default_segment) ||
      task.segment == null;



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

watch(filteredTasks, (val) => {
  console.log('⚠️ filteredTasks atualizadas:', val);
});
         

const getStatusStyle = (taskStatus) => {
  if (!taskStatus) return {}; // evita erro se undefined
  return {
    color: taskStatus.color,
  };
};

// Adicionando a chamada para `getTasks`
onMounted(() => {
  const query = route.query.search || "";
  if (query) {
    tasksStore.getTasks(query);
  }
});

// Adicionando watch para monitorar mudanças na rota
watch(
  () => route.query.search,
  (newSearch) => {
    const query = newSearch || "";
    tasksStore.getTasks(query);
  }
);

watch(() => pagination.per_page, () => {
  currentPage.value = 1;
});

const handleExportCSV = () => {
  exportToCSV(filteredTasks.value, "tasks.csv");
};

const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(pagination.value.total / pagination.value.per_page));

const handlePageChange = (page) => {
  currentPage.value = page;
  emit('update:page', page);
};

// Observar mudanças nas tasks
watch(() => tasks.value, (newTasks) => {
  console.log('Tasks atualizadas:', newTasks);
}, { deep: true });

// Observar mudanças na paginação
watch(() => pagination.value.per_page, () => {
  currentPage.value = 1;
});
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

.v-table th,
.v-table td {
  font-size: 12px; /* Adicionado para manter o tamanho da fonte */
}

.v-select,
.v-input,
.v-btn {
  font-size: 12px; /* Adicionado para manter o tamanho da fonte nos inputs e botões */
}

.v-table thead th {
  position: sticky;
  top: 0;
  background-color: #2a3447; /* ajuste conforme necessário */
  z-index: 1;
  border-bottom: 1px solid #424242;
}

.totalizer {
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
}

.totalizer-number {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff; /* Escolha a cor que preferir */
}
</style>
