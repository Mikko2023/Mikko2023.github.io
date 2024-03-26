//todo:  Задан произвольный url необходимо получить его домен.

Пеример:
var url = "http://www.ozon.ru/context/detail/id/19677670/"
Домен: www.ozon.ru

-----------------
    Решение
var link1 = "https://www.wildberries.ru/catalog/163855144/detail.aspx";
var url = new URL(link1);
var domain = url.hostname.split('.').slice(-3).join('.');
console.log("The domain name is: " + domain);