<template>

  <NavBar />

  <main class="container">
    <slot />
  </main>

  <!-- <footer> -->
  <!-- </footer> -->
</template>

<style scoped>

.container {
  width: 100%;
  margin: 1rem auto;
}

@media (width >= 640px) {
  .container {
    max-width: 640px;
  }
}

@media (width >= 768px) {
  .container {
    max-width: 768px;
  }
}

@media (width >= 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (width >= 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (width >= 1536px) {
  .container {
    max-width: 1536px;
  }
}
</style>
