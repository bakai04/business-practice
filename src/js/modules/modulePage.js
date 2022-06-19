import { submittingFormData } from "./modalPageFunc.js";
import { renderValidation } from "./validatingFormFunc.js";

function modulePage() {
  const sendFormDataBtn = document.querySelector(".form__button-submit");
  const nameInput = document.querySelector(".name");
  const textarea = document.querySelector(".big-text");
  const emailInput = document.querySelector(".email");

  sendFormDataBtn?.addEventListener("click", () => {
    let inputNameValue = renderValidation(nameInput);
    let inputEmailValue = renderValidation(emailInput);
    let inputTextArea = renderValidation(textarea);
    
    textarea.addEventListener("input", () => {
      renderValidation(textarea);
    });

    nameInput.addEventListener("input", () => {
      renderValidation(nameInput);
    });

    emailInput.addEventListener("input", () => {
      renderValidation(emailInput);
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
