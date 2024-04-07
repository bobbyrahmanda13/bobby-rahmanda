<template>

  <header
    class="px-12 py me-auto m-be-0 m-bs-0 flex justify-between items-center text-white sticky z-1000 position-top-none bg-colorBase">

      <NuxtLink to="/" 
        class="fw-bold list-none decoration-none font-size-none text-white hover:text-colorTwo hover:fw-bold">
        Bobby Rahmanda
      </NuxtLink>

      <NavBar />

  </header>

  <main class="container mx-auto text-grey-100">
    <slot />
  </main>

  <!-- <footer> -->
  <!-- </footer> -->
</template>
