// ***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).
// let name = "Ivan";
// let city = "Kyiv";
// city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); // привіт Olga

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип
// console.log(parseInt(a));
// console.log(typeof Number(a));
// console.log(parseInt(b));
// console.log(typeof parseInt(b));
// console.log(parseFloat(c));
// console.log(typeof parseFloat(c));

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
// console.log((0.1*10 + 0.2*10)/10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40
// console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
// console.log(Math.random()*((4-2)+2));

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);

//***8**
//вивести в консоль message великими літерами
// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль
// let user = {
//     name: 'Olga',
//     age: 25,
//     city: 'Kyiv'
// };
// let user = {};
// user.name = "Olga";
// user.age = 23;
// user.city = "Kyiv";
// console.log(user);
// delete user.city;
// user ["like flowers"] = true;
// console.log(user);

//***10**
// За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта
// for (key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// ---other tasks---//
// 1e3 === 1 * 1000; // e3 означає *1000
// 1.23e6 === 1.23 * 1000000; // e6 означає *1000000
//
// // -3 ділиться на 1 з 3 нулями
// 1e-3 === 1 / 1000; // 0.001
//
// // -6 ділиться на 1 з 6 нулями
// 1.23e-6 === 1.23 / 1000000; // 0.00000123
//
// // an example with a bigger number
// 1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

// let sum = 0.1 + 0.2;
// alert( +sum.toFixed(2) ); // 0.3 +унарний плюс, приводить до числа

// let firstNumber = parseInt(prompt("введіть перше число"));
// let secondNumber = parseInt(prompt("введіть друге число"));
//
// alert(firstNumber+secondNumber);

// alert(Math.round(6.35 * 10) / 10);

// let str = `Привіт`;
//
// // перший символ
// alert( str[0] ); // П
// alert( str.charAt(0) ); // П
//
// // останній символ
// alert( str[str.length - 1] ); // т
// alert( str.at(-1) );

// let age = +prompt("enter number");
// alert(age < 14 || age > 90);
//
// if (!(age >= 14 && age <= 90))
//
// let user = {
//     name: "Іван",
//     age: 30
// };
//
// let key = prompt("Що ви хочете знати про користувача?", "name");
//
// // доступ до властивості через змінну
// alert( user[key] ); // Іван (якщо ввести "name")
