<template>
  <div class="hello">
    <h2 v-if="loading">Loadin>>>>>.message v-if="loaded"</h2>
    <!-- <img v-if="loaded"  :src="result?.message">     <img v-if="loaded" :src="img"> 加了v-if="loaded"  反而无法显示 (子程序出错) -->
    <img v-if="loaded" :src="result[0].url"> <!--   <img v-if="loaded" :src="img"> 加了v-if="loaded"  反而无法显示 (子程序出错) -->
    <h2>X:{{ x }} Y:{{ y }}</h2> <!--  img:{{img }} -->
    <h2>overincrease+count:{{ count }}</h2>
    <h1>count1:{{ count1 }}</h1>
    <h1>double:{{ double }}</h1>
    <h1>reactive:{{ data1.count }}</h1>
    <h1>reactive-double:{{ data1.double }}</h1>
    <button @click="increase">increase+1</button>
    <div>
      <p>upGreetings:{{ greetings }}</p>
      <button @click="increase1">increase:setup +1</button>
      <button @click="upGreetings">upGreetings</button>
      <button @click="overincrease">overincrease</button>
    </div>
    <button @click="data1.increase">data1+1</button>
    <ul>
      <li v-for="number in numbers" :key="number"> {{ numbers }}</li>
    </ul>
     <h2> {{ person.name }} </h2>
  </div>
 
</template>

<script lang="ts">
//todo 
//bug
//tag
import { defineComponent } from "vue";
import { ref, computed, reactive, toRefs, watch } from "vue";  //torefs 响应式函数,onMounted,onUnmounted onMounted,onUpdated,onRenderTriggered,
import useMousePosition from '../hooks/useMousePosition'  //获得外部函数
import useURLloader from '../hooks/useURLloader'

interface Dp {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string }
}
// interface DogR{
//   message:string,
//   status:string
// }
interface CatR {
  id: string,
  url: string,
  width: number
  height: number
}

export default defineComponent({   //defineComponent函数，只是对setup函数进行封装，返回options的对象；defineComponent最重要的是：在TypeScript下，给予了组件 正确的参数类型推断 。
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
    //   console.l og(event)
    // })
    //const {  result,  loaded, loading, img } = useURLloader<DogR>('https://dog.ceo/api/breeds/image/random');   //传出顺序符合 return  输出顺序
    const { result, loaded, loading } = useURLloader<CatR[]>('https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY');   //传出顺序符合 return  输出顺序
    const count2 = ref(0)

    watch(result, () => {
      if (result.value) {
        console.log('result.value', result.value[0].url)
      }
    }),
      console.log("result: " + result.value + "  loading:" + loading.value + "  loaded:" + loaded)
    // console.log("img::::: " + img.value);   console.log("img " + img);  
    console.log("result.value: " + result.value)

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
    watch(greetings, (newValue: string, oldValue: string) => {  //监控 点击前后数值
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
   const overincrease = () => {
      this.count2++;
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
    //refdata.double
    return {
      count1, count2,
      increase1,      //double,
      data1,
      upGreetings,
      greetings,
      x, y,
      result,
      loaded, loading,
      //  msg,
      ...refdata    //全部响应式对象
    };
  },
  data() {
    return {
      count2: 0,
    };
  },

  methods: {
   
  },

});

</script>
ø
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding: -10px;
  margin: -10px;
}

h1 h2 h3 {
  margin: 40px 0 0;
  padding: -10px;
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
