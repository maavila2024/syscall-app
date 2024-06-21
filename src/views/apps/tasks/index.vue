<!-- <script setup lang="ts">
import { ref } from 'vue';

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import TaskAddForm from '@/components/table/TaskAddForm.vue';
// theme breadcrumb
const page = ref({ title: 'Tasks List' });

const breadcrumbs = ref([
    {
        text: '2 New Task',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-card elevation="10">
        <v-card-text>
            <TaskAddForm />
        </v-card-text>
    </v-card>
</template> -->

<template>
    <!--<BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>-->
    <div>
      <div class="mb-5 pb-5 border-b border-opacity-100">
        <v-row>
          <v-col>
            <h1 class="text-h3">Meus chamados</h1>
          </v-col>
  
          <v-col class="text-right">
            <v-dialog width="auto">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  flat
                  color="primary"
                  v-bind="activatorProps">Novo Chamado
                </v-btn>
              </template>
  
              <template #default="{ isActive }">
                <v-card width="400">
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
      </div>
  
      <v-progress-circular
        v-if="isLoading"
        :width="3"
        color="primary"
        indeterminate
      />
  
      <template v-else>
        <TasksTable/>
  
        <v-dialog
          v-model="isEditing"
          width="auto"
        >
          <template #default="{ isActive }">
            <v-card width="400">
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

        <v-dialog
          v-model="AddChat"
          width="auto"
        >
          <template #default="{ isActive }">
            <v-card width="400">
              <v-card-title>Adicionar Notas de Trabalho</v-card-title>
  
              <v-card-text>
                <TaskAddChatForm
                  :task="toAddChat"
                  @cancel="isActive.value = false"
                  @showChat="isActive.value = false"
                />
              </v-card-text>
            </v-card>
          </template>
        </v-dialog>

        <v-dialog
          v-model="ShowChat"
          width="auto"
        >
          <template #default="{ isActive }">
            <v-card width="400">
              <v-card-title>Consultar Notas de Trabalho</v-card-title>
  
              <v-card-text>
                <TaskShowChatForm
                  :task="toShowChat"
                  @cancel="isActive.value = false"
                  @addChat="isActive.value = false"
                />
              </v-card-text>
            </v-card>
          </template>
        </v-dialog>
  
        <v-dialog
          v-model="isDeleting"
          width="auto"
        >
          <template #default="{ isActive }">
            <v-card
              :prepend-icon="TrashIcon"
              title="Você tem certeza que deseja deletar este chamado?"
            >
              <template #actions>
                <v-spacer></v-spacer>
  
                <v-btn @click="isActive.value = false">
                  Cancelar
                </v-btn>
  
                <v-btn
                  @click="deleteTask(toDelete)"
                  variant="tonal"
                  color="error"
                  :loading="deleting"
                >
                  Deletar
                </v-btn>
              </template>
            </v-card>
          </template>
        </v-dialog>
      </template>
    </div>
  </template>
  
  <script setup lang="ts">
  import {computed, ref} from 'vue';
  import {TrashIcon} from 'vue-tabler-icons'
  import {useAsyncState} from '@vueuse/core';
  import TasksTable from '@/components/Tasks/TasksTable.vue';
  import TaskAddForm from '@/components/Tasks/TaskAddForm.vue';
  import {storeToRefs} from 'pinia';
  import TaskEditForm from '@/components/Tasks/TaskEditForm.vue';
  import TaskAddChatForm from '@/components/Tasks/TaskAddChatForm.vue';
  import TaskShowChatForm from '@/components/Tasks/TaskShowChatForm.vue';
  import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import { useTasksStore } from '@/stores/apps/tasks';

  
  const tasksStore = useTasksStore();
  const {toEdit, toDelete, toShowChat, toAddChat} = storeToRefs(tasksStore)
  
  const {isLoading} = useAsyncState(
    tasksStore.getTasks(),
  )

  const {priori} = useAsyncState(
    tasksStore.getPriorities(),
  )

  const {tasksStatus} = useAsyncState(
    tasksStore.getTasksStatus(),
  )

  const {users} = useAsyncState(
    tasksStore.getUsers(),
  )
  
  const isEditing = computed({
    get() {
      return !!Object.keys(toEdit.value).length
    },
    set(value) {
      if (!value) {
        toEdit.value = {}
      }
    },
  })

  const ShowChat = computed({
    get() {
      return !!Object.keys(toShowChat.value).length
    },
    set(value) {
      if (!value) {
        toShowChat.value = {}
      }
    },
  })
  
  const isDeleting = computed({
    get() {
      return !!Object.keys(toDelete.value).length
    },
    set(value) {
      if (!value) {
        toDelete.value = {}
      }
    },
  })
  
  const deleting = ref(false)
  async function deleteTask(task) {
    deleting.value = true
    await tasksStore.deleteTask(task.id)
    toDelete.value = {}
    deleting.value = false
  }

  const breadcrumbs = ref([
    {
        text: '2 New Task',
        disabled: true,
        href: '#'
    }
]);
  </script>
  