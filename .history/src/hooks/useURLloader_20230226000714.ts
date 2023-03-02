import axios from 'axios';
import { ref } from 'vue'
function useURLloader(url: string) {
    const result = ref(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)

    axios.get(url).then((rawData) => {
        loading.value = false
        loading.value = true
        result.value = rawData.data
    }).catch((e) => {
        error.value = e
        loading.value = false
        c
    })
    return {
        result, loaded, loading, error
    }
}
export default useURLloader