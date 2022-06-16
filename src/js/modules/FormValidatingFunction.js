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

export function checkInput(formInput) {
  const warningError = document.querySelector(
    `.warning-${formInput.name}-error`
  );
  let value = "";
  if (formInput.value.length == 0) {
    formInput.classList.add("error");
    warningError.textContent = "this field is reqiured*";
  } else {
    if (formInput.value.length < 3) {
      formInput.classList.add("error");
      warningError.textContent = "should be more then 3 symbols";
    } else {
      formInput.classList.remove("error");
      warningError.textContent = "";
      value = formInput.value;
    }
  }
  return value;
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
