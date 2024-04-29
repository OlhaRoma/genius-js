//------------//

// const message = 'JavaScript is awesome!';*
// alert(message);
// console.log(message);

// Отримання даних
// const isConfirm = confirm("Please confirm reservation");
// console.log(isConfirm);

// const number = prompt("Please enter your number");
// console.log(number);

// Перетворення типу даних
// const value = prompt("Please enter a number");
// console.log(typeof value);
// console.log(value);

// let value
// -----String----- //
// value = false;
// console.log(typeof value);
// const newValue = String(value);
// console.log(typeof newValue);

// -----Number----- //
// value = '123';
// console.log(typeof value);
// const newValue = Number(value);
// console.log(typeof newValue);

// -----Boolean----- //
// Значення, що інтуїтивно порожні (0, порожній рядок,
// null, undefined, NaN) стають false. Інші true.

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean('hi')); // true
// console.log(Boolean("")); // false

// ----and---- //
// console.log(5 === 6 && 6 > 3);

// ----or---- //
// console.log(5 * 5 === 25 || 2 * 2 === 6);

// ----not----//
// console.log(!false);

// ---if/else--- //
// if (5 * 5 === 25) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// ---Тернерний оператор--- //
// 2 + 2 === 5 ? console.log('1') : console.log('2');
// 5 * 5 === 25 ? console.log(true) : console.log(false);

// if (5 * 5 === 24) {
//     console.log('5 * 5 === 25');
// } else if (2 + 5 === 7) {
//     console.log('2 + 5 === 7');
// } else {
//     console.log('no');
// }

// let lang = "ua";
//
// if (lang === "ua") {
//     console.log("понеділок");
// } else if (lang === "en") {
//     console.log("Monday");
// } else {
//     console.log("Reset");
// }

// ---switch/case--- //
// let cost = null;
// const sub = "pro";
// switch (sub) {
//     case "free":
//         cost = 0;
//         break;
//
//     case "pro":
//         cost = 100;
//         break;
//
//     case "premium":
//         cost = 500;
// }
// console.log(cost);


// -----Задачі----- //

// const min = prompt("Введіть хвилину");
//
// if (min >= 0 && min <= 14) {
//     console.log("Перша чверть");
// } else if (min >= 15 && min <= 29) {
//     console.log("Друга чверть");
// } else if (min >= 30 && min <= 44) {
//     console.log("Третя чверть");
// } else if (min >= 45 && min <= 60) {
//     console.log("Четверта чверть");
// } else {
//     console.log("не коректне значення");
// }

// const value = prompt("Введіть назву товару").toLowerCase();
// let cost;
//
// switch (value) {
//     case "мандарин" : cost = 59;
//         alert(`${value} коштує ${cost} гривень за кілограм` );
//         break;
//
//     case "апельсин" : cost = 120;
//         alert(`${value} коштує ${cost} гривень за кілограм` );
//         break;
//
//     case "памело" : cost = 100;
//         alert(`${value} коштує ${cost} гривень за кілограм` );
//         break;
//
//     case "світі" : cost = 220;
//         alert(`${value} коштує ${cost} гривень за кілограм` );
//         break;
//
//     case "лимон" : cost = 44;
//         alert(`${value} коштує ${cost} гривень за кілограм` );
//         break;
//
//     default :
//         alert(`${value} немає в наявності` );
//}

// -----Homework-----//
// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// const value = prompt("Число");
// if (value > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// const value = prompt("Число");
// value > 0 ? console.log(true) : console.log(false);


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true

// const value = prompt("Введіть змінну");
//
// if (value === "test") {
//     console.log(true);
// } else {
//     console.log(false);
// }


// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let number = 13;
// if (number > 10) {
//     console.log(number - 5);
// } else {
//     console.log(number + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const month = prompt("Введіть число від 1 до 12");
// let name;
// switch (month) {
//     case "1" : name = "Jan";
//         break;
//     case "2" : name = "Feb";
//         break;
//     case "3" : name = "Mar";
//         break;
//     case "4" : name = "Apr";
//         break;
//     case "5" : name = "May";
//         break;
//     case "6" : name = "June";
//         break;
//     case "7" : name = "July";
//         break;
//     case "8" : name = "Aug";
//         break;
//     case "9" : name = "Sep";
//         break;
//     case "10" : name = "Oct";
//         break;
//     case "11" : name = "Nov";
//         break;
//     case "12" : name = "Dec";
//         break;
//     default :
//         alert(`${month} - некоректне значення` );
// }
// alert(name);

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const number = parseInt(prompt(("Введіть тризначне число")));
// const result = sumOfDigits(number);
// function sumOfDigits (num) {
//     return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
// }
// alert(`Сума цифр числа ${number}: ${result}`);


// let theJavaName = prompt('Яка “офіційна” назва JavaScript?');
//     if (theJavaName == 'ECMAScript') {
//         alert('Правильно!');
//     } else {
//         alert('Ви не знаєте? ECMAScript!');
//     }

//
// let number = +prompt('Enter number');
// if (number > 0) {
//     alert(1);
// } else if (number < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }


// let message;
//
// if (login == 'Працівник') {
//     message = 'Привіт';
// } else if (login == 'Директор') {
//     message = 'Вітаю';
// } else if (login == '') {
//     message = 'Немає логіну';
// } else {
//     message = '';
// }
//
// let message = (login == 'Працівник') ? 'Привіт' :
//     (login == 'Директор') ? 'Вітаю' :
//         (login == '') ? 'Немає логіну' :
//             '';


// alert( alert(1) || 2 || alert(3) );


// alert( alert(1) && alert(2) );

let a = +prompt('a?', '');

switch (a) {
    case 0: alert( 0 );
    break;
    case 1: alert( 1 );
    break;
    case 2:
    case 3:
        alert( '2,3' );
    break;
}
