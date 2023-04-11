import throttle from 'lodash.throttle';

//element to get event listener from
const form = document.querySelector('.feedback-form');

//Local storage key
const STORAGE_KEY = "feedback-form-state";

// Load saved data from storage (if any)
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
  form.email.value = savedData.email || '';
  form.message.value = savedData.message || '';
}

// Function to save form data to localStorage
const saveDataToLocalStorage = throttle(() => {
  const data = {
    email: form.email.value,
    message: form.message.value
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}, 500);

// Event listener on form submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

 // Check if required fields are not empty
 if (form.email.value.trim() === '' || form.message.value.trim() === '') {
  alert('Please fill in all required fields.');
  return;
}

  const data = {
    email: form.email.value,
    message: form.message.value
  };
  console.log(data);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

// Event listener on form input
form.addEventListener('input', saveDataToLocalStorage);
