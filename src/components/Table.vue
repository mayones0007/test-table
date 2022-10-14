<template>
  <Filters @setTablePage="setPage(1)"/>
  <table class="table table-striped">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column">
          <div @click="sortFunc(column.name)">
            {{column.translation}}
            <img class="icon__caret"
              :class="{'icon__caret--active': sortColumn === column.name, 'icon__caret--reverse': reverse}"
              src="icons/caret.svg"
            >
          </div>
        </th> 
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in sortedData" :key="item">
        <td v-for="column in columns" :key="column">
          <div>{{item[column.name]}}</div>
        </td> 
      </tr> 
    </tbody>
  </table>
  <div class="navigation">
    <nav>
      <ul class="pagination">
        <li class="page-item" :class="{'disabled': this.page < 2}">
          <a class="page-link" @click="changePage(-1)">&laquo;</a>
        </li>
        <li v-for="page in pagesCount" :key="page" class="page-item" :class="{'active': this.page === page}">
          <a class="page-link" @click="setPage(page)">{{page}}</a>
        </li>
        <li class="page-item" :class="{'disabled': this.page  >= pagesCount}">
          <a class="page-link" @click="changePage(1)">&raquo;</a>
        </li>
      </ul>
    </nav>
    <div class="input-group mb-3 count-on-page">
      <label class="input-group-text" for="value">На странице</label>
      <select class="form-select" id="value" v-model="countOnPage">
        <option v-for="value in 5" :key="value" :value="value * 10">{{value * 10}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { columns } from "../tableConfig"
import Filters from './Filters.vue'


export default {
  components: {
    Filters,
  },
  data() {
    return {
      columns,
      reverse: false,
      page: 1,
      countOnPage: 10,
      sortColumn: '',
    }
  },
  name: 'Table',
  computed: {
    filteredData(){
      return this.$store.state.filteredData.slice((this.page - 1) * this.countOnPage, this.page * this.countOnPage)
    },
    pagesCount() {
      return Math.ceil(this.$store.state.filteredData.length / this.countOnPage)
    },
    sortedData() {
      const sortedData = this.reverse
        ? [...this.$store.state.filteredData].sort((a, b) => a[this.sortColumn] > b[this.sortColumn] ? 1 : -1)
        : [...this.$store.state.filteredData].sort((a, b) => a[this.sortColumn] < b[this.sortColumn] ? 1 : -1)
    
      return sortedData.slice((this.page - 1) * this.countOnPage, this.page * this.countOnPage)
    }
  },
  methods: {
    sortFunc(column) {
      if (column !== 'date') {
        if (this.sortColumn === column) {
          this.reverse = !this.reverse
          return
        }
        this.sortColumn = column
        this.reverse = false
      }
    },
    setPage(n) {
      this.page = n
    },
    changePage(n) {
        this.page = this.page + n
    }
  },
}
</script>

<style lang="scss" scoped>
  .navigation {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;
    user-select: none;
  }

  .icon__caret{
    visibility: hidden;

    &--active{
      visibility: visible;
    }

    &--reverse{
      transform: rotate(180deg);
    }
  }

  .count-on-page {
    width: 200px;
  }

  thead {
    user-select: none;
  }
</style>
