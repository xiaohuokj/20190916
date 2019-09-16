<template>
  <div id="app">
    <todo-input></todo-input>
    <todo-list></todo-list>
    <p>数量： {{count}}</p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import todoInput from './components/input'
  import todoList from './components/list'
  export default {
    name: 'App',
    components: {
      todoInput: todoInput,
      todoList: todoList
    },
    computed: {
      ...mapGetters({
        count: 'nCounts'
      })
    }
  }
</script>

<style>

</style>
