const queue = ['Иван', 'Мария', 'Саша', 'Даша'];
const outside = ['Aмфибрахий'];

// Удаление 'Иван' и 'Даша' из очереди
queue.splice(queue.indexOf('Иван'), 1);
queue.splice(queue.indexOf('Даша'), 1);

// Добавление 'Амфибрахий'
queue.push('Амфибрахий');

// меняем массив outside
outside.splice(outside.indexOf('Aмфибрахий'), 1);
outside.push ('Иван', 'Даша');

// Вывод результата в консоль
console.log('В очереди: ' + queue + '\n' + 'Вне банка: ' + outside);
