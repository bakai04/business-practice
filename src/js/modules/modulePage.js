import { submittingFormData, trackToInput } from "./modalPageFunc.js";
import { renderValidation } from "./validatingFormFunc.js";

function modulePage() {
  const sendFormDataBtn = document.querySelector(".form__button-submit");
  const nameInput = document.querySelector(".name");
  const textarea = document.querySelector(".big-text");
  const emailInput = document.querySelector(".email");

  sendFormDataBtn?.addEventListener("click", () => {
    let inputNameValid = renderValidation(nameInput);
    let inputEmailValid = renderValidation(emailInput);
    let inputTextAreaValid = renderValidation(textarea);
    trackToInput();
    if (
      inputNameValid === true &&
      inputEmailValid === true &&
      inputTextAreaValid === true
    ) {
      submittingFormData();
    }
  });
}

export default modulePage;
