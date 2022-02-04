<template>
  <div class="p-16">
    <filter-drawer :open="openFilter" />
    <button v-if="!openFilter" @click="openFilter = !openFilter" class="font-bold cursor-pointer rounded-full border bg-blue-alt p-6 filterBtn text-white hover:bg-white hover:text-blue transition ease-in duration-300">Filter</button>
    <button v-else @click="openFilter = !openFilter" class="font-bold cursor-pointer rounded-full border bg-blue-alt p-6 filterBtn text-white hover:bg-white hover:text-blue transition ease-in duration-300">Close</button>
    <div class=" items-center">
  <div class="store p-4">
    <div v-for="(product,index) in products" :key="index"  class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl mx-6 my-6">
      <div class="prod-title">
        <p class="text-2xl uppercase text-gray-900 font-bold">{{product.title}}</p>
        <p class="uppercase text-sm text-gray-400">
          {{product.description}}
        </p>
      </div>
      <div class="prod-img">
        <img :src="product.image"
             class="w-full object-cover object-center" />
      </div>
      <div class="prod-info grid gap-10">
        <div>
          <ul class="flex flex-row justify-center items-center">
            <li class="mr-4 last:mr-0">
              <span
                    class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
              </span>
            </li>
            <li class="mr-4 last:mr-0">
              <span
                    class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
              </span>
            </li>
            <li class="mr-4 last:mr-0">
              <span
                    class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
              </span>
            </li>
            <li class="mr-4 last:mr-0">
              <span
                    class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
              </span>
            </li>
          </ul>
        </div>
        <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
          <p class="font-bold text-xl">£{{product.price}}</p>
          <button
                  class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-blue-alt hover:text-white border-2 border-gray-900 focus:outline-none">Add
            to cart</button>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import filterDrawer from "@/components/filterDrawer"
export default {
  data () {
    return {
      products: [],
      openFilter:false
    }
  },
  components: {
    'filter-drawer': filterDrawer
  },
  created () {
    this.$axios.get('products').then((response) => {
      console.log(response)
      this.products = response.data
    })
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
