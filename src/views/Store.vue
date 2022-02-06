<template>
  <div class="p-16">
    <notify ref="notify" :message="notify.message" />
    <filter-drawer :open="openFilter" @filter="onFilter" @reset="onReset"/>
    <button v-if="!openFilter" @click="openFilter = !openFilter" class="font-bold cursor-pointer rounded-full border bg-blue-alt p-6 filterBtn text-white hover:bg-white hover:text-blue transition ease-in duration-300">Filter</button>
    <button v-else @click="openFilter = !openFilter" class="font-bold cursor-pointer rounded-full border bg-blue-alt p-6 filterBtn text-white hover:bg-white hover:text-blue transition ease-in duration-300">Close</button>
    <div class=" items-center">
  <div v-if="products.length > 0" class="store p-4">
   <product-item v-for="(product,index) in products" :key="index"  :product="product" @addToBasket="onAddToBasket" />
  </div>
    <template v-else>
      <h3 class="text-center font-bold w-full">There are no products to show</h3>
    </template>
</div>
  </div>
</template>

<script>
import filterDrawer from "@/components/filterDrawer"
import productItem from "@/components/productItem"
import notify from '@/components/notify.vue'

export default {
  data () {
    return {
      openFilter:false,
      notify: {
        message: ''
      }
    }
  },
  components: {
    'filter-drawer': filterDrawer,
    'product-item': productItem,
    'notify': notify
  },
  created () {
    this.onRequest()
    if(this.$route.query.category){
      console.log(this.$route.query.category)
      let filters = {
        category: this.$route.query.category
      }
      this.$store.dispatch('shop/filterProducts', filters).then((response) => {
        console.log('FILTER',response)
      })
    }
  
  },
  methods: {
    onAddToBasket (product) {
      console.log(product)
      this.notify.message = `Product ${product.title} has been added to your basket!`
      this.$refs.notify.show()

    },
    onFilter(filters) {
      this.$store.dispatch('shop/filterProducts', filters).then(() => {
        this.openFilter = false
      })
    },

    onRequest() {
      this.$store.dispatch('shop/ListProducts').then((products) => {
      console.log(products)
    })
    },
    onReset () {
      this.onRequest()
      this.openFilter = false
    }
  },

  computed: {
    products () {
      return this.$store.state.shop.products
    }
  }
}
</script>

<style>
.store {
  display: grid;
grid-template-columns: repeat(3, 1fr);
}

.filterBtn{
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>
