//Задание 1

let stringText = 'ТеКсТ ввЕдЕнныЙ пОльЗоВАТелЕм';
console.log(stringText.toUpperCase());

//Задание 2

function product(a) {
    const search = 'ст';
    let arr = [];
    a.forEach((a) => {
        if (a.toLowerCase().startsWith(search.toLowerCase())) arr.push(a);
    }); console.log(arr);
};
product(['Стол Складной', 'Комод', 'Стол Нигма', 'Шкаф Дюраль']);


//Задание 3

let numb = 32.58884;
console.log(Math.round(numb));  //к ближайшему целому

let numb = 32.58884;
console.log(Math.floor(numb));  //к меньшему целому

let numb = 32.58884;
console.log(Math.ceil(numb));  // к большему целому

//Задание 4

console.log(Math.max(52, 53, 49, 77, 21, 32)); //Максимальное значение

let arr = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...arr)); //Минимальное значение


//Задание 5

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomArbitrary(1, 10));

//Задание 6
let taskTen = getRandomArrNumber(20);
function getRandomArrNumber(num) {
    let userArray = [];
    for (let i = 0; i < num / 2; i++) {
        userArray.push(Math.floor(Math.random() * Math.floor(num)));
    }
    return userArray;
}

console.log(taskTen);



//Задание 7 

let numb1 = Number(prompt('Введи первое число'));
let numb2 = Number(prompt('Введи второе число'));

function getRandomInt(numb1, numb2) {
    return Math.round(Math.random() * (numb2 - numb1)) + numb1;
}

console.log(getRandomInt(numb1, numb2));

//Задание 8

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let myDate = new Date();
let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

console.log(fullDate);



//Задание 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10

function formatDate(date) {
    const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `Дата: ${day} ${month} ${year}: ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds};`
    }

    const currentDate = new Date();
    console.log(formatDate(currentDate));

