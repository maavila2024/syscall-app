<script setup lang="ts">
import { ref } from "vue";
import Logo from "@/layouts/full/logo/Logo.vue";
import axios from "axios";
import { object, string } from "yup";
import { useForm, useField } from "vee-validate";
import { useAuthStore } from "@/stores/auth";

const schema = object({
  first_name: string().required().label("Nome"),
  email: string().required().email().label("E-mail"),
  password: string()
    .min(8)
    .required()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])/,
      "Senha deve conter 8 caracteres e pelo menos uma letra e um número"
    )
    .label("Senha"),
});

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    first_name: "Enner",
    email: "enner@internacional.com.br",
    password: "1234567A",
  },
});

const submit = handleSubmit(async (values) => {
  const authStore = useAuthStore();
  await authStore
    .register(values.first_name, values.email, values.password)
    .catch(() => {
      feedbackMessage.value = "Usuário já cadastrado";
    });
});

const { value: firstName } = useField("first_name");
const { value: email } = useField("email");
const { value: password } = useField("password");

const feedbackMessage = ref("");
</script>
<template>
  <VAlert v-if="feedbackMessage" color="error" variant="tonal">
    {{ feedbackMessage }}
  </VAlert>
  <v-form class="mt-5" @submit.prevent="submit">
    <v-label class="text-subtitle-1 font-weight-medium pb-2">Nome</v-label>
    <VTextField
      v-model="firstName"
      :error-messages="errors.first_name"
    ></VTextField>
    <v-label class="text-subtitle-1 font-weight-medium pb-2">E-mail</v-label>
    <VTextField
      v-model="email"
      type="email"
      :error-messages="errors.email"
    ></VTextField>
    <v-label class="text-subtitle-1 font-weight-medium pb-2">Senha</v-label>
    <VTextField
      v-model="password"
      type="password"
      variant="outlined"
      color="primary"
      :error-messages="errors.password"
    ></VTextField>
    <v-btn size="large" class="mt-2" color="primary" block type="submit" flat
      >Sign Up</v-btn
    >
  </v-form>
</template>
