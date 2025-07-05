const errorMessage = document.getElementById("formErrorMessage");
const form = document.getElementById("availabilityForm");
const modal = document.getElementById("availabilityModal");
const aceptBtn = document.getElementById("modalBtn");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = form.querySelectorAll("input");
  const textArea = form.querySelector("textarea");
  const isValid = checkInputs(inputs);
  if (!isValid) return errorMessage?.classList.add("show");
  setTimeout(() => {
    modal?.classList.remove("pageDetailsAvailability__modalContainer-hidden");
    errorMessage?.classList.remove("show");
    inputs.forEach((item) => {
      if (item.type !== "submit") item.value = "";
    });
    if (textArea) textArea.value = "";
  }, 500);
  aceptBtn?.addEventListener("click", () => {
    modal?.classList.add("pageDetailsAvailability__modalContainer-hidden");
  });
});

function checkInputs(arr: NodeListOf<HTMLInputElement>) {
  let isValid = true;
  arr.forEach((input) => {
    if (!input.value) {
      input.style.outline = "solid 1px red";
      input.addEventListener("focus", () => {
        input.style.outline = "none";
      });
      isValid = false;
    }
  });
  return isValid;
}
