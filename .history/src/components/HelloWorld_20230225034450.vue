<template>
  <div class="hello">
    <h2>X:{{ x }} Y:{{ y }}</h2>
    <h2>count:{{ count }}</h2>
    <h1>count1:{{ count1 }}</h1>
    <h1>double:{{ double }}</h1>
    <h1>reactive:{{ data1.count }}</h1>
    <h1>reactive-double:{{ data1.double }}</h1>
    <button @click="increase">increase+1</button>
    <div>
      <p>upGreetings:{{ greetings }}</p>
      <button @click="increase1">increase:setup +1</button>
      <button @click="upGreetings">upGreetings</button>
    </div>
    <button @click="data1.increase">data1+1</button>
    <ul>
      <li v-for="number in numbers" :key="number"> {{ numbers }}</li>
    </ul>
  </div>
  <h2> {{ person.name }} + {{}}</h2>
</template>

<script lang="ts">
//todo 
//bug
//tag
import { defineComponent } from "vue";
import { ref, computed, reactive, toRefs, watch } from "vue";  //torefs 响应式函数,onMounted,onUnmounted onMounted,onUpdated,onRenderTriggered,
import useMousePosition from  '../hooks/useMousePosition'    //'../hooks/useMousePosition'
interface Dp {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string }
}

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const { x, y } = useMousePosition()
    // onMounted(()=>{   //加载
    //   console.log('onMounted')
    // });
    // onUpdated(()=>{
    //   console.log('onUpdated')   ///更新 加载函数
    // });
    // onRenderTriggered((event) => {  //跟踪页面数值变化
    //   console.log(event)
    // })
    const greetings = ref('')
    const upGreetings = () => {
      greetings.value += 'hello!'
    }

    // const x = ref(0);    const y = ref(0)  //已经转移到新的文件夹中
    // const upateMouse = (e:MouseEvent) => {  //监控屏幕坐标
    //   x.value = e.pageX
    //   y.value = e.pageY
    // }
    //   onMounted(() => {
    //     document.addEventListener('click', upateMouse)
    //   })
    //   onUnmounted(()=> {
    //     document.removeEventListener('click',upateMouse)
    //   })

    watch(greetings, (newValue, oldValue) => {  //监控 点击前后数值
      console.log("newValue: " + newValue + "  oldValue:" + oldValue)
      document.title = 'updated' + greetings.value
    });

    const count1 = ref(0);
    // const double = computed(() => {
    //   return count1.value * 2;
    // });
    const increase1 = () => {
      count1.value++;
    };

    const data1: Dp = reactive({
      count: 0,
      increase: () => { data1.count++; },
      double: computed(() => data1.count * 3),
      numbers: [0, 3, 4, 5],
      person: {}
    });
    data1.numbers[0] = 5
    data1.person.name = "yuanding"
    const refdata = toRefs(data1) // 
    refdata.double
    return {
      count1,
      increase1,
      //double,
      data1,
      upGreetings,
      greetings,
      x, y,

      ...refdata    //全部响应式对象
    };
  },
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increase() {
      this.count++;
    },
  },
});
</script>
ø
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
