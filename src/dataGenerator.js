function getRandomValueFromArray(values) {
  const random = Math.floor(Math.random() * Math.floor(values.length));
  return values[random]
}

function getRandomDate() {
  const date = new Date();
  const random = Math.floor(Math.random() * 10);
  date.setDate(date.getDate() + random);
  return date.toLocaleDateString();
}

export function generateData() {
  return Array.from({ length: 100 }, () => ({
    date: getRandomDate(),
    name: getRandomValueFromArray(['Хлеб', 'Молоко', 'Мясо', 'Масло', 'Сыр', 'Огурцы', 'Кока-кола', 'Дыня', 'Зелень']),
    count: Math.floor(Math.random() * 100),
    distance: Math.floor(Math.random() * 100),
  }))
}