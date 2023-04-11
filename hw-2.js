//Задание 1

let a = alert(10);
let b = 20;
a=b;
alert(a);

// задание 2

let phone = Number(2007);
alert(phone);

// задание 2, вариант 2
let phone = Number(2007);
alert(`Первый iphone выпустили в ${phone}`);


//Задание 3

let nameСreator = "Брендан Эйх";
alert(`Создателем JavaScript является ${nameСreator}`)


// Задание 4 
//сложение сделал с отдлеьным выводом значения, остальные скомпоновал в строку

let oneV = Number(10);
let twoV = Number(2);
let result = oneV + twoV;
alert(result);
alert(oneV - twoV);
alert(oneV * twoV);
alert(oneV / twoV);


// Задание 5

let numeric = Number(2);
let result = numeric**5;
alert(result)


// Задание 6

let a = Number(9);
let b = Number(2);
let result = a % b;
alert(result);


// Задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);


// Задание 8

let age = Number(prompt(`Сколько вам лет?`));
alert(age);


//Задание 9.0

const user = {
    name: 'Max',
    age: 30,
    isAdnim: true,
}

// Задание 9.1

user[`city of residence`] = `Kazan`;

//Задание 9.2

user.age = 31;

//Задание 9.3

delete user[`city of residence`];

//Задание 9.4

let info = prompt(`Какую информацию хотите узнать о пользователе?`)
alert(user [info]);

//Задание 10

let name = prompt(`Введите ваше имя`);
alert(`Привет, ${name}`);
