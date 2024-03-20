function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  
  // Пример использования функции
  let emptyObject = {};
  let nonEmptyObject = { key: "value" };
  
  console.log(isObjectEmpty(emptyObject)); // Выведет true
  console.log(isObjectEmpty(nonEmptyObject)); // Выведет false