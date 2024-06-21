<script setup lang="ts">

import { ref, computed, onMounted } from 'vue';
// import { useContactStore } from '@/stores/apps/contact';
import { useTeamsStore } from '@/stores/apps/teams';
import { useAsyncState } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { object, string } from "yup";
import { useForm, useField } from "vee-validate";
import TeamEditForm from '@/components/table/TeamEditForm.vue';


// import contact from '@/_mockApis/apps/contact';

// const store = useContactStore();
const teamsStore = useTeamsStore();
// const { isLoading } = useAsyncState(
//     teamsStore.getTeams()
// )

onMounted(() => {
    teamsStore.getTeams();
});
const getTeams: any = computed(() => {
    return teamsStore.teams;
});
const { teams, toEdit } = storeToRefs(teamsStore)

const isEditing = computed({
    get() {
        return !!Object.keys(toEdit.value).length
    },
    set(value) {
        if (!value) {
            toEdit.value = {}
        }
    }
})

const valid = ref(true);
const dialog = ref(false);
const search = ref('');
const rolesbg = ref(['primary', 'secondary', 'error', 'success', 'warning']);
const desserts = ref(teams);
const editedIndex = ref(-1);
const editedItem = ref({
    id: '',
    name: '',
    default: '',
    avatar: '1.jpg',
    userinfo: '',
    usermail: '',
    phone: '',
    jdate: '',
    role: '',
    rolestatus: ''
});
const defaultItem = ref({
    id: '',
    name: '',
    default: '',
    avatar: '1.jpg',
    userinfo: '',
    usermail: '',
    phone: '',
    jdate: '',
    role: '',
    rolestatus: ''
});

//Methods
const filteredList = computed(() => {
    return desserts.value.filter((user: any) => {
        return user.name.toLowerCase().includes(search.value.toLowerCase());
    });
});

function editItem(team: any) {
    editedIndex.value = desserts.value.indexOf(team);
    editedItem.value = Object.assign({}, team);
    isEditing.value = true;
}
function deleteItem(team: any) {
    const index = desserts.value.indexOf(team);
    confirm('Are you sure you want to delete this team?') && desserts.value.splice(index, 1);
}

function close() {
    dialog.value = false;
    isEditing.value = false;
    setTimeout(() => {
        editedItem.value = Object.assign({}, defaultItem.value);
        editedIndex.value = -1;
    }, 300);
}
function save() {
    if (editedIndex.value > -1) {
        Object.assign(desserts.value[editedIndex.value], editedItem.value);
    } else {
        desserts.value.push(editedItem.value);
    }
    close();
}

//Computed Property
const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'New Team' : 'Edit Team';
});

const emit = defineEmits(['cancel', 'add'])
const schema = object({
    name: string().required().label("Nome"),
});

const { handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: schema,
    initialValues: {
    name: '',
     },
});

const submit = handleSubmit(async (payload) => {
    await teamsStore.storeTeam(payload)
    close();
})

const submit1 = handleSubmit(async (payload) => {
    await teamsStore.updateTeam(team.token, payload)
    close();
})

const feedbackMessage = ref('');
const { value: name } = useField("name");
</script>
<template>
    <pre>{{  toEdit }}</pre>
    <v-row>
        <v-col cols="12" lg="4" md="6">
            <v-text-field density="compact" v-model="search" label="Search Teams" hide-details variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" lg="8" md="6" class="text-right">
            <v-dialog v-model="dialog" max-width="500">
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" v-bind="props" flat class="ml-auto" >
                        <v-icon class="mr-2">mdi-account-multiple-plus</v-icon>Add Team
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title class="pa-4 bg-secondary">
                        <span class="title text-white">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-form @submit.prevent="submit">
                            <VAlert v-if="feedbackMessage" color="error">
                                {{ feedbackMessage }}
                            </VAlert>
                            <v-row>
                               <!-- <v-col cols="12" sm="6">
                                    <v-text-field variant="outlined" hide-details v-model="editedItem.id" label="Id"></v-text-field>
                                </v-col> -->
                                <v-col cols="12" sm="12">
                                    <v-text-field
                                        variant="outlined"
                                        v-model="name"
                                        label="Name"
                                        :error-messages="errors.name"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        <v-card-actions class="pa-4">
                            <v-spacer></v-spacer>
                                <v-btn color="error" @click="close">Cancel</v-btn>
                                    <v-btn
                                        color="secondary"
                                        :disabled="name == ''"
                                        variant="flat"
                                        :loading="isSubmitting"
                                        type="submit"
                                        >Save</v-btn
                                    >
                        </v-card-actions>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <v-dialog v-model="isEditing" max-width="500">
                <TeamEditForm />
                
            </v-dialog>
        </v-col>
    </v-row>
    <v-table class="mt-5">
        <thead>
            <tr>
                <th class="text-subtitle-1 font-weight-semibold">Name</th>
                <th class="text-subtitle-1 font-weight-semibold">Role</th>
                <th class="text-subtitle-1 font-weight-semibold">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="team in teams" :key="team.name">
                <td>
                    <div class="d-flex align-center py-4">
                        <div>
                        </div>

                        <div class="ml-5">
                            <h4 class="text-h6 font-weight-semibold">{{ team.name }}
                                <v-chip v-if="team.default" size="small" variant="tonal" color="primary" class="ml-6">Default</v-chip>
                            </h4>
                        </div>
                    </div>
                </td>
                <td>
                    <v-chip size="small" label>{{  team.role }}</v-chip>
                </td>
                <td>
                    <div class="d-flex align-center">
                        <v-tooltip text="Edit">
                            <template v-slot:activator="{ props }">
                                <v-btn icon flat @click="toEdit = team" v-bind="props"
                                    ><PencilIcon stroke-width="1.5" size="20" class="text-primary"
                                /></v-btn>
                            </template>
                        </v-tooltip>
                        <v-tooltip text="Delete">
                            <template v-slot:activator="{ props }">
                                <v-btn icon flat @click="deleteItem(team)" v-bind="props"
                                    ><TrashIcon stroke-width="1.5" size="20" class="text-error"
                                /></v-btn>
                            </template>
                        </v-tooltip>
                    </div>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>
