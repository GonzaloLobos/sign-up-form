const submitBtn = document.querySelector("button");
const pwd1 = document.querySelector("#password");
const pwd2 = document.querySelector("#password-confirm");
const errContainer = document.querySelector("#error-container");

submitBtn.addEventListener("click", (e) => {
  if (pwd1.value !== pwd2.value) {
    e.preventDefault();
  }
});

pwd1.addEventListener("input", () => {
  styleError();
});

pwd2.addEventListener("input", () => {
  styleError();
});

function styleError() {
  if (pwd1.value === pwd2.value) {
    pwd1.classList.remove("input-error");
    pwd2.classList.remove("input-error");
    errContainer.classList.remove("error-msg");
  } else {
    pwd1.classList.add("input-error");
    pwd2.classList.add("input-error");
    errContainer.classList.add("error-msg");
  }
}
