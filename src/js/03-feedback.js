const form = document.querySelector('.feedback-form');
const localStorageKey = 'goit-example-message';
const input = document.querySelector('name');
const textArea = document.querySelector('email');

form.elements.email.value = localStorage.getItem(localStorageKey) ?? '';
form.addEventListener('input', evt => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});

try {
  const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (parsedData.email !== '' && parsedData.message !== '') {
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
  } else {
  }
} catch (error) {
  console.log('parsedData error: ' + error);
}
