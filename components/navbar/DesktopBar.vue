<template>

    <header
      class="hidden sticky z-1000 w-100% px-12 py-1rem me-auto m-be-0 m-bs-0 md:flex justify-between items-center position-top-none backdrop-blur-md">

      <NuxtLink to="/" class="fw-bold list-none decoration-none font-size-none text-white hover:color-hover">
        Bobby Rahmanda
      </NuxtLink>

      <nav>

        <ul class="flex gap-2rem list-none items-center">

          <li>
            <NuxtLink to="/" class="color-font hover:color-hover" active-class="color-active">Home</NuxtLink>
          </li>

          <!-- <li> -->
          <!--   <NuxtLink to="/" class="text-white hover:color-hover" active-class="color-active">Blog</NuxtLink> -->
          <!-- </li> -->

          <li>
            <NuxtLink to="/about" class="color-base hover:color-hover" active-class="color-active">About</NuxtLink>
          </li>

          <li class="flex justify-between items-center">
            <NuxtLink to="https://github.com/bobbyrahmanda13"
              class="mx-0.5rem text-lg text-white hover:color-hover">
          <Icon name="i-bi-github" />
            </NuxtLink>
            <NuxtLink to="https://t.me/Rahman_0000" class="mx-0.5rem text-lg text-white hover:color-hover">
              <Icon name="i-logos-telegram" />
            </NuxtLink>
          </li>

        </ul>
      </nav>
    </header>

</template>
