// class CircleBox {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }

//     hide() {
//         this.$el.style.display = 'none';
//     }
    
//     show() {
//         this.$el.style.display = 'block';
//     }
// }

// class CircleItem extends CircleBox {
//     constructor(options) {
//         super(options.selector);
//         this.$el.style.width = options.size + 'px';
//         this.$el.style.height = options.size + 'px';
//         this.$el.style.borderRadius = '50%';
//         this.$el.style.background = options.color;
//     }
// }

// const CircleRed = new CircleItem({
//     selector: '#circleRed',
//     color: 'red',
//     size: 90,
// })

// const CircleYellow = new CircleItem({
//     selector: '#circleYellow',
//     color: 'yellow',
//     size: 70,
// })

// const CircleGreen = new CircleItem({
//     selector: '#circleGreen',
//     color: 'green',
//     size: 50,
// })

// CircleRed.hide();
// CircleRed.show();

//////////////////////////////////////////////////

// function Car(name, color) {
//     this.name = name;
//     this.color = color;
// }

// Car.prototype.nameMessage = function () {
//     console.log(`${this.name}`);
// };

// Car.prototype.colorMessage = function () {
//     console.log(`${this.color}`);
// };

// const opeld = new Car('Opeld', 'green');

// opeld.colorMessage();
// opeld.nameMessage();

//////////////////////////////////////////////

// let message = {
//     messageHello() {
//         console.log(`hello ${this.name}`);
//     },

//     messageBye() {
//         console.log(`bye ${this.name}`);
//     },
// };

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Object.assign(User.prototype, message);

// new User('olha').messageBye();


// Домашнє завдання

// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

// function Calculator(num1, num2) {
    
//     this.read = function () {
//         this.num1 = +prompt('enter 1 number');
//         this.num2 = +prompt('enter 2 number');
//     }

//     this.sum = function () {
//         return this.num1 + this.num2;
//     };

//     this.mul = function () {
//         return this.num1 * this.num2;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert('sum=' + calculator.sum());
// alert('mul=' + calculator.mul());

///////////////////////////////////////////////////

// Створіть функцію-конструктор Accumulator(startingValue).

// Об’єкт, який він створює повинен:

// Зберігати “поточне значення” у властивості value. Початкове значення має значення аргументу конструктора startingValue.
// Метод read() повинен використовувати prompt для зчитування нового числа та додавати його до value.
// Іншими словами, властивість value – це сума всіх введених користувачем значень разом із початковим значенням startingValue.

// function Accumulator(startingValue) {

//     this.value = startingValue;
    
//     this.read = function () {
//         this.value += +prompt('enter 1 number');
//     }
// }

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

///////////////////////////////////////

// Існує об’єкт ladder, що дозволяє підійматися вгору - вниз:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert( this.step );
//     return this;
//   }
// };

// ladder.up().up().down().showStep().down().showStep(); // покаже 1, потім 0