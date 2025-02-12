// Задача:

// Написать собственный Promise.all()



function promiseAll(promises)  {
    return new Promise((resolve, reject) => {
      const results = [];
      let completedCount = 0;
  
      if (promises.length === 0) {
        resolve(results);
        return;
      }
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((result) => {
            results[index] = result;
            completedCount++;
  
            if (completedCount === promises.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  }
  
  // Пример использования:
  
  const promiseA = new Promise((res) => setTimeout(() => res(123), 1000));
  const promiseB = Promise.resolve("a");
  const promiseC = new Promise((res) => setTimeout(() => res(true), 100));
  const promiseD = new Promise((res, rej) =>
    setTimeout(() => rej("error"), 1000)
  );
  
  Promise.all([promiseA, promiseB, promiseC]).then(console.log); // [123, "a", true]
  promiseAll([promiseA, promiseB, promiseC]).then(console.log); // [123, "a", true]
  Promise.all([promiseA, promiseB, promiseD]).catch(console.error); // "error"
  promiseAll([promiseA, promiseB, promiseD]).catch(console.error); // "error"