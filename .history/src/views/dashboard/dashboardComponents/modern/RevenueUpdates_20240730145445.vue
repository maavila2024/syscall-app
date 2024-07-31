<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useTasksStore } from "@/stores/apps/tasks";
import { getPrimary, getSecondary } from "@/utils/UpdateColors";
import moment from "moment";

const select = ref(moment().format('MMMM YYYY'));
const items = ref([]);
const tasksStore = useTasksStore();

// Popula os itens do select dinamicamente com os meses de 2024
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

const lineChart = ref({
  series: [],
});

const fetchStatistics = async () => {
  const [month, year] = select.value.split(' ');
  const dateFilter = `${year}-${moment().month(month).format('MM')}`;
  const statistics = await tasksStore.fetchTaskStatistics(dateFilter, 1); // Segmento 1: Grãos

  lineChart.value.series = [
    {
      name: 'Aberto',
      data: [statistics.statusOpen],
    },
    {
      name: 'Em desenvolvimento',
      data: [statistics.statusInDevelopment],
    },
    {
      name: 'Aguardando resposta',
      data: [statistics.statusWaitingResponse],
    },
    {
      name: 'Enviado para teste',
      data: [statistics.statusSentForTesting],
    },
    {
      name: 'Concluído',
      data: [statistics.statusCompleted],
    },
  ];
};

watch(select, fetchStatistics);

onMounted(() => {
  fetchStatistics();
});
</script>

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
          <!-- Detalhes adicionais podem ser colocados aqui -->
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>
