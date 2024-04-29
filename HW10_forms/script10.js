// function check() {
//     let value = document.getElementsByName('radio');
//     if (value[0].checked) {
//         console.log('Female');
//     } else {
//         console.log('Male');
//     }
// }

// let form = document.querySelector('.form');
// let nameInput = document.querySelector('.inputName');
// let lastNameInput = document.querySelector('.inputLastName');
// let age = document.querySelector('#age');
// let female = document.getElementsByName('radio');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const info = {
//         name: nameInput.value,
//         lastname: lastNameInput.value,
//         age: age.value,
//         female: female[0].checked,
//     };
//     console.log(info);
//     localStorage.setItem('info', JSON.stringify(info));
// }
// // const data = localStorage.getItem('info');
// // console.log(JSON.parse(data));

// if (localStorage.getItem('info')) {
//     const data = JSON.parse(localStorage.getItem('info'));
//     nameInput.value = data.name;
// }

/////////////////////////////////////////////////////////////////////

// let form = document.querySelector('#form');
// let formData = {};

// form.addEventListener('input', handleSubmit)
    
// function handleSubmit (event) {
//     formData[event.target.name] = event.target.value;
//     localStorage.setItem('formData', JSON.stringify(formData));
// };

// if (localStorage.getItem('formData')) {
//     formData = JSON.parse(localStorage.getItem('formData'));

//     for (let key in formData) {
//         form.elements[key].value = formData[key];
//     }
// }
