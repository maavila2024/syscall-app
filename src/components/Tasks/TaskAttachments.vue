<template> 
  <v-dialog v-model="isAttachmentsModalOpen" max-width="800px" persistent>
    <v-card>
      <v-card-title>
        <span class="text-h5">Anexos do Chamado</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col v-for="(file, i) in taskFiles" :key="i" cols="12">
              <v-card class="mb-3">
                <v-card-text>
                  <a :href="file.file_url" target="_blank">{{ file.name }}</a>
                  <v-btn icon @click="confirmDelete(file.id)">
                    <CircleMinusIcon />
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn color="secondary" @click="closeAttachmentsModal">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  
  <!-- Modal de Confirmação -->
  <v-dialog v-model="isDialogOpen" max-width="400px">
    <v-card>
      <v-card-title class="headline">Confirmação</v-card-title>
      <v-card-text>Deseja realmente excluir esse arquivo?</v-card-text>
      <v-card-actions>
        <v-btn color="red darken-1" text @click="closeDialog">Cancelar</v-btn>
        <v-btn color="green darken-1" text @click="deleteAttachment(selectedFileId)">Confirmar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from "vue";
import { useTasksStore } from "@/stores/apps/tasks";
import { storeToRefs } from "pinia";
import { CircleMinusIcon } from "vue-tabler-icons";
import { getFullUrl } from "@/utils/helpers";

const props = defineProps({
  taskId: {
    type: Number,
    required: true,
  },
  showAttachmentsModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:showAttachmentsModal"]);

const tasksStore = useTasksStore();
const { taskFiles } = storeToRefs(tasksStore);

const isAttachmentsModalOpen = ref(false);
const isDialogOpen = ref(false);
const selectedFileId = ref(null); // Armazena o ID do arquivo a ser excluído

watch(
  () => props.showAttachmentsModal,
  async (newValue) => {
    if (newValue) {
      await tasksStore.getTaskFiles(props.taskId);
      isAttachmentsModalOpen.value = true;
    } else {
      isAttachmentsModalOpen.value = false;
    }
  }
);

const closeAttachmentsModal = () => {
  emit("update:showAttachmentsModal", false);
};

// Função para abrir o modal de confirmação
const confirmDelete = (fileId) => {
  selectedFileId.value = fileId;
  isDialogOpen.value = true; // Abre o modal de confirmação
};

// Função para fechar o modal de confirmação
const closeDialog = () => {
  isDialogOpen.value = false;
};

// Função para excluir o arquivo após confirmação
const deleteAttachment = async (fileId) => {
  await tasksStore.deleteTaskFile(fileId);
  await tasksStore.getTaskFiles(props.taskId);
  closeDialog(); // Fecha o modal de confirmação após a exclusão
};
</script>
