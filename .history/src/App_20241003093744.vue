<template>
  <RouterView></RouterView>

  <!-- Modal de Sessão Expirada -->
  <SessionExpiredModal />

</template>

<script setup >
import { RouterView } from "vue-router";
import SessionExpiredModal from '@/components/auth/SessionExpiredModal.vue';
</script>