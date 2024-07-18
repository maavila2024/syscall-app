<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-select
            v-model="segment"
            :items="segments"
            label="Segmento"
            item-title="label"
            item-value="value"
            disabled
            class="custom-label"
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="task_type"
            :items="types"
            label="Tipo de chamado"
            item-title="label"
            item-value="value"
            disabled
            class="custom-label"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="task_code"
            label="Número do chamado"
            variant="outlined"
            color="primary"
            disabled
            class="custom-label"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="name"
            label="Título"
            variant="outlined"
            color="primary"
            readonly
            class="custom-label"
            rows="2"
            maxlength="60"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="system_screen"
            label="Tela"
            variant="outlined"
            color="primary"
            disabled
            class="custom-label"
          />
        </v-col>
      </v-row>
      <!-- Segunda linha de campos -->
      <v-row>
        <v-col cols="12">
          <v-textarea
            v-model="description"
            label="Descrição"
            variant="outlined"
            color="primary"
            rows="5"
            readonly
            class="custom-label"
            maxlength="150"
            counter
          ></v-textarea>
        </v-col>
      </v-row>
      <!-- Terceira linha de campos -->
      <v-row>
        <v-col cols="6">
          <v-select
            v-model="owner_id"
            :items="tasksStore.users"
            label="Solicitante"
            item-title="first_name"
            item-value="id"
            disabled
            class="custom-label"
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="created_at"
            label="Data de Criação"
            variant="outlined"
            type="date"
            disabled
            class="custom-label"
          ></v-text-field>
        </v-col>
      </v-row>
      <!-- Quarta linha de campos -->
      <v-row>
        <v-col cols="6">
          <v-select
            v-model="task_status_id"
            :items="tasksStore.taskStatus"
            label="Status do Chamado"
            item-title="name"
            item-value="id"
            disabled
            class="custom-label"
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="responsible_id"
            :items="tasksStore.users"
            label="Responsável"
            item-title="first_name"
            item-value="id"
            disabled
            class="custom-label"
          ></v-select>
        </v-col>
      </v-row>
      <!-- Quinta linha de campos -->
      <v-row>
        <v-col cols="12">
          <v-textarea
            v-model="observation"
            label="Observação"
            variant="outlined"
            color="primary"
            rows="5"
            readonly
            class="custom-label"
            maxlength="500"
            counter
          ></v-textarea>
        </v-col>
      </v-row>
      <!-- Sexta linha de campos -->
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="expected_date"
            label="Data Esperada"
            variant="outlined"
            type="date"
            disabled
            class="custom-label"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="finish_date"
            label="Data de Conclusão"
            variant="outlined"
            type="date"
            disabled
            class="custom-label"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-select
            v-model="priority_id"
            :items="tasksStore.priori"
            label="Prioridade"
            item-title="name"
            item-value="id"
            disabled
            class="custom-label"
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-textarea
            v-model="priority_justification"
            label="Justificativa da Prioridade"
            variant="outlined"
            color="primary"
            rows="5"
            readonly
            class="custom-label"
            maxlength="500"
            counter
          ></v-textarea>
        </v-col>
      </v-row>
      <!-- Sétima linha de campos -->
      <v-row>
        <v-col cols="6">
          <v-select
            v-model="complexity_id"
            :items="tasksStore.complexity"
            label="Complexidade do Chamado"
            item-title="name"
            item-value="id"
            disabled
            class="custom-label"
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-textarea
            v-model="complexity_justification"
            label="Justificativa da Complexidade"
            variant="outlined"
            color="primary"
            rows="5"
            readonly
            class="custom-label"
            maxlength="500"
            counter
          ></v-textarea>
        </v-col>
      </v-row>
      <!-- Status -->
      <v-row>
        <v-col cols="12">
          <v-switch
            v-model="status"
            :label="status ? 'Ativo' : 'Inativo'"
            color="primary"
            inset
            disabled
          ></v-switch>
        </v-col>
      </v-row>
      <!-- Botões de ação -->
      <v-row justify="end">
        <v-col cols="12" md="auto">
          <v-btn flat text="Fechar" @click="$emit('cancel')" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTasksStore } from "@/stores/apps/tasks";

const emit = defineEmits(["cancel"]);
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const tasksStore = useTasksStore();

const segments = [
  { label: 'Grãos', value: 1 },
  { label: 'Proteína', value: 2 }
];

const types = [
  { label: "Algo que funcionava, parou de funcionar!", value: 1 },
  { label: "Fazer uma solicitação, algo novo (melhoria)!", value: 2 },
];

const segment = ref(props.task.segment);
const task_type = ref(props.task.task_type);
const task_code = ref(props.task.task_code);
const name = ref(props.task.name);
const description = ref(props.task.description);
const owner_id = ref(props.task.owner_id);
const responsible_id = ref(props.task.responsible_id);
const task_status_id = ref(props.task.task_status_id);
const system_screen = ref(props.task.system_screen);
const observation = ref(props.task.observation);
const priority_id = ref(props.task.priority_id);
const complexity_id = ref(props.task.complexity_id);
const priority_justification = ref(props.task.priority_justification);
const complexity_justification = ref(props.task.complexity_justification);
const finish_date = ref(props.task.finish_date ? props.task.finish_date.split('T')[0] : null);
const expected_date = ref(props.task.expected_date ? props.task.expected_date.split('T')[0] : null);
const created_at = ref(props.task.created_at ? props.task.created_at.split('T')[0] : null);
const status = ref(props.task.status);
</script>

<style scoped>
.custom-label .v-label {
  font-weight: bold !important;
  color: white !important;
  font-size: 1.2rem !important;
}
</style>
