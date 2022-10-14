export const filters = [
  {
    name: "равно",
    typeOfData: ['text', 'number', 'date'],
    filterFunc: (array, column, value) => array.filter((item) => item[column].toString().toLowerCase() === value.toLowerCase())
  },
  {
    name: "содержит",
    typeOfData: ['text'],
    filterFunc: (array, column, value) => array.filter((item) => item[column].toString().toLowerCase().includes(value.toLowerCase()))
  },
  {
    name: "больше",
    typeOfData: ['number', 'date'],
    filterFunc: (array, column, value) => array.filter((item) => item[column] > value)
  },
  {
    name: "меньше",
    typeOfData: ['number', 'date'],
    filterFunc: (array, column, value) => array.filter((item) => item[column] < value)
  },
]