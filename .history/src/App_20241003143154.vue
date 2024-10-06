<template>
  <RouterView />
</template>

<script setup>
import { useIdle } from '@vueuse/core';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Define o tempo de inatividade (em milissegundos)
const { idle } = useIdle(2 * 60 * 1000); // 2 minutos

// Observa o estado de inatividade
watch(idle, (isIdle) => {
  if (isIdle) {
    alert("Você ficou inativo por muito tempo. Você será desconectado.");
    router.push('/logout'); // Redireciona para a rota de logout
  }
});
</script>
