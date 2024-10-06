// exportToCSV.js
import { formatDateToBR } from '@/utils/helpers';
// Definir a função exportToCSV
export function exportToCSV(tasks, filename) {
  // Definir as colunas do CSV, incluindo os novos campos
  const headers = [
    "Chamado", 
    "Sequência", 
    "Título", 
    "Solicitante", 
    "Responsável", 
    "Status", 
    "Prioridade", 
    "Complexidade", 
    "Data Criação",       
    "Data Esperada",      
    "Data Conclusão"    
  ];

  // Mapear os dados para uma matriz de arrays, incluindo os novos campos
  const data = tasks.map(task => [
    task.task_code,
    task.sequence,
    task.name,
    task.user_owner?.first_name,
    task.user_responsible?.first_name || "Nenhum responsável",
    task.task_status?.name,
    task.priority?.name,
    task.complexity?.name || "Aguardando análise",
    formatDateToBR(task.created_at),        
    formatDateToBR(task.expected_date),     
    formatDateToBR(task.finish_date)        
  ]);

  // Combinar cabeçalhos e dados
  const csvContent = [headers, ...data].map(e => e.join(",")).join("\n");

  // Criar um Blob e criar um link para download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
