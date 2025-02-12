/*
необходимо реализовать функцию сортировочного центра,
которая на вход принимает какой-то вес посылок и отправляет их самым оптимальным транспортом,
под оптимальностью мы понимаем, что транспорт едет полностью загруженный, минимальное количество раз.
У каждого транспорта есть грузоподъемность, которая записана в переменной transportsDefault.
*/

 const transportsDefault = [
    5000, // Поезд
    2000, // Грузовик
    1000, // Фургон
    100, // Легковой автомобиль
    10, // Почтальон
  ];
  
  /**
   *
   * @param {number} weight Вес посылок
   * @param {number[]} transports Массив транспортов с грузоподъемностью
   *
   * @returns {Object}
   */

  


  const transSort = (weight, transports = transportsDefault) => {
    const result = {};
    
    // Сортируем транспорты по убыванию грузоподъёмности
    const sortedTransports = [...transports].sort((a, b) => b - a);
    
    // Инициализируем результат для каждого типа транспорта нулевым количеством рейсов
    sortedTransports.forEach(capacity => {
      result[capacity] = 0;
    });
  
    let remainder = weight;
  
    // Распределяем вес по транспорту начиная с наибольшего
    for (const capacity of sortedTransports) {
      const count = Math.floor(remainder / capacity);
      result[capacity] = count;
      remainder -= count * capacity;
    }
  
    // Если остался остаточный вес (всегда меньше 10, т.к. 10 — минимальная грузоподъёмность),
    // то добавляем ещё один рейс для транспорта с грузоподъёмностью 10, округляя итоговую сумму.
    if (remainder > 0) {
      const smallest = sortedTransports[sortedTransports.length - 1]; // Обычно это 10
      result[smallest] += 1;
      remainder = 0;
    }
  
    return result;
  };
  // Примеры вызова:
  console.log(transSort(10410)); // { 5000: 2, 2000: 0, 1000: 0, 100: 4, 10: 1 }
  console.log(transSort(2100));  // { 5000: 0, 2000: 1, 1000: 0, 100: 1, 10: 0 }