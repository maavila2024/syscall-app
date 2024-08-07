<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useTasksStore } from "@/stores/apps/tasks";
import moment from "moment";
import { getPrimary, getSecondary } from "@/utils/UpdateColors";

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
  series: [],
});

// Opções do gráfico
const chartOptions = computed(() => ({
  chart: {
    height: 375,
    type: "bar",
    fontFamily: `inherit`,
    foreColor: "#adb0bb",
    stacked: false,
  },
  colors: [getPrimary.value, getSecondary.value, "#ffc107", "#dc3545", "#28a745"],
  plotOptions: {
    bar: {
      horizontal: false,
      barHeight: "60%",
      columnWidth: "18%",
      borderRadius: [6],
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "all",
    },
  },
  stroke: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: 'top'
  },
  grid: {
    borderColor: "rgba(0,0,0,0.1)",
    strokeDashArray: 3,
  },
  xaxis: {
    categories: [
      "Aberto",
      "Em desenvolvimento",
      "Aguardando resposta",
      "Enviado para teste",
      "Concluído",
    ],
    axisBorder: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
}));

// Função para atualizar os dados do gráfico
const updateChartData = async (monthYear, segment) => {
  try {
    // Converte o mês/ano selecionado para o formato necessário no backend
    const date = moment(monthYear, "MMMM YYYY").format("YYYY-MM");
    const data = await tasksStore.fetchTaskStatisticsBySegment(segment, date);

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
              <h3 class="text-h3">{{ totalTasks }}</h3>
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
