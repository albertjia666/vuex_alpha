<template>
  <div>
    <my_addition></my_addition>
    <p>--------------------------</p>
    <my_subtraction></my_subtraction>
  </div>
</template>

<script>
import Addition from './components/Addition.vue'
import Subtraction from './components/Subtraction.vue'

export default {
  data () {
    return {}
  },
  components: {
    my_addition: Addition,
    my_subtraction: Subtraction
  }
}
</script>
