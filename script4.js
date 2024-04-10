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
