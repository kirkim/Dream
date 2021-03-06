'use strict';
import PopImage from './class/popImage.js';
import PopNote from './class/popNote.js';
import PopTask from './class/popTask.js';
import PopVideo from './class/popVideo.js';
const addNavForm = document.querySelector('#add__navigator');
let popWin;
const popForm = document.querySelector('#pop__section');
function handleAddNav(event) {
    switch (event.target.id) {
        case 'image__btn':
            popWin = new PopImage('Title', 'URL');
            break;
        case 'video__btn':
            popWin = new PopVideo('Title', 'URL');
            break;
        case 'note__btn':
            popWin = new PopNote('Title', 'Body');
            break;
        case 'task__btn':
            popWin = new PopTask('Title', 'Body');
            break;
    }
    popWin.open();
}
function handlePopForm(event) {
    switch (event.target.id) {
        case 'pop__close__btn':
            popWin.close();
            break;
        case 'pop__submit':
            popWin.make();
            break;
    }
}
addNavForm === null || addNavForm === void 0 ? void 0 : addNavForm.addEventListener('click', handleAddNav);
popForm === null || popForm === void 0 ? void 0 : popForm.addEventListener('click', handlePopForm);
