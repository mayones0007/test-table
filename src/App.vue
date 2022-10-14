<template>
  <Filters/>
  <Table/>
</template>

<script>
import Table from './components/Table.vue'
import Filters from './components/Filters.vue'

export default {
  name: 'App',
  components: {
    Table,
    Filters
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
