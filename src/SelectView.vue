<template>
    <div>
      <div class="rounded-lg p-4 bg-purple-600 flex flex-col my-3">
        <select v-model="selected">
          <option v-for="option in options" :value="option.value" :key="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      
      <div class="rounded-lg p-4 bg-purple-600 flex flex-col my-3">
        <TableOne v-if="selected === '1'"></TableOne>
        <TableTwo v-else-if="selected === '2'"></TableTwo>
        <TableOne v-else="selected === '3'"></TableOne>
        <!-- Puedes añadir más condiciones según las opciones seleccionadas -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import TableOne from './views/TableOne.vue';
  import TableTwo from './views/TableTwo.vue';
  
  const selected = ref('1'); // Inicializamos con '1' por ejemplo
  const options = ref([
    { text: 'One', value: '1' },
    { text: 'Two', value: '2' },
    { text: 'Three', value: '3' }
  ]);
  </script>
  