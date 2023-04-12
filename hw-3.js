//Задание 1

let password = 'пароль';
let questinPass = String(prompt('Ведите пароль'));

if (password === questinPass) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно')
};

//Задание 1 Вариант 2 

let password = 'пароль';
let questinPass = String(prompt('Ведите пароль'));

let result  = password === questinPass? alert('Пароль введен верно') : alert('Пароль введен неправильно');


//Задание 2

const c = 2;

if ((c > 0) && (c < 10)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


//Задание 3

const d = 50;
const e = 150;

if (d>100 || e>100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 4

let a = Number('2');
let b = Number('3');
alert(a + b);

//Задание 5

let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 1:
        console.log('Второй месяц зимы');
        break;
    case 2:
        console.log('Третий месяц зимы');
        break;
    case 3:
        console.log('Первый месяц весны');
        break;
    case 4:
        console.log('Второй месяц весны');
        break;
    case 5:
        console.log('Третий месяц весны');
        break;
    case 6:
        console.log('Первый месяц лета');
        break;
    case 7:
        console.log('Второй месяц лета');
        break;
    case 8:
        console.log('Третий месяц лета');
        break;
    case 9:
        console.log('Первый месяц осени');
        break;
    case 10:
        console.log('Второй месяц осени');
        break;
    case 11:
        console.log('Третий месяц осени');
        break;
    case 12:
        console.log('Первый месяц зимы');
        break;
    default: console.log('Такого месяца не существует');
        break;
}


//Задание 7

let zadannoeChislo = Number(prompt('Пожалуйста, введите любое число'));

if (typeof (zadannoeChislo) == 'number') {
    console.log(zadannoeChislo);
} else {
    console.log('NuN');
}
if ((zadannoeChislo & 1) == 0) {
    alert('Число четное')
} else {
    alert('нечетное')
}

//Задание 8

let clientOS = 0;

if (clientOS == 0) {
    confirm('Установите версию приложения для iOS по ссылке')
} else {
    confirm('Установите версию приложения для Android по ссылке')
};

// Задание 8 2 вар

let clientOS = 0;
let clientDeviceYear = 2015;

let result = (clientOS == 0) ? confirm('Установите версию приложения для iOS по ссылке') : confirm('Установите версию приложения для Android по ссылке');

// Задание 9

let clientOS = 1;
let clientDeviceYear = 2014;

if (clientOS == 0) {
    let result = (clientDeviceYear >= 2015) ? confirm('Установите версию приложения для iOS по ссылке') : confirm('Установите облегченную версию приложения для iOS по ссылке');
} else {
    let result = (clientDeviceYear >= 2015) ? confirm('Установите версию приложения для Android по ссылке') : confirm('Установите облегченную версию приложения для Android по ссылке');
};