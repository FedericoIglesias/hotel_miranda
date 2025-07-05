const contactErrorMessage = document.getElementById("contactFormErrorMessage");
const contactForm = document.getElementById("contactForm");
const contactModal = document.getElementById("contactModal");
const contactAceptBtn = document.getElementById("contactBtn");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = contactForm.querySelectorAll("input");
  const textArea = contactForm.querySelector("textarea");
  const isValid = checkFormInputs(inputs, textArea);
  if (!isValid) return contactErrorMessage?.classList.add("show");
  setTimeout(() => {
    contactModal?.classList.remove(
      "pageDetailsAvailability__modalContainer-hidden"
    );
    contactErrorMessage?.classList.remove("show");
    inputs.forEach((item) => {
      if (item.type !== "submit") item.value = "";
    });
    if (textArea) textArea.value = "";
  }, 500);
  contactAceptBtn?.addEventListener("click", () => {
    contactModal?.classList.add(
      "pageDetailsAvailability__modalContainer-hidden"
    );
  });
});

function checkFormInputs(
  arr: NodeListOf<HTMLInputElement>,
  extraField: HTMLTextAreaElement | null
) {
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
  if (extraField && !extraField.value) {
    extraField.style.outline = "solid 1px red";
    extraField.addEventListener("focus", () => {
      extraField.style.outline = "none";
    });
    isValid = false;
  }
  return isValid;
}
