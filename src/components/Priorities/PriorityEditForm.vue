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
        <v-col cols="12" md="6">
          <v-switch
            v-model="justify"
            :label="justify ? 'Justificar' : 'Não justificar'"
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
import { usePrioritiesStore } from '@/stores/apps/priorities';

const emit = defineEmits(['cancel', 'edit']);
const props = defineProps({
  priority: {
    type: Object,
    required: true
  },
});

const isDialogOpen = ref(true);

const prioritiesStore = usePrioritiesStore();

const schema = object({
  name: string().required().label('Nome'),
  is_default: boolean().required().label('Padrão'),
  status: boolean().required().label('Status'),
  justify: boolean().required().label('Justificar'),
  color: string().label('Cor do texto'),
  bg_color: string().label('Cor de fundo do texto')
});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    name: props.priority.name,
    is_default: props.priority.is_default,
    status: props.priority.status,
    justify: props.priority.justify,
    color: props.priority.color,
    bg_color: props.priority.bg_color,
  }
});

const submit = handleSubmit(async (payload) => {
  await prioritiesStore.updatePriority(props.priority.id, payload);
  emit('edit');
  isDialogOpen.value = false;
});

const feedbackMessage = ref('');
const { value: name } = useField('name');
const { value: is_default } = useField('is_default');
const { value: status } = useField('status');
const { value: justify } = useField('justify');
const { value: color } = useField('color');
const { value: bg_color } = useField('bg_color');

const swatches = [
  ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'],
  ['#FF00FF', '#00FFFF', '#800000', '#808000'],
  ['#800080', '#008080', '#000080', '#FFA500'],
  ['#A52A2A', '#008000', '#FFD700', '#4B0082']
];
</script>
