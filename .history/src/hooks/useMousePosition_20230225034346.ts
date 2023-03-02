import { ref, onMounted, onUnmounted }   from 'vue'
function  useMousePosition() {
    const x = ref(0); const y = ref(0)
    const upateMouse = (e: MouseEvent) => {  //监控屏幕坐标
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(() => {
        document.addEventListener('click', upateMouse)
    })
    onUnmounted(() => {
        document.removeEventListener('click', upateMouse)
    })
    return {x,y}
}
export default useMousePosition