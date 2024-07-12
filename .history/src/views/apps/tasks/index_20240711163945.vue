<template>
  <div>
    <div class="mb-5 pb-5 border-b border-opacity-100">
      <v-row>
        <v-col>
          <h1 class="text-h3">Meus chamados</h1>
        </v-col>
        <v-col class="text-right">
          <v-dialog width="auto">
            <template #activator="{ props: activatorProps }">
              <v-btn flat color="primary" v-bind="activatorProps">Novo Chamado</v-btn>
            </template>
            <template #default="{ isActive }">
              <v-card width="400">
                <v-card-title>Adicionar chamado</v-card-title>
                <v-card-text>
                  <TaskAddForm @add="isActive.value = false" @cancel="isActive.value = false" />
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </div>
    <v-progress-circular v-if="isLoading" :width="3" color="primary" indeterminate />
    <template v-else>
      <TasksTable @openChat="openChatModal" @addNote="openAddNoteModal" />
      <v-dialog v-model="isEditing" width="auto">
        <template #default="{ isActive }">
          <v-card width="400">
            <v-card-title>Editar chamado</v-card-title>
            <v-card-text>
              <TaskEditForm :task="toEdit" @cancel="isActive.value = false" @edit="isActive.value = false" />
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
      <v-dialog v-model="isDeleting" width="auto">
        <template #default="{ isActive }">
          <v-card :prepend-icon="TrashIcon" title="Você tem certeza que deseja deletar este chamado?">
            <template #actions>
              <v-spacer></v-spacer>
              <v-btn @click="isActive.value = false">Cancelar</v-btn>
              <v-btn @click="deleteTask(toDelete)" variant="tonal" color="error" :loading="deleting">Deletar</v-btn>
            </template>
          </v-card>
        </template>
      </v-dialog>
    </template>
    <TaskChat :taskId="selectedTaskId" :showChatModal="showChatModal" :userId="loggedInUserId" @update:showChatModal="showChatModal = $event" />
    <!-- Modal para adicionar nota de trabalho -->
    <v-dialog v-model="showAddNoteModal" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Adicionar Nota de Trabalho</span>
        </v-card-title>
        <v-card-text>
          <TaskChat :taskId="selectedTaskId" :showChatModal="showChatModal" :userId="loggedInUserId" @update:showChatModal="showChatModal = $event" />
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="showAddNoteModal = false">Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="addNote">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { TrashIcon, CircleMinusIcon } from 'vue-tabler-icons';
import { useAsyncState } from '@vueuse/core';
import TasksTable from '@/components/Tasks/TasksTable.vue';
import TaskAddForm from '@/components/Tasks/TaskAddForm.vue';
import { storeToRefs } from 'pinia';
import TaskEditForm from '@/components/Tasks/TaskEditForm.vue';
import TaskChat from '@/components/Tasks/TaskChat.vue';
import { useTasksStore } from '@/stores/apps/tasks';
import { useChatStore } from '@/stores/apps/chats';
import { useMeStore } from "@/stores/me";

const meStore = useMeStore();
const tasksStore = useTasksStore();
const { toEdit, toDelete } = storeToRefs(tasksStore);

const chatStore = useChatStore();
const { messages } = storeToRefs(chatStore);

const { isLoading } = useAsyncState(tasksStore.getTasks());
const { priori } = useAsyncState(tasksStore.getPriorities());
const { complexity } = useAsyncState(tasksStore.getComplexities());
const { tasksStatus } = useAsyncState(tasksStore.getTasksStatus());
const { users } = useAsyncState(tasksStore.getUsers());

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

const showChatModal = ref(false);
const selectedTaskId = ref(null);
const showAddNoteModal = ref(false);
const newNote = ref('');
const loggedInUserId = ref(meStore.user.id);

const openChatModal = (task) => {
  selectedTaskId.value = task.id;
  showChatModal.value = true;
};

const openAddNoteModal = (task) => {
  selectedTaskId.value = task.id;
  showAddNoteModal.value = true;
};

const addNote = async () => {
  await chatStore.addMessage(selectedTaskId.value, newNote.value, loggedInUserId.value);
  newNote.value = '';
  showAddNoteModal.value = false;
};

const isAttachmentsDialogOpen = ref(false);
const taskFiles = ref([]);

const openAttachmentsModal = async (task) => {
  selectedTaskId.value = task.id;
  taskFiles.value = await tasksStore.getTaskFiles(task.id);
  isAttachmentsDialogOpen.value = true;
};

const deleteAttachment = async (fileId) => {
  await tasksStore.deleteTaskFile(fileId);
  taskFiles.value = taskFiles.value.filter(file => file.id !== fileId);
};
</script>
