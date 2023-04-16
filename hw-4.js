//Задание 1

let i = 0;
while(i<2) {
    console.log ('Привет');
    i++
}


// Задание 2

let i = 1;

while(i<=5) {
    console.log(i);
    i++
}

//Задание 3

let i = 7;

while(i<=22) {
    console.log(i);
    i++
}

//Задание 4

const worker = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
}
for (const prop in worker) {
    console.log(prop + " Зарплата " + worker[prop] + " Долларов");
}

//Задание 5


let i = 1000;
do {
    console.log(i);
    i = i / 2;
} while (i > 50);

let nam = 4

//Задание 5, вариант 2
for (i = 1000; i>50; i= i/2) {
    console.log(i);
}

let nam = 4

//Задаине 6

for (let dayNumber = 1, fraiday = 7; dayNumber <= 31; fraiday = dayNumber ++) {
    if (dayNumber == 7) {
        console.log(`Сегодня пятница, ${fraiday}-е число. Необходимо подготовить отчет.`);
    } else if (dayNumber == 14) {
        console.log(`Сегодня пятница, ${fraiday}-е число. Необходимо подготовить отчет.`);
    } else if (dayNumber == 21) {
        console.log(`Сегодня пятница, ${fraiday}-е число. Необходимо подготовить отчет.`);
    } else if (dayNumber == 28) {
        console.log(`Сегодня пятница, ${fraiday}-е число. Необходимо подготовить отчет.`);
    }
}

//по поводу 6 есть вопросы. Правильно ли я сделал или в if (dayNumber == 7) должно быть какое то действие типа кратности, которое определит необходимый день? если делаю кратность то выводит все числа кроме пятниц. Выходит мне надо как то наборот, но я не догоняю как)
// 

//Задание 6 вариант 2

let fraiday = 3;
for (; fraiday <= 31; fraiday = fraiday + 7) {
    console.log(`Сегодня пятница, ${fraiday} -е число. Необходимо подготовить отчет`);
}
