<script setup>
import Logo from "@/layouts/full/logo/Logo.vue";
/* Reset form */
import ForgotPassword from "@/components/auth/ForgotPassword.vue";
</script>

<template>
  <div class="pa-3">
    <v-row class="h-100vh mh-100 ">
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
            alt="forgot-password-background"
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
          <ForgotPassword />
          <v-btn
            size="large"
            color="lightprimary"
            to="/login"
            block
            class="mt-5 text-primary"
            flat
            >Voltar para tela de Login</v-btn
          >
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
