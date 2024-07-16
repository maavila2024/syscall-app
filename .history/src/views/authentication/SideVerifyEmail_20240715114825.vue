<script setup>
import Logo from "@/layouts/full/logo/Logo.vue";
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
import { useRoute } from "vue-router";

const authStore = useAuthStore();
const route = useRoute();
const token = route.query.token;
const loading = ref(true);
const status = ref(null);
const feedbackMessage = ref(null);

authStore
  .verifyEmail(token)
  .then(() => {
    status.value = "success";
    feedbackMessage.value = "E-mail verificado com sucesso!";
  })
  .catch((e) => {
    status.value = "error";
    feedbackMessage.value = e.message;
  })
  .finally(() => {
    loading.value = false;
  });
</script>

<template>
  <div class="pa-3">
    <v-row class="h-100vh mh-100 auth">
      <v-col
        cols="12"
        lg="7"
        xl="8"
        class="d-lg-flex align-center justify-center position-relative auth-background"
      >
        <div class="image-container">
          <img
            src="@/assets/images/syscall/principal_syscall.jpg"
            class="login-image"
            alt="verify-email-background"
          />
        </div>
      </v-col>
      <v-col cols="12" lg="5" xl="4" class="d-flex align-center justify-center">
        <div class="mt-xl-0 mt-5 mw-100">
          <h2 class="text-h3 font-weight-bold mb-2">D-CONTROL</h2>
          <v-alert :color="status" class="mb-2">
            {{ feedbackMessage }}
          </v-alert>
          <div v-if="loading" class="text-center">
            <v-progress-circular
              color="primary"
              indeterminate
            ></v-progress-circular>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.auth-background {
  background-color: #FCFEFF; /* Fundo da div que contém a imagem */
}

.image-container {
  background-color: #FCFEFF; /* Fundo do contêiner da imagem */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-image {
  width: 80%; /* Ajuste o valor conforme necessário */
  height: auto;
  object-fit: cover;
}
</style>
