<template>
  <nav>
    <ul class="flex gap-2rem list-none items-center">

      <li>
        <NuxtLink to="/" class="text-colorText hover:text-colorTwo">Home</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/" class="text-colorText hover:text-colorTwo">Blog</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/" class="text-colorText hover:text-colorTwo">About</NuxtLink>
      </li>

      <li class="flex justify-between items-center">
        <NuxtLink to="https://github.com/bobbyrahmanda13" class="mx-0.5rem text-lg text-colorText hover:text-colorTwo">
          <div class="i-bi-github" />
        </NuxtLink>
        <NuxtLink to="https://t.me/Rahman_0000" class="mx-0.5rem text-lg text-colorText hover:text-colorTwo">
          <div class="i-logos-telegram" />
        </NuxtLink>
      </li>

    </ul>
  </nav>
</template>
