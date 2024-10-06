<template>
  <v-dialog v-model="isVisible" max-width="500">
    <v-card>
      <v-card-title>Sessão Expirada</v-card-title>
      <v-card-text>Sua sessão expirou. Você será redirecionado para a página de login.</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="$emit('close')">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(true); // Controla a visibilidade do modal internamente
</script>
