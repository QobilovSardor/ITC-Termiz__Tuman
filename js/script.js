window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // account form
  const accountForm = document.querySelector(".account-form"),
    form = document.querySelector(".form"),
    accountFormCloseBtn = document.querySelector(".account-form__close"),
    accountFormOpenBtn = document.querySelector("#call-center__icon");
  console.log(accountFormOpenBtn);
  function showAccountForms() {
    accountForm.classList.add("show");
    accountForm.classList.remove("hide");
    form.classList.add("show");
    form.classList.remove("hide");
  }
  function hideAccountForms() {
    accountForm.classList.add("hide");
    accountForm.classList.remove("show");
    form.classList.add("hide");
    form.classList.remove("show");
  }
  accountFormOpenBtn.addEventListener("click", showAccountForms);
  accountFormCloseBtn.addEventListener("click", hideAccountForms);
  accountForm.addEventListener("click", (e) => {
    let target = e.target;
    if (target == accountForm) {
      hideAccountForms();
    }
  });
});
