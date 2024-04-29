// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
// const btn4 = document.querySelector('#btn4');
// const btn5 = document.querySelector('#btn5');
// const btn6 = document.querySelector('#btn6');

// btn1.addEventListener('click', () => console.log('click'));
// btn2.addEventListener('contextmenu', () => console.log('contextmenu'));
// btn3.addEventListener('mouseout', () => console.log('mouseout'));
// btn4.addEventListener('mousedown', () => console.log('mousedown'));
// btn5.addEventListener('mousemove', () => console.log('mousemove'));
// btn6.addEventListener('keydown', () => console.log('keydown'));

////////////////////////////////////////////////////////////

// const addBtn = document.querySelector('#add');
// const removeBtn = document.querySelector('#remove');
// const clickBtn = document.querySelector('#click');

// const handleClick = () => {
//     console.log('hello');
// };

// addBtn.addEventListener('click', () => {
//     clickBtn.addEventListener('click', handleClick);
// });

// removeBtn.addEventListener('click', () => {
//     clickBtn.removeEventListener('click', handleClick);
// });

///////////////////////////////////////////////////////////

// const clickBtn = document.querySelector('#click');

// const infoClick = (event) => {
//     console.log(event.target);
// }

// clickBtn.addEventListener('click', infoClick);

/////////////////////////////////////////////////////////

// const form = document.querySelector('.form');
// const loginInput = form.querySelector('input[type="text"]');
// const passwordInput = form.querySelector('input[type="password"]');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const login = loginInput.value;
//     const password = passwordInput.value;

//     console.log(`login ${login}, password ${password}`);
//     // console.log(`login ${loginInput.value}, password ${passwordInput.value}`);
//     form.reset();
// }

/////////////////////////////////////////////////////////////////

// вкладеність

// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const item = document.querySelector('#item');

// parent.addEventListener('click', () => console.log('parent!')); // не варто застосовувати
// child.addEventListener('click', () => console.log('child!')); // виводить і попереднє через вкладеність
// item.addEventListener('click', () => console.log('item!')); // виводить і попереднє через вкладеність

// const handleClick = (event) => {
//     console.log('event', event.target);
// }

// parent.addEventListener('click', handleClick); // рекомендований варіант

// const itemClick = (event) => {
//     console.log('itemClick stop');
//     event.stopPropagation();
// };

// const childClick = (event) => {
//     console.log('childClick stop');
//     event.stopPropagation();
// };

// const parentClick = (event) => {
//     console.log('parentClick stop');
//     event.stopPropagation();
// };

// parent.addEventListener('click', parentClick);
// child.addEventListener('click', childClick);
// item.addEventListener('click', itemClick);

/////////////////////////////////////////////////////////

// const nav = document.querySelector('.nav');

// nav.addEventListener('click', handleClick);

// function handleClick(event) {
//     const checkClass = nav.querySelector('li.active');

//     if (checkClass) {
//         event.target.classList.remove('active');
//     } else {
//         event.target.classList.add('active');
//     }
// }

//////////////////////////////////////////////////

// м'ячик

// const ball = document.querySelector('.ball');

// ball.onmousedown = function (event) {
//     function move(pageX, pageY) {
//         ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
//         ball.style.top = pageY - ball.offsetWidth / 2 + 'px';
//     }

//     move(event.pageX, event.pageY);

//     function onMouseMove(event) {
//         move(event.pageX, event.pageY);
//     }

//     document.addEventListener('mousemove', onMouseMove);

//     ball.onmouseup = function () {
//         document.removeEventListener('mousemove', onMouseMove);
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////

// Домашнє завдання
// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// const btn = document.querySelector('.btn');
// const text = document.querySelector('#text');

// btn.addEventListener('click', () => text.hidden = true);

// document.querySelector('.btn').onclick = function() { /// другий варіант
//     document.getElementById('text').hidden = true;
// }


// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => btn.hidden = true);

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

    // помістіть кожен текстовий вузол у елемент <span>
    // він займає саме те місце, яке необхідне для тексту,
    // for (let li of tree.querySelectorAll('li')) {
    //   let span = document.createElement('span');
    //   li.prepend(span);
    //   span.append(span.nextSibling); // поміщаємо текстовий вузол у span
    // }

    // // ловимо кліки на всьому дереві
    // tree.onclick = function(event) {

    //   if (event.target.tagName != 'SPAN') {
    //     return;
    //   }

    //   let childrenContainer = event.target.parentNode.querySelector('ul');
    //   if (!childrenContainer) return; // дітей немає

    //   childrenContainer.hidden = !childrenContainer.hidden;
    // }