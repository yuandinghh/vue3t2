
<template>
    <div>
        <h2>{{ result }}</h2>
    </div>
</template>


<script lang="ts" >

import { defineComponent } from "vue";
// import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
// import { useStore } from 'vuex';
// import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
    //  name: "yyy",
    props: {
        msg: String,
    },
    setup() {
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
