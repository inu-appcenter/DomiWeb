<template>
  <div id="app">
   <router-view></router-view>
    <Sum></Sum>
  </div>
</template>

<script>
import Sum from './Page/Sum'
import axios from 'axios'

export default {
  name: 'app',

  created: function(){
  },

  components: {
    Sum,
  }
}
</script>

<style lang="scss">

</style>
