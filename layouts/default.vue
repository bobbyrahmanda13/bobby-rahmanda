<template>

  <NavBar />

  <main class="main-layout">

    <slot />

  </main>

  <!-- <footer> -->
  <!-- </footer> -->
</template>

<style scoped>
.main-layout {
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 4rem;
  color: #c8d7e4;
}
</style>
