<script setup>
import { ref, onMounted, computed } from "vue";
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
const selectGrains = ref(moment().format("MMMM YYYY"));
const selectProtein = ref(moment().format("MMMM YYYY"));

// Série de dados do gráfico para Grãos (inicialmente vazio)
const lineChartGrains = ref({
  series: [
    { name: "Aberto", data: [], color: "#253662" },
    { name: "Em desenvolvimento", data: [], color: "#1C455D" },
    { name: "Aguardando resposta", data: [], color: "#4B313D" },
    { name: "Enviado para teste", data: [], color: "#FBFF00" },
    { name: "Concluído", data: [], color: "#1B3C48" },
  ],
});

// Série de dados do gráfico para Proteína (inicialmente vazio)
const lineChartProtein = ref({
  series: [
    { name: "Aberto", data: [], color: "#253662" },
    { name: "Em desenvolvimento", data: [], color: "#1C455D" },
    { name: "Aguardando resposta", data: [], color: "#4B313D" },
    { name: "Enviado para teste", data: [], color: "#FBFF00" },
    { name: "Concluído", data: [], color: "#1B3C48" },
  ],
});

// Variáveis para o resumo ao lado do gráfico de Grãos
const totalTasksGrains = ref(0);
const statusOpenGrains = ref(0);
const statusInDevelopmentGrains = ref(0);
const statusWaitingResponseGrains = ref(0);
const statusSentForTestingGrains = ref(0);
const statusCompletedGrains = ref(0);

// Variáveis para o resumo ao lado do gráfico de Proteína
const totalTasksProtein = ref(0);
const statusOpenProtein = ref(0);
const statusInDevelopmentProtein = ref(0);
const statusWaitingResponseProtein = ref(0);
const statusSentForTestingProtein = ref(0);
const statusCompletedProtein = ref(0);

// Opções do gráfico com as cores específicas para Grãos
const chartOptionsGrains = computed(() => ({
  chart: {
    height: 375,
    type: "bar",
    fontFamily: `inherit`,
    foreColor: "#adb0bb",
    stacked: false,
  },
  colors: lineChartGrains.value.series.map((series) => series.color),
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

// Opções do gráfico com as cores específicas para Proteína
const chartOptionsProtein = computed(() => ({
  chart: {
    height: 375,
    type: "bar",
    fontFamily: `inherit`,
    foreColor: "#adb0bb",
    stacked: false,
  },
  colors: lineChartProtein.value.series.map((series) => series.color),
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

// Função para atualizar os dados do gráfico de Grãos
const updateChartDataGrains = async (monthYear) => {
  try {
    const date = moment(monthYear, "MMMM YYYY").format("YYYY-MM");
    const data = await tasksStore.fetchTaskStatisticsBySegment(1, date); // Segmento 1

    lineChartGrains.value.series = [
      { name: "Aberto", data: [data.statusOpen], color: "#253662" },
      {
        name: "Em desenvolvimento",
        data: [data.statusInDevelopment],
        color: "#1C455D",
      },
      {
        name: "Aguardando resposta",
        data: [data.statusWaitingResponse],
        color: "#4B313D",
      },
      {
        name: "Enviado para teste",
        data: [data.statusSentForTesting],
        color: "#FBFF00",
      },
      { name: "Concluído", data: [data.statusCompleted], color: "#1B3C48" },
    ];

    totalTasksGrains.value = data.totalTasks;
    statusOpenGrains.value = data.statusOpen;
    statusInDevelopmentGrains.value = data.statusInDevelopment;
    statusWaitingResponseGrains.value = data.statusWaitingResponse;
    statusSentForTestingGrains.value = data.statusSentForTesting;
    statusCompletedGrains.value = data.statusCompleted;
  } catch (error) {
    console.error("Error updating chart data for Grains:", error);
  }
};

// Função para atualizar os dados do gráfico de Proteína
const updateChartDataProtein = async (monthYear) => {
  try {
    const date = moment(monthYear, "MMMM YYYY").format("YYYY-MM");
    const data = await tasksStore.fetchTaskStatisticsBySegment(2, date); // Segmento 2

    lineChartProtein.value.series = [
      { name: "Aberto", data: [data.statusOpen], color: "#253662" },
      {
        name: "Em desenvolvimento",
        data: [data.statusInDevelopment],
        color: "#1C455D",
      },
      {
        name: "Aguardando resposta",
        data: [data.statusWaitingResponse],
        color: "#4B313D",
      },
      {
        name: "Enviado para teste",
        data: [data.statusSentForTesting],
        color: "#FBFF00",
      },
      { name: "Concluído", data: [data.statusCompleted], color: "#1B3C48" },
    ];

    totalTasksProtein.value = data.totalTasks;
    statusOpenProtein.value = data.statusOpen;
    statusInDevelopmentProtein.value = data.statusInDevelopment;
    statusWaitingResponseProtein.value = data.statusWaitingResponse;
    statusSentForTestingProtein.value = data.statusSentForTesting;
    statusCompletedProtein.value = data.statusCompleted;
  } catch (error) {
    console.error("Error updating chart data for Protein:", error);
  }
};

// Inicializa os gráficos com os dados do mês atual para cada segmento
onMounted(() => {
  updateChartDataGrains(selectGrains.value); // Carregar dados para o mês atual e segmento Grãos
  updateChartDataProtein(selectProtein.value); // Carregar dados para o mês atual e segmento Proteína
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
                  v-model="selectGrains"
                  :items="items"
                  variant="outlined"
                  density="compact"
                  hide-details
                  @change="(value) => updateChartDataGrains(value)"
                ></v-select>
              </div>
            </div>
            <v-row>
              <v-col cols="12">
                <apexchart
                  type="bar"
                  height="375"
                  :options="chartOptionsGrains"
                  :series="lineChartGrains.series || []"
                ></apexchart>
              </v-col>
              <!-- Conteúdo adicional aqui -->
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
                  v-model="selectProtein"
                  :items="items"
                  variant="outlined"
                  density="compact"
                  hide-details
                  @change="(value) => updateChartDataProtein(value)"
                ></v-select>
              </div>
            </div>
            <v-row>
              <v-col cols="12">
                <apexchart
                  type="bar"
                  height="375"
                  :options="chartOptionsProtein"
                  :series="lineChartProtein.series || []"
                ></apexchart>
              </v-col>
              <!-- Conteúdo adicional aqui -->
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>