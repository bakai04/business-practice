import {
    toggleForm,
  } from "./modalPageFunc";
function toggleModalPage() {
    const openBtn=document.querySelector("#open-modal");
    const closeBtn=document.querySelector(".modal-page__close");

    openBtn?.addEventListener("click", toggleForm)
    closeBtn?.addEventListener("click", toggleForm)
}

export default toggleModalPage;