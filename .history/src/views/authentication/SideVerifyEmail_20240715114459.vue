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
        class="d-lg-flex align-center justify-center authentication position-relative"
        style="background-color: #FCFEFF"
      >
        <div>
          <img
            src="@/assets/images/syscall/principal_dcontrol.jpeg"
            class="position-relative d-none d-lg-flex"
            alt="login-background"
            style="width: 90%; height: auto; object-fit: contain"
          />
        </div>
      </v-col>
      <v-col cols="12" lg="5" xl="4" class="d-flex align-center justify-center">
        <div class="mt-xl-0 mt-5 mw-100">
          <h2 class="text-h3 font-weight-bold mb-2">SYSCALL</h2>
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
