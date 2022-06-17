const inputValidatingFunctions = {
  name: [
    function (value) {
      if (value.length <= 0) {
        return "поле обязательно*";
      } else {
        return "";
      }
    },
    function (value) {
      const capitalLetters = /[A-Z]|[А-Я]/;
      if (capitalLetters.test(value[0])) {
        return "";
      } else {
        return "Первая буква должен быть заглавным*";
      }
    },
    function (value) {
      if (value.length < 3) {
        return "должно быть более 3 символов*";
      }
    },
  ],
  email: [
    function (value) {
      if (value.length <= 0) {
        return "поле обязательно*";
      } else {
        return "";
      }
    },
    function (value) {
      if (value.length < 3) {
        return "должно быть более 3 символов*";
      }
    },
  ],
  textarea: [
    function (value) {
      if (value.length <= 0) {
        return "поле обязательно*";
      } else {
        return "";
      }
    },
    function (value) {
      if (value.length < 3) {
        return "должно быть более 3 символов*";
      }
    },
  ],
};

export function checkInput(formInput) {
  const warningErrorText = document.querySelector(
    `.warning-${formInput.name}-error`
  );
  const nameOfInput = formInput.name;
  const typeOfValidating = inputValidatingFunctions[nameOfInput];

  for (let i = 0; i <= typeOfValidating.length - 1; i++) {
    let result = typeOfValidating[i](formInput.value);
    warningErrorText.textContent = result;
    if (result) {
      break;
    }else{
      if(i===typeOfValidating.length - 1){
        return formInput.value;
      }
    }
  }
}
