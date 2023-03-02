import axios from 'axios';
import { ref } from 'vue'

function useURLloader(url: string) {
    const result = ref(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)
    const img = ref('')    //ref(String)

    axios.get(url).then((rawData) => {
        console.log("rawData:" + rawData)
        loading.value = false
        loaded.value = true
        result.value = rawData.data.message
        console.log('ts:result.value:' + result.value)
        img.value = rawData.data.message
        console.log('img:?' + img.value)
        console.log(rawData.data.status)
    }).catch((e) => {
        error.value = e
        loading.value = false
        console.log(e)
    })
    return {
        result, loaded, loading, error, img
    }
}
export default useURLloader