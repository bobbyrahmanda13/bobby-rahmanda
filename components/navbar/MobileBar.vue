<template>

  <header class="header-class">

    <NuxtLink to="/" class="logo">
      Rahman
    </NuxtLink>

    <nav>

      <ul class="ul-nav">

        <li>
          <NuxtLink to="/" class="li-class" active-class="li-active">Home</NuxtLink>
        </li>

        <li>
          <NuxtLink to="/blog" class="li-class" active-class="li-active">Blog</NuxtLink>
        </li>

        <!-- <li> -->
        <!--   <NuxtLink to="/" class="text-colorText hover:text-colorTwo" active-class="text-colorTwo">About</NuxtLink> -->
        <!-- </li> -->

        <li class="li-icons">
          <NuxtLink to="https://github.com/bobbyrahmanda13" target="_blank" class="link-icons-list">
            <div class="i-bi-github" />
          </NuxtLink>
          <NuxtLink to="https://t.me/Rahman_0000" target="_blank" class="link-icons-list">
            <div class="i-logos-telegram" />
          </NuxtLink>
        </li>

      </ul>
    </nav>
  </header>

</template>

<style scoped>
.header-class {
  width: auto;
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

.logo {
  font-weight: bold;
  list-style: none;
  text-decoration: none;
  color: #c8d7e4;
}

.logo:hover {
  color: #33CCFF;
}

.ul-nav {
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;
}

.li-class {
  color: #c8d7e4;
}

.li-class:hover {
  color: #33ccff;
}

.li-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link-icons-list {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color:#c8d7e4;
}

.link-icons-list:hover {
  color: #33ccff;
}
.li-active{
  color:#33ccff
}

@media (width >=768px) {

  .header-class {
    display: none;
  }

}
</style>
