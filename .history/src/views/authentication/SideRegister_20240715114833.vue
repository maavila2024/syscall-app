<script setup>
import Logo from "@/layouts/full/logo/Logo.vue";
/* Register form */
import RegisterForm from "@/components/auth/RegisterForm.vue";
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
            alt="register-background"
          />
        </div>
      </v-col>
      <v-col cols="12" lg="5" xl="4" class="d-flex align-center justify-center">
        <div class="mt-xl-0 mt-5 mw-100">
          <h2 class="text-h3 font-weight-bold mb-2">D-CONTROL</h2>
          <div class="text-subtitle-1 mb-6"></div>
          <RegisterForm />
          <h6 class="text-h6 text-medium-emphasis d-flex align-center mt-6">
            Já tem uma conta?
            <v-btn
              variant="plain"
              to="/login"
              class="text-primary text-body-1 opacity-1 pl-2"
              >Entrar</v-btn
            >
          </h6>
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
