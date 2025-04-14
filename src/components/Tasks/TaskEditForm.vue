<template>
  <div>
    <v-alert v-if="feedbackMessage" color="error" class="mb-2">
      {{ feedbackMessage }}
    </v-alert>

    <v-form @submit.prevent="submit">
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-select
              v-model="segment"
              :error-messages="errors.segment"
              :items="segments"
              label="Segmento"
              item-title="label"
              item-value="value"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="task_type"
              :error-messages="errors.task_type"
              :items="types"
              label="Tipo de chamado"
              item-title="label"
              item-value="value"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="task_code"
              :error-messages="errors.task_code"
              label="Número do chamado"
              variant="outlined"
              color="primary"
              disabled
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="name"
              :error-messages="errors.name"
              label="Título"
              variant="outlined"
              color="primary"
              maxlength="60"
              counter
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="system_screen"
              :error-messages="errors.system_screen"
              label="Tela"
              variant="outlined"
              color="primary"
              maxlength="60"
              counter
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="sequence"
              :error-messages="errors.sequence"
              label="Sequência"
              variant="outlined"
              color="primary"
              maxlength="10"
              counter
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="description"
              :error-messages="errors.description"
              label="Descrição"
              variant="outlined"
              color="primary"
              rows="5"
              maxlength="500"
              counter
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-select
              v-model="owner_id"
              :error-messages="errors.owner_id"
              :items="tasksStore.users"
              label="Solicitante"
              item-title="first_name"
              item-value="id"
              disabled
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="created_at"
              :error-messages="errors.created_at"
              label="Data de Criação"
              variant="outlined"
              type="date"
              disabled
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-select
              v-model="task_status_id"
              :error-messages="errors.task_status_id"
              :items="tasksStore.taskStatus"
              label="Status do Chamado"
              item-title="name"
              item-value="id"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="responsible_id"
              :error-messages="errors.responsible_id"
              :items="tasksStore.users"
              label="Responsável"
              item-title="first_name"
              item-value="id"
              ref="responsibleRef"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="observation"
              :error-messages="errors.observation"
              label="Observação"
              variant="outlined"
              color="primary"
              rows="5"
              maxlength="500"
              counter
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="expected_date"
              :error-messages="errors.expected_date"
              label="Data Esperada"
              variant="outlined"
              type="date"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="finish_date"
              :error-messages="errors.finish_date"
              label="Data de Conclusão"
              variant="outlined"
              type="date"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-select
              v-model="priority_id"
              :error-messages="errors.priority_id"
              :items="tasksStore.priori"
              label="Prioridade"
              item-title="name"
              item-value="id"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-textarea
              v-model="priority_justification"
              :error-messages="errors.priority_justification"
              label="Justificativa da Prioridade"
              variant="outlined"
              color="primary"
              rows="5"
              maxlength="500"
              counter
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-select
              v-model="complexity_id"
              :error-messages="errors.complexity_id"
              :items="tasksStore.complexity"
              label="Complexidade do Chamado"
              item-title="name"
              item-value="id"
              ref="complexityRef"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-textarea
              v-model="complexity_justification"
              :error-messages="errors.complexity_justification"
              label="Justificativa da Complexidade"
              variant="outlined"
              color="primary"
              rows="5"
              ref="complexityJustificationRef"
              maxlength="500"
              counter
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-switch
              v-model="status"
              :label="status ? 'Ativo' : 'Inativo'"
              color="primary"
              inset
            ></v-switch>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-col cols="12" md="auto">
            <v-btn flat text="Cancelar" @click="emit('cancel')" />
          </v-col>
          <v-col cols="12" md="auto">
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
  </div>
</template>


<script setup>
import { useField, useForm } from "vee-validate";
import { object, string, number, date, boolean } from "yup";
import { ref, computed, watch, nextTick } from "vue";
import { useTasksStore } from "@/stores/apps/tasks";
import { format } from 'date-fns';

const emit = defineEmits(["cancel", "edit"]);
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const tasksStore = useTasksStore();

const segments = [
  { label: 'Grãos', value: 1 },
  { label: 'Proteína', value: 2 }
];

const types = [
  { label: "Algo que funcionava, parou de funcionar?", value: 1 },
  { label: "Fazer uma solicitação, algo novo (melhoria)?", value: 2 },
];

const { handleSubmit, errors, isSubmitting, setFieldValue, setErrors } = useForm({
  validationSchema: object({
    segment: number().required().label('Segmento'),
    task_type: number().required().label('Tipo de chamado'),
    task_code: string().required().label('Número do chamado'),
    name: string().required().label('Título'),
    system_screen: string().required().label('Tela'),
    sequence: number().nullable().label('Sequência'),
    description: string().required().label('Descrição'),
    owner_id: number().required().label('Solicitante'),
    responsible_id: number()
      .required('Responsável é obrigatório')
      .typeError('Responsável é obrigatório'),
    task_status_id: number().required().label('Status do Chamado'),
    priority_id: number().required().label('Prioridade do Chamado'),
    complexity_id: number().nullable(),
    observation: string().nullable().label('Observação'),
    created_at: date().nullable().label('Data de Criação'),
    expected_date: date().nullable().label('Data de Criação').transform((value, originalValue) => originalValue === '' ? null : value),
    finish_date: date().nullable().label('Data de Conclusão').transform((value, originalValue) => originalValue === '' ? null : value),
    priority_justification: string().nullable().label('Justificativa da Prioridade'),
    complexity_justification: string().nullable().label('Justificativa da Complexidade'),
    status: boolean().required().label('Status'),
  }),
  initialValues: {
    segment: props.task.segment,
    task_type: props.task.task_type,
    task_code: props.task.task_code,
    name: props.task.name,
    description: props.task.description,
    owner_id: props.task.owner_id,
    responsible_id: props.task.responsible_id,
    task_status_id: props.task.task_status_id,
    system_screen: props.task.system_screen,
    sequence: props.task.sequence,
    observation: props.task.observation,
    priority_id: props.task.priority_id,
    complexity_id: props.task.complexity_id,
    priority_justification: props.task.priority_justification,
    complexity_justification: props.task.complexity_justification,
    finish_date: props.task.finish_date ? props.task.finish_date.split('T')[0] : null,
    expected_date: props.task.expected_date ? props.task.expected_date.split('T')[0] : null,
    created_at: props.task.created_at ? props.task.created_at.split('T')[0] : null,
    status: props.task.status,
  }
});

const refs = {
  complexityRef: ref(null),
  complexityJustificationRef: ref(null),
  responsibleRef: ref(null),
};

const focusFirstErrorField = () => {
  if (errors.responsible_id) {
    nextTick(() => {
      refs.responsibleRef.value.focus();
      refs.responsibleRef.value.$el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  } else if (errors.complexity_id) {
    nextTick(() => {
      refs.complexityRef.value.focus();
      refs.complexityRef.value.$el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  } else if (errors.complexity_justification) {
    nextTick(() => {
      refs.complexityJustificationRef.value.focus();
      refs.complexityJustificationRef.value.$el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
};

watch(errors, (newErrors) => {
  console.log(errors)
  focusFirstErrorField();
});

const submit = handleSubmit(async (payload) => {
  if (!shouldShowPriorityJustification.value) {
    delete payload.priority_justification;
  }

  if (!expected_date.value) {
    payload.expected_date = null;
  }
  if (!finish_date.value) {
    payload.finish_date = null;
  }

  if (!payload.complexity_id) {
    payload.complexity_id = 4;
    payload.complexity_justification = '';
  }

  console.log('Payload being sent to the backend:', payload);
  await tasksStore.updateTask(props.task.id, payload);
  emit("edit");
});

const feedbackMessage = ref("");
const { value: segment } = useField('segment');
const { value: priority_id } = useField('priority_id');
const { value: complexity_id } = useField('complexity_id');
const { value: name } = useField("name");
const { value: task_code } = useField('task_code');
const { value: task_type } = useField('task_type');
const { value: description } = useField("description");
const { value: owner_id } = useField("owner_id");
const { value: responsible_id } = useField("responsible_id");
const { value: task_status_id } = useField("task_status_id");
const { value: system_screen } = useField("system_screen");
const { value: sequence } = useField("sequence");
const { value: observation } = useField("observation");
const { value: priority_justification } = useField("priority_justification");
const { value: complexity_justification } = useField("complexity_justification");
const { value: expected_date } = useField("expected_date");
const { value: finish_date } = useField("finish_date");
const { value: created_at } = useField("created_at");
const { value: status } = useField('status');

const shouldShowPriorityJustification = computed(() => {
  const selectedPriority = tasksStore.priori.find(p => p.id === priority_id.value);
  return selectedPriority && selectedPriority.justify;
});

watch(priority_id, (newVal) => {
  if (!shouldShowPriorityJustification.value) {
    priority_justification.value = '';
    setErrors({
      priority_justification: undefined
    });
  } else {
    setFieldValue('priority_justification', priority_justification.value || '');
  }
});

// Adicionando watch para monitorar mudanças no status
watch(task_status_id, (newStatusId) => {
  // Se o novo status é Concluído (5) ou Cancelado (9) e não tem data de conclusão
  if ((newStatusId === 5 || newStatusId === 9) && !finish_date.value) {
    // Seta a data atual no formato YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];
    finish_date.value = today;
    
    console.log('Status alterado para Concluído/Cancelado. Data de conclusão definida:', today);
  }
});
</script>
