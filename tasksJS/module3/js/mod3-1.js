
//  Итеративный подход
function factorial(n) {
    if (n < 0) {
      throw new Error("n должно быть неотрицательным");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Пример использования:
  console.log(factorial(5)); 


//   Мемоизация

  const factorialMemo = (() => {
    const cache = new Map();
    
    return function factorial(n) {
      if (n < 0) {
        throw new Error("n должно быть неотрицательным");
      }
      if (n <= 1) return 1;
      if (cache.has(n)) {
        return cache.get(n);
      }
      const result = n * factorial(n - 1);
      cache.set(n, result);
      return result;
    };
  })();

  console.log(factorialMemo(5));

  // Динамическое программирование для диапазона чисел

  function computeFactorials(n) {
    if (n < 0) {
      throw new Error("n должно быть неотрицательным");
    }
    const factorials = [1]; // 0! = 1
    for (let i = 1; i <= n; i++) {
      factorials[i] = factorials[i - 1] * i;
    }
    return factorials;
  }

  console.log(computeFactorials(5));


// Итеративный подход уменьшает накладные расходы на вызовы функций и избегает переполнения стека.
// Мемоизация полезна, если вы многократно вызываете факториал для одних и тех же значений.
// Динамическое программирование удобно, если нужно получить факториалы для всех чисел от 1 до n за один проход.