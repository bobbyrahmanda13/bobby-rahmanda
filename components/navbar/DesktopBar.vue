<template>

    <header
      class="hidden sticky z-1000 w-100% px-12 py-1rem me-auto m-be-0 m-bs-0 md:flex justify-between items-center position-top-none backdrop-blur-md">

      <NuxtLink to="/" class="fw-bold list-none decoration-none font-size-none text-colorText hover:text-colorTwo">
        Bobby Rahmanda
      </NuxtLink>

      <nav>

        <ul class="flex gap-2rem list-none items-center">

          <li>
            <NuxtLink to="/" class="text-colorText hover:text-colorTwo" active-class="text-colorTwo">Home</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/" class="text-colorText hover:text-colorTwo" active-class="text-colorTwo">Blog</NuxtLink>
          </li>

          <!-- <li> -->
          <!--   <NuxtLink to="/" class="text-colorText hover:text-colorTwo" active-class="text-colorTwo">About</NuxtLink> -->
          <!-- </li> -->

          <li class="flex justify-between items-center">
            <NuxtLink to="https://github.com/bobbyrahmanda13"
              class="mx-0.5rem text-lg text-colorText hover:text-colorTwo">
              <div class="i-bi-github" />
            </NuxtLink>
            <NuxtLink to="https://t.me/Rahman_0000" class="mx-0.5rem text-lg text-colorText hover:text-colorTwo">
              <div class="i-logos-telegram" />
            </NuxtLink>
          </li>

        </ul>
      </nav>
    </header>

</template>
