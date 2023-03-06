<template>
    <div class="container">
        <h4>在线浏览版留言板 7讲</h4>
        <input type="text"  class="form-control" placeholder="姓名：">
        <!-- <input type="text" v-model="msg.mail"> -->
    </div>
</template>

<script lang="ts" >
import { defineComponent } from "vue";
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
    name: "TelePort",
    // props: {
    //      msg: String,
    // },
    setup() {
        const store = useStore();   /** 仓库   */
        const route = useRoute();    /** 路由对象 */
        const router = useRouter();   /** 路由实例   */
        //console.log('1-开始创建组件-setup')
        const msg = reactive({   /** 数据部分   */
            name: '',
            email: '',
            contient: '',
        })
        onBeforeMount(() => {
            console.log('2.组件挂载页面之前执行----onBeforeMount')
        })
        onMounted(() => {
            console.log('3.-组件挂载到页面之后执行-------onMounted')
        })
        watchEffect(() => {
            console.log(`当${name}的值变化的时候调用，初始化的时候也调用一次`)
        })

        // 使用toRefs解构
        // let { } = { ...toRefs(data) } 
        return ({
            ...toRefs(msg)
        })
    },
})
</script>

<style scoped lang='less'></style>