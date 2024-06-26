<template>
    <div class="flex flex-col h-screen">
  
      <!-- Aside y Header dentro del contenedor principal -->
      <Aside></Aside>  
      <Header></Header>
  
      <!-- Main ocupa el espacio restante -->
      <main class="flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae suscipit quae dolore optio, voluptate minima fugiat laudantium vitae animi excepturi vero quis ipsam rem libero blanditiis adipisci mollitia non.
      </main>
  
    </div>
  </template>
  
  <script setup>
    import Aside from './components/Aside.vue';
    import Header from './components/Header.vue';
  </script>
  