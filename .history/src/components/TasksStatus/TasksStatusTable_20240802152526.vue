<template>
  <v-app>
    <v-main>
      <v-container>
        <v-data-table
          :headers="headers"
          :items="items"
        ></v-data-table>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Age', value: 'age' },
      ],
      items: [
        { name: 'John Doe', age: 30 },
        { name: 'Jane Doe', age: 25 },
      ],
    };
  },
};
</script>
