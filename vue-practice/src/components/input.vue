<template>
  <div id="input">
    <input type="text" placeholder="please enter new item" v-model="value" v-on:keyup.enter="addItem">
    <button @click="addItem">新增</button>
  </div>
</template>

<script>
  export default {
    name: 'input',
    data() {
      return {
        value: '',
        id: 0
      }
    },
    computed: {
    },
    methods: {
      addItem() {
        let item = {
          value: this.value,
          id: ++this.id
        }
        this.value = ''
        if (!item.value) {
        } else {
          this.$store.dispatch('onAddTodo', item)
        }
      }
    }
  }
</script>

<style scoped>

</style>
