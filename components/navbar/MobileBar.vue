<template>

  <footer class="header-class">

    <NuxtLink to="/" class="logos">
      Rahman
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
  </footer>

</template>
<style scoped>
.header-class {
  width: 100%;
  z-index: 1000;
  position: fixed;
  padding: 1rem 3rem;
  margin-inline: auto;
  margin-block: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  -webkit-backdrop-filter: blue(12px);
  backdrop-filter: blur(12px);
}

.logos {
  font-weight: bold;
  list-style: none;
  text-decoration: none;
  color: #c8d7e4;
}

.logos:hover {
  color: #33CCFF;
}
@media (width >=768px) {
  .header-class {
    display: none;
  }
}
</style>
