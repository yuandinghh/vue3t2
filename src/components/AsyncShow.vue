<template>
    <div>
        <h1>{{ msg }}  result:{{ result }}</h1>
    </div>
</template>

<script lang="ts" >

import { defineComponent, defineExpose, } from "vue";
import { request } from "../hooks/server";
// import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
// import { useStore } from 'vuex';
// import { useRoute, useRouter } from 'vue-router';
const number =  request();
console.log("AsyncShow number:"+number);	// 123

defineExpose({
    number,
});
export default defineComponent({    //
    name: "AsyncShow",
    props: {
        msg: String,
    },

    setup() {
        console.log("--------AsyncShow----------");
        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve({
                    result: 42
                })
            }, 3000)
        })
        
    },
   

  
})
</script>

<style scoped lang='less'></style>
