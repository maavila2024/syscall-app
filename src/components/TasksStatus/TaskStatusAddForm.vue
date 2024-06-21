<template>
  <v-alert
    v-if="feedbackMessage"
    color="error"
    class="mb-2">
    {{ feedbackMessage }}
  </v-alert>

  <v-form @submit.prevent="submit">
    <v-text-field
      v-model="name"
      :error-messages="errors.name"
      label="Nome"
      variant="outlined"
      color="primary"
    />
    <v-switch v-model="is_default" :label="is_default ? 'Padrão' : 'Não é Padrão'" color="primary" inset></v-switch>

    <v-switch  v-model="status" :label="status ? 'Ativo' : 'Inativo'" color="primary" inset></v-switch>
    <div class="d-flex ">
      Cor do texto:  
    </div>  
    <v-color-picker
      v-model="color"
      :swatches="swatches"
      class="ma-2"
      hideModeSwitch
      hide-canvas
      hide-inputs
      hide-mode-switch
      hide-sliders
      show-swatches
      :error-messages="errors.color"
    >
    </v-color-picker>
    <v-divider :thickness="20" color="error"></v-divider>
    <div class="d-flex ">
      Cor de fundo do texto:  
    </div>  
    <v-color-picker
      v-model="bg_color"
      :swatches="swatches"
      class="ma-2"
      hideModeSwitch
      hide-canvas
      hide-inputs
      hide-mode-switch
      hide-sliders
      show-swatches
      :error-messages="errors.bg_color"
    >
    </v-color-picker>
   
    <div class="text-right">
      <v-btn
        flat
        text="Cancelar"
        @click="emit('cancel')"
      />

      <v-btn
        type="submit"
        color="primary"
        flat
        :loading="isSubmitting"
        text="Adicionar"
      />
    </div>
  </v-form>
</template>

<script setup>
import {useField, useForm} from 'vee-validate';
import {object, string} from 'yup';
import {ref} from 'vue';
import {useTasksStatusStore} from '@/stores/apps/tasksStatus';

const tasksStatusStore = useTasksStatusStore()

const emit = defineEmits(['cancel', 'add'])

const schema = object({
  name: string().required().label('Nome'),
  is_default: string().required().label('Padrão'),
  status: string().required().label('Status'),
  color: string().label('Cor do texto'),
  bg_color: string().label('Cor de fundo do texto')
})

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    is_default: (false),
    status: (true),
    color: '#cecece',
    bg_color: '#cecece'
  }
})

const submit = handleSubmit(async (payload) => {
  await tasksStatusStore.storeTaskStatus(payload)
  emit('add')
})

const feedbackMessage = ref('')
const {value: name} = useField('name')
const {value: is_default} = useField('is_default')
const {value: status} = useField('status')
const {value: color} = useField('color')
const {value: bg_color} = useField('bg_color')
</script>
