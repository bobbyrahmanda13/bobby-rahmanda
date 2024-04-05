<template>
  <div class="container mx-auto">

    <header class="">
          <NuxtLink to="/" class="text-xl font-semibold p2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded">Bobby
            Rahmanda</NuxtLink>

        <NavBar />
    </header>

    <main class="mt-[30px]">
      <slot />
    </main>

    <!-- <footer> -->
    <!-- </footer> -->
  </div>
</template>
