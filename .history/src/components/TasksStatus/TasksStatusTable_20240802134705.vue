<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
  ></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Age', value: 'age' }
      ],
      items: [
        { name: 'John Doe', age: 30 },
        { name: 'Jane Smith', age: 25 }
      ]
    }
  }
}
</script>
