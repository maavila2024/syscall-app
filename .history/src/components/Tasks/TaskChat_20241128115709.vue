<template>
  <v-dialog v-model="isChatModalOpen" max-width="800px" persistent>
    <v-card>
      <v-card-title>
        <span class="text-h5">Notas de Trabalho</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col v-for="(message, i) in sortedMessages" :key="i" cols="12">
              <v-card class="mb-3">
                <v-card-text>
                  <div class="comment-text">
                    {{ message.comment }}
                  </div>
                  <div v-if="message.interaction_files && message.interaction_files.length">
                    <v-divider></v-divider>
                    <v-list>
                      <v-list-item v-for="(interaction_file, j) in message.interaction_files" :key="j">
                        <v-list-item-content>
                          <v-list-item-title>
                            <a :href="interaction_file.file_url" target="_blank">{{ interaction_file.name }}</a>


                          <!--  <a :href="getFullUrl(interaction_file.path)" target="_blank">{{ interaction_file.name }}</a> -->
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </div>
                  <div class="text-right text-caption mt-2">
                    <span class="email-text">{{ message.user_email }}</span> - <span class="email-text">{{ formatDate(message.created_at) }}</span>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <!-- Toggle para mostrar atualizações -->
        <v-switch
          v-model="showAllMessages"
          label="Mostrar Atualizações do Chamado?"
        ></v-switch>
        <v-btn color="primary" @click="openAddCommentModal">Adicionar Comentário</v-btn>
        <v-btn color="secondary" @click="closeChatModal">Fechar</v-btn>
      </v-card-actions>
    </v-card>

    <!-- Modal para adicionar comentário -->
    <v-dialog v-model="isAddCommentModalOpen" max-width="500px" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5">Adicionar Comentário</span>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <v-textarea
              v-model="comment"
              label="Comentário"
              :error-messages="errors.comment"
            ></v-textarea>
            <v-file-input
              v-model="selectedFiles"
              label="Selecionar Arquivos"
              :error-messages="errors.files"
              show-size
              multiple
            ></v-file-input>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="isAddCommentModalOpen = false">Cancelar</v-btn>
          <v-btn color="blue darken-1" text :loading="isSubmitting" @click="submit">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { useChatStore } from '@/stores/apps/chats';
import { storeToRefs } from 'pinia';
import { useField, useForm } from 'vee-validate';
import { object, string, array, mixed } from 'yup';
import { getFullUrl } from '@/utils/helpers';

const props = defineProps({
  taskId: {
    type: Number,
    required: true,
  },
  showChatModal: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['update:showChatModal']);

const chatStore = useChatStore();
const { messages } = storeToRefs(chatStore);

const isChatModalOpen = ref(false);
const isAddCommentModalOpen = ref(false);
const showAllMessages = ref(false); // Controle do toggle

const schema = object({
  comment: string().required().label('Comentário'),
  files: array().of(mixed()).nullable(),
});

const { handleSubmit, errors, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    comment: '',
    files: [],
  },
});

const submit = handleSubmit(async (values) => {
  try {
    const interaction = await chatStore.createInteraction(props.taskId, values.comment, props.userId);

    if (values.files && values.files.length > 0) {
      const formData = new FormData();
      formData.append('interaction_id', interaction.id);
      for (const file of values.files) {
        formData.append('files[]', file);
      }

      await chatStore.uploadFile(formData);
    }

    await chatStore.fetchMessages(props.taskId, showAllMessages.value);
    isAddCommentModalOpen.value = false;
    emit('update:showChatModal', false);
  } catch (error) {
    console.error('Erro ao adicionar comentário ou fazer upload dos arquivos:', error);
  }
});

const { value: comment } = useField('comment');
const { value: selectedFiles } = useField('files');

watch(() => props.showChatModal, async (newValue) => {
  if (newValue) {
    isChatModalOpen.value = true;
    await chatStore.fetchMessages(props.taskId, showAllMessages.value); // Use o estado do toggle
  } else {
    isChatModalOpen.value = false;
  }
});

// Observa mudanças no toggle e recarrega as mensagens
watch(showAllMessages, async (newValue) => {
  await chatStore.fetchMessages(props.taskId, newValue);
});

const closeChatModal = () => {
  showAllMessages.value = false;
  emit('update:showChatModal', false);
};

const openAddCommentModal = () => {
  resetForm();
  isAddCommentModalOpen.value = true;
};

const formatDate = (date) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
  return new Date(date).toLocaleDateString('pt-BR', options);
};

// Computed property to sort messages by ID in descending order
const sortedMessages = computed(() => {
  return [...messages.value].sort((a, b) => b.id - a.id);
});
</script>

<style scoped>
.text-right {
  text-align: right;
}
.text-caption {
  font-size: 0.5rem;
}
.email-text {
  color: white;
}
.mt-2 {
  margin-top: 0.5rem;
}
.comment-text {
  color: white;
  font-size: 1rem; 
}
</style>
