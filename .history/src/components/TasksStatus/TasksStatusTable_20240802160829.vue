<script setup>
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

const page = ref({ title: 'Data Table Filtering' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Data Table Filtering',
        disabled: true,
        href: '#'
    }
]);

/*Header Data*/
const search = ref('');
const customsearch = ref('');
const headers = ref([
    { title: 'Name', align: 'start', key: 'name' },
    { title: 'Project Name', align: 'start', key: 'project' },
    { title: 'Post', align: 'start', key: 'post' },
    { title: 'Status', align: 'start', key: 'status' },
    { title: 'Budget', align: 'end', key: 'budget' },
]);

const filtrable = ref('');

// Dados estáticos para teste
const BasicDatatables = ref([
    { name: 'John Doe', project: 'Project A', post: 'Manager', status: 'Active', budget: '$1000' },
    { name: 'Jane Smith', project: 'Project B', post: 'Developer', status: 'Inactive', budget: '$2000' },
    { name: 'Bob Johnson', project: 'Project C', post: 'Designer', status: 'Active', budget: '$1500' }
]);

const UppercaseFilter = ref([
    { name: 'JOHN DOE', project: 'PROJECT A', post: 'MANAGER', status: 'ACTIVE', budget: '$1000' },
    { name: 'JANE SMITH', project: 'PROJECT B', post: 'DEVELOPER', status: 'INACTIVE', budget: '$2000' },
    { name: 'BOB JOHNSON', project: 'PROJECT C', post: 'DESIGNER', status: 'ACTIVE', budget: '$1500' }
]);

const Filtrable = ref([
    { image: 'image1.jpg', rating: 4, stock: true },
    { image: 'image2.jpg', rating: 3, stock: false },
    { image: 'image3.jpg', rating: 5, stock: true }
]);

function filterOnlyCapsText(value, query) {
    return value != null &&
        query != null &&
        typeof value === 'string' &&
        value.toString().toLocaleUpperCase().indexOf(query) !== -1;
}
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Basic Filter">
                <v-text-field v-model="search" append-inner-icon="mdi-magnify" label="Search" single-line hide-details
                    class="mb-5" />
                <v-data-table items-per-page="5" :headers="headers"  :items="BasicDatatables" :search="search"
                    class="border rounded-md">
                </v-data-table>
            </UiParentCard>

            <UiParentCard title="Custom Filter" class="mt-6">
                <v-text-field v-model="customsearch" append-inner-icon="mdi-magnify" label="Search (UPPER CASE ONLY)"
                    single-line hide-details class="mb-5" />
                <v-data-table items-per-page="5" :headers="headers" :items="UppercaseFilter" :search="customsearch"
                    :custom-filter="filterOnlyCapsText" class="border rounded-md">
                </v-data-table>
            </UiParentCard>

            <UiParentCard title="Filterable" class="mt-6">
                <v-card flat>
                    <v-card-title class="d-flex align-center pe-2">
                        My Table
                        <v-spacer></v-spacer>
                        <v-text-field v-model="filtrable" prepend-inner-icon="mdi-magnify" density="compact" label="Search"
                            single-line flat hide-details variant="solo-filled"></v-text-field>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-data-table v-model:search="filtrable" :items="Filtrable">
                        <template v-slot:header.stock>
                            <div class="text-end">Stock</div>
                        </template>

                        <template v-slot:item.image="{ item }">
                            <v-card class="my-2" elevation="2" rounded>
                                <v-img :src="`${item.image}`"
                                    height="64" cover></v-img>
                            </v-card>
                        </template>

                        <template v-slot:item.rating="{ item }">
                            <v-rating :model-value="item.rating" color="warning" density="compact" size="small"
                                readonly></v-rating>
                        </template>

                        <template v-slot:item.stock="{ item }">
                            <div class="text-end">
                                <v-chip :color="item.stock ? 'success' : 'error'"
                                    :text="item.stock ? 'In stock' : 'Out of stock'" class="text-uppercase" label
                                    size="small"></v-chip>
                            </div>
                        </template>
                    </v-data-table>
                </v-card>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
