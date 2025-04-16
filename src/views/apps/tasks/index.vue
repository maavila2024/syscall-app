<template>
  <div>
    <div class="mb-5 pb-5 border-b border-opacity-100">
      <v-row align="center" justify="space-between" class="mb-4">
        <v-col cols="12" lg="4" md="4">
          <v-text-field
            density="compact"
            v-model="search"
            label="Pesquisar Chamados"
            append-inner-icon="mdi-magnify"
            hide-details
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="2" md="2" class="text-right">
          <v-dialog width="800" persistent>
            <template #activator="{ props: activatorProps }">
              <v-btn flat color="primary" v-bind="activatorProps">Novo Chamado</v-btn>
            </template>
            <template #default="{ isActive }">
              <v-card width="800">
                <v-card-title>Adicionar chamado</v-card-title>
                <v-card-text>
                  <TaskAddForm
                    @add="isActive.value = false"
                    @cancel="isActive.value = false"
                  />
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="12" lg="4" md="4" class="d-flex align-center">
          <label class="mr-4">Segmento:</label>
          <v-radio-group
            v-model="selectedSegment"
            @change="updateUserSegment"
            row
            inline
            class="radio-button"
          >
            <v-radio label="Todos" value="0" class="mr-2"></v-radio>
            <v-radio label="Grãos" value="1" class="mr-2"></v-radio>
            <v-radio label="Proteína" value="2"></v-radio>
          </v-radio-group>
        </v-col>

        <v-col cols="12" lg="8" md="8" class="d-flex align-center">
          <div class="switch-container mr-4">
            <v-switch
              v-model="showAllTasks"
              label="Mostrar Todos Chamados"
              color="primary"
              hide-details
              @change="handleShowAllChange"
              @click.stop
            ></v-switch>
          </div>

          <div class="filter-date-section" @click.stop>
            <div class="text-caption text-grey mb-1">
              Filtrar chamados por data de conclusão:
            </div>
            <div class="d-flex align-center">
              <v-select
                v-model="selectedMonth"
                :items="months"
                label="Mês"
                hide-details
                class="mr-2"
                density="compact"
                style="min-width: 180px; max-width: 200px"
                variant="outlined"
              ></v-select>

              <v-select
                v-model="selectedYear"
                :items="years"
                label="Ano"
                hide-details
                class="mr-2"
                density="compact"
                style="min-width: 120px; max-width: 130px"
                variant="outlined"
              ></v-select>

              <v-btn 
                color="primary" 
                @click="applyDateFilter"
                :disabled="!selectedMonth || !selectedYear"
                class="mr-4"
              >
                Filtrar
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-progress-circular
      v-if="isLoading"
      :width="3"
      color="primary"
      indeterminate
    />
    <template v-else>
      <TasksTable
        @openChat="openChatModal"
        @addNote="openAddNoteModal"
        @openAttachments="openAttachmentsModal"
        @update:filters="applyFilters"
        @update:page="handlePageChange"
      />
      <v-dialog v-model="isShowing" width="800" persistent>
        <template #default="{ isActive }">
          <v-card width="800">
            <v-card-title>Visualizar chamado</v-card-title>
            <v-card-text>
              <TaskShowForm
                :task="toShow"
                @cancel="isActive.value = false"
                @show="isActive.value = false"
              />
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
      <v-dialog v-model="isEditing" width="800" persistent>
        <template #default="{ isActive }">
          <v-card width="800">
            <v-card-title>Editar chamado</v-card-title>
            <v-card-text>
              <TaskEditForm
                :task="toEdit"
                @cancel="isActive.value = false"
                @edit="isActive.value = false"
              />
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
      <v-dialog v-model="isDeleting" width="800" persistent>
        <template #default="{ isActive }">
          <v-card
            :prepend-icon="TrashIcon"
            title="Você tem certeza que deseja deletar este chamado?"
          >
            <template #actions>
              <v-spacer></v-spacer>
              <v-btn @click="isActive.value = false">Cancelar</v-btn>
              <v-btn
                @click="deleteTask(toDelete)"
                variant="tonal"
                color="error"
                :loading="deleting"
              >Deletar</v-btn>
            </template>
          </v-card>
        </template>
      </v-dialog>
    </template>
    <TaskChat
      :taskId="selectedTaskId"
      :showChatModal="showChatModal"
      :userId="loggedInUserId"
      @update:showChatModal="showChatModal = $event"
    />
    <v-dialog v-model="showAddNoteModal" max-width="500px" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5">Adicionar Nota de Trabalho</span>
        </v-card-title>
        <v-card-text>
          <TaskChat
            :taskId="selectedTaskId"
            :showChatModal="showChatModal"
            :userId="loggedInUserId"
            @update:showChatModal="showChatModal = $event"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="showAddNoteModal = false">Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="addNote">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <TaskAttachments
      :taskId="selectedTaskId"
      :showAttachmentsModal="showAttachmentsModal"
      @update:showAttachmentsModal="showAttachmentsModal = $event"
    />
  </div>
</template>
