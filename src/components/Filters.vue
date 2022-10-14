<template>
  <div class="filters">
    <div class="input-group">
      <label class="input-group-text" for="column">Колонка</label>
      <select class="form-select" id="column" v-model="column">
        <option v-for="column in columns" :key="column" :value="column">{{column.translation}}</option>
      </select>
    </div>
    <div class="input-group">
      <label class="input-group-text" for="condition">Условие</label>
      <select class="form-select" id="condition" v-model="filter.filterFunc">
        <option v-for="condition in conditions" :key="condition.name" :value="condition.filterFunc">{{condition.name}}</option>
      </select>
    </div>
    <div class="input-group">
      <label class="input-group-text" for="value">Значение</label>
      <input v-if="column.name === 'date'" class="form-control" type="date" id="value" @change="changeFilterDate">
      <input v-else class="form-control" id="value" v-model="filter.value">
    </div>
    <button class="btn btn-outline-success" :disabled="setFiltersButtonIsDisabled" @click="filterFunc">Фильтровать</button>
    <button class="btn btn-outline-danger" @click="resetFilters()">Сбросить</button>
  </div>
</template>

<script>
import { columns } from "../tableConfig"
import { filters } from "../filtersConfig"

export default {
  data() {
    return {
      filters,
      filter: {},
      column: {},
      columns,
    }
  },
  name: 'Filters',
  computed: {
    setFiltersButtonIsDisabled() {
      return !this.column || !this.filter.filterFunc || !this.filter.value
    },
    conditions() {
      return this.filters.filter((filter) => filter.typeOfData.includes(this.column.type) && filter)
    }
  },
  methods: {
    changeFilterDate(e) {
      this.filter.value = e.target.value.split('-').reverse().join('/')
    },
    filterFunc() {
      const column = this.column.name
      const value = this.filter.value
      this.$store.commit('setFilteredData', this.filter.filterFunc(this.$store.state.data, column, value))
      this.$emit('setTablePage')
    },
    resetFilters() {
      this.$store.commit('resetFilteredData')
      this.filter = {}
      this.column = {}
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
