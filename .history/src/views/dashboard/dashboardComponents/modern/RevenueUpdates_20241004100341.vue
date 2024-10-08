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
const selectGrains = ref(moment().format("MMMM YYYY"));
const selectProtein = ref(moment().format("MMMM YYYY"));

// Série de dados do gráfico para Grãos (inicialmente vazio)
const lineChartGrains = ref({
  series: [
    { name: "Total de Chamados", data: [], color: "#1E3A8A" },
    { name: "Aberto", data: [], color: "#FFA500" },
    { name: "Em desenvolvimento", data: [], color: "#00FFFF" },
    { name: "Aguardando resposta", data: [], color: "#FF0000" },
    { name: "Teste TI", data: [], color: "#FFFF00" },
    { name: "Concluído", data: [], color: "#00FF00" },
  ],
});

// Série de dados do gráfico para Proteína (inicialmente vazio)
const lineChartProtein = ref({
  series: [
    { name: "Total de Chamados", data: [], color: "#1E3A8A" },
    { name: "Aberto", data: [], color: "#FFA500" },
    { name: "Em desenvolvimento", data: [], color: "#00FFFF" },
    { name: "Aguardando resposta", data: [], color: "#FF0000" },
    { name: "Teste TI", data: [], color: "#FFFF00" },
    { name: "Concluído", data: [], color: "#00FF00" },
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
    enabled: true,
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
    enabled: true,
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
      {
        name: "Total de Chamados",
        data: [data.totalTasks || 0], // Garantir valor padrão se data.totalTasks for undefined
        color: "#1E3A8A",
      },
      { name: "Aberto", data: [data.statusOpen || 0], color: "#FFA500" },
      {
        name: "Em desenvolvimento",
        data: [data.statusInDevelopment || 0],
        color: "#00FFFF",
      },
      {
        name: "Aguardando resposta",
        data: [data.statusWaitingResponse || 0],
        color: "#FF0000",
      },
      {
        name: "Teste TI",
        data: [data.statusSentForTesting || 0],
        color: "#FFFF00",
      },
      { name: "Concluído", data: [data.statusCompleted || 0], color: "#00FF00" },
    ];

    totalTasksGrains.value = data.totalTasks || 0;
    statusOpenGrains.value = data.statusOpen || 0;
    statusInDevelopmentGrains.value = data.statusInDevelopment || 0;
    statusWaitingResponseGrains.value = data.statusWaitingResponse || 0;
    statusSentForTestingGrains.value = data.statusSentForTesting || 0;
    statusCompletedGrains.value = data.statusCompleted || 0;
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
      {
        name: "Total de Chamados",
        data: [data.totalTasks || 0], // Garantir valor padrão se data.totalTasks for undefined
        color: "#1E3A8A",
      },
      { name: "Aberto", data: [data.statusOpen || 0], color: "#80D8FF" },
      {
        name: "Em desenvolvimento",
        data: [data.statusInDevelopment || 0],
        color: "#009688",
      },
      {
        name: "Aguardando resposta",
        data: [data.statusWaitingResponse || 0],
        color: "#FF5722",
      },
      {
        name: "Teste TI",
        data: [data.statusSentForTesting || 0],
        color: "#FFEB3B",
      },
      { name: "Concluído", data: [data.statusCompleted || 0], color: "#3F51B5" },
      { name: "Homologação", data: [data.statusCompleted || 0], color: "#FF8A80" },
      { name: "Cancelado", data: [data.statusCompleted || 0], color: "#BDBDBD" },
    ];

    totalTasksProtein.value = data.totalTasks || 0;
    statusOpenProtein.value = data.statusOpen || 0;
    statusInDevelopmentProtein.value = data.statusInDevelopment || 0;
    statusWaitingResponseProtein.value = data.statusWaitingResponse || 0;
    statusSentForTestingProtein.value = data.statusSentForTesting || 0;
    statusCompletedProtein.value = data.statusCompleted || 0;
  } catch (error) {
    console.error("Error updating chart data for Protein:", error);
  }
};

// Inicializa os gráficos com os dados do mês atual para cada segmento
onMounted(() => {
  updateChartDataGrains(selectGrains.value); // Carregar dados para o mês atual e segmento Grãos
  updateChartDataProtein(selectProtein.value); // Carregar dados para o mês atual e segmento Proteína
});

// Observadores para os seletores de meses
watch(selectGrains, (newMonthYear) => {
  updateChartDataGrains(newMonthYear); // Atualiza os dados ao mudar o mês para Grãos
});

watch(selectProtein, (newMonthYear) => {
  updateChartDataProtein(newMonthYear); // Atualiza os dados ao mudar o mês para Proteína
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
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>