<template>
  <div>
  <v-alert v-if="feedbackMessage" color="error" class="mb-2">
    {{ feedbackMessage }}
  </v-alert>

  <v-form>

    <v-textarea v-model="comment" variant="outlined" color="primary" name="input-7-4" placeholder="Share your thoughts" rows="5"></v-textarea>


    <div class="text-right">
      <v-btn flat text="Cancelar" @click="emit('cancel')" />

      
    </div>
  </v-form>
</div>
</template>

<script setup>
import { useField, useForm } from "vee-validate";
import { object, string } from "yup";
import { ref } from "vue";
import { useInteractionsStore } from "@/stores/apps/interactions";

const emit = defineEmits(["cancel", "edit"]);
const props = defineProps({
  interaction: {
    type: Object,
    required: true,
  },
});

const interactionsStore = useInteractionsStore();

const schema = object({
  comment: string().required().label("Comentário"),
});

const { errors } = useForm({
  validationSchema: schema,
  initialValues: {
    comment: props.interaction.comment,
  },
});


const feedbackMessage = ref("");
const { value: comment } = useField("comment");
</script>
