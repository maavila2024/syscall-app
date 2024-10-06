<!-- SessionExpiredModal.vue -->
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
  import { computed } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import { useRouter } from 'vue-router';
  
  const authStore = useAuthStore();
  const router = useRouter();
  
  // Computed para monitorar quando a sessão expira
  const showSessionExpiredModal = computed(() => authStore.sessionExpired);
  
  // Função para redirecionar o usuário para a página de login
  const redirectToLogin = () => {
    authStore.setSessionExpired(false); // Resetar o estado de sessão expirada
    router.push('/login'); // Redirecionar para a página de login
  };
  </script>
  