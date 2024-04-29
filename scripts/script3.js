// ----Області видимості---- //

// global
// const a = 5;
// console.log("global", a);
//
// //block
// if (true) {
//     const b = 10;
//     console.log("block", b);
// }
// console.log("block", b);//помилка оскільки поза блоком

// --- while --- //
// let a = 0;
//
// while (a < 5) {
//     a++;
//     console.log("a",a);
// }
//
// let a = 3;
// while (a) console.log(a--);

// --- do while --- //
// let a = 0;
// do {
//     console.log (a);
//     a++;
// } while (a < 5);

// --- for --- //
// for (let a = 0; a < 3; a++) {
//     console.log(a);
// }

// let sum = 0;
// // while (true) {
// //     let value = +prompt('enter number');
// //     if (!value) break;
// //     sum +=value;
// // }
// // console.log('Sum', sum);

// for (let i = 0; i < 10; i++) {
//     if (i % 2 !== 0) continue;
//     console.log(i);
// }

// let arr = ['Apple', 'Orange', "Plum"];
// console.log(arr);
// arr [2] = 'Lemon';
// arr [3] = 'Cherry';
// console.log(arr);
//
// arr.push('Tomato');
// arr.pop();
//
// arr.shift();
// arr.unshift("Melon")
// console.log(arr);

// for (let i = 0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let item of arr) {
//     console.log(item);
// }

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
// console.log(matrix[1][2]);
//
// --- присвоєння --- //
// let arr = [1,2,3];
// let arr2 = arr;
//
// arr.push(4);
//
// console.log(arr2);

// --- методи масиву --- //
// let arr = ['a', 'b', 'c', 'd', 'e',];
//
// delete arr[2];// is not correct
//
// arr.splice(2, 2);
//
// console.log(arr);
// console.log(arr.slice(1, 3));


// let arr = ['a', 'b', 'c', 'd', 'e',];
// let a = [1, 2, 3];
// console.log(arr.concat(a, 'test'));

// console.log(arr.indexOf('c', 1));
// console.log(arr.lastIndexOf('c'));

// console.log(arr.includes('c'));

// --- find, filter --- //
// const fruits = [
//     {id: 0, name: 'apple'},
//     {id: 1, name: 'pear'},
//     {id: 2, name: 'plum'},
//     {id: 3, name: 'orange'},
//     {id: 4, name: 'banana'},
// ];
// console.log(fruits.find((item)=> item.id === 1));
// console.log(fruits.filter((item) => item.id <2));

// --- map --- //
// let result = fruits.map((item) => item.name.length);
// console.log(result);

// let names = 'Olha, Yulia, Ann, Kate';
// let arr = names.split(", ");
// console.log(arr);
// let newString = arr.join(", ");
// console.log(newString);


// let arr = [1, 2, 3, 4, 5];
// let red = arr.reduce((sum, item) => sum + item);
// console.log(red);

// let arr = [23, 45, 56];
// let sum = arr.reduce((sum, item) => sum + item)/arr.length;
// console.log(sum);


// let user = {
//     name: "Іван",
//     age: 30
// };
//
// let key = prompt("Що ви хочете знати про користувача?", "name");
//
// // доступ до властивості через змінну
// alert( user[key] ); // Іван (якщо ввести "name")

// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
// };
//
// for (let code in codes) {
//     alert( code ); // 49, 41, 44, 1
// }



// -- 1 --
// У вас є масив об’єктів fruits, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruits = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomato" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];
//
// const names = fruits.map(item => item.name);
// console.log(fruits);
// console.log(names);

// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) continue;
//     console.log(i);
// }

// -- 3 --
//Замініть цикл "for" на "while"
// let i = 0;
// while (i < 5) {
//     console.log( `цифра ${i}!` );
//     i++
// }


// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
//
// let number;
// do {
//     number = +prompt("Enter number > 100");
// } while (number <= 100 && number);

// -- 5 --
// Вирахуйте середній вік
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];
//
// const gage = girls.map(item => item.age);
// console.log(gage);
// let avAge = gage.reduce((sum, item) => sum + item)/gage.length;
// console.log(avAge);

// let user = {
//     name: "Іван",
//     age: 30
// };
//
// let key = prompt("Що ви хочете знати про користувача?");
//
// // доступ до властивості через змінну
// alert( user[key] ); // Іван (якщо ввести "name")

// // Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.
// let obj = {
//     width: 200,
//     height: 300,
//     title: "Моє меню"
// };
//
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }


// let styles = ['Jazz', 'Blues'];
// styles.push('Rock');
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// styles.shift();
// styles.unshift('Rap','Reggae')
