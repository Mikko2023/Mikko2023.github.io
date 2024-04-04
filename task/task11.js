//todo: Задан произвольный url необходимо получить router, action и id

Пример:
var url = "http://www.ozon.ru/context/detail/id/19677670/"
router: context
action: detail
id: 19677670

Решение 

const originalString = "https://www.wildberries.ru/catalog/188066663/detail.aspx";
const splitString = originalString.split("/");
console.log(splitString);
