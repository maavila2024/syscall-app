<script setup>
import Logo from "@/layouts/full/logo/Logo.vue";
/* Login form */
import LoginForm from "@/components/auth/LoginForm.vue";
</script>

<template>
  <div class="pa-3">
    <v-row class="h-100vh mh-100 auth">
      <v-col
        cols="12"
        lg="7"
        xl="8"
        class="d-lg-flex align-center justify-center authentication position-relative auth-background"
      >
        <div>
          <img
            src="@/assets/images/syscall/principal_syscall.jpg"
            class="position-relative d-none d-lg-flex"
            alt="login-background"
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </div>
      </v-col>
      <v-col cols="12" lg="5" xl="4" class="d-flex align-center justify-center">
        <div class="mt-xl-0 mt-5 mw-100">
          <h2 class="text-h3 font-weight-bold mb-2">SYSCALL</h2>
          <div class="text-subtitle-1 mb-6"></div>
          <LoginForm />
          <h6 class="text-h6 d-flex align-center mt-6 font-weight-medium">
            New to Syscall?
            <v-btn
              class="pl-0 text-primary text-body-1 opacity-1 pl-2 font-weight-medium"
              height="auto"
              to="/register"
              variant="plain"
              >Create an account</v-btn
            >
          </h6>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.auth-background {
  background-color: #FCFEFF;
}
</style>
