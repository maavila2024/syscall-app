<template>
  <div class="tasks-table-container">
    <div class="table-wrapper">
      <v-table class="border-opacity-100">
        <thead>
          <tr>
            <th class="text-left" style="width: 50px" @click="sortTable('task_code')">
              Chamado
              <v-icon v-if="sortBy === 'task_code'">
                {{ sortOrder === "asc" ? "mdi-arrow-up" : "mdi-arrow-down" }}
              </v-icon>
            </th>
            <th class="text-left" style="width: 50px" @click="sortTable('sequence')">
              Sequência
              <v-icon v-if="sortBy === 'sequence'">
                {{ sortOrder === "asc" ? "mdi-arrow-up" : "mdi-arrow-down" }}
              </v-icon>
            </th>
            <th class="text-left" style="width: 250px" @click="sortTable('name')">
              Título
              <v-icon v-if="sortBy === 'name'">
                {{ sortOrder === "asc" ? "mdi-arrow-up" : "mdi-arrow-down" }}
              </v-icon>
            </th>
            <th class="text-left" style="width: 250px" @click="sortTable('expected_date')">
              Data Prevista
              <v-icon v-if="sortBy === 'expected_date'">
                {{ sortOrder === "asc" ? "mdi-arrow-up" : "mdi-arrow-down" }}
              </v-icon>
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
          <tr v-if="showOwnerFilter || showResponsibleFilter || showStatusFilter || showPriorityFilter">
            <td colspan="4"></td>
            <td v-if="showOwnerFilter">
              <v-select
                v-model="selectedOwners"
                :items="ownerOptions"
                label="Filtro Solicitante"
                multiple
                @change="emitAllFilters"
              />
            </td>
            <td v-if="showResponsibleFilter">
              <v-select
                v-model="selectedResponsibles"
                :items="responsibleOptions"
                label="Filtro Responsável"
                multiple
                @change="emitAllFilters"
              />
            </td>
            <td v-if="showStatusFilter">
              <v-select
                v-model="selectedStatuses"
                :items="statusOptions"
                label="Filtro Status"
                multiple
                @change="emitAllFilters"
              />
            </td>
            <td v-if="showPriorityFilter">
              <v-select
                v-model="selectedPriorities"
                :items="priorityOptions"
                label="Filtro Prioridade"
                multiple
                @change="emitAllFilters"
              />
            </td>
            <td colspan="2"></td>
          </tr>

          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.task_code }}</td>
            <td>{{ task.sequence }}</td>
            <td>{{ task.name }}</td>
            <td>{{ task.expected_date }}</td>
            <td>{{ task.user_owner?.first_name }}</td>
            <td>{{ task.user_responsible?.first_name || 'Nenhum' }}</td>
            <td>{{ task.task_status?.name }}</td>
            <td>{{ task.priority?.name }}</td>
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
} from "vue-tabler-icons";

const emit = defineEmits(["edit", "delete", "show", "openChat", "openAttachments", "update:filters", "update:page"]);

const meStore = useMeStore();

const isAdmin = computed(() =>
  meStore.user?.teams?.some((team) => team.is_admin) || false
);


const tasksStore = useTasksStore();
const { tasks, pagination, toShow, toEdit, toDelete } = storeToRefs(tasksStore);
const currentPage = ref(1);
const sortBy = ref('');
const sortOrder = ref('asc');

const selectedStatuses = ref([]);
const selectedOwners = ref([]);
const selectedResponsibles = ref([]);
const selectedPriorities = ref([]);

const showStatusFilter = ref(false);
const showOwnerFilter = ref(false);
const showResponsibleFilter = ref(false);
const showPriorityFilter = ref(false);

const statusOptions = computed(() => tasksStore.filterOptions.statuses?.map(s => s.name) || []);
const ownerOptions = computed(() => tasksStore.filterOptions.owners?.map(o => o.first_name) || []);
const responsibleOptions = computed(() => tasksStore.filterOptions.responsibles?.map(r => r.first_name) || []);
const priorityOptions = computed(() => tasksStore.filterOptions.priorities?.map(p => p.name) || []);

watch(
  [selectedStatuses, selectedOwners, selectedResponsibles, selectedPriorities],
  () => {
    emitAllFilters();
  },
  { deep: true }
);

const props = defineProps({
  perPage: {
    type: Number,
    required: true,
  }
});


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
  });
};

const totalPages = computed(() => Math.ceil(pagination.value.total / pagination.value.per_page));
const handlePageChange = (page) => {
  currentPage.value = page;
  emit("update:page", page);
 // emitAllFilters();
};
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