<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useTasksStore } from "@/stores/apps/tasks";
import { getPrimary, getSecondary } from "@/utils/UpdateColors";
import moment from "moment";

const tasksStore = useTasksStore();

// Função para gerar lista de meses do ano corrente
const generateMonthList = () => {
  const months = [];
  for (let i = 0; i < 12; i++) {
    months.push(moment().month(i).format("MMMM YYYY"));
  }
  return months;
};

// Lista de meses
const items = ref(generateMonthList());
const select = ref(moment().format("MMMM YYYY"));

// Série de dados do gráfico (inicialmente vazio)
const lineChart = ref({
  series: [
    { name: "Aberto", data: [] },
    { name: "Em desenvolvimento", data: [] },
    { name: "Aguardando resposta", data: [] },
    { name: "Enviado para teste", data: [] },
    { name: "Concluído", data: [] },
  ],
});

// Opções do gráfico
const chartOptions = computed(() => ({
  chart: {
    height: 375,
    type: "bar",
    fontFamily: `inherit`,
    foreColor: "#adb0bb",
    stacked: false, // Alterado para falso para barras separadas
  },
  colors: ["#2E93fA", "#66DA26", "#FF9800", "#E91E63", "#00BCD4"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "45%",
      endingShape: "rounded",
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "center",
    floating: true,
    offsetY: -10,
    offsetX: -5
  },
  grid: {
    borderColor: "#f1f1f1",
  },
  xaxis: {
    categories: [
      "Aberto",
      "Em desenvolvimento",
      "Aguardando resposta",
      "Enviado para teste",
      "Concluído",
    ],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val;
      },
    },
  },
}));

// Função para atualizar os dados do gráfico
const updateChartData = async (monthYear, segment) => {
  try {
    const data = await tasksStore.fetchTaskStatisticsBySegment(
      segment,
      monthYear
    );
    lineChart.value.series = [
      { name: "Aberto", data: [data.statusOpen] },
      { name: "Em desenvolvimento", data: [data.statusInDevelopment] },
      { name: "Aguardando resposta", data: [data.statusWaitingResponse] },
      { name: "Enviado para teste", data: [data.statusSentForTesting] },
      { name: "Concluído", data: [data.statusCompleted] },
    ];
  } catch (error) {
    console.error("Error updating chart data:", error);
  }
};

// Watch para atualizar os dados quando o select mudar
watch(select, (newMonthYear) => {
  updateChartData(newMonthYear, 1); // Para o segmento Grãos
});

// Inicializa o gráfico com os dados do mês atual
onMounted(() => {
  updateChartData(select.value, 1); // Carregar dados para o mês atual e segmento Grãos
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
          <v-select
            v-model="select"
            :items="items"
            variant="outlined"
            density="compact"
            hide-details
          ></v-select>
        </div>
      </div>

      <v-row>
        <v-col cols="12" sm="8" class="pt-7">
          <apexchart
            type="bar"
            height="375"
            :options="chartOptions"
            :series="lineChart.series"
          ></apexchart>
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
              <v-icon
                icon="mdi mdi-checkbox-blank-circle"
                size="10"
                color="primary"
              ></v-icon>
              <div class="pl-4">
                <h6 class="text-subtitle-1 textSecondary">
                  Earnings this month
                </h6>
                <h5 class="text-h5 mt-1">$48,820</h5>
              </div>
            </div>
            <div class="d-flex mt-8 align-baseline">
              <v-icon
                icon="mdi mdi-checkbox-blank-circle"
                size="10"
                color="secondary"
              ></v-icon>
              <div class="pl-4">
                <h6 class="text-subtitle-1 textSecondary">
                  Expense this month
                </h6>
                <h5 class="text-h5 mt-1">$26,498</h5>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>
