const submitButton = document.querySelector('.button');
const email = document.querySelector('.email');
const errorMessage = document.querySelector('.error-message');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate() {
  const emailValue = email.value;

  if(emailRegex.test(emailValue)) {
    errorMessage.style.display = 'none';
    email.classList.remove('error');
    return true;
  } else {
    errorMessage.style.display = 'block';
    email.classList.add('error');
    return false;
  }
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  validate();
})

email.addEventListener('input', validate);