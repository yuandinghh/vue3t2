
<template>
  <div id="center">
    <h3>{{ msg }}</h3>   
  </div>
</template>

<script lang="ts" >
import { defineComponent } from "vue";
import {  reactive, toRefs,  onBeforeMount,  onMounted, watchEffect  } from "vue";  
// ref, reactive, toRefs, 

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  props: {
    msg: String
  },
  setup() {
    const data = reactive({

    });
    onBeforeMount(() => {
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      console.log("3.-组件挂载到页面之后执行-------onMounted");
    });
    watchEffect(() => {
      console.log(`当${msg}的值变化的时候调用，初始化
    的时候也调用一次
     `);
    });

    // 使用toRefs解构
    // let { } = { ...toRefs(data) }
    return {
      
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='less'>

#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
