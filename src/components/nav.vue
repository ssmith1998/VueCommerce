<template>

<header class="bg-blue p-6 text-white flex justify-between items-center">
  <div class="logo font-bold text-xl">
    VueCommerce
  </div>
  <nav class="mainNav">
    <router-link v-for="(link,index) in pageLinks" :key="index" class="text-white px-6" :to="{name: link.link}">{{link.label}}</router-link>
  </nav>
</header>
</template>

<script>
export default {
name: 'main-nav',
data () {
  return {
    pageLinks: [
      {
        link: 'Home',
        label: 'Home'
      },
      {
        link: 'About',
        label: 'About'
      },
      {
        link: 'Store',
        label: 'Store'
      }
    ],
  }
}
}
</script>

<style>

</style>