//Задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((x, y) => x.age - y.age);
console.log(people);


//Задание 2

function isPositive(arr) {
    return arr.filter((a => a >= 0))

}

function isMale(arr2) {
    return arr2.filter(a => (a.gender == 'male'))

}

function filter(array, instr) {
    return instr(array)



};
const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];


console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(people, isMale));


//Задание 3

let currentDate = new Date();

let timerId = setInterval(() => console.log(new Date()), 3000);

setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);


//Задание 4

function delayForSecond(callback) {
    return setTimeout(callback, 3000)
    callback();
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})


// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }

    }, 1000)
}


function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond((setTimeout(() => sayHi('Вася'), 1001)))




