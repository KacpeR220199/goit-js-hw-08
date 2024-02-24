const form = document.querySelector('.feedback-form');
const localStorageKey = 'goit-example-message';

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
    email.Input.value = parsedData.email;
    message.Input.value = parsedData.message;
  } else {
  }
} catch (error) {
  console.log('parsedData error: ' + error);
}
