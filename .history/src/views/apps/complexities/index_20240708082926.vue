<!-- <script setup lang="ts">
import { ref } from 'vue';

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import ComplexityAddForm from '@/components/table/ComplexityAddForm.vue';
// theme breadcrumb
const page = ref({ title: 'Complexities List' });

const breadcrumbs = ref([
    {
        text: '2 New Complexity',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-card elevation="10">
        <v-card-text>
            <ComplexityAddForm />
        </v-card-text>
    </v-card>
</template> -->

<template>
    <!--<BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>-->
    <div>
      <div class="mb-5 pb-5 border-b border-opacity-100">
        <v-row>
          <v-col>
            <h1 class="text-h3">Complexidade dos chamados</h1>
          </v-col>
  
          <v-col class="text-right">
            <v-dialog width="auto">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  flat
                  color="primary"
                  v-bind="activatorProps">Nova complexidade
                </v-btn>
              </template>
  
              <template #default="{ isActive }">
                <v-card width="400">
                  <v-card-title>Adicionar complexidade</v-card-title>
  
                  <v-card-text>
                    <ComplexityAddForm
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
        <ComplexitiesTable/>
  
        <v-dialog
          v-model="isEditing"
          width="auto"
        >
          <template #default="{ isActive }">
            <v-card width="400">
              <v-card-title>Editar complexidade</v-card-title>
  
              <v-card-text>
                <ComplexityEditForm
                  :complexity="toEdit"
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
              title="Você tem certeza que deseja deletar esta complexidade?"
            >
              <template #actions>
                <v-spacer></v-spacer>
  
                <v-btn @click="isActive.value = false">
                  Cancelar
                </v-btn>
  
                <v-btn
                  @click="deleteComplexity(toDelete)"
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
  import { useComplexitiesStore } from '@/stores/apps/complexities'; 
  import {useAsyncState} from '@vueuse/core';
  import ComplexitiesTable from '@/components/Complexities/ComplexitiesTable.vue';
  import ComplexityAddForm from '@/components/Complexities/ComplexityAddForm.vue';
  import {storeToRefs} from 'pinia';
  import ComplexityEditForm from '@/components/Complexities/ComplexityEditForm.vue';
  import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

  
  const complexitiesStore = useComplexitiesStore();
  const {toEdit, toDelete} = storeToRefs(complexitiesStore)
  
  const {isLoading} = useAsyncState(
    complexitiesStore.getComplexities(),
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
  async function deleteComplexity(complexity) {
    deleting.value = true
    await complexitiesStore.deleteComplexity(complexity.id)
    toDelete.value = {}
    deleting.value = false
  }

  const breadcrumbs = ref([
    {
        text: '2 New Complexity',
        disabled: true,
        href: '#'
    }
]);
  </script>
  