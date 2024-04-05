<template>
  <nav>
    <ul class="theNav">

      <li>
        <NuxtLink to="/" class="NuxtLinks" active-class="color-active">
          Home
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="#blog" class="text-2xl md:text-base p1 color-hover" active-class="color-active">
          Blog
        </NuxtLink>
      </li>

    </ul>
  </nav>
</template>

<style scoped>
.theNav {
  display: flex;
  flex-direction: column;
}

.NuxtLinks {
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1rem;
}

.NuxtLinks:hover {
  color: blue;
}


@media screen and (min-width: 768px) {
  .theNav {
    flex-direction: row;
    margin-left: 1rem;
  }
}
</style>
