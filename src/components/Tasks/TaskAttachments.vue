<template>
  <v-dialog v-model="isAttachmentsModalOpen" max-width="800px">
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
                  <a :href="getFullUrl(file.path)" target="_blank">{{ file.name }}</a>
                  <v-btn icon @click="deleteAttachment(file.id)">
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
</template>

<script setup>
import { ref, watch } from 'vue';
import { useTasksStore } from '@/stores/apps/tasks';
import { storeToRefs } from 'pinia';
import { CircleMinusIcon } from "vue-tabler-icons";
import { getFullUrl } from '@/utils/helpers';

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

const emit = defineEmits(['update:showAttachmentsModal']);

const tasksStore = useTasksStore();
const { taskFiles } = storeToRefs(tasksStore);

const isAttachmentsModalOpen = ref(false);

watch(() => props.showAttachmentsModal, async (newValue) => {
  if (newValue) {
    await tasksStore.getTaskFiles(props.taskId);
    isAttachmentsModalOpen.value = true;
  } else {
    isAttachmentsModalOpen.value = false;
  }
});

const closeAttachmentsModal = () => {
  emit('update:showAttachmentsModal', false);
};

const deleteAttachment = async (fileId) => {
  await tasksStore.deleteTaskFile(fileId);
  await tasksStore.getTaskFiles(props.taskId);
};
</script>
