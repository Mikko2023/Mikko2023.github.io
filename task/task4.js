//todo: Задано число. Проверить на  истинность (true или false) что 
// сумма цифр данного трехзначного числа является четным числом. Числа меняются !
// Пример:

let x = 552

// Сумма чисел: 5 + 5 + 2 = 12 
// 12 - четное число (true)

------Начало решения -----
  function sumOfDigit(num) { 
    return num.toString().split("") 
        .reduce((sum, digit) => 
            sum + parseInt(digit), 0); 
} 
  
console.log(sumOfDigit(525));

const even = n => !(n % 2);

console.info(even(5));
console.info(even(4));

