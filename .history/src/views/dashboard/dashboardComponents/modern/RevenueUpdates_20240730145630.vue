<template>
    <v-card elevation="10">
      <v-card-item>
        <div class="d-sm-flex align-center justify-space-between">
          <div>
            <v-card-title class="text-h5">Chamados Grãos</v-card-title>
          </div>
          <div class="my-sm-0 my-2">
            <v-select v-model="select" :items="items" variant="outlined" density="compact" hide-details></v-select>
          </div>
        </div>
  
        <v-row>
          <v-col cols="12" sm="8" class="pt-7">
            <apexchart type="bar" height="375" :options="chartOptions" :series="lineChart.series"> </apexchart>
          </v-col>
          <v-col cols="12" sm="4" class="pt-7">
            <div class="d-flex align-center mt-md-6 mt-3">
              <div class="pl-4">
                <h3 class="text-h3">$63,489.50</h3>
                <h6 class="text-subtitle-1 textSecondary">Total de Chamados</h6>
              </div>
            </div>
            <div class="mt-sm-10 mb-sm-10 mt-10 mb-0">
              <div class="d-flex align-baseline">
                <v-icon icon="mdi mdi-checkbox-blank-circle" size="10" color="primary"></v-icon>
                <div class="pl-4">
                  <h6 class="text-subtitle-1 textSecondary">Earnings this month</h6>
                  <h5 class="text-h5 mt-1">$48,820</h5>
                </div>
              </div>
              <div class="d-flex mt-8 align-baseline">
                <v-icon icon="mdi mdi-checkbox-blank-circle" size="10" color="secondary"></v-icon>
                <div class="pl-4">
                  <h6 class="text-subtitle-1 textSecondary">Expense this month</h6>
                  <h5 class="text-h5 mt-1">$26,498</h5>
                </div>
              </div>
              <!-- <v-btn color="primary" class="mt-10" variant="flat" block>View Full Report</v-btn> -->
            </div>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
  </template>
  
  <script setup>
  import { ref, computed, watch, onMounted } from 'vue';
  import moment from 'moment';
  import { useTasksStore } from '@/stores/apps/tasks';
  import { getPrimary, getSecondary } from '@/utils/UpdateColors';
  
  const select = ref(moment().format('MMMM YYYY'));
  const items = ref([]);
  const tasksStore = useTasksStore();
  const lineChart = ref({
    series: [],
  });
  
  // Preenche a lista de meses dinamicamente
  for (let i = 0; i < 12; i++) {
    items.value.push(moment().month(i).year(2024).format('MMMM YYYY'));
  }
  
  const chartOptions = computed(() => ({
    chart: {
      height: 375,
      type: 'bar',
      fontFamily: `inherit`,
      foreColor: '#adb0bb',
      stacked: false,
    },
    colors: [getPrimary.value, getSecondary.value],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        borderRadius: 6,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all',
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
      strokeDashArray: 3,
    },
    xaxis: {
      categories: ['Aberto', 'Em desenvolvimento', 'Aguardando resposta', 'Enviado para teste', 'Concluído'],
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: 'dark',
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  }));
  
  const fetchStatistics = async () => {
    const [month, year] = select.value.split(' ');
    const dateFilter = `${year}-${moment().month(month).format('MM')}`;
    const statistics = await tasksStore.fetchTaskStatistics(dateFilter, 1); // Segmento 1: Grãos
  
    lineChart.value.series = [
      {
        name: 'Aberto',
        data: [statistics.statusOpen || 0],
      },
      {
        name: 'Em desenvolvimento',
        data: [statistics.statusInDevelopment || 0],
      },
      {
        name: 'Aguardando resposta',
        data: [statistics.statusWaitingResponse || 0],
      },
      {
        name: 'Enviado para teste',
        data: [statistics.statusSentForTesting || 0],
      },
      {
        name: 'Concluído',
        data: [statistics.statusCompleted || 0],
      },
    ];
  };
  
  watch(select, fetchStatistics);
  
  onMounted(() => {
    fetchStatistics();
  });
  </script>
  
  