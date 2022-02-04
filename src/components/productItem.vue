<template>
   <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl mx-6 my-6">
      <div class="prod-title">
        <p class="text-2xl uppercase text-gray-900 font-bold">{{product.title}}</p>
      </div>
      <div class="prod-img">
        <img :src="product.image"
             class="w-full object-cover object-center" />
      </div>
      <p class="uppercase text-sm text-gray-400 py-6">
          {{clipString(product.description)}}
        </p>
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
</template>

<script>
export default {
props: {
    product: {
        type:Object,
        required:true
    }
},
methods: {
    clipString (str) {
         return (str.length > 60) ? str.substr(0, 60-1) + '...' : str;

    }
}
}
</script>

<style>

</style>