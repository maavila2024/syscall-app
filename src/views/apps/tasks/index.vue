<template>
  <div>
    <div class="mb-5 pb-5 border-b border-opacity-100">
      <v-row align="center" justify="space-between" class="mb-4">
        <v-col cols="12" lg="6" md="6" class="d-flex align-center">
          <v-text-field
            class="mr-4"
            density="compact"
            v-model="search"
            label="Pesquisar Chamados"
            append-inner-icon="mdi-magnify"
            @click:append-inner="() => fetchTasks(1)"
            hide-details
            variant="outlined"
            style="flex: 1"
          />
          <v-select
            v-model="perPage"
            :items="[5, 10, 15, 20, 25, 50, 100]"
            label="Itens por página"
            density="compact"
            variant="outlined"
            style="width: 150px"
            hide-details
          />
          <v-btn
            color="primary"
            class="ml-4"
            @click="exportTasks"
          >
            Exportar CSV
          </v-btn>
        </v-col>
        <v-col cols="12" lg="2" md="2" class="text-right">
          <v-dialog v-model="showAddModal" width="800" persistent>
            <template #activator="{ props }">
              <v-btn flat color="primary" v-bind="props">
                Novo Chamado
              </v-btn>
            </template>
            <template #default>
              <v-card class="pa-4">
                <v-card-title>Adicionar chamado</v-card-title>
                <v-card-text>
                  <TaskAddForm 
                    @add="onTaskAdded" 
                    @cancel="showAddModal = false" 
                  />
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="12" lg="4" md="4" class="d-flex align-center">
          <label class="mr-4">Segmento:</label>
          <v-radio-group
            v-model="selectedSegment"
            @change="updateUserSegment"
            row
            inline
            class="radio-button"
          >
            <v-radio label="Todos" value="0" class="mr-2"></v-radio>
            <v-radio label="Grãos" value="1" class="mr-2"></v-radio>
            <v-radio label="Proteína" value="2"></v-radio>
          </v-radio-group>
        </v-col>

        <v-col cols="12" lg="8" md="8" class="d-flex align-center">
          <div class="switch-container mr-4">
            <v-switch
              v-model="showAllTasks"
              label="Mostrar Todos Chamados"
              color="primary"
              hide-details
              @change="handleShowAllChange(showAllTasks)"
              @click.stop
            ></v-switch>
          </div>

          <div class="filter-date-section" @click.stop>
            <div class="text-caption text-grey mb-1">
              Filtrar chamados por data de conclusão:
            </div>
            <div class="d-flex align-center">
              <v-select
                v-model="selectedMonth"
                :items="months"
                label="Mês"
                hide-details
                class="mr-2"
                density="compact"
                style="min-width: 180px; max-width: 200px"
                variant="outlined"
              ></v-select>

              <v-select
                v-model="selectedYear"
                :items="years"
                label="Ano"
                hide-details
                class="mr-2"
                density="compact"
                style="min-width: 120px; max-width: 130px"
                variant="outlined"
              ></v-select>

              <v-btn 
                color="primary" 
                @click="applyDateFilter"
                :disabled="!selectedMonth || !selectedYear"
                class="mr-4"
              >
                Filtrar
              </v-btn>
              <v-btn 
                color="error" 
                class="mr-4"
                @click="resetFilters"
              >
                Limpar Filtros
              </v-btn>

            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-progress-circular
      v-if="isLoading"
      :width="3"
      color="primary"
      indeterminate
    />
    <template v-else>
      <TasksTable
        :per-page="perPage"
        :sort-by="sortBy"
        :sort-order="sortOrder"
        :filters="tableFilters"
        @openChat="openChatModal"
        @addNote="openAddNoteModal"
        @openAttachments="openAttachmentsModal"
        @update:filters="applyFilters"
        @update:page="handlePageChange"
      />
      <!--
      <v-pagination
        v-model="pagination.current_page"
        :length="pagination.last_page"
        @input="fetchTasksDebounced"
      ></v-pagination>
      -->
      <v-dialog v-model="isShowing" width="800" persistent>
        <template #default="{ isActive }">
          <v-card width="800">
            <v-card-title>Visualizar chamado</v-card-title>
            <v-card-text>
              <TaskShowForm
                :task="toShow"
                @cancel="isActive.value = false"
                @show="isActive.value = false"
              />
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
      <v-dialog v-model="isEditing" width="800" persistent>
        <template #default>
          <v-card class="pa-4">
            <v-card-title>Editar chamado</v-card-title>
            <v-card-text>
              <TaskEditForm
                :task="toEdit"
                @edit="onTaskEdited"
                @cancel="isEditing = false"
              />
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
      <v-dialog v-model="isDeleting" width="800" persistent>
        <template #default="{ isActive }">
          <v-card
            :prepend-icon="TrashIcon"
            title="Você tem certeza que deseja deletar este chamado?"
          >
            <template #actions>
              <v-spacer></v-spacer>
              <v-btn @click="isActive.value = false">Cancelar</v-btn>
              <v-btn
                @click="deleteTask(toDelete)"
                variant="tonal"
                color="error"
                :loading="deleting"
                >Deletar</v-btn
              >
            </template>
          </v-card>
        </template>
      </v-dialog>
    </template>
    <TaskChat
      :taskId="selectedTaskId"
      :showChatModal="showChatModal"
      :userId="loggedInUserId"
      @update:showChatModal="showChatModal = $event"
    />
    <v-dialog v-model="showAddNoteModal" max-width="500px" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5">Adicionar Nota de Trabalho</span>
        </v-card-title>
        <v-card-text>
          <TaskChat
            :taskId="selectedTaskId"
            :showChatModal="showChatModal"
            :userId="loggedInUserId"
            @update:showChatModal="showChatModal = $event"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="showAddNoteModal = false"
            >Cancelar</v-btn
          >
          <v-btn color="blue darken-1" text @click="addNote">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <TaskAttachments
      :taskId="selectedTaskId"
      :showAttachmentsModal="showAttachmentsModal"
      @update:showAttachmentsModal="showAttachmentsModal = $event"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted, nextTick } from "vue";
import { TrashIcon } from "vue-tabler-icons";
import { useAsyncState } from "@vueuse/core";
import TasksTable from "@/components/Tasks/TasksTable.vue";
import TaskAddForm from "@/components/Tasks/TaskAddForm.vue";
import { storeToRefs } from "pinia";
import TaskEditForm from "@/components/Tasks/TaskEditForm.vue";
import TaskShowForm from "@/components/Tasks/TaskShowForm.vue";
import TaskChat from "@/components/Tasks/TaskChat.vue";
import TaskAttachments from "@/components/Tasks/TaskAttachments.vue";
import { useTasksStore } from "@/stores/apps/tasks";
import { useChatStore } from "@/stores/apps/chats";
import { useMeStore } from "@/stores/me";
import { useRoute } from "vue-router";
import { exportToCSV } from "@/utils/exportToCSV"; 
import axios from 'axios';


const route = useRoute();

// Utility functions
const debounce = (fn, delay) => {
  let timeoutID;
  return (...args) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => fn(...args), delay);
  };
};

// Store refs
const tasksStore = useTasksStore();
const meStore = useMeStore();
const chatStore = useChatStore();
const { tasks, toShow, toEdit, toDelete, taskFiles, pagination } = storeToRefs(tasksStore);
const { messages } = storeToRefs(chatStore);

const exportTasks = () => {
  exportToCSV(tasks.value, 'tasks.csv'); 
};

// Estado local - Refs
const perPage = ref(meStore.user?.default_pagination || 10);
const search = ref('');
const selectedSegment = ref(meStore.user?.default_segment || '0');
const isLoading = ref(false);
const isSpecificSearch = ref(false);
const showAllTasks = ref(false);
const selectedMonth = ref(null);
const selectedYear = ref(new Date().getFullYear());
const deleting = ref(false);
const newNote = ref('');
const loggedInUserId = ref(meStore.user.id);
const selectedTaskId = ref(null);

// Refs para modais
const showChatModal = ref(false);
const showAddNoteModal = ref(false);
const showAttachmentsModal = ref(false);

// Adicionar nova ref para o modal de adição
const showAddModal = ref(false);

const sortBy = ref('created_at');
const sortOrder = ref('desc');

// Estado dos filtros
const tableFilters = ref({
  taskStatus: [],
  userOwner: [],
  userResponsible: [],
  priority: [],
  complexity: []
});

// Constantes
const months = [
  { title: 'Janeiro', value: 1 },
  { title: 'Fevereiro', value: 2 },
  { title: 'Março', value: 3 },
  { title: 'Abril', value: 4 },
  { title: 'Maio', value: 5 },
  { title: 'Junho', value: 6 },
  { title: 'Julho', value: 7 },
  { title: 'Agosto', value: 8 },
  { title: 'Setembro', value: 9 },
  { title: 'Outubro', value: 10 },
  { title: 'Novembro', value: 11 },
  { title: 'Dezembro', value: 12 }
];
const years = [2024, 2025].map(y => ({ title: y.toString(), value: y }));

// Funções que dependem do debounce
const fetchTasksDebounced = debounce(async () => {
  const page = pagination.value.current_page;
  await tasksStore.getTasks(search.value, selectedSegment.value, page, {
    ...tableFilters.value, // Usar os filtros persistentes
    per_page: perPage.value,
    show_all: showAllTasks.value,
    filter_month: selectedMonth.value,
    filter_year: selectedYear.value
  });
}, 2000);

// Computed properties
const isEditing = computed({
  get: () => !!Object.keys(toEdit.value).length,
  set: (value) => { if (!value) toEdit.value = {}; }
});

const isShowing = computed({
  get: () => !!Object.keys(toShow.value).length,
  set: (value) => { if (!value) toShow.value = {}; }
});

const isDeleting = computed({
  get: () => !!Object.keys(toDelete.value).length,
  set: (value) => { if (!value) toDelete.value = {}; }
});

// Funções
const deleteTask = async (task) => {
  deleting.value = true;
  await tasksStore.deleteTask(task.id);
  toDelete.value = {};
  deleting.value = false;
};

const addNote = async () => {
  await chatStore.addMessage(selectedTaskId.value, newNote.value, loggedInUserId.value);
  newNote.value = "";
  showAddNoteModal.value = false;
};

const openAttachmentsModal = (task) => {
  if (task?.id) {
    selectedTaskId.value = task.id;
    showAttachmentsModal.value = true;
  }
};

const openChatModal = (task) => {
  if (task?.id) {
    selectedTaskId.value = task.id;
    showChatModal.value = true;
  }
};

const openAddNoteModal = (task) => {
  if (task?.id) {
    selectedTaskId.value = task.id;
    showAddNoteModal.value = true;
  }
};

const updateUserSegment = async () => {
  try {
    await meStore.updateUserSegment(selectedSegment.value);
    pagination.value.current_page = 1; // redefine para a primeira página
    await fetchTasks(1); // busca com a nova segmentação e paginação correta
  } catch (error) {
    console.error("Erro ao atualizar segmento:", error);
  }
};

const handleShowAllChange = async (value) => {
  try {
    isLoading.value = true;
    pagination.value.current_page = 1;
    await tasksStore.getTasks(
      search.value,
      selectedSegment.value,
      1,
      {
        ...tableFilters.value,
        per_page: perPage.value,
        show_all: value,
        filter_month: selectedMonth.value,
        filter_year: selectedYear.value
      }
    );
  } finally {
    isLoading.value = false;
  }
};

//watch([search, selectedSegment, tableFilters], () => {
  //fetchTasksDebounced(pagination.value.current_page);
//}, { deep: true });

onMounted(async () => {
  await meStore.getMe(); // <- garante que os dados do usuário estão carregados

  // Atualiza o valor de perPage com base nas preferências do usuário
  if (meStore.user?.default_pagination) {
    perPage.value = meStore.user.default_pagination;
  }
  try {
    await tasksStore.getPriorities();
    await tasksStore.getComplexities();
    await tasksStore.getTasksStatus();
    await tasksStore.getUsers();
    await tasksStore.fetchFilterOptions();


    // busca inicial: não mostra concluídos/cancelados
    await tasksStore.getTasks(
      search.value,
      selectedSegment.value,
      1,
      {
        ...tableFilters.value,
        per_page: perPage.value,
        show_all: false // <- essencial
      }
    );
  } catch (error) {
    console.error('❌ Erro ao carregar tasks:', error);
  }
});

const buildTaskParams = () => {
  const base = {
    ...tableFilters.value,
    per_page: perPage.value,
    show_all: showAllTasks.value,
    filter_month: selectedMonth.value,
    filter_year: selectedYear.value,
    sort_by: sortBy.value,
    sort_order: sortOrder.value,
  };

  if (selectedMonth.value && selectedYear.value) {
    base.filter_month = selectedMonth.value;
    base.filter_year = selectedYear.value;
  }

  return base;
};

const fetchTasks = async (page = 1) => {
  try {
    isLoading.value = true;
    await tasksStore.getTasks(search.value, selectedSegment.value, page, buildTaskParams());

  } finally {
    isLoading.value = false;
  }
};


watch(perPage, async () => {
  pagination.value.current_page = 1;
  await fetchTasks(1);
});

watch(search, () => {
  pagination.value.current_page = 1;
  fetchTasksDebounced();
});


const applyFilters = async (newFilters) => {
  console.log('📥 Recebendo novos filtros:', newFilters);

  tableFilters.value = {
    ...tableFilters.value,
    ...newFilters,
  };

  if (newFilters.sort_by) sortBy.value = newFilters.sort_by;
  if (newFilters.sort_order) sortOrder.value = newFilters.sort_order;

  pagination.value.current_page = 1;
  await fetchTasks(1);
  
};


const handlePageChange = async (page) => {
  pagination.value.current_page = page;
  await fetchTasks(page);
};

const applyDateFilter = async () => {
  if (!selectedMonth.value || !selectedYear.value) return;

  await tasksStore.getTasks(
    search.value,
    selectedSegment.value,
    pagination.value.current_page,
    {
      ...tableFilters.value,
      per_page: perPage.value,
      taskStatus: ['Concluído'],
      show_all: true,
      filter_month: selectedMonth.value,
      filter_year: selectedYear.value
    }
  );
};

const resetFilters = async () => {
  selectedMonth.value = null;
  selectedYear.value = new Date().getFullYear();

  showAllTasks.value = false;
  tableFilters.value = {
    taskStatus: [],
    userOwner: [],
    userResponsible: [],
    priority: [],
    complexity: []
  };

  pagination.value.current_page = 1;

  await tasksStore.getTasks(
    search.value,
    selectedSegment.value,
    1,
    {
      ...tableFilters.value,
      per_page: perPage.value,
      show_all: false
    }
  );
  
};

watch(perPage, async (newPerPage) => {
  try {
    pagination.value.current_page = 1;

    // Atualiza no backend
    await axios.put('/api/users/update-pagination', {
      default_pagination: newPerPage
    });

    // Recarrega os dados com a nova paginação
    await fetchTasks(1);
  } catch (error) {
    console.error('Erro ao salvar preferência de paginação:', error);
  }
});

const applyUserFilters = () => {
  fetchTasks({
    ...tableFilters.value,
    per_page: pagination.value.per_page,
    page: pagination.value.current_page,
  });
};

const onTaskAdded = () => {
  console.log('Evento @add recebido');
  showAddModal.value = false;
  fetchTasks(1);
};

const onTaskEdited = () => {
  isEditing.value = false;
  fetchTasks(pagination.value.current_page); // Mantém a página atual
};

// Adicionar watch para debug do modal
watch(showAddModal, (val) => {
  console.log("Modal visível?", val);
});

</script>

<style scoped>
.d-flex {
  display: flex;
}

.align-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.mr-2 {
  margin-right: 8px;
}

.mr-4 {
  margin-right: 16px;
}

.no-gutters {
  margin-left: 0;
  margin-right: 0;
}

.radio-button {
  margin-top: 24px;
}

.v-switch {
  margin-top: 0;
}

.v-select {
  margin-top: 0;
}

.filter-date-section {
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
}

.ml-auto {
  margin-left: auto;
  margin-right: 16px;
}

.text-caption {
  font-size: 0.75rem;
}

.switch-container {
  display: flex;
  align-items: center;
}

.v-card {
  max-width: 800px;
  width: 100%;
}
</style>