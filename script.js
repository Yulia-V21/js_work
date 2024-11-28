/*1. Напишите функцию, которая добавляет в существующий массив (можно пустой) города Беларуси. Если в качестве параметра ничего не передается в функцию, то при каждом ее вызове, новый город запрашивается через prompt, иначе новые города можно добавить одним параметром - текстом городов через запятую. Выведите получившийся массив в алфавитном порядке.*/

function getCity(city) {
    let arr = [];
    for(let i = 0; i < city.length; i++){
    arr.push(city[i]);
    if(city[i] == undefined || city[i] == '') {
        let a = prompt('Введите город');
        arr.push(a);
        break; 
    }
    }
    console.log(arr.sort());
}
getCity(['Минск','Витебск','Могилёв','Брест', 'Гродно']);


/*2. Создайте двумерный массив [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']]. Используя вложенные циклы вывести в консоль строки вида: "Иван из Минск", "Катя из Брест", "Ольга из Гродно", "Максим из Могилев". Создайте массив с расстояниями до городов от Минска (нулевой км). Выведите информацию о расстоянии между Иваном и Максимом. Предусмотрите возможность запрашивать расстояние между другими людьми.*/

let arrNameCity = [
    ['Иван', 'Катя', 'Ольга', 'Максим'],
    ['Минск', 'Брест', 'Гродно', 'Могилев']
];
let arrDist = [0, 358, 276, 201];
let name1 = '';
let city = '';
for(let i = 0; i <= arrNameCity.length+1; i++){
    name1 = '';
    name1 += arrNameCity[0][i]; 
    for(let j = 0; j < i + 1; j++) {
        city = '';
        city += arrNameCity[1][j];
    }   
    console.log(`${name1} из ${city}`); 
}
console.log(`От Ивана до Максима ${arrDist[3]}`);


/*3. Напишите функцию, которая принимает две даты и возвращает количество дней между ними. В зависимости от значения, выведите: "дата уже близко" (< 3 дней), "еще есть время" (от 3 до 7), "далековато еще" (> 7 дней).*/


function date(date1,date2) {
    let dateA = new Date(date1);
    let dateB = new Date(date2);
    let dateC = dateA - dateB;
    let mounth = dateC / 1000 / 60 / 60 / 24 / 365 * 12;
    let days = Math.floor(mounth) * 30;
    if(days < 3){
        console.log('Дата уже близко');
    }else if(days >= 3 || days <= 7){
        console.log('Ещё есть время');
    }else if(days > 7) {
        console.log('Далековато ещё')
    }else{
        console.log('Неизвестно')
    }
}
date('11.23.2024','4.12.2024');

/*
4. Напишите функцию celsiusToFahrenheit(celsius), которая конвертирует температуру из градусов Цельсия в градусы Фаренгейта. В зависимости от температуры, выведите предупреждение: "сегодня прохладнее, чем обычно" (от 5 до 10), "одевайтесь теплее" (от 0 до 5), "сегодня очень холодно" (меньше 0 и до -5), "оставайтесь дома" (< -5).*/

function celsiusToFahrenheit(celsius) {
    let farengeit = celsius * 9 / 5 + 32;
    if(farengeit >= 5 && farengeit <= 10) {
        console.log('Сегодня прохладнее,чем обычно');
    }else if(farengeit == 0 && farengeit < 5) {
        console.log('Одевайтесь теплее');
    }else if(farengeit < 0 && farengeit >= -5) {
        console.log('Сегодня очень холодно');
    }else if(farengeit < -5){
        console.log('Оставайтесь дома')
    }else{
        console.log('Не понимаю холодно или нет');
    }
    return farengeit;
}
console.log(celsiusToFahrenheit(-20));

/*5. Функция выбора случайного элемента из массива: Создайте функцию randomElement(arr), которая возвращает случайный элемент из переданного массива.*/


function randomElement(arr) {
    let randomArr = Math.floor(Math.random() * arr.length);
    let randomElem = arr[randomArr];
    console.log(randomElem);
}
randomElement([1,'text', '#', 25, 17, 'd', '%', 2, 78, 98, 12, 'm']);

