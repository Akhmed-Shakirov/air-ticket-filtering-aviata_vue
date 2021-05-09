<template>
  <div id="app">
    <v-aviata />
  </div>
</template>

<script>
import vAviata from './components/v-aviata'

export default {
  name: 'App',
  components: {
    vAviata
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
#app {
  background: #D7D7D7;
  width: 100%;
}
</style>
