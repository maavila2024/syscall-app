<script setup lang="ts">
import Logo from "@/layouts/full/logo/Logo.vue";
import ResetPasswordByTokenForm from "@/components/auth/ResetPasswordByTokenForm.vue";
</script>

<template>
  <div class="pa-3">
    <v-row class="h-100vh mh-100 auth">
      <v-col
        cols="12"
        lg="8"
        xl="8"
        xxl="9"
        class="d-lg-flex align-center justify-center position-relative auth-background"
      >
        <div class="image-container">
          <img
            src="@/assets/images/syscall/principal_dcontrol.jpeg"
            class="login-image"
            alt="reset-password-background"
          />
        </div>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        xl="4"
        xxl="3"
        class="d-flex align-center justify-center"
      >
        <div class="pa-sm-7 pa-4">
          <h2 class="text--darken-2 text-h4 font-weight-bold">D-CONTROL</h2>
          <ResetPasswordByTokenForm />
          <v-btn
            size="large"
            color="lightprimary"
            to="/login"
            block
            class="mt-5 text-primary"
            flat
            >Voltar para Login</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.auth-background {
  background-color: #FCFEFF;
}

.image-container {
  background-color: #FCFEFF;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-image {
  width: 80%;
  height: auto;
  object-fit: cover;
}
</style>

