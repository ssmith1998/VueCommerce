<template>
  <div :class="open ? 'filterDrawerOpen py-6' : 'filterDrawer py-6'">
      <h6 class="font-bold text-white">Filters</h6>

      <div class="filtersWrapper p-6">
<form @submit.prevent="onFilter">
    <select v-model="filters.category" v-if="categories.length > 0"  name="categories" id="categories" class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
      <option selected disabled value="0">-- Select Category --</option>
        <option v-for="(category, index) in categories" :key="index" :value="category">{{category}}</option>
     </select>
     <div class="flex mt-6">
         <input v-model="filters.price_from" type="number" step="1" placeholder="Price From" class="block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mr-4">
         <input v-model="filters.price_to" type="number" step="1" placeholder="Price To" class="block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ml-4">
     </div>

  <button class=" disabled:bg-black bg-blue text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded mt-4 w-full">
        Filter
    </button>
</form>
    <button @click="onReset" class=" bg-green text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded mt-4 w-full">
        Reset Filter
    </button>
      </div>
  </div>
</template>

<script>
export default {
name: 'filter-drawer',
props: {
  'open':  {
        required: true,
        type: Boolean,
        default: false
    }
},
data () {
    return {
        filters: {
            category: '0'
        }
    }
},
methods: {
onFilter () {
    if(this.filters.category !== '0' || this.filters.price_from || this.filters.price_to) {
        this.$emit('filter', this.filters)
        console.log(this.filters)
    }
},
onReset () {
    this.filters = {
        category: '0'
    }
    console.log(this.filters)
    this.$emit('reset')
}
},
computed: {
    categories () {
        return this.$store.state.shop.categories
    }
}
}
</script>

<style>
.filterDrawer {
    position: fixed;
    right: 0px;
    top: 0px;
    height: 100%;
    width: 0px;
    background-color: black;
    /* z-index: 3; */
    transition: width 1s;
    overflow-x: hidden;
}

.filterDrawerOpen {
    position: fixed;
    right: 0px;
    top: 0px;
    height: 100%;
    width: 30%;
    background-color: black;
    /* z-index: 3; */
    transition: width 1s;

}
</style>