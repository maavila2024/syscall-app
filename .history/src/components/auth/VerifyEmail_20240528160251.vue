<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useForm, useField } from "vee-validate";
import axios from "axios";
import { object, string } from "yup";
import { useRouter } from "vue-router";

const router = useRouter();

const schema = object({
  email: string().required().email().label('E-mail'),
  password: string().required().label('Senha'),
});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    email: 'teste@teste.com',
    password: '12345'
  }
});

const submit = handleSubmit(async (values) => {
  await login(values)
});

const { value: email } = useField('email');
const { value: password } = useField('password');

const authStore = useAuthStore();

const feedbackMessage = ref('');

function login(values) {
  feedbackMessage.value = ''

  authStore
      .sanctum()
      .then(() => {
        authStore
          .login(values.email, values.password )
          .then(() => {
        router.push({ name: 'dashboard' })
      })
      .catch(() => {
        feedbackMessage.value = "E-mail ou senha estão inválidos!";
      })
    })

</script>

<template>
  <VAlert v-if="feedbackMessage" color="error" variant="tonal">
    {{ feedbackMessage }}
  </VAlert>
</template>
