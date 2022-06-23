import {
    toggleForm,
  } from "./modalPageFunc";
function toggleModalPage() {
    const openBtn=document.querySelector("#open-modal");
    const closeBtn=document.querySelector(".modal-page__close");
    const modalPage=document.querySelector(".modal-page");
    const modalPageInner=document.querySelector(".modal-page__inner");

    openBtn?.addEventListener("click", toggleForm)
    closeBtn?.addEventListener("click", toggleForm)

    modalPage?.addEventListener("click", (e)=>{
      if(e.path.indexOf(modalPageInner)===-1){
        toggleForm();
      }
    })
}

export default toggleModalPage;