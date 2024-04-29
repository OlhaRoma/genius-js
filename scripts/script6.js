// процедурне програмування

// const sum = 20000;
// const month = 12;
// const p = 1000;

// const credit = (summ, date, p) => {
//     return summ + p * date;
// };
// console.log(credit(sum, month, p));

/////////////////////////////////////////////////

//об*єктно-орієнтоване програмування

// const credit = {
//     sum: 20000,
//     month: 12,
//     p: 1000,
//     result() {
//         return this.sum + this.p * this.month;
//     },
// };
// console.log(credit.result());

/////////////////////////////////////////////

// ---класи

// class Bank {    // назва з великої літери
//     static type = 'Privat';
//     constructor(options) {
//         this.sum = options.sum;
//         this.month = options.month;
//         this.p = options.p;
//     }

//     credit() {
//         return console.log(this.sum + this.p * this.month);
//     }
// }

// const userBank = new Bank({
//     sum: 30000,
//     month: 5,
//     p: 500,
// })

// userBank.credit();
// console.log(userBank.type);

// class NewBank extends Bank {
//     constructor(options) {
//         super(options);
//         this.card = options.card;
//     }
//     credit() {
//         super.credit();
//         return console.log('I am Aval');
//     }
// }

// const Aval = new NewBank({
//     sum: 30000,
//     month: 5,
//     p: 500,
//     card: true,
// });

// console.log(Aval.credit());

///////////////////////////////////

//---get & set

// class User {
//     constructor(data) {
//         this.name = data.name;
//     }

//     firstName = ' ';
//     lastName = '';
//     age = '';
//     city = '';

//     set name(newName) {
//         const nameRow = newName.split(' ');
//         this.firstName = nameRow[0];
//         this.lastName = nameRow[1];
//     }

//     get name() {
//         return `First: ${this.firstName}. Last: ${this.lastName}`;
//     }
// }

// const Olha = new User({
//     name: 'Olha Rom',
// });

// console.log(Olha.name);

//////////////////////////////////////

// const a = {
//     x: 1,
//     y: 2,
// };
// const b = Object.create(a);
// console.log(b);

// const Manager = function (name, sales) {
//     this.name = name;
//     this.sales = sales;

    // this.sale = function () {
    //     this.sales += 1;
    // };
// };

// const ann = new Manager('Ann', 5);
// const olha = new Manager('Olha',5);

// console.log(ann);
// console.log(olha);
// ann.sale();
// console.log(ann);
// console.log(olha);

// Manager.prototype.sale = function () {
//     this.sale += 1;
// };

// console.log(ann);
// console.log(olha);
// console.dir(Manager);

///////////////////////////////////////

// class CoffeeMachine {
//     _water = 0; //ненаписане правило - _ не змінюємо такі змінні

//     constructor(power) {
//         this.power = power;
//     }

//     set waterAmount(value) {
//         if (value < 0) {
//             value = 0;
//         }
//         this._water = value;
//     }
// }

// let coffeeMachine = new CoffeeMachine(300);
// coffeeMachine.waterAmount = 20;

// console.log(coffeeMachine);

/////////////////////////////////

// ---Homework---
// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім * я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

// class Abonent {
//     constructor(data) {
//         this.name = data.name;
//         this.phone = data.phone;
//     }

//     userName = '';
//     userPhone = '';

//     set name (newName) {
//         this.userName = newName;
//     }
//     set phone (newPhone) {
//         this.userPhone = newPhone;
//     }

//     get name() {
//         return `Name: ${this.userName}`;
//     }
//     get phone() {
//         return `Phone: ${this.userPhone}.`;
//     }
// }

// const Olha = new Abonent ({
//     name: 'Olha',
//     phone: '0049485746',
// });

// const Irina = new Abonent ({
//     name: 'Ira',
//     phone: '0984738273',
// });

// const Alb = new Abonent ({
//     name: 'Albert',
//     phone: '0049485763',
// });

// console.log(Alb.name);