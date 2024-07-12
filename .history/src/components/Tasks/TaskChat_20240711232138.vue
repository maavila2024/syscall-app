<template>
  <v-dialog v-model="isChatModalOpen" max-width="800px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Notas de Trabalho</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col v-for="(message, i) in messages" :key="i" cols="12">
              <v-card class="mb-3">
                <v-card-text>
                  {{ message.comment }}
                  <div v-if="message.interaction_files && message.interaction_files.length">
                    <v-divider></v-divider>
                    <v-list>
                      <v-list-item v-for="(interaction_file, j) in message.interaction_files" :key="j">
                        <v-list-item-content>
                          <v-list-item-title>
                            <a :href="getFullUrl(interaction_file.path)" target="_blank">{{ interaction_file.name }}</a>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="openAddCommentModal">Adicionar Comentário</v-btn>
        <v-btn color="secondary" @click="closeChatModal">Fechar</v-btn>
      </v-card-actions>
    </v-card>

    <!-- Modal para adicionar comentário -->
    <v-dialog v-model="isAddCommentModalOpen" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Adicionar Comentário</span>
        </v-card-title>
        <v-card-text>
          <v-form @submit="submit">
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
import { ref, watch } from 'vue';
import { useChatStore } from '@/stores/apps/chats';
import { storeToRefs } from 'pinia';
import { useField, useForm } from 'vee-validate';
import { object, string, array, mixed } from 'yup';
import { getFullUrl } from '@/utils';

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

const schema = object({
  comment: string().required().label('Comentário'),
  files: array().of(mixed()).nullable(),
});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    comment: '',
    files: [],
  },
});

const submit = handleSubmit(async (values) => {
  try {
    // Primeiro, cria a interação
    const interaction = await chatStore.createInteraction(props.taskId, values.comment, props.userId);

    // Se houver arquivos, faz o upload de cada um associado à interação criada
    if (values.files && values.files.length > 0) {
      const formData = new FormData();
      formData.append('interaction_id', interaction.id);
      for (const file of values.files) {
        formData.append('files[]', file);
      }

      await chatStore.uploadFile(formData);
    }

    // Atualiza as mensagens e fecha o modal
    await chatStore.fetchMessages(props.taskId);
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
    await chatStore.fetchMessages(props.taskId);
  } else {
    isChatModalOpen.value = false;
  }
});

const closeChatModal = () => {
  emit('update:showChatModal', false);
};

const openAddCommentModal = () => {
  isAddCommentModalOpen.value = true;
};
</script>
