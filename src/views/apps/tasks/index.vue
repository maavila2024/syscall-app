<script setup>
import { computed, ref, watch, onMounted } from "vue";
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

const route = useRoute();
const meStore = useMeStore();
const tasksStore = useTasksStore();
const { tasks, pagination, toShow, toEdit, toDelete } = storeToRefs(tasksStore);

const chatStore = useChatStore();
const { messages } = storeToRefs(chatStore);

const isLoading = ref(false);
const isReadyToFetch = ref(false);

const { priori } = useAsyncState(tasksStore.getPriorities());
const { complexity } = useAsyncState(tasksStore.getComplexities());
const { tasksStatus } = useAsyncState(tasksStore.getTasksStatus());
const { users } = useAsyncState(tasksStore.getUsers());

const isEditing = computed({
  get: () => !!Object.keys(toEdit.value).length,
  set: (value) => { if (!value) toEdit.value = {}; },
});
const isShowing = computed({
  get: () => !!Object.keys(toShow.value).length,
  set: (value) => { if (!value) toShow.value = {}; },
});
const isDeleting = computed({
  get: () => !!Object.keys(toDelete.value).length,
  set: (value) => { if (!value) toDelete.value = {}; },
});

const deleting = ref(false);
async function deleteTask(task) {
  deleting.value = true;
  await tasksStore.deleteTask(task.id);
  toDelete.value = {};
  deleting.value = false;
}

const showChatModal = ref(false);
const selectedTaskId = ref(0);
const showAddNoteModal = ref(false);
const newNote = ref("");
const loggedInUserId = ref(null);

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
const addNote = async () => {
  await chatStore.addMessage(selectedTaskId.value, newNote.value, loggedInUserId.value);
  newNote.value = "";
  showAddNoteModal.value = false;
};

const showAttachmentsModal = ref(false);
const openAttachmentsModal = (task) => {
  if (task?.id) {
    selectedTaskId.value = task.id;
    showAttachmentsModal.value = true;
  }
};

const search = ref("");
const isSpecificSearch = ref(false);
const selectedSegment = ref("0");

const selectedPriorities = ref(null);
const selectedComplexities = ref(null);
const selectedStatuses = ref(null);
const selectedResponsibles = ref(null);
const selectedOwners = ref(null);

const filters = computed(() => ({
  priority: selectedPriorities.value || null,
  complexity: selectedComplexities.value || null,
  taskStatus: selectedStatuses.value || null,
  userResponsible: selectedResponsibles.value || null,
  userOwner: selectedOwners.value || null,
}));

const showAllTasks = ref(false);

const applyFilters = (newFilters) => {
  selectedPriorities.value = newFilters.priority || null;
  selectedComplexities.value = newFilters.complexity || null;
  selectedStatuses.value = newFilters.taskStatus || null;
  selectedResponsibles.value = newFilters.userResponsible || null;
  selectedOwners.value = newFilters.userOwner || null;
  if (isReadyToFetch.value) fetchTasksDebounced(pagination.value.current_page);
};

function debounce(fn, delay) {
  let timeoutID;
  return function (...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => fn(...args), delay);
  };
}

const updateUserSegment = async () => {
  try {
    await meStore.updateUserSegment(selectedSegment.value);
    if (isReadyToFetch.value) fetchTasksDebounced(pagination.value.current_page);
  } catch (error) {
    console.error("Failed to update user segment:", error);
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
        ...filters.value,
        show_all: value,
        per_page: perPage.value,
      }
    );
    if (isReadyToFetch.value) fetchTasksDebounced();
  } finally {
    isLoading.value = false;
  }
};

const perPage = ref(5);

const fetchTasksDebounced = debounce(async () => {
  if (!isReadyToFetch.value) return;
  const page = pagination.value.current_page;
  const query = search.value || "";
  await tasksStore.getTasks(query, selectedSegment.value, page, {
    ...filters.value,
    show_all: showAllTasks.value,
    per_page: perPage.value,
  });
}, 2000);

watch([search, selectedSegment, filters], () => {
  if (isReadyToFetch.value) fetchTasksDebounced(pagination.value.current_page);
}, { deep: true });

watch(() => pagination.value.current_page, () => {
  if (isReadyToFetch.value) fetchTasksDebounced();
});

onMounted(async () => {
  await meStore.getMe();
  if (meStore.user?.default_pagination) {
    perPage.value = meStore.user.default_pagination;
  }
  loggedInUserId.value = meStore.user?.id;
  selectedSegment.value = meStore.user?.default_segment || "0";
  isReadyToFetch.value = true;

  const query = route.query.search || "";
  if (query) {
    isSpecificSearch.value = true;
    await tasksStore.getTasks(query, selectedSegment.value, pagination.value.current_page, {
      ...filters.value,
      per_page: perPage.value,
    });
    isSpecificSearch.value = false;
  } else {
    await tasksStore.getTasks(
      search.value,
      selectedSegment.value,
      pagination.value.current_page,
      {
        ...filters.value,
        per_page: perPage.value,
      }
    );
  }
});

watch(search, (newSearch) => {
  if (isReadyToFetch.value) tasksStore.getTasks(newSearch);
});

const handlePageChange = async (page) => {
  await tasksStore.getTasks(
    search.value,
    selectedSegment.value,
    page,
    {
      ...filters.value,
      per_page: perPage.value,
    }
  );
};

const paginationOptions = [
  { title: '5 registros', value: 5 },
  { title: '10 registros', value: 10 },
  { title: '15 registros', value: 15 }
];

const handlePerPageChange = async (value) => {
  try {
    await meStore.updateUserPreference({ default_pagination: value });
    perPage.value = value;
    await tasksStore.getTasks(
      search.value,
      selectedSegment.value,
      1,
      {
        ...filters.value,
        per_page: value,
      }
    );
  } catch (error) {
    console.error('Erro ao atualizar paginação:', error);
  }
};

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
  { title: 'Dezembro', value: 12 },
];

const years = [2024, 2025].map(year => ({ title: year.toString(), value: year }));
const selectedMonth = ref(null);
const selectedYear = ref(new Date().getFullYear());

const applyDateFilter = async () => {
  if (!selectedMonth.value || !selectedYear.value) return;
  await tasksStore.getTasks(
    search.value,
    selectedSegment.value,
    pagination.value.current_page,
    {
      ...filters.value,
      show_all: true,
      filter_month: selectedMonth.value,
      filter_year: selectedYear.value,
      per_page: perPage.value,
    }
  );
};
</script>

<template>
  <v-card class="pa-4">
    <div class="d-flex justify-space-between align-center mb-4">
      <div class="d-flex align-center">
        <div class="me-4">
          <v-text-field
            v-model="search"
            label="Pesquisar Chamados"
            variant="outlined"
            density="compact"
            hide-details
            class="custom-search-field"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </div>
        <div class="me-4">
          <v-radio-group v-model="selectedSegment" row @change="updateUserSegment">
            <v-radio label="Todos" value="0"></v-radio>
            <v-radio label="Grãos" value="1"></v-radio>
            <v-radio label="Proteína" value="2"></v-radio>
          </v-radio-group>
        </div>
      </div>

      <div class="d-flex align-center">
        <!-- Quantidade de registros por página -->
        <v-select
          v-model="perPage"
          :items="paginationOptions"
          item-title="title"
          item-value="value"
          label="Quantidade de chamados por página"
          variant="outlined"
          density="compact"
          hide-details
          class="me-4"
          style="width: 150px"
          @update:model-value="handlePerPageChange"
        ></v-select>

        <!-- Filtro por data -->
        <div class="d-flex align-center me-4">
          <v-select
            v-model="selectedMonth"
            :items="months"
            item-title="title"
            item-value="value"
            label="Mês"
            variant="outlined"
            density="compact"
            hide-details
            class="me-2"
            style="width: 150px"
          ></v-select>

          <v-select
            v-model="selectedYear"
            :items="years"
            item-title="title"
            item-value="value"
            label="Ano"
            variant="outlined"
            density="compact"
            hide-details
            class="me-2"
            style="width: 120px"
          ></v-select>

          <v-btn
            color="primary"
            variant="tonal"
            size="small"
            @click="applyDateFilter"
          >
            Filtrar
          </v-btn>
        </div>

        <!-- Toggle para mostrar todos os chamados -->
        <v-switch
          v-model="showAllTasks"
          label="Mostrar Todos Chamados"
          hide-details
          class="me-4"
          @change="handleShowAllChange"
        ></v-switch>

        <v-btn
          color="primary"
          variant="flat"
          size="small"
          to="/apps/tasks/add"
          class="ml-2"
        >
          Novo Chamado
        </v-btn>
      </div>
    </div>

    <TasksTable
      :tasks="tasks"
      :pagination="pagination"
      @update:filters="applyFilters"
      @update:page="handlePageChange"
      @openChat="openChatModal"
      @openAttachments="openAttachmentsModal"
    />

    <!-- Modais -->
    <v-dialog v-model="showChatModal" width="800">
      <TaskChat
        :task-id="selectedTaskId"
        :messages="messages"
        @close="showChatModal = false"
      />
    </v-dialog>

    <v-dialog v-model="showAttachmentsModal" width="800">
      <TaskAttachments
        :task-id="selectedTaskId"
        @close="showAttachmentsModal = false"
      />
    </v-dialog>

    <v-dialog v-model="isEditing" width="800">
      <TaskEditForm
        :task="toEdit"
        @close="isEditing = false"
        @saved="isEditing = false"
      />
    </v-dialog>

    <v-dialog v-model="isShowing" width="800">
      <TaskShowForm :task="toShow" @close="isShowing = false" />
    </v-dialog>

    <v-dialog v-model="isDeleting" width="500">
      <v-card>
        <v-card-text class="pa-6">
          <p class="text-h6 mb-2">Confirmar exclusão</p>
          <p>Deseja realmente excluir este chamado?</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            variant="text"
            :loading="deleting"
            @click="deleteTask(toDelete)"
          >
            Excluir
          </v-btn>
          <v-btn color="default" variant="text" @click="isDeleting = false">
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>