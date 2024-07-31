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
  plotOptions: {
    bar: {
      horizontal: false,
      barHeight: "60%",
      columnWidth: "18%",
      borderRadius: [8],
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
      { name: "Aberto", data: [data.statusOpen], color: "#4CAF50" },
      { name: "Em desenvolvimento", data: [data.statusInDevelopment], color: "#2196F3" },
      { name: "Aguardando resposta", data: [data.statusWaitingResponse], color: "#FFC107" },
      { name: "Enviado para teste", data: [data.statusSentForTesting], color: "#FF9800" },
      { name: "Concluído", data: [data.statusCompleted], color: "#8BC34A" },
    ];

    // Atualiza o resumo ao lado do gráfico
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

// Watch para atualizar os dados quando o select mudar
watch(select, (newMonthYear) => {
  updateChartData(newMonthYear, 1); // Para o segmento Grãos
});

// Inicializa o gráfico com os dados do mês atual
onMounted(() => {
  updateChartData(select.value, 1); // Carregar dados para o mês atual e segmento Grãos
});
</script>
