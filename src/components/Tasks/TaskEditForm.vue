<template>
  <div>
  <v-alert v-if="feedbackMessage" color="error" class="mb-2">
    {{ feedbackMessage }}
  </v-alert>

  <v-form @submit.prevent="submit">
    <v-text-field
      v-model="name"
      :error-messages="errors.name"
      label="Título"
      variant="outlined"
      color="primary"
    />

    <v-textarea v-model="description" variant="outlined" color="primary" name="input-7-4" placeholder="Share your thoughts" rows="5"></v-textarea>

    <v-select
      v-model="owner_id"
      :items="tasksStore.users"
      label="Solicitante"
      item-title="first_name"
      item-value="id"
    ></v-select>

    <v-select
      v-model="responsible_id"
      :items="tasksStore.users"
      label="Responsável"
      item-title="first_name"
      item-value="id"
    ></v-select>

    <v-select
      v-model="task_status_id"
      :items="tasksStore.taskStatus"
      label="Status do chamado!!!!"
      item-title="name"
      item-value="id"
    ></v-select>
    
    <v-text-field
      v-model="system_screen"
      :error-messages="errors.system_screen"
      label="Tela"
      variant="outlined"
      color="primary"
    />

    <v-textarea v-model="observation" variant="outlined" color="primary" name="input-7-4" placeholder="Share your thoughts" rows="5"></v-textarea>
   
    <v-select
      v-model="priority_id"
      :items="tasksStore.priori"
      label="Prioridade!!!!"
      item-title="name"
      item-value="id"
    ></v-select>

    <v-text-field v-model="created_at" variant="outlined"  type="date"></v-text-field>

    <v-text-field
      v-model="priority_justification"
      :error-messages="errors.priority_justification"
      label="Justificativa da prioridade"
      variant="outlined"
      color="primary"
    />

    <v-text-field v-model="expected_date" variant="outlined"  type="date"></v-text-field>

    <v-text-field v-model="finish_date" variant="outlined"  type="date"></v-text-field>
    

    <div class="text-right">
      <v-btn flat text="Cancelar" @click="emit('cancel')" />

      <v-btn
        type="submit"
        color="primary"
        flat
        :loading="isSubmitting"
        text="Editar"
      />
    </div>
  </v-form>
</div>
</template>

<script setup>
import { useField, useForm } from "vee-validate";
import { object, string } from "yup";
import { ref } from "vue";
import { useTasksStore } from "@/stores/apps/tasks";

const emit = defineEmits(["cancel", "edit"]);
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const tasksStore = useTasksStore();

const schema = object({
  name: string().required().label("Nome"),
  // description: string().required().label("Nome"),
  // owner_id: required().label("Nome"),
  // responsible_id: label("Nome"),
  // task_status_id: required().label("Nome"),
  // system_screen: string().required().label("Nome"),
  // observation: string().required().label("Nome"),
  // priority_id: required().label("Nome"),
  // priority_justification: string().label("Nome"),
  // expected_date: label("Nome"),
  // finish_date: label("Nome"),
  // created_at: label("Nome"),

});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    name: props.task.name,
    description: props.task.description,
    owner_id: props.task.owner_id,
    responsible_id: props.task.responsible_id,
    task_status_id: props.task.task_status_id,
    system_screen: props.task.system_screen,
    observation: props.task.observation,
    priority_id: props.task.priority_id,
    priority_justification: props.task.priority_justification,
    expected_date: props.task.expected_date,
    finish_date: props.task.finish_date,
    created_at: props.task.created_at,
    priori: props.priori

  },
});

const submit = handleSubmit(async (payload) => {
  await tasksStore.updateTask(props.task.id, payload);
  emit("edit");
});

const feedbackMessage = ref("");
const { value: name } = useField("name");
const { value: description } = useField("description");
const { value: owner_id } = useField("owner_id");
const { value: responsible_id } = useField("responsible_id");
const { value: task_status_id } = useField("task_status_id");
const { value: system_screen } = useField("system_screen");
const { value: observation } = useField("observation");
const { value: priority_id } = useField("priority_id");
const { value: priority_justification } = useField("priority_justification");
const { value: expected_date } = useField("naexpected_dateme");
const { value: finish_date } = useField("finish_date");
const { value: created_at } = useField("created_at");

</script>
