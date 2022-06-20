import Vue from 'vue'
import Vuex from 'vuex'

// 安装 vuex 到 vue 项目中
Vue.use(Vuex)

// 创建 store 对象
export default new Vuex.Store({
  // state 中存放的就是全局共享的数据
  // 提供唯一的公共数据源 所有共享的数据都要统一放到 Store 的 state 中存储
  state: {
    count: 0
  },
  mutations: {
    reset (state) {
      state.count = 0
    },
    // mutations 中不支持异步操作
    // add (state) {
    //   setTimeout(() => {
    //     state.count++
    //   }, 1000)
    // },
    add (state) {
      state.count++
    },
    addN (state, step) {
      state.count += step
    },
    sub (state) {
      if (state.count !== 0) {
        state.count--
      }
    },
    subN (state, step) {
      if (state.count !== 0) {
        state.count -= step
      }
    }
  },
  actions: {
    // 用于处理异步操作变更数据
    // 通过出发 mutation 的方式间接变更数据
    addAsync (context) {
      setTimeout(() => {
        // actions 中 不能直接修改 state 中的数据
        // 要通过 context.commit() 出发某个 mutation 才行
        context.commit('add')
      }, 2000)
    },
    addNAsync (context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 2000)
    },
    subAsync (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 2000)
    },
    subNAsync (context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 2000)
    }
  },
  getters: {
    // 对 store 中的已有数据加工处理之后形成新的数据, 并不会修改 store 中的数据
    // 类似 vue 中的计算属性
    // store中数据发生变化 getter中的数据也会跟着变化
    showNum (state) {
      return '当前最新的count是【' + state.count + '】'
    }
  },
  modules: {
  }
})
