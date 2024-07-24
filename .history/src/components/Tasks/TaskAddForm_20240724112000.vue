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
          <v-col cols="12">
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
          <v-col cols="12">
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
          <v-col cols="12" md="12">
            <v-select
              v-model="priority_id"
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
          <v-col cols="12">
            <v-file-input
              v-model="selectedFiles"
              label="Anexos do chamado"
              multiple
              :error-messages="errors.files"
              show-size
            ></v-file-input>
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
import { object, string, number, date, boolean, array, mixed } from "yup";
import { ref, computed, watch, onMounted } from "vue";
import { useTasksStore } from "@/stores/apps/tasks";
import { useMeStore } from "@/stores/me";

const meStore = useMeStore();
const tasksStore = useTasksStore();

const emit = defineEmits(["cancel", "add"]);

const files = ref([]);

const segments = [
  { label: "Grãos", value: 1 },
  { label: "Proteína", value: 2 },
];

const types = [
  { label: "Algo que funcionava, parou de funcionar?", value: 1 },
  { label: "Fazer uma solicitação, algo novo (melhoria)?", value: 2 },
];

const defaultPriority = computed(() => {
  return tasksStore.priori.find((p) => p.is_default)?.id || null;
});

const defaultTaskStatus = computed(() => {
  return tasksStore.taskStatus.find((s) => s.is_default)?.id || null;
});

const { value: segment } = useField("segment", 2);
const { value: priority_id } = useField("priority_id");
const { value: task_status_id } = useField("task_status_id");

// Ensure default priority and task status are set after form is initialized
onMounted(() => {
  if (defaultPriority.value && !priority_id.value) {
    priority_id.value = defaultPriority.value;
  }
  if (defaultTaskStatus.value && !task_status_id.value) {
    task_status_id.value = defaultTaskStatus.value;
  }
});

const shouldShowPriorityJustification = computed(() => {
  const selectedPriority = tasksStore.priori.find(
    (p) => p.id === priority_id.value
  );
  return selectedPriority && selectedPriority.justify;
});

const schema = computed(() => {
  return object({
    segment: number().required().label("Segmento"),
    task_type: number().required().label("Tipo de chamado"),
    name: string().required().label("Título"),
    // task_code: string().required().label('Número do chamado'),
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
    files: array().of(mixed()).nullable(),
  });
});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
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
    files: [],
  },
});

const submit = handleSubmit(async (values) => {
  console.log('priority_id at submit:', priority_id.value);
  console.log('values before sending:', values);
  values.priority_id = priority_id.value;
  try {
    // Primeiro, cria a interação
    const files = selectedFiles.value;
    const taskPayload = await tasksStore.storeTask(values, files);
    
  // const files = selectedFiles.value; // Assumindo que `selectedFiles` contém os arquivos selecionados pelo usuário

  // await tasksStore.storeTask(taskPayload, files);
  emit("add");
} catch (error) {
    console.error('Erro ao adicionar comentário ou fazer upload dos arquivos:', error);
  }
});

const feedbackMessage = ref("");
const { value: name } = useField("name");
const { value: task_type } = useField("task_type");
const { value: system_screen } = useField("system_screen");
const { value: description } = useField("description");
const { value: owner_id } = useField("owner_id");
const { value: responsible_id } = useField("responsible_id");
const { value: observation } = useField("observation");
const { value: created_at } = useField("created_at");
const { value: expected_date } = useField("expected_date");
const { value: finish_date } = useField("finish_date");
const { value: priority_justification } = useField("priority_justification");
const { value: status } = useField("status");
const { value: selectedFiles } = useField('files');

// Watch to set default values after form is initialized
watch(defaultPriority, (newVal) => {
  if (newVal && !priority_id.value) {
    priority_id.value = newVal;
  }
});

watch(defaultTaskStatus, (newVal) => {
  if (newVal && !task_status_id.value) {
    task_status_id.value = newVal;
  }
});

watch(priority_id, (newVal) => {
  console.log("priority_id changed to:", newVal);
  if (!shouldShowPriorityJustification.value) {
    priority_justification.value = "";
  }
});

</script>