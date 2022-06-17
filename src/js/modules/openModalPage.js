import {
    openForm,
  } from "./modalPageFunc";
function openModalPage() {
    const openBtn=document.querySelector("#open-modal");
    const closeBtn=document.querySelector(".modal-page__close");

    openBtn?.addEventListener("click", ()=>{
        openForm();
    });
    closeBtn?.addEventListener("click", ()=>{
        openForm();
    });
}

export default openModalPage;