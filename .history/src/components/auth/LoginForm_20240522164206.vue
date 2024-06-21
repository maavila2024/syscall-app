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
    //   .then(() => {
    //     authStore
    //       .login(values.email, values.password )
    //       .then(() => {
    //     router.push({ name: 'dashboard' })
    //   })
    //   .catch(() => {
    //     feedbackMessage.value = "E-mail ou senha estão inválidos!";
    //   })
    // })
    

  // axios.get('sanctum/csrf-cookie').then(() => {
  //   axios
  //     .post('api/login', {
  //       email: values.email,
  //       password: values.password,
  //     })
  //     .then(() => {
  //       router.push({ name: 'dashboard' })
  //     })
  //     .catch(() => {
  //       feedbackMessage.value = "E-mail ou senha estão inválidos!";
  //     });
  // });
}

</script>

<template>
  <VAlert v-if="feedbackMessage" color="error" variant="tonal">
    {{ feedbackMessage }}
  </VAlert>
  <VForm class="mt-5" @submit.prevent='submit' >
    <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText"
      >E-mail</v-label
    >
    <VTextField
      v-model="email"
      class="mb-8"
      placeholder="email@agcocorp.com"
      type="email"
      autofocus
      :error-messages="errors.email"
    ></VTextField>
    <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText"
      >Password</v-label
    >
    <VTextField
      v-model="password"
      hide-details="auto"
      type="password"
      class="pwdInput"
      :error-messages="errors.password"
    ></VTextField>
    <div class="d-flex flex-wrap align-center my-3 ml-n2">
      <div class="ml-sm-auto">
        <RouterLink
          to="/forgot"
          class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
          >Forgot Password ?
        </RouterLink>
      </div>
    </div>
    <v-btn
      size="large"
      type="submit"
      :loading="isSubmitting"
      color="primary"
      block
      flat
      >Sign In</v-btn
    >
    <div v-if="errors.apiError" class="mt-2">
      <v-alert color="error">{{ errors.apiError }}</v-alert>
    </div>
  </VForm>
</template>
