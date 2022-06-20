<template>
    <div>
        <!-- <h3>当前最新的count值: {{count}}</h3> -->
        <h3>{{showNum}}</h3>
        <button @click="SubHandler0">reset</button>
        <button @click="SubHandler1">-1</button>
        <button @click="SubHandler2">-N</button>
        <!-- <button @click="SubHandler3">-1 Async</button>
        <button @click="SubHandler4">-N Async</button> -->
        <button @click="subAsync">-1 Async</button>
        <button @click="subNAsync(3)">-N Async</button>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    // 组件访问 state 中数据的第二种方式
    ...mapState(['count']),
    // 使用 getter 中加工后数据的第二种方式
    ...mapGetters(['showNum'])
  },
  methods: {
    SubHandler0 () {
      this.$store.commit('reset')
    },
    // 触发 mutation 的第二种方式, mapMutations
    // 后相当于把 store mutation 中定义的函数映射为组件内自己的函数
    ...mapMutations(['sub', 'subN']),
    SubHandler1 () {
      this.sub()
    },
    SubHandler2 () {
      this.subN(3)
    },
    // 触发 actions 函数的第二种的方法
    // 后相当于把 store actions 中定义的函数映射为组件内自己的函数
    ...mapActions(['subAsync', 'subNAsync'])
    // SubHandler3 () {
    //   this.subAsync()
    // },
    // SubHandler4 () {
    //   this.subNAsync(3)
    // }
  }
}
</script>
