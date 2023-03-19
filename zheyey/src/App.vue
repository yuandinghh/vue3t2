<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <loader v-if="isLoading"></loader>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from './components/GlobalHeader.vue'
import Loader from './components/Loader.vue'
import createMessage from './components/createMessage'
import { GlobalDataProps } from './store'
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loader
  },
  //写一个函数数组去重
  function unique(arr) {
    return Array.from(new Set(arr))
  }
  console.log(unique([1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10]))
  function unique(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) { //遍历数组
      if (res.indexOf(arr[i]) === -1) { //如果res中没有arr[i]，则将arr[i]添加到res中
        res.push(arr[i])
      }
    }
    return res

  // }

  setup() {
    const store = useStore<GlobalDataProps>()
    const currentUser = computed(() => store.state.user)
    const isLoading = computed(() => store.state.loading)
    const error = computed(() => store.state.error)
    watch(() => error.value.status, () => {
      const { status, message } = error.value
      if (status && message) {
        createMessage(message, 'error')
      }
    })
    return {
      currentUser,
      isLoading,
      error
    }
  }
})
</script>

<style>

</style>
