<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useTasksStore } from "@/stores/apps/tasks";
import moment from "moment";
import "moment/locale/pt-br"; // Importa o locale em português

moment.locale("pt-br"); // Define o locale como português

const tasksStore = useTasksStore();

// Função para gerar lista de meses do ano corrente em português
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
    { name: "Aberto", data: [], color: "#253662" },
    { name: "Em desenvolvimento", data: [], color: "#1C455D" },
    { name: "Aguardando resposta", data: [], color: "#4B313D" },
    { name: "Enviado para teste", data: [], color: "#FBFF00" },
    { name: "Concluído", data: [], color: "#1B3C48" }
  ],
});

// Variáveis para o resumo ao lado do gráfico
const totalTasks = ref(0);
const statusOpen = ref(0);
const statusInDevelopment = ref(0);
const statusWaitingResponse = ref(0);
const statusSentForTesting = ref(0);
const statusCompleted = ref(0);

// Opções do gráfico com as cores específicas
const chartOptions = computed(() => ({
  chart: {
    height: 375,
    type: "bar",
    fontFamily: `inherit`,
    foreColor: "#adb0bb",
    stacked: false,
  },
  colors: lineChart.value.series.map(series => series.color), // Define cores para cada série
  plotOptions: {
    bar: {
      horizontal: false,
      barHeight: "60%",
      columnWidth: "100%",
      borderRadius: [20],
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
    position: "top",
  },
  grid: {
    borderColor: "rgba(0,0,0,0.1)",
    strokeDashArray: 3,
  },
  xaxis: {
    categories: [""],
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
    const date = moment(monthYear, "MMMM YYYY").format("YYYY-MM");
    const data = await tasksStore.fetchTaskStatisticsBySegment(segment, date);
    
    lineChart.value.series = [
      { name: "Aberto", data: [data.statusOpen], color: "#253662" },
      { name: "Em desenvolvimento", data: [data.statusInDevelopment], color: "#1C455D" },
      { name: "Aguardando resposta", data: [data.statusWaitingResponse], color: "#4B313D" },
      { name: "Enviado para teste", data: [data.statusSentForTesting], color: "#FBFF00" },
      { name: "Concluído", data: [data.statusCompleted], color: "#1B3C48" },
    ];

    totalTasks.value = data.totalTasks;
    statusOpen.value = data.statusOpen;
    statusInDevelopment.value = data.statusInDevelopment;
    statusWaitingResponse.value = data.statusWaitingResponse;
    statusSentForTesting.value = data.statusSentForTesting;
    statusCompleted.value = data.statusCompleted;

  } catch (error) {
    console.error("Error updating chart data:", error);
  }
};

// Inicializa o gráfico com os dados do mês atual para Grãos (segment 1)
onMounted(() => {
  updateChartData(select.value, 1); // Carregar dados para o mês atual e segmento Grãos
});

// Watch para atualizar os dados de acordo com o mês selecionado
watch(select, (newMonthYear) => {
  updateChartData(newMonthYear, 1); // Por padrão, atualizar para o segmento Grãos
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
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
                  @change="(value) => updateChartData(value, 1)"
                ></v-select>
              </div>
            </div>
            <v-row>
              <v-col cols="12">
                <apexchart
                  type="bar"
                  height="375"
                  :options="chartOptions"
                  :series="lineChart.series"
                ></apexchart>
              </v-col>
              <v-col cols="12">
                <div class="d-flex align-center mt-md-6 mt-3">
                  <div class="pl-4">
                    <h6 class="text-subtitle-1 textSecondary">Total de Chamados</h6>
                    <h3 class="text-h3">{{ totalTasks }}</h3>
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
                      <h6 class="text-subtitle-1 textSecondary">Aberto:</h6>
                      <h5 class="text-h5 mt-1">{{ statusOpen }}</h5>
                    </div>
                  </div>
                  <!-- Outros status aqui -->
                </div>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card elevation="10">
          <v-card-item>
            <div class="d-sm-flex align-center justify-space-between">
              <div>
                <v-card-title class="text-h5">Chamados Proteína</v-card-title>
              </div>
              <div class="my-sm-0 my-2">
                <v-select
                  v-model="select"
                  :items="items"
                  variant="outlined"
                  density="compact"
                  hide-details
                  @change="(value) => updateChartData(value, 2)"
                ></v-select>
              </div>
            </div>
            <v-row>
              <v-col cols="12">
                <apexchart
                  type="bar"
                  height="375"
                  :options="chartOptions"
                  :series="lineChart.series"
                ></apexchart>
              </v-col>
              <v-col cols="12">
                <div class="d-flex align-center mt-md-6 mt-3">
                  <div class="pl-4">
                    <h6 class="text-subtitle-1 textSecondary">Total de Chamados</h6>
                    <h3 class="text-h3">{{ totalTasks }}</h3>
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
                      <h6 class="text-subtitle-1 textSecondary">Aberto:</h6>
                      <h5 class="text-h5 mt-1">{{ statusOpen }}</h5>
                    </div>
                  </div>
                  <!-- Outros status aqui -->
                </div>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
