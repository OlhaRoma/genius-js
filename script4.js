// ---functions--- //

// function ShowMessage() {
//     console.log('Hello');
// }
// ShowMessage();

// function ShowMessage(name, city) {
//     console.log('Hello ' + name + ' Are you from ' + city);
// }
// ShowMessage('Olha', 'Poltava');
// ShowMessage('Mary', 'Rivne');

// const userName = 'Ann';
// const sayHi = function () {
//     let message = 'Hello, my name is ';
//     console.log(message + userName);
// }
// sayHi();

// function sum(a, b) {
//     return a + b;
// }
//
// result = sum(7,8);
// console.log(result);

//??????????????????????????//
// const testFunction = function (a, b, c) {
//     console.log('a:', a);
//     console.log('b:', b);
//     c = a + b;
//
//     return c;
// }
// testFunction(5, 8);

// порядок виконання коду//

// const a = function () {
//     c();
//     console.log('a function');
//     b();
// } //по порядку
//
// const b = function () {
//     console.log('b function');
// }
//
// const c = function () {
//     console.log('c function');
// }
//
// a();

// аргументи //

// const addName = function () {
//     const arg = Array.from(arguments);
//     console.log(arguments);
//     console.log(arg);
// }
//
// addName(1, 2, 3);

// const addName = function (...arg) {
//     console.log(arg)
// }
// addName(4, 6, 8);

// callback //

// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }
//
// function showYes() {
//     console.log('you say ok');
// }
//
// function showNo() {
//     console.log('you say no');
// }
//
// ask('yes or no?', showYes, showNo)

// hof //

// const hello = function (name) {
//     console.log(`hello ${name}`)
// }
//
// const searchName  = function (callback) {
//   const name = 'Ivan';
//   callback(name);
// }
//
// searchName(hello);

// function checkAge(age) {
//     if (age>18) {
//         return console.log('hello');
//     }
//     console.log('bye');
// }
//
// checkAge(23);

// function showMovie(age) {
//     if (age < 21) {
//         return;
//     }
//     return console.log('go');
// }
// showMovie(23);

// --- стрілочні функції -- //

// const showMovie = (age) => {
//     if (age > 21) {
//         return console.log('go');
//     }
// };
// showMovie(23);

// const a = () => {
//   console.log('a');
// };
//
// const b = () => {
//     console.log('b');
// };
//
// const c = () => {
//     console.log('c');
//     a();
//     b();
// };
//
// c();

// ---Real example--- //
// const addNumber = (number) => {
//   let sum = Number(number) + 10;
//   return console.log(sum);
// };
//
// const numberRef = document.querySelector('input[name="number"]');
//
// const buttonRef = document.querySelector("button");
//
// buttonRef.addEventListener('click', () =>
//     addNumber(numberRef.value));


// ---1---
// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Батьки дозволили?');
//     }
// }
// checkAge(17);

// let age = 17;
// let funk = (age > 18) ?
//     function () {return true;}:
//     function () {return confirm('Батьки дозволили?')};
// funk ();

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Батьки дозволили?');
// }
//
// function checkAge(age) {
//     return (age > 18) || confirm('Батьки дозволили?');
// }

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a,b) {
//     if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }

// function min(a, b) {
//     return a < b ? a : b;
// }
//
// min(2,3);
//
// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// let ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }
// ask(
//     "Ви згодні?",
//     yes => { alert("Ви погодились."); },
//     no => { alert("Ви скасували виконання."); }
// );

// function showPrimes(n) {
//
//     for (let i = 2; i < n; i++) {
//         if (!isPrime(i)) continue;
//
//         alert(i);  // просте число
//     }
// }
//
// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if ( n % i === 0) return false;
//     }
//     return true;
// }
// showPrimes(7);


// let ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }
// ask(
//     "Ви згодні?",
//     () => alert("Ви погодились."),
//     () => alert("Ви скасували виконання.")
// );

// Напишіть функцію pow(x, n), яка повертає число x, піднесене до степеня n.
// Інакше кажучи, множить число x саме на себе n разів і повертає результат.
// Функція повинна підтримувати лише натуральні значення n, тобто цілі числа, починаючи з 1.

// function pow(x, n) {
//     let result = x;
//
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//
//     return result;
// }
//
// let x = prompt("x?", '');
// let n = prompt("n?", '');
//
// if (n < 1) {
//     alert(`Степінь ${n} не підтримується, використовуйте натуральне число`);
// } else {
//     alert( pow(x, n) );
// }