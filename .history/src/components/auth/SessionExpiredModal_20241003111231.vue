<template>
  <v-dialog v-model="showSessionExpiredModal" persistent max-width="400">
    <v-card>
      <v-card-title>Sessão Expirada</v-card-title>
      <v-card-text>
        Sua sessão expirou. Você será redirecionado para a página de login.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="redirectToLogin">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const router = useRouter();

const showSessionExpiredModal = computed(() => authStore.sessionExpired);

// Função que redireciona o usuário para a página de login
const redirectToLogin = () => {
  authStore.setSessionExpired(false); // Reseta o estado de sessão expirada
  router.push({ name: 'login' }); // Redireciona para a página de login
};
</script>
