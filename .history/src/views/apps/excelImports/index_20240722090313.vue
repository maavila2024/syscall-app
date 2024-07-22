<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <v-btn @click="uploadFile">Upload</v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useExcelImportsStore } from '@/stores/apps/excelImports'; 
import * as XLSX from 'xlsx';

const file = ref(null);
const tasksStore = useTasksStore();

const handleFileUpload = (event) => {
  file.value = event.target.files[0];
};

const uploadFile = async () => {
  if (!file.value) {
    alert('Por favor, selecione um arquivo primeiro.');
    return;
  }

  const formData = new FormData();
  formData.append('file', file.value);

  try {
    await tasksStore.importTasks(formData);
    alert('Arquivo importado com sucesso!');
  } catch (error) {
    console.error('Erro ao importar o arquivo:', error);
    alert('Erro ao importar o arquivo.');
  }
};
</script>
