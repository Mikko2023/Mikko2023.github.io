//todo: Написать функцию анаграммы

// 'finder', 'friend' === true
// 'test', 'sets' === false
// 'abc', 'aaa' === false
// 'abb', 'aab' === false

// Решение --------------------------

console.log(checkAnagram(['finder', 'friend', 'derfin'])); // true  der fin - на немецкий манер
console.log(checkAnagram(['test', 'sets', 'sset'])); // false

function checkAnagram(arr) {
  if (!arr || arr.length <= 1) return false;
  
  let first_word = arr[0].split('').sort().join('');
  
  for (let i = 1; i < arr.length; i++) {
      if (arr[i].split('').sort().join('') != first_word) {
      return false;
     }
  }
  
  return true;

}
