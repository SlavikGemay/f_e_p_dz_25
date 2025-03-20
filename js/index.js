"use strict";

const toDoList = document.querySelector('.js--todos-wrapper');

if (localStorage.getItem('activeClick')) {
    toDoList.innerHTML = localStorage.getItem('activeClick');
}

document.querySelector('form button').onclick = (event) => {
    event.preventDefault();

    const addTask = document.querySelector('.js--form__input');

    if (addTask.value?.trim()) {
        const itemOfList = document.createElement('li');
        itemOfList.classList.add('todo-item');

        const someForListOne = document.createElement('input');
        someForListOne.type = 'checkbox';

        const someForListTwo = document.createElement('span');
        someForListTwo.textContent = addTask.value;
        someForListTwo.classList.add('todo-item__description');

        const someForListThree = document.createElement('button');
        someForListThree.textContent = 'Видалити';
        someForListThree.classList.add('todo-item__delete');

        itemOfList.append(someForListOne, someForListTwo, someForListThree);
        toDoList.append(itemOfList);

        localStorage.setItem('activeClick', toDoList.innerHTML);
    }
};

document.querySelector('.js--todos-wrapper').addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        event.target.parentElement.remove();

        localStorage.setItem('activeClick', toDoList.innerHTML);
    }

    if (event.target.tagName === 'INPUT') {
        event.target.parentElement.classList.toggle('todo-item---checked');
        localStorage.setItem('activeClick', toDoList.innerHTML);
    }

});