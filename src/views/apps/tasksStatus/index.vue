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
          <h1 class="text-h3">Status dos Chamados</h1>
        </v-col>

        <v-col class="text-right">
          <v-dialog width="auto">
            <template #activator="{ props: activatorProps }">
              <v-btn
                flat
                color="primary"
                v-bind="activatorProps">Novo status
              </v-btn>
            </template>

            <template #default="{ isActive }">
              <v-card width="400">
                <v-card-title>Adicionar status</v-card-title>

                <v-card-text>
                  <TaskStatusAddForm
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
      <TasksStatusTable/>

      <v-dialog
        v-model="isEditing"
        width="auto"
      >
        <template #default="{ isActive }">
          <v-card width="400">
            <v-card-title>Editar status</v-card-title>

            <v-card-text>
              <TaskStatusEditForm
                :taskStatus="toEdit"
                @cancel="isActive.value = false"
                @edit="isActive.value = false"
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
            title="Você tem certeza que deseja deletar este status?"
          >
            <template #actions>
              <v-spacer></v-spacer>

              <v-btn @click="isActive.value = false">
                Cancelar
              </v-btn>

              <v-btn
                @click="deleteTaskStatus(toDelete)"
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
import TasksStatusTable from '@/components/TasksStatus/TasksStatusTable.vue';
import TaskStatusAddForm from '@/components/TasksStatus/TaskStatusAddForm.vue';
import {storeToRefs} from 'pinia';
import TaskStatusEditForm from '@/components/TasksStatus/TaskStatusEditForm.vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import { useTasksStatusStore } from '@/stores/apps/tasksStatus';

const tasksStatusStore = useTasksStatusStore();
const {toEdit, toDelete} = storeToRefs(tasksStatusStore)

const {isLoading} = useAsyncState(
  tasksStatusStore.getTasksStatus(),
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
async function deleteTaskStatus(taskStatus) {
  deleting.value = true
  await tasksStatusStore.deleteTaskStatus(taskStatus.id)
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
