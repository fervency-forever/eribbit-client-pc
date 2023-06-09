import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// 三个模块
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
  modules: {
    cart,
    user,
    category
  },
  // 配置插件
  plugins: [
    //  默认存储在localStorage
    createPersistedState({
      // 本地存储名字
      key: 'erabbit-client-pc-store',
      // 指定需要存储的模块
      path: ['user', 'cart']
    })
  ]
})

// // A模块
// const moduleA = {
//   state: {
//     username: 'moduleA'
//   },
//   getters: {
//     newName(state) {
//       return state.username + '!!!!'
//     }
//   },
//   mutations: {
//     updateName(state) {
//       state.username = 'ModuleAAAAAA'
//     }
//   }
// }
// // B模块
// const moduleB = {
//   namespaced: true,
//   state: {
//     username: 'moduleB'
//   },
//   getters: {
//     newName(state) {
//       return state.username + '!!!'
//     }
//   },
//   mutations: {
//     updateName (state) {
//       state.username = 'ls'
//     }
//   },
//   actions: {
//     updateName(ctx) {
//       //  发请求
//       setTimeout(() => {
//         ctx.commit('updateName')
//       },1000)
//     }
//   }
// }

// export default createStore({
//   modules: {
//     moduleA,
//     moduleB
//   }
// })

//  vue2.0  创建仓库  new Vuex.store({})
//  vue3.0  创建仓库  createStore({})
// export default createStore({
//   state: {
//     username: 'zs'
//   },
//   getters: {
//     newName(state) {
//       return state.username + '!!!'
//     }
//   },
//   mutations: {
//     updateName (state,payload){
//       state.username = 'ls'
//     }
//   },
//   actions: {
//     updateName(ctx) {
//       //  发请求
//       setTimeout(() => {
//         ctx.commit('updateName')
//       }, 1000)
//     }
//   },
//   modules: {

//   }
// })
