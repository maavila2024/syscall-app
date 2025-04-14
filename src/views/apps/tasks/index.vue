<template>
  <div>
    <div class="mb-5 pb-5 border-b border-opacity-100">
      <v-row align="center" justify="space-between" class="mb-4">
        <v-col cols="12" lg="4" md="4">
          <v-text-field
            density="compact"
            v-model="search"
            label="Pesquisar Chamados"
            append-inner-icon="mdi-magnify"
            hide-details
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="2" md="2" class="text-right">
          <v-dialog width="800" persistent>
            <template #activator="{ props: activatorProps }">
              <v-btn flat color="primary" v-bind="activatorProps"
                >Novo Chamado</v-btn
              >
            </template>
            <template #default="{ isActive }">
              <v-card width="800">
                <v-card-title>Adicionar chamado</v-card-title>
                <v-card-text>
                  <TaskAddForm
                    @add="isActive.value = false"
                    @cancel="isActive.value = false"
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
          <v-switch
            v-model="showAllTasks"
            label="Mostrar Todos Chamados"
            color="primary"
            hide-details
            class="mr-4"
            @change="handleShowAllChange"
          ></v-switch>

          <v-select
            v-model="selectedMonth"
            :items="months"
            label="Mês"
            hide-details
            class="mr-2"
            style="max-width: 150px"
          ></v-select>

          <v-select
            v-model="selectedYear"
            :items="years"
            label="Ano"
            hide-details
            class="mr-4"
            style="max-width: 100px"
          ></v-select>

          <v-btn 
            color="primary" 
            @click="applyDateFilter"
            :disabled="!selectedMonth || !selectedYear"
          >
            Filtrar por Data
          </v-btn>
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
        <template #default="{ isActive }">
          <v-card width="800">
            <v-card-title>Editar chamado</v-card-title>
            <v-card-text>
              <TaskEditForm
                :task="toEdit"
                @cancel="isActive.value = false"
                @edit="isActive.value = false"
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
const { pagination } = storeToRefs(tasksStore);
const { toShow, toEdit, toDelete } = storeToRefs(tasksStore);

const chatStore = useChatStore();
const { messages } = storeToRefs(chatStore);

const { isLoading } = useAsyncState(tasksStore.getTasks());
const { priori } = useAsyncState(tasksStore.getPriorities());
const { complexity } = useAsyncState(tasksStore.getComplexities());
const { tasksStatus } = useAsyncState(tasksStore.getTasksStatus());
const { users } = useAsyncState(tasksStore.getUsers());
const selectedFilters = ref({});

const isEditing = computed({
  get() {
    return !!Object.keys(toEdit.value).length;
  },
  set(value) {
    if (!value) {
      toEdit.value = {};
    }
  },
});

const isShowing = computed({
  get() {
    return !!Object.keys(toShow.value).length;
  },
  set(value) {
    if (!value) {
      toShow.value = {};
    }
  },
});

const isDeleting = computed({
  get() {
    return !!Object.keys(toDelete.value).length;
  },
  set(value) {
    if (!value) {
      toDelete.value = {};
    }
  },
});

const deleting = ref(false);
async function deleteTask(task) {
  deleting.value = true;
  await tasksStore.deleteTask(task.id);
  toDelete.value = {};
  deleting.value = false;
}

function onPageChange(page) {
  console.log("Page selected:", page);  
  fetchTasksDebounced(); // Chama a função para buscar as tarefas
}

const showChatModal = ref(false);
const selectedTaskId = ref(0); // Inicialize com um valor numérico
const showAddNoteModal = ref(false);
const newNote = ref("");
const loggedInUserId = ref(meStore.user.id);

const openChatModal = (task) => {
  if (task && task.id) {
    selectedTaskId.value = task.id;
    showChatModal.value = true;
  }
};

const openAddNoteModal = (task) => {
  if (task && task.id) {
    selectedTaskId.value = task.id;
    showAddNoteModal.value = true;
  }
};

const addNote = async () => {
  await chatStore.addMessage(
    selectedTaskId.value,
    newNote.value,
    loggedInUserId.value
  );
  newNote.value = "";
  showAddNoteModal.value = false;
};

const showAttachmentsModal = ref(false);

const openAttachmentsModal = (task) => {
  if (task && task.id) {
    selectedTaskId.value = task.id;
    showAttachmentsModal.value = true;
  }
};

const search = ref("");
const isSpecificSearch = ref(false);
const selectedSegment = ref(meStore.user?.default_segment || "0");

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
  console.log("Filters received:", newFilters); 
  selectedPriorities.value = newFilters.priority || null;
  selectedComplexities.value = newFilters.complexity || null;
  selectedStatuses.value = newFilters.taskStatus || null;
  selectedResponsibles.value = newFilters.userResponsible || null;
  selectedOwners.value = newFilters.userOwner || null;

  console.log("Updated Filters:", filters.value); // Log dos filtros atualizados
  fetchTasksDebounced(pagination.value.current_page);
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
    fetchTasksDebounced(pagination.value.current_page);
  } catch (error) {
    console.error("Failed to update user segment:", error);
  }
};

const handleShowAllChange = async (value) => {
  await tasksStore.getTasks(
    search.value,
    selectedSegment.value,
    pagination.value.current_page,
    {
      ...filters.value,
      show_all: value
    }
  );
};

const fetchTasksDebounced = debounce(async () => {
  const page = pagination.value.current_page;
  const query = search.value || "";
  
  await tasksStore.getTasks(query, selectedSegment.value, page, {
    ...filters.value,
    show_all: showAllTasks.value
  });
}, 2000);

watch(
  [search, selectedSegment, filters],
  () => {
    console.log("Filters or page changed, fetching tasks...");
    fetchTasksDebounced(pagination.value.current_page);
  },
  { deep: true } // Monitora alterações profundas no objeto `filters`
);

watch(() => pagination.value.current_page, () => {
  fetchTasksDebounced();
});

onMounted(() => {
  const query = route.query.search || "";
  if (query) {
    isSpecificSearch.value = true;
    tasksStore.getTasks(query, selectedSegment.value, pagination.value.current_page, filters.value).then(() => {
      isSpecificSearch.value = false;
    });
  } else {
    fetchTasksDebounced(pagination.value.current_page);
  }
});

watch(search, (newSearch) => {
  tasksStore.getTasks(newSearch);
});

const handlePageChange = async (page) => {
  await tasksStore.getTasks(
    search.value, 
    selectedSegment.value, 
    page, 
    filters.value
  );
};

// Array de meses
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

// Array de anos (dinâmico)
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
      show_all: true, // Sempre mostra todos quando filtrando por data
      filter_month: selectedMonth.value,
      filter_year: selectedYear.value
    }
  );
};
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
</style>
