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
            text="Editar"
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

const emit = defineEmits(['cancel', 'edit']);
const props = defineProps({
  taskStatus: {
    type: Object,
    required: true
  }
});

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
    name: props.taskStatus.name,
    is_default: props.taskStatus.is_default,
    status: props.taskStatus.status,
    color: props.taskStatus.color,
    bg_color: props.taskStatus.bg_color,
  }
});

const submit = handleSubmit(async (payload) => {
  await tasksStatusStore.updateTaskStatus(props.taskStatus.id, payload);
  emit('edit');
});

const feedbackMessage = ref('');
const { value: name } = useField('name');
const { value: is_default } = useField('is_default');
const { value: status } = useField('status');
const { value: color } = useField('color');
const { value: bg_color } = useField('bg_color');

const swatches = [
  ['#F44336', '#E91E63', '#9C27B0', '#673AB7'], // Red, Pink, Purple, Deep Purple
  ['#3F51B5', '#2196F3', '#03A9F4', '#00BCD4'], // Indigo, Blue, Light Blue, Cyan
  ['#009688', '#4CAF50', '#8BC34A', '#CDDC39'], // Teal, Green, Light Green, Lime
  ['#FFEB3B', '#FFC107', '#FF9800', '#FF5722'], // Yellow, Amber, Orange, Deep Orange
  ['#795548', '#9E9E9E', '#607D8B', '#000000'], // Brown, Grey, Blue Grey, Black
  ['#FFFFFF', '#F5F5F5', '#E0E0E0', '#BDBDBD'], // White, Light Grey Variants
  ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9'], // Light Red, Light Pink, Light Purple, Light Deep Purple
  ['#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2EBF2'], // Light Indigo, Light Blue, Light Cyan, Light Teal
  ['#B2DFDB', '#C8E6C9', '#DCEDC8', '#F0F4C3'], // Light Teal, Light Green, Light Lime, Light Yellow
  ['#FFF9C4', '#FFECB3', '#FFE0B2', '#FFCCBC'], // Light Amber, Light Orange, Light Deep Orange
  ['#D7CCC8', '#CFD8DC', '#FF8A80', '#FF80AB'], // Light Brown, Light Blue Grey, Light Red Accent, Light Pink Accent
  ['#EA80FC', '#B388FF', '#8C9EFF', '#82B1FF'], // Purple Accent, Deep Purple Accent, Indigo Accent, Blue Accent
  ['#80D8FF', '#84FFFF', '#A7FFEB', '#B9F6CA'], // Light Blue Accent, Cyan Accent, Teal Accent, Green Accent
  ['#CCFF90', '#F4FF81', '#FFFF8D', '#FFE57F'], // Lime Accent, Yellow Accent, Amber Accent, Orange Accent
  ['#FFD180', '#FF9E80', '#BDBDBD', '#616161']  // Deep Orange Accent, Light Grey Variants, Dark Grey
];
</script>
