<script setup>
defineProps({
  email: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div>
    <div class="mb-6">
      <h6 class="text-h6 mb-2">Solicitação Enviada</h6>
      <p class="text-subtitle-1 text-medium-emphasis">
        Sua solicitação de reset de senha foi enviada para o suporte.
      </p>
      <p class="text-subtitle-1 text-medium-emphasis mt-2">
        Por favor, aguarde. Um email será enviado para <strong>{{ email }}</strong> com as instruções para redefinir sua senha.
      </p>
    </div>
    
    <v-alert type="info" variant="tonal" class="mb-4">
      <p class="text-body-2">
        Você receberá um email interno com um link para redefinir sua senha. 
        Clique no link recebido para acessar a página de redefinição.
      </p>
    </v-alert>
  </div>
</template>

