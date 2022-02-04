<template>
  <div :class="open ? 'filterDrawerOpen py-6' : 'filterDrawer py-6'">
      <h6 class="font-bold text-white">Filters</h6>
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