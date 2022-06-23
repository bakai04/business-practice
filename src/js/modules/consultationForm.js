import { renderValidation } from "./validatingFormFunc.js";

function resetConsultationForm(){
    const nameInput = document.querySelector(".name");
    const emailInput = document.querySelector(".email");
    const successfullyText = document.querySelector(".successfully");
    const sendFormDataBtn = document.querySelector(".consulting-form__btn");
    sendFormDataBtn.textContent = "Получить консультацию";
    successfullyText.classList.add("d-none");
    nameInput.value = "";
    emailInput.value = "";
}


function submittingConsultationData() {
  const nameInput = document.querySelector(".name");
  const emailInput = document.querySelector(".email");
  const sendFormDataBtn = document.querySelector(".consulting-form__btn");
  const successfullyText = document.querySelector(".successfully");
  sendFormDataBtn.textContent = "идет отправка...";
  sendFormDataBtn.disabled = true;
  setTimeout(() => {
    console.log({
      name: nameInput.value,
      email: emailInput.value,
    });
    sendFormDataBtn.disabled = false;
    successfullyText.classList.remove("d-none");
    setTimeout(() => {
        resetConsultationForm();
    }, 1000);
  }, 2000);
}

function consultationForm() {
  const nameInput = document.querySelector(".name");
  const emailInput = document.querySelector(".email");
  const sendFormDataBtn = document.querySelector(".consulting-form__btn");

  sendFormDataBtn?.addEventListener("click", () => {
    let inputNameValue = renderValidation(nameInput);
    let inputEmailValue = renderValidation(emailInput);

    nameInput.addEventListener("input", () => {
      renderValidation(nameInput);
    });

    emailInput.addEventListener("input", () => {
      renderValidation(emailInput);
    });
    if (inputNameValue === true && inputEmailValue === true) {
      submittingConsultationData();
    }
  });
}

export default consultationForm;
