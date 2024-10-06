<template>
  <RouterView></RouterView>

  <SessionExpiredModal v-if="isSessionExpired" @close="handleCloseModal" />

</template>

<script setup >
import { RouterView } from "vue-router";
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useIdle } from '@vueuse/core';
import SessionExpiredModal from '@/components/auth/SessionExpiredModal.vue';

const isSessionExpired = ref(false); // Controla a visibilidade do modal
const router = useRouter();

// Define o tempo de inatividade (em milissegundos)
const { idle } = useIdle(2 * 60 * 1000); // 2 minutos

// Observa o estado de inatividade
watch(idle, (isIdle) => {
  if (isIdle) {
    isSessionExpired.value = true; // Exibe o modal
  }
});

// Lógica para fechar o modal e redirecionar para a tela de login
const handleCloseModal = () => {
  isSessionExpired.value = false;
  router.push('/logout'); // Redireciona para a rota de logout
};
</script>