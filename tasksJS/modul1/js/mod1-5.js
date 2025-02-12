// Пример использования:
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
function list(items) {
    return items.map(item => item.name);
  }
  
  
  console.log(list(users)); 