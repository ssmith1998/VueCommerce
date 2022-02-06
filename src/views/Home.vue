<template>
<div class="wrapper">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="font-bold text-center text-3xl">Shop by Category</h1>
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <category-item v-for="(category,index) in categories" :key="index" :category="category"/>
          </div>
    </div>
</div>
</template>

<script>
import categoryItem from '@/components/categoryItem'
export default {
  name: 'Home',
  components: {
    'category-item': categoryItem
  },
  mounted () {
    this.$store.dispatch('shop/ListProducts').then((response) => {
      console.log(response)
    })
  },
  computed: {
    categories () {
      return this.$store.state.shop.categories
    }
  }

}
</script>
