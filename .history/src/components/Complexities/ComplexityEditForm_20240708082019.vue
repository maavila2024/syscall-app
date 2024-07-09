<template>
  <v-alert
    v-if="feedbackMessage"
    color="error"
    class="mb-2">
    {{ feedbackMessage }}
  </v-alert>

  <v-form @submit.prevent="submit">
    <v-container>
      <!-- Primeira linha de campos -->
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="name"
            :error-messages="errors.name"
            label="Nome"
            variant="outlined"
            color="primary"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-switch
            v-model="is_default"
            :label="is_default ? 'Padrão' : 'Não é Padrão'"
            color="primary"
            inset
          ></v-switch>
        </v-col>
      </v-row>

      <!-- Segunda linha de campos -->
      <v-row>
        <v-col cols="12" md="6">
          <v-switch
            v-model="status"
            :label="status ? 'Ativo' : 'Inativo'"
            color="primary"
            inset
          ></v-switch>
        </v-col>
      </v-row>

      <!-- Botões de ação -->
      <v-row justify="end">
        <v-col cols="auto">
          <v-btn flat @click="emit('cancel')">Cancelar</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            type="submit"
            color="primary"
            flat
            :loading="isSubmitting"
          >Editar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';
import { object, string, boolean } from 'yup';
import { ref } from 'vue';
import { useComplexitiesStore } from '@/stores/apps/complexities';

const emit = defineEmits(['cancel', 'edit']);
const props = defineProps({
  complexity: {
    type: Object,
    required: true
  },
});

const isDialogOpen = ref(true);

const complexitiesStore = useComplexitiesStore();

const schema = object({
  name: string().required().label('Nome'),
  is_default: boolean().required().label('Padrão'),
  status: boolean().required().label('Status'),
});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    name: props.complexity.name,
    is_default: props.complexity.is_default,
    status: props.complexity.status,
  }
});

const submit = handleSubmit(async (payload) => {
  await complexitiesStore.updateComplexity(props.complexity.id, payload);
  emit('edit');
  isDialogOpen.value = false;
});

const feedbackMessage = ref('');
const { value: name } = useField('name');
const { value: is_default } = useField('is_default');
const { value: status } = useField('status');

</script>
