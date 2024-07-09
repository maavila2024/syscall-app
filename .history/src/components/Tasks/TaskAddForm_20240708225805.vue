<template>
  <div>
    <v-alert v-if="feedbackMessage" color="error" class="mb-2">
      {{ feedbackMessage }}
    </v-alert>

    <v-form @submit.prevent="submit">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-select
              v-model="segment"
              :error-messages="errors.segment"
              :items="segments"
              label="Segmento"
              item-title="label"
              item-value="value"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
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
          <v-col cols="12">
            <v-text-field
              v-model="name"
              :error-messages="errors.name"
              label="Título"
              variant="outlined"
              color="primary"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="system_screen"
              :error-messages="errors.system_screen"
              label="Tela"
              variant="outlined"
              color="primary"
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
            ></v-textarea>
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
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="12">
            <v-select
              v-model="form.priority_id"
              :error-messages="errors.priority_id"
              :items="tasksStore.priori"
              label="Prioridade"
              item-title="name"
              item-value="id"
            ></v-select>
          </v-col>
        </v-row>
        <v-row v-if="shouldShowPriorityJustification">
          <v-col cols="12">
            <v-textarea
              v-model="form.priority_justification"
              :error-messages="errors.priority_justification"
              label="Justificativa da Prioridade"
              variant="outlined"
              color="primary"
              rows="5"
            ></v-textarea>
          </v-col>
        </v-row>

        <!-- Botões de ação -->
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
              text="Adicionar"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script setup>
import { useField, useForm } from "vee-validate";
import { object, string, number, boolean } from "yup";
import { ref, computed, watch, onMounted } from "vue";
import { useTasksStore } from "@/stores/apps/tasks";
import { useMeStore } from "@/stores/me";

const meStore = useMeStore();
const tasksStore = useTasksStore();

const emit = defineEmits(["cancel", "add"]);

const segments = [
  { label: "Grãos", value: 1 },
  { label: "Proteína", value: 2 },
];

const types = [
  { label: "É uma melhoria ?", value: 1 },
  { label: "É algo novo ?", value: 2 },
];

const defaultPriority = computed(() => {
  return tasksStore.priori.find((p) => p.is_default)?.id || null;
});

const defaultTaskStatus = computed(() => {
  return tasksStore.taskStatus.find((s) => s.is_default)?.id || null;
});

// Inicializar valores dos campos
const { value: segment } = useField("segment", 2);

const initialValues = {
  segment: 1,
  task_type: "",
  name: "",
  system_screen: "",
  description: "",
  owner_id: meStore.user.id,
  responsible_id: "",
  task_status_id: defaultTaskStatus.value,
  priority_id: defaultPriority.value,
  observation: "",
  created_at: "",
  expected_date: "",
  finish_date: "",
  priority_justification: "",
  status: true,
};

const { handleSubmit, errors, isSubmitting, values: form } = useForm({
  validationSchema: object({
    segment: number().required().label("Segmento"),
    task_type: number().required().label("Tipo de chamado"),
    name: string().required().label("Título"),
    system_screen: string().required().label("Tela"),
    description: string().required().label("Descrição"),
    owner_id: number().required().label("Solicitante"),
    task_status_id: number().required().label("Status do Chamado"),
    priority_id: number().required().label("Prioridade"),
    observation: string().nullable().label("Observação"),
    priority_justification: shouldShowPriorityJustification.value
      ? string().required().label("Justificativa da Prioridade")
      : string().label("Justificativa da Prioridade"),
    status: boolean().required().label("Status"),
  }),
  initialValues,
});

const submit = handleSubmit(async (payload) => {
  console.log("Payload antes de enviar:", payload);
  console.log("Valor de priority_id no formulário:", form.priority_id);
  await tasksStore.storeTask(payload);
  emit("add");
});

const feedbackMessage = ref("");
const { value: priority_id } = useField("priority_id");
const shouldShowPriorityJustification = computed(() => {
  const selectedPriority = tasksStore.priori.find(
    (p) => p.id === priority_id.value
  );
  return selectedPriority && selectedPriority.justify;
});

onMounted(() => {
  if (defaultPriority.value && !form.priority_id) {
    form.priority_id = defaultPriority.value;
  }
  if (defaultTaskStatus.value && !form.task_status_id) {
    form.task_status_id = defaultTaskStatus.value;
  }
});

watch(priority_id, (newVal) => {
  console.log("Novo valor de priority_id:", newVal);
  if (!shouldShowPriorityJustification.value) {
    form.priority_justification = "";
  }
});
</script>