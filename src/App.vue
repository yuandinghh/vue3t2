<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
   <p>{{ err }}</p>   <!-- 显示异步错误 -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <!-- <TelePort msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <!-- <Modal msg="Welcome to Your Vue.js  Modal" /> -->
    <p> Suspense等待异步组件时渲染一些额外内容，让应用有更好的用户体验,
      AsyncShow msg="Welcome to Suspense" 等 loading.......渲染后才渲染
    </p>
    <!-- <dog-show /> -->
    <!-- <DogShow /> -->
    <Suspense>
      <template #default>
        <div>
          <p>把2个组件都放到一个div里面才会显示</p>
        <AsyncShow msg="Welcome to Suspense异步请求" />
        <!-- <AsyncShow/>  <async-show/> 两个组件结果相同-->
        <dog-show  msg="Welcome to DogShow"/>  
        <!-- <DogShow msg="Welcome to DogShow" /> -->
         <!-- <DogShow /> -->
          </div>
      </template>
      <template #fallback>
        <h1 style="color:blueviolet">loading........</h1>
      </template>
    </Suspense>
  
  </div>
</template>

<script lang="ts">
import { defineComponent,onErrorCaptured, ref } from "vue";
// import { defineAsyncComponent } from 'vue'

import HelloWorld from "./components/HelloWorld.vue";
import AsyncShow from "./components/AsyncShow.vue";
import DogShow from "./components/DogShow.vue";

// import TelePort from "./components/TelePort.vue";
//import Modal from "./components/Modal.vue";

// const let a =1;
export default defineComponent({
  name: "App",
  components: {
    // TelePort,
    //  Modal,    // eslint-disable-next-line vue/no-unused-components
   DogShow,
    AsyncShow,
    HelloWorld,
  },
  setup() { 
    const err = ref(null)
   onErrorCaptured((e:any) => {         //  捕获异步错误
      err.value = e
      console.log(err);
      return true;
    });
    return {
      err,
    };  
  }
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
