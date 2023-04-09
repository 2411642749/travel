import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from 'underscore' //防抖
export function scrollListenFn() {
  const isScrollLoz = ref(false)
  const scrollTop = ref()
  const scrollHeight = ref()
  const clientHeight = ref()
  const scroll = throttle(() => {
    scrollTop.value = document.documentElement.scrollTop  // 滚动高度
    scrollHeight.value  = document.documentElement.scrollHeight //可以滚动的总高度
    clientHeight.value  = document.documentElement.clientHeight  //可视区域高度
    if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
      console.log('----到底部了----');
      isScrollLoz.value = true
    }
  },1000)
  onMounted(() => window.addEventListener('scroll',scroll))
  onUnmounted(() => window.removeEventListener('scroll',scroll))
  return { isScrollLoz,scrollTop, scrollHeight,clientHeight}
}