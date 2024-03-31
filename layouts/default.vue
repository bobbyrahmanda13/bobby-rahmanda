<template>
  <div class="container mx-auto">
    <header class="flex justify-between items-start md:items-center mt-5 mb-5">
      <div class="flex justify-center items-center md:space-x-12">
        <div class="hidden md:block">
          <NuxtLink to="/" class="text-xl font-semibold p2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded">Bobby
            Rahmanda</NuxtLink>
        </div>

        <NavBar />
      </div>
    </header>

    <main class="mt-[30px]">
      <slot />
    </main>

    <!-- <footer> -->
    <!-- </footer> -->
  </div>
</template>
