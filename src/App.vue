<template>
  <Table/>
</template>

<script>
import Table from './components/Table.vue'

export default {
  name: 'App',
  components: {
    Table,
  },
  created() {
    this.$store.dispatch('getData')
  }
}
</script>

<style>
#app {
  padding: 60px;
}
</style>
