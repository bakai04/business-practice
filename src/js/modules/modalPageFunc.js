export function openForm() {
  document.querySelector(".modal-page").classList.toggle("d-none");
  document.querySelector("body").classList.toggle("overflow-hidden");
  resetForm();
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
export function submittingFormData(
  inputNameValue,
  inputEmailValue,
  inputTextArea
) {
  const sendFormDataBtn = document.querySelector(".form__button-submit");
  const successfullyText = document.querySelector(".successfully");
  sendFormDataBtn.value = "идет отправка...";
  sendFormDataBtn.disabled = true;
  setTimeout(() => {
    console.log({
      name: inputNameValue,
      email: inputEmailValue,
      problem: inputTextArea,
    });
    sendFormDataBtn.disabled = false;
    successfullyText.classList.remove("d-none");
    setTimeout(() => {
      openForm();
    }, 1000);
  }, 2000);
}
