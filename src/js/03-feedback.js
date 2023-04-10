import throttle from 'lodash.throttle';

//element to get event listener from
const inputField = document.querySelector('form');

//Event listener
inputField.addEventListener('submit', onsubmit);

//Local storage key
const STORAGE_KEY = "feedback-form-state";

//Function
function onsubmit(evt){
    evt.preventDefault();
    const inputElement = inputField.querySelector('input[type="text]')
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputElement));
    const inputResult = localStorage.getItem(STORAGE_KEY);
    const parsedResult = JSON.parse(inputResult);
    console.log(parsedResult);
    
}