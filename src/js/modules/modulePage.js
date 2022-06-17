import { submittingFormData } from "./modalPageFunc.js";
import { checkInput } from "./validatingFormFunc.js";

function modulePage() {
  const sendFormDataBtn = document.querySelector(".form__button-submit");
  const nameInput = document.querySelector(".name");
  const textarea = document.querySelector(".big-text");
  const emailInput = document.querySelector(".email");

  sendFormDataBtn?.addEventListener("click", () => {
    let inputNameValue = checkInput(nameInput);
    let inputEmailValue = checkInput(emailInput);
    let inputTextArea = checkInput(textarea);
    textarea.addEventListener("input", () => {
      checkInput(textarea);
    });

    nameInput.addEventListener("input", () => {
      checkInput(nameInput);
    });

    emailInput.addEventListener("input", () => {
      checkInput(emailInput);
    });
    if (
      inputNameValue !== undefined &&
      inputEmailValue !== undefined &&
      inputTextArea !== undefined
    ) {
      submittingFormData(inputNameValue, inputEmailValue, inputTextArea);
    }
  });
}

export default modulePage;
