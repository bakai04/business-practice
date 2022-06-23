import { renderValidation } from "./validatingFormFunc.js";
export function toggleForm() {
  document.querySelector(".modal-page").classList.toggle("d-none");
  document.querySelector("body").classList.toggle("overflow-hidden");
}
export function trackToInput() {
  const nameInput = document.querySelector(".name");
  const textarea = document.querySelector(".big-text");
  const emailInput = document.querySelector(".email");

  textarea.addEventListener("input", () => {
    renderValidation(textarea);
  });

  nameInput.addEventListener("input", () => {
    renderValidation(nameInput);
  });

  emailInput.addEventListener("input", () => {
    renderValidation(emailInput);
  });
}



function resetForm() {
  const nameInput = document.querySelector(".name");
  const emailInput = document.querySelector(".email");
  const textarea = document.querySelector(".big-text");
  const successfullyText = document.querySelector(".successfully");
  const sendFormDataBtn = document.querySelector(".form__button-submit");

  sendFormDataBtn.value = "отправить";
  successfullyText.classList.add("d-none");
  nameInput.value = "";
  textarea.value = "";
  emailInput.value = "";
}




export function submittingFormData() {
  const nameInput = document.querySelector(".name");
  const emailInput = document.querySelector(".email");
  const textArea = document.querySelector(".big-text");
  const sendFormDataBtn = document.querySelector(".form__button-submit");
  const successfullyText = document.querySelector(".successfully");
 
  sendFormDataBtn.value = "идет отправка...";
  sendFormDataBtn.disabled = true;
  setTimeout(() => {
    console.log({
      name: nameInput.value,
      email: emailInput.value,
      problem: textArea.value,
    });
    sendFormDataBtn.disabled = false;
    successfullyText.classList.remove("d-none");
    setTimeout(() => {
      toggleForm();
      resetForm();
    }, 1000);
  }, 2000);
}
