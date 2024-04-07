<template>

  <header
    class="px-12 py-1rem me-auto m-be-0 m-bs-0 flex justify-between items-center text-white sticky z-1000 position-top-none backdrop-blur-md">

    <NuxtLink to="/"
      class="fw-bold list-none decoration-none font-size-none text-colorText hover:text-colorTwo">
      Bobby Rahmanda
    </NuxtLink>

    <NavBar />

  </header>

  <main class="container mx-auto text-colorText">
    <slot />
  </main>

  <!-- <footer> -->
  <!-- </footer> -->
</template>
