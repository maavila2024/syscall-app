<script setup >
import Logo from "@/layouts/full/logo/Logo.vue";
/* Reset form */
import ForgotPassword from "@/components/auth/ForgotPassword.vue";
</script>

<template>
  <div class="pa-3">
    <v-row class="h-100vh mh-100 auth">
      <v-col
        cols="12"
        lg="8"
        xl="8"
        xxl="9"
        class="d-lg-flex align-center justify-center authentication position-relative"
      >
        <div class="auth-header pt-sm-6 pt-2 px-sm-6 px-3 pb-sm-6 pb-0">
          <div class="position-relative"><!-- <Logo /> --></div>
        </div>
        <div class="">
          <img
            src="@/assets/images/syscall/principal_syscall.jpg"
            class="position-relative d-none d-lg-flex"
            alt="login-background"
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
          <h2 class="text--darken-2 text-h4 font-weight-bold">SYSCALL</h2>
          <ForgotPassword />
          <v-btn
            size="large"
            color="lightprimary"
            to="/login"
            block
            class="mt-5 text-primary"
            flat
            >Back to Login</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>
