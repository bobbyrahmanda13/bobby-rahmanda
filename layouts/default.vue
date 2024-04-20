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
  max-width: 960px;
  margin: 0rem auto;
  padding:1rem;
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
