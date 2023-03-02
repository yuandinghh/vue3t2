<template>
    <div></div>
</template>

<script lang="ts" >
import { defineComponent } from "vue";
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
    name: "HelloWorld",
    props: {
        msg: String,
    },
    setup() {
        /** 仓库   */
        const store = useStore();
        /** 路由对象 */
        const route = useRoute();
        /** 路由实例   */
        const router = useRouter();
        //console.log('1-开始创建组件-setup')
        /** 数据部分   */
        const data = reactive({})
        onBeforeMount(() => {
            console.log('2.组件挂载页面之前执行----onBeforeMount')
        })
        onMounted(() => {
            console.log('3.-组件挂载到页面之后执行-------onMounted')
        })
        watchEffect(() => {
            console.log(`当${name}的值变化的时候调用，初始化
    的时候也调用一次
     `)
        })

        // 使用toRefs解构
        // let { } = { ...toRefs(data) } 
        return ({
            ...toRefs(data)
        })
    },
})
</script>

<style scoped lang='less'></style>