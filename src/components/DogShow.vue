<template>
      <h1>{{ msg }} </h1>
        <img :src="result && result.message">
</template>

<script lang="ts" >
import { defineComponent } from "vue";
// import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
// import { useStore } from 'vuex';
// import { useRoute, useRouter } from 'vue-router';
import  axios from 'axios';

export default defineComponent({
    name: "DogShow",
    props: {
        msg: String,
    },
    async setup() {
         console.log("++++async+++DogShow----------");
        const rawData = await axios.get('https://dog.ceo/api/breeds/image/random')
        return {
            result: rawData.data
        }
    }
})
</script>

<style scoped lang='less'>
</style>
