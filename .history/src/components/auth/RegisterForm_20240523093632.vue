<script setup lang="ts">
import { ref } from 'vue';
import Logo from '@/layouts/full/logo/Logo.vue';
import axios from 'axios';

function register(){
    const data = {
        first_name: 'New',
        last_name: 'User',
        email: 'newuser@test.com',
        password: '1234567A'
    }
    axios.post('api/register', data)
}

const checkbox = ref(false);
const valid = ref(true);
const show1 = ref(false);
const password = ref('');
const email = ref('');
// const passwordRules = ref([
//     (v: string) => !!v || 'Password is required',
//     (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters'
// ]);
// const emailRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);
const ffirst_name = ref('');
const flast_name = ref('');
const fnameRules = ref([
    (v: string) => !!v || 'Name is required',
    (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters'
]);
</script>
<template>
    <v-form ref="form" v-model="valid" lazy-validation action="/pages/boxedlogin" class="mt-5">
        <v-label class="text-subtitle-1 font-weight-medium pb-2">Nome</v-label>
        <VTextField v-model="ffirst_name"  required ></VTextField>
        <v-label class="text-subtitle-1 font-weight-medium pb-2">E-mail</v-label>
        <VTextField v-model="email" required ></VTextField>
        <v-label class="text-subtitle-1 font-weight-medium pb-2">Senha</v-label>
        <VTextField
            v-model="password"
            :counter="10"
            required
            variant="outlined"
            type="password"
            color="primary"
        ></VTextField>
        <v-btn 
        size="large" 
        class="mt-2" 
        color="primary" 
        block 
        @click="register" 
        flat>Sign Up</v-btn>
    </v-form>
</template>
