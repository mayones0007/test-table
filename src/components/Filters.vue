<template>
  <div class="filters">
    <div class="input-group">
      <label class="input-group-text" for="column">Колонка</label>
      <select class="form-select" id="column" v-model="filter.column">
        <option v-for="column in columns" :key="column.name" :value="column.name">{{column.translation}}</option>
      </select>
    </div>
    <div class="input-group">
      <label class="input-group-text" for="condition">Условие</label>
      <select class="form-select" id="condition" v-model="filter.condition">
        <option>равно</option>
        <option v-if="filter.column !== 'date'">содержит</option>
        <option v-if="filter.column !== 'name'">больше</option>
        <option v-if="filter.column !== 'name'">меньше</option>
      </select>
    </div>
    <div class="input-group">
      <label class="input-group-text" for="value">Значение</label>
      <input v-if="filter.column === 'date'" class="form-control" type="date" id="value" @change="changeFilterDate">
      <input v-else class="form-control" id="value" v-model="filter.value">
    </div>
    <button class="btn btn-outline-success" :disabled="setFiltersButtonIsDisabled" @click="filterFunc">Фильтровать</button>
    <button class="btn btn-outline-danger" @click="resetFilters()">Сбросить</button>
  </div>
</template>

<script>
import { columns } from "../tableConfig"
export default {
  data() {
    return {
      filter: {},
      columns,
    }
  },
  name: 'Filters',
  computed: {
    setFiltersButtonIsDisabled() {
      return !this.filter.column || !this.filter.condition || !this.filter.value
    }
  },
  methods: {
    changeFilterDate(e) {
      this.filter.value = e.target.value.split('-').reverse().join('/')
    },
    filterFunc() {
      const column = this.filter.column
      const value = this.filter.value
      switch (this.filter.condition) {
        case 'равно':
          this.$store.commit('setFilteredData', this.$store.state.data.filter(item => item[column] == value))
          break
        case 'содержит':
          this.$store.commit('setFilteredData', this.$store.state.data.filter(item => item[column].toString().toLowerCase().includes(value.toLowerCase())))
          break
        case 'больше':
          this.$store.commit('setFilteredData', this.$store.state.data.filter(item => item[column] > value))
          break
        case 'меньше':
          this.$store.commit('setFilteredData', this.$store.state.data.filter(item => item[column] < value))
          break
      }
    },
    resetFilters() {
      this.$store.commit('resetFilteredData')
      this.filter = {}
    },
  },
}
</script>

<style lang="scss" scoped>
  .filters {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;
    user-select: none;
  }
</style>
