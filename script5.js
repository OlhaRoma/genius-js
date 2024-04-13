// --замикання -- //

// function createNewSum(n) {
//     return function () {
//         console.log(10 * n);
//     };
// }
//
// const calc = createNewSum(5);
// calc();

// function createNew(n) {
//     return function (num) {
//         return n + num;
//     };
// }
//
// const addNumber = createNew(6);
//
// console.log(addNumber(10));

// function createUrl(domain) {
//     return function (url) {
//         return `http://${url}.${domain}`;
//     };
// }
//
// const comUrl = createUrl('com');
// const uaUrl = createUrl('ua');
//
// console.log(comUrl('google'));
// console.log(comUrl('facebook'));
//
// console.log(uaUrl('google'));
// console.log(uaUrl('facebook'));

// --this-- //

// function hello() {
//     console.log('hello',this);
// }
//
// hello();
//
// const user = {
//     name: 'Ivan',
//     city: 'Kyiv',
//     sayHello: hello,
// };
//
// user.sayHello();

// function test() {
//     console.log('Function');
//     console.log(this);
// }
//
// test();
//
// document.querySelector('p').onclick = test;

// function changeColor() {
//     console.log(this);
//     this.style.background = 'green';
// }
// document.querySelector('div').onclick = changeColor;

// function changeBack() {
//     this.style.background = 'pink';
// }
// let user = document.querySelectorAll('div');
// user.forEach(function (element) {
//     element.onclick = changeBack;
// })

// const showList = () => { // стрілка не працює з this
//   console.log(this);
// };
//
// showList();
//
// const list = {
//     name: ['ann', 'olha', 'nata'],
//     showList: showList,
// }
// list.showList();

// ---bind--- //

// function hello() {
//     console.log(this);
// }

// const user = {
//     name: 'Ivan',
//     age: 30,
//     // hello: hello,
//     // sayHelloWindow: hello.bind(window),
//     info: function (city){
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`City is ${city}`);
//     }
// }
//
// const Ann = {
//     name: 'Anna',
//     age: 23,
// };
//
// const Nata = {
//     name: 'Natasha',
//     age: 56,
// };
//
// user.info.bind(Ann)('Kyiv');
// const NataInfo = user.info.bind(Nata, 'Odesa');
// NataInfo();

// ---call--- //

// const userInfo = {
//     name: 'name',
//     age: 98,
//     logInfo: function (job) {
//         console.group(`info`);
//         console.log (`Name is: ${this.name}`);
//         console.log (`Age is: ${this.age}`);
//         console.log (`job is: ${job}`);
//         console.groupEnd();
//     },
// };
//
// const Ivan = {
//     name: 'Ivan',
//     age: 45,
// };
//
// userInfo.logInfo.call(Ivan, 'developer');

// ---apply--- //

// const showUserInfo = {
//     name: name,
//     age: 98,
//     logInfo: function (job, city) {
//         console.group(`info`);
//         console.log (`Name is: ${this.name}`);
//         console.log (`Age is: ${this.age}`);
//         console.log (`job is: ${job}`);
//         console.log (`city is: ${city}`);
//         console.groupEnd();
//     },
// };
//
// const Iva = {
//     name: 'Iva',
//     age: 45,
// }
//
// showUserInfo.logInfo.apply(Iva, ['developer', 'Lviv']);

/////////////////////////////////////////

// const message = function (name, stars) {
//     console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };
//
// const Flower = {hotel: 'Flower'};
// const Hilton = {hotel: 'Hilton'};
//
// message.call(Hilton, 'Olha', '5');
// message.call(Flower, 'Olha', '4+');
//
// message.apply(Hilton, ['Olha', '5']);
// message.apply(Flower, ['Olha', '4+']);
//
// message.bind(Hilton, 'Olha', '5')();
// message.bind(Flower, 'Olha', '4+')();

/////////////////////////////////////////

// const cart = {
//     showItems() {
//         console.log('В корзині: ', this.items);
//     },
// };
//
// const women = {
//     items: ['сукня, підбори'],
// }
//
// const men = {
//     items: ['сорочка, краватка'],
// }
//
// const child = {
//     items: ['кросівки, панама'],
// }
//
// // cart.showItems.bind(men)();
// // cart.showItems.bind(women)();
// // cart.showItems.bind(child)();
//
// document.querySelector('#women')
//     .addEventListener('click', cart.showItems.bind(women));
//
// document.querySelector('#men')
//     .addEventListener('click', cart.showItems.bind(men));
//
// document.querySelector('#kids')
//     .addEventListener('click', cart.showItems.bind(child));


// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const studentData = {
//     name: name,
//     specialty: undefined,
//     studentInfo: function (mark, lessons) {
//         console.log(`${this.name} навчається за спеціальністю ${this.specialty}, середній бал ${mark}, пропустив(ла) ${lessons} пар.`);
//     }
// }
//
// const Mary = {
//     name: 'Maria',
//     specialty: 'engineer',
// };
//
// const Vlad = {
//     name: 'Wonder',
//     specialty: 'butterfly',
// };
//
// const Ivan = {
//     name: 'Vania',
//     specialty: 'human',
// };
//
// studentData.studentInfo.bind(Mary, 98.7, 2)();
// studentData.studentInfo.call(Vlad, 100, 6);
// studentData.studentInfo.apply(Ivan, [99, 9]);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const definition = {
//     showDef (name) {
//         console.log(`Надано визначення: ${name}`, this.definition);
//     }
// }
//
// const html = {
//     definition: 'шось таке цікаве',
// };
// const css = {
//     definition: 'шось таке дуже цікаве',
// };
//
// document.querySelector('#html').addEventListener('click', definition.showDef.bind(html,'HTML -'));
// document.querySelector('#css').addEventListener('click', definition.showDef.bind(css,'CSS -'));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// const shop = {
//     name: name,
//     cost: undefined,
//     amount: undefined,
//     shopInfo: function () {
//         console.log(`${this.name} коштує ${this.cost} грн за кг.`);
//     }
// }
//
// let item = {
//     name: prompt('Назва товару'),
//     cost: +prompt('Ціна за кг'),
//     amount: +prompt('Кількість товару'),
// };
//
// shop.shopInfo.call(item);
