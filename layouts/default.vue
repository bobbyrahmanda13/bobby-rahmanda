<template>
  <div class="container mx-auto">

    <header
      class="px-12 py me-auto m-be-0 m-bs-0 flex justify-between items-center text-white sticky z-1000 position-top-none bg-color-base">

      <NuxtLink to="/" class="fw-bold">Bobby Rahmanda</NuxtLink>

      <NavBar />

    </header>

    <main class="">
      <slot />
    </main>

    <!-- <footer> -->
    <!-- </footer> -->
  </div>
</template>
