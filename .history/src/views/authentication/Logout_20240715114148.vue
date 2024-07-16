<script setup>
import Logo from "@/layouts/full/logo/Logo.vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();

authStore.logout().then(() => {
  router.push({ name: "login" });
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
            src="@/assets/images/syscall/principal_syscall.jpg"
            class="position-relative d-none d-lg-flex"
            alt="login-background"
            style="width: 90%; height: auto; object-fit: contain"
          />
        </div>
      </v-col>
      <v-col cols="12" lg="5" xl="4" class="d-flex align-center justify-center">
        <div class="mt-xl-0 mt-5 mw-100">
          <h2 class="text-h3 font-weight-bold mb-2">SYSCALL</h2>
          <div class="text-subtitle-1 mb-6"></div>
          Logout
        </div>
      </v-col>
    </v-row>
  </div>
</template>
