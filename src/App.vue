
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
// import TelePort from "./components/TelePort.vue";
// const let a =1;
export default defineComponent({
  name: "App",

  components: {
    // TelePort,
    HelloWorld,
  },
});
</script>
//todo 
//bug
//tag
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

</style>
