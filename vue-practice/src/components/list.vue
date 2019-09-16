<template>
  <div class="todolist">
    <ul>
      <li v-for="(item,index) in aTodos" :key="index">
        <span>{{item.value}}</span>
        <button @click="del(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
      }
    },
    computed: {
      aTodos () {
        return this.$store.state.aTodos
      }
    },
    created() {
    },
    methods: {
      del (index) {
        this.$store.dispatch('onDelTodo', index)
      }
    }
  }
</script>

<style scoped>

</style>
