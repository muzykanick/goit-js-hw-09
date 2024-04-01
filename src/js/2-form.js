const form = document.querySelector(".feedback-form");
const input = form.elements.email;
const textarea = form.elements.message;

form.addEventListener("input", inputHandle);
form.addEventListener("submit", submitHandle);

const localStorageKey = "feedback-form-state";

const storedData = JSON.parse(localStorage.getItem(localStorageKey));
if (storedData) {
  input.value = storedData.email ?? "";
  textarea.value = storedData.message ?? "";
}

function inputHandle(event) {
  let formData = {
    email: event.currentTarget.elements.email.value.trim(),
    message: event.currentTarget.elements.message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function submitHandle(event) {
  event.preventDefault();
  if (input.value !== "" && textarea.value !== "") {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert("Please fill out the form");
  }
}