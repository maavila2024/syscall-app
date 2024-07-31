<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <v-btn @click="uploadFile">Upload</v-btn>

    <v-btn @click="exportTasks">Exportar Tasks</v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useExcelImportsStore } from '@/stores/apps/excelImports'; 
import * as XLSX from 'xlsx';
import axios from 'axios';

const file = ref(null);
const excelImportsStore = useExcelImportsStore();

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
    await excelImportsStore.importTasks(formData);
    alert('Arquivo importado com sucesso!');
  } catch (error) {
    console.error('Erro ao importar o arquivo:', error);
    alert('Erro ao importar o arquivo.');
  }
};

// Exporta tasks em CSV
const exportTasks = async () => {
  try {
    const response = await axios.get('/api/export-tasks', { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'tasks_export.csv'); // Nome do arquivo
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error('Erro ao exportar tasks:', error);
  }
};
</script>
