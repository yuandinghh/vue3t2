<template>
  <div>
    <h2>新闻</h2>
    <p>{{ name }}</p>
    <p>{{ $route.params.name }}</p>
    <ul>
      <li>
        <router-link to="/xinwen/百度">a百度新闻</router-link>
      </li>
      <li>
        <router-link to="/xinwen/网易">a网易新闻</router-link>
      </li>
      <li>
        <router-link to="/xinwen/头条">a头条新闻</router-link>
      </li>
    </ul>
  </div>
</template>

<script land="ts">
import { ref, reactive, onBeforeMount, onMounted, computed } from "vue";

//console.log('1-开始创建组件-setup')
/** 数据部分   */
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "xinwen",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    xinwen: () => import("./xinwen.vue")
  },
  data() {
    return {
      name: "xinwen",
      age: 0
    };
  }
};
</script>

<style scoped lang='less'>
</style>