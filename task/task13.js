let arr = [1, 5, 3, 8, 2, 7, 4, 9, 6, 10];

// Нахождение минимального и максимального элементов
let min = arr[0];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
  if (arr[i] > max) {
    max = arr[i];
  }
}

// Индексы минимального и максимального элементов
let minIndex = arr.indexOf(min);
let maxIndex = arr.indexOf(max);

// Поменять местами
let temp = arr[minIndex];
arr[minIndex] = arr[maxIndex];
arr[maxIndex] = temp;

console.log(arr); // [10, 5, 3, 8, 2, 7, 4, 9, 6, 1]