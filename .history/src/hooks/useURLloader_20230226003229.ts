import axios from 'axios';
import { ref } from 'vue'

function useURLloader(url: string) {
    const result = ref(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)

    axios.get(url).then((rawData) => {
        console.log(rawData)
        loading.value = false
        loading.value = true
        result.value = rawData.data.message
        console.log(result.value)
        console.log(rawData.data.status)
    }).catch((e) => {
        error.value = e
        loading.value = false
        console.log(e)
    })
    return {
        result, loaded, loading, error
    }
}
export default useURLloader