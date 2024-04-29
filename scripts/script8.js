////// перебираємо дітей

// for (let i = 0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i]);
// }

//////////////////////////

// let element = document.getElementById('element');
// element.style.background = 'orange';

////////////////////////////////////

// let elements = document.querySelectorAll('ul > li:last-child');

// for (element of elements) {
//     console.log(element);
// }

/////////////////////////////////

// let textHidden = document.getElementById('textHidden');
// textHidden.hidden = true;

// let message = document.getElementById('textMessage');
// console.log(message.value);

// let message = document.querySelector('.textareaMessage');
// console.log(message.textContent);
// message.textContent = 'hello';

/////////////////////////////////

// let text = document.querySelector('#p-text');
// console.log(text.classList);
// console.log(text.classList.contains('nice'));

// text.classList.remove('nice');
// text.classList.add('pure');
// console.log(text.classList);

///////////////////////////////////

// const item = document.createElement('a');
// item.href = '#';
// // item.classList.add('m');
// item.textContent = 'three';

// const nav = document.querySelector('.nav');
// nav.appendChild(item);

// const heading = document.createElement('h1');
// heading.textContent = 'hello';

// const container = document.querySelector('.container');
// container.insertAdjacentElement("afterend", heading);
// container.insertBefore(heading, nav);

// nav.removeChild(item);
// item.remove();

/////////////////////////////////////

// const list = document.querySelector('.list');
// const text = `<p>Hello</p>`;
// list.innerHTML += text;

// const list = document.querySelector('#list');

// list.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>');
// list.insertAdjacentHTML('afterbegin', '<li>afterbegin</li>');

////////////////////////////////////////////////////////////////////////////////

// Домашнє завдання
// -----1-----
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.
// <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div>
// <script>/* ваш код */</script>
// </body>
// </html>

// console.log(document.body.hasAttribute('data-widget-name'));

// let elem = document.querySelector('[data-widget-name]');

// console.log(elem.getAttribute('data-widget-name'));
// console.log(elem.textContent);