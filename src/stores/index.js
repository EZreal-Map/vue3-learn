import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia // 默认导出  import pinia from '@/stores/index'

// import { useUserStore } from './modules/user'
// export { useUserStore }

// 接收所用的按需（命名）导出，并且原封不动的导出
// import {{usestoresName}} from '@/stores'
export * from './modules/user'
