let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const formDataKey = 'feedback-form-state';
let savedFormData = JSON.parse(localStorage.getItem(formDataKey));

form.addEventListener('input', saveData);
form.addEventListener('submit', sendData);

if (savedFormData) {
  formData = savedFormData;
}

function saveData(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(formDataKey, JSON.stringify(formData));
}

form.email.value = formData.email;
form.message.value = formData.message;

function sendData(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(formDataKey);
  form.reset();
  formData.email = '';
  formData.message = '';
}
