<template>
  <v-alert v-if="feedbackMessage" color="error" class="mb-2">
    {{ feedbackMessage }}
  </v-alert>

  <v-form @submit.prevent="submit">
    <v-container>
      <!-- Primeira linha de campos -->
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="name"
            :error-messages="errors.name"
            label="Nome"
            variant="outlined"
            color="primary"
          />
        </v-col>
      </v-row>

      <!-- Segunda linha de campos -->
      <v-row>
        <v-col cols="12" md="6">
          <v-switch
            v-model="is_default"
            :label="is_default ? 'Padrão' : 'Não é Padrão'"
            color="primary"
            inset
          ></v-switch>
        </v-col>
        <v-col cols="12" md="6">
          <v-switch
            v-model="status"
            :label="status ? 'Ativo' : 'Inativo'"
            color="primary"
            inset
          ></v-switch>
        </v-col>
      </v-row>

      <!-- Terceira linha de campos -->
      <v-row>
        <v-col cols="12">
          <div class="d-flex">Cor do texto:</div>
          <v-color-picker
            v-model="color"
            :swatches="swatches"
            class="ma-2"
            hide-mode-switch
            hide-canvas
            hide-inputs
            hide-sliders
            show-swatches
            :error-messages="errors.color"
          ></v-color-picker>
        </v-col>
      </v-row>

      <!-- Quarta linha de campos -->
      <v-row>
        <v-col cols="12">
          <div class="d-flex">Cor de fundo do texto:</div>
          <v-color-picker
            v-model="bg_color"
            :swatches="swatches"
            class="ma-2"
            hide-mode-switch
            hide-canvas
            hide-inputs
            hide-sliders
            show-swatches
            :error-messages="errors.bg_color"
          ></v-color-picker>
        </v-col>
      </v-row>

      <!-- Botões de ação -->
      <v-row justify="end">
        <v-col cols="auto">
          <v-btn flat text="Cancelar" @click="emit('cancel')" />
        </v-col>
        <v-col cols="auto">
          <v-btn
            type="submit"
            color="primary"
            flat
            :loading="isSubmitting"
            text="Adicionar"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';
import { object, string, boolean } from 'yup';
import { ref } from 'vue';
import { useTasksStatusStore } from '@/stores/apps/tasksStatus';

const tasksStatusStore = useTasksStatusStore();

const emit = defineEmits(['cancel', 'add']);

const schema = object({
  name: string().required().label('Nome'),
  is_default: boolean().required().label('Padrão'),
  status: boolean().required().label('Status'),
  color: string().label('Cor do texto'),
  bg_color: string().label('Cor de fundo do texto')
});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    is_default: false,
    status: true,
    color: '#cecece',
    bg_color: '#cecece'
  }
});

const submit = handleSubmit(async (payload) => {
  await tasksStatusStore.storeTaskStatus(payload);
  emit('add');
});

const feedbackMessage = ref('');
const { value: name } = useField('name');
const { value: is_default } = useField('is_default');
const { value: status } = useField('status');
const { value: color } = useField('color');
const { value: bg_color } = useField('bg_color');

const swatches = [
  ['#F44336', '#E91E63', '#9C27B0', '#673AB7'], 
  ['#3F51B5', '#2196F3', '#03A9F4', '#00BCD4'], 
  ['#009688', '#4CAF50', '#8BC34A', '#CDDC39'], 
   
  ['#FFFFFF', '#F5F5F5', '#E0E0E0', '#BDBDBD']  
];
</script>
