<template>
  <div id="app">
    <router-view/>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import footGuide from "./components/footGuide/footGuide"

  export default {
    name: 'App',
    components: {
      footGuide
    },
    created() {
      document.getElementById('app').style.display = 'block';
      document.body.removeChild(document.getElementById('loader'))
    }
  }
</script>

<style>

</style>
