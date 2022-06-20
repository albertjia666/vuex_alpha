<template>
    <div>
        <!-- 组件访问 state 中数据的第一种方式 -->
        <!-- <h3>当前最新的count值: {{this.$store.state.count}}</h3> -->
        <!-- 使用 getter 中加工后数据的第一种方式 -->
        <h3>{{this.$store.getters.showNum}}</h3>
        <button @click="AddHandler0">reset</button>
        <button @click="AddHandler1">+1</button>
        <button @click="AddHandler2">+N</button>
        <button @click="AddHandler3">+1 Async</button>
        <button @click="AddHandler4">+N Async</button>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    AddHandler0 () {
      this.$store.commit('reset')
    },
    AddHandler1 () {
      // 该写法不合法 vuex 中不允许组件直接修改 store 里面的数据
      // this.$store.state.count++

      // 只能通过 mutation 来变更 store 中的数据
      // 以便集中监控所有数据的变化
      // commit 用来调用 mutations 也是触发 mutation 的第一种方式
      this.$store.commit('add')
    },
    AddHandler2 () {
      this.$store.commit('addN', 3)
    },
    AddHandler3 () {
      // dispatch 调用 actions 中的异步函数
      // 触发 actions 函数的第一种的方法
      this.$store.dispatch('addAsync')
    },
    AddHandler4 () {
      this.$store.dispatch('addNAsync', 3)
    }
  }
}
</script>
