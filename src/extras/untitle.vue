<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar (Aside) -->
    <aside class="bg-gray-800 text-white w-64 flex-shrink-0">
      <!-- Logo y enlaces del sidebar -->
      <div class="p-4 border-b border-gray-700">
        <h2 class="text-lg font-semibold">Dashboard</h2>
      </div>
      <nav class="py-4">
        <ul>
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">Usuarios</li>
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">Productos</li>
          <!-- Agregar más enlaces según sea necesario -->
        </ul>
      </nav>
    </aside>

    <!-- Contenido principal -->
    <main class="flex-1 overflow-y-auto">
      <!-- Header -->
      <header class="bg-blue-500 text-white py-4 px-6 shadow">
        <h1 class="text-2xl font-semibold">Dashboard</h1>
      </header>

      <!-- Contenido del dashboard -->
      <div class="p-6">
        <!-- Aquí puedes colocar gráficos, tablas, etc. -->
        <h2 class="text-lg font-semibold mb-4">Contenido del Dashboard</h2>
        <div class="bg-white rounded-lg shadow-md p-4">
          <!-- Contenido del dashboard -->
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, velit?
        </div>
      </div>
    </main>
  </div>
</template>