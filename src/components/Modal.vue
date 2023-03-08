<template>
  <TelePort to="#modal">
    <div id="center">
      <h3>{{ msg }}</h3>
      <button @click="$emit('click')">click</button>
      <button @click="upGreetings">upGreetings</button>
      <h3>{{ greetings }}</h3>
      <button @click="numb">numb</button>
      <h3>{{ numbb }}</h3>
    </div>
  </TelePort>
</template>

<script lang="ts" >
import { defineComponent } from "vue";
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect } from "vue";
// import TelePort from "./TelePort.vue";
// ref, reactive, toRefs, 

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  props: {
    msg: String
  },
  setup() {
    const data = reactive({
      name: "Modal",
      num: 20,
      // msg:"Mod"
      // const click() => {
      //   console.log("click");
      //   data.num++;      }
    });
    const greetings = ref("hello");
    const upGreetings = () => {
      greetings.value += "hello!";
    };
    const numbb = ref(0);
    const numb = () => {
      numbb.value++;
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // function 
    onBeforeMount(() => {
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      console.log("3.-组件挂载到页面之后执行-------onMounted");
    });
    watchEffect(() => {
      // eslint-disable-next-line no-undef
      console.log(`当${numb}的值变化的时候调用，初始化的时候也调用一次`);
    });
    // 使用toRefs解构
    // let { } = { ...toRefs(data) }
    return {
      numbb,       numb,      upGreetings,      greetings,      ...toRefs(data)
    };
    //   computed: {
    //   // ClassOfType() {
    //   //   const { type } = this
    //   //   return !type ? '' : `yt-button--${type}`
    //   // },
    //   // ClassOfSize() {
    //   //   const { size } = this
    //   //   return !size ? '' : `yt-button--${size}`
    //   // }
    // //  onclick() {
    // //     console.log("click");
    // //     // eslint-disable-next-line no-undef
    // //     data.num++;
    // //     return data.num
    // //   }
    // },
    // methods: {},
  },
  // components: { TelePort }
});
</script>

<style scoped lang='less'>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;;
  position: fixed;
  // margin: 0 auto;
  top: 50%;
  left: 50%;
    margin-left: -500px;
    margin-top: -100px;
   text-align: center;
  color: #2c3e50;

}
</style>
