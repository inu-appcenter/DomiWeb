<template>
  <div id="app">
   <router-view></router-view>
    <Sum></Sum>
  </div>
</template>

<script>
import Sum from './Page/Sum'

export default {
  name: 'app',

  components: {
    Sum,
  }
}
</script>

<style lang="scss">

</style>
