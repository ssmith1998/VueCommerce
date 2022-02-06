<template>
  <div class="bg-white">
      <div class="group shadow-xl p-6 cursor-pointer rounded">
        <div class="w-full min-h-32 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <p class="text-2xl text-black">{{category}}</p>
        </div>
        <div class="mt-4 flex justify-between">
        <button @click="onShop" type="submit" class="mt-10 mx-auto bg-blue-alt border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Shop by {{category}}</button>
      </div>
</div>
  </div>
</template>

<script>
export default {
props: {
    category:{
        type: String,
    }
},
methods: {
    onShop () {
        this.$router.push({name: 'Store', query:{ category: this.category }});
    }
}
}
</script>

<style>

</style>