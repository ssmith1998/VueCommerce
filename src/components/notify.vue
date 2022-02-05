<template>
  <div v-if="showNotification" class="notification" :style="`background-color:${color};`">
      <p>{{message}}</p>
  </div>
</template>

<script>
export default {
data () {
    return {
        showNotification: false
    }
},
props: {
    color: {
        type: String,
        default: 'green',
    },
    message: {
        type: String,
        default: 'This is your message',
        required: true  
    },
    duration: {
       type: Number,
        default: 3000,
    }
},
methods: {
    show () {
        this.showNotification = true
        setTimeout(() => {
         this.showNotification = false
        },this.duration)
    },
}
}
</script>

<style>
.notification {
    position: fixed;
    top: 5px;
    right: 5px;
    padding:10px;
    color:white;
    border-radius: 10px;
}
</style>