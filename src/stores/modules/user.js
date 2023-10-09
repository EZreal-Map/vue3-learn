import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块
export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('') // 定义token
    const setToken = (tParam) => (token.value = tParam) // 定义设置 token函数

    return { token, setToken }
  },
  {
    persist: true // 持久化
  }
)
