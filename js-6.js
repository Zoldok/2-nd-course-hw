//Задание 1

const numberMas = [1,5,4,10,0,3];

for ( let i = 0; i < numberMas.length; i++) {
  if (numberMas[i] === 0) break;
  console.log(numberMas[i]);
}

//Задание 2


const numbs = [1, 5, 4, 10, 0, 3];

numbs.forEach((el, index) => {
	console.log(`${index}: ${el}`);
});
// индекс 2

//Задание 3

let number = [1, 3, 5, 10, 20];
number = number.join(' ');
console.log(number);

//Задание 4

let arr = []; 

for (let i = 0; i < 3; i++) {  
  let subArr = [];  

  for (let j = 0; j < 3; j++) {  
    subArr.push(1); 
  }
  arr.push(subArr);  
}
console.log(arr);


//Задание 5

let number = [1, 1, 1];
number.push(2, 2, 2)
console.log(number);

//Задание 6

let number = [9, 8, 7, 'a', 6, 5];
number = number.sort();
number.pop();
console.log(number);

//Задание 7

let numbMassiv = [9, 8, 7, 6, 5];

const numberUser = Number(prompt('Введите число от 1 до 10'));

numbMassiv.includes(numberUser) ? alert('Есть такое') : alert('Попробуй еще раз');

//Задание 8

const str = 'abcdef';
 
const reverse = str.split('').reverse().join('');

console.log(reverse);

//Задание 8 вариант 2 

let str = 'abcdef';
str = str.split('');
str = str.reverse();
str = str.join();
console.log(str);


// Задание 9

let numbOne = [1, 2, 3];
let numbTwo = [4, 5, 6];

let all = [...numbOne, ...numbTwo];

console.log(all);

// Задание 9 вариант 2

let numbOne = [1, 2, 3];
let numbTwo = [4, 5, 6];

let all = numbOne.concat(numbTwo);

console.log(all);

//Задание 10

const arr = [1, 3, 2, 9, 5, 8, 10, 4, 6, 7];

for (let i = 0; i < arr.length - 1; i++) {
console.log(arr[i] + arr[i + 1]);
}

// Задание 11

const square = [4, 2, 7 ,9];
let result = square.map(item => (item ** 2));
console.log(result);


//Задание 12 
function getWordsLengths(words) {
    let lengths = [];
    for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;
    lengths.push(wordLength);
    }
    return lengths;
    }
  let words = (['день', '', 'глагол', 'хороший вечер', 'арбуз']);
  let wordsLengths = getWordsLengths(words)
  console.log (wordsLengths)

//Задание 13

let num = [9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < num.length; i++) num[i] = -num[i] || 0;
console.log(num);

