//Задание 1

function min(a, b) {

    return a < b ? a : b;
}
console.log(min(8, 4))
console.log(min(6, 6))


// Задание 1 вариант 2
let oneNumber = prompt('Введи число');
let twoNumber = prompt('Введи второе число');

function retSmallNumb(oneNumber, twoNumber) {
    return oneNumber < twoNumber ? oneNumber : twoNumber;
}

alert(retSmallNumb(oneNumber, twoNumber));

//Но не пойму почему работает не со всеми числами. Если ввести от 1 до 10 и любое двухсзначное, то он показывает двухзначное. а с однозначными или чисто двухзначными вроде корректно

//Задание 2

let number = prompt('Введите число');

function backTextEvenOdd(number) {
    return number % 2 == 0 ? 'Число четное' : 'Число нечетное'
}

console.log(backTextEvenOdd(number));

// Задание 3
function backSquareNumb(numberUser) {
    console.log(numberUser ** 2);
}

console.log(backSquareNumb(6));


let numberUser = Number(prompt('Введите число'));

function backSquareNumb(numberUser) {
    return numberUser ** 2
}

console.log(backSquareNumb(numberUser));

//Задание 4

function userAge() {

    let age = prompt('Сколько вам лет');
    if (age < 0) {
        return ("Вы ввели неправильное значение")
    } else if (age <= 12) {
        return ("Привет друг!")
    } else {
        return ("Добро пожаловать")
    }
}
alert(userAge())


//Задание 5

let oneNumb = prompt('введи первое число');
let twoNumb = prompt('введи второе число')


function mult(oneNumb, twoNumb) {
    if (isNaN(oneNumb) || isNaN(twoNumb)) {
        return 'Одно или оба значения не являются числом'
    } else {
        return oneNumb * twoNumb
    }
}
console.log(mult(oneNumb, twoNumb));

//Задание 6

function cubeNumber() {
    const number = prompt('Введите число:', '');
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        const result = number ** 3;
        return (`${number} в кубе равняется ${result}`);
    }
}
console.log(cubeNumber());

//Задание 7

let circle1 = {
    radius: 7,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

let circle2 = {
    radius: 9,
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter());