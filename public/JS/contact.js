var contactErrorMessage = document.getElementById("contactFormErrorMessage");
var contactForm = document.getElementById("contactForm");
var contactModal = document.getElementById("contactModal");
var contactAceptBtn = document.getElementById("contactBtn");
contactForm === null || contactForm === void 0 ? void 0 : contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var inputs = contactForm.querySelectorAll("input");
    var textArea = contactForm.querySelector("textarea");
    var isValid = checkFormInputs(inputs, textArea);
    if (!isValid)
        return contactErrorMessage === null || contactErrorMessage === void 0 ? void 0 : contactErrorMessage.classList.add("show");
    setTimeout(function () {
        contactModal === null || contactModal === void 0 ? void 0 : contactModal.classList.remove("pageDetailsAvailability__modalContainer-hidden");
        contactErrorMessage === null || contactErrorMessage === void 0 ? void 0 : contactErrorMessage.classList.remove("show");
        inputs.forEach(function (item) {
            if (item.type !== "submit")
                item.value = "";
        });
        if (textArea)
            textArea.value = "";
    }, 500);
    contactAceptBtn === null || contactAceptBtn === void 0 ? void 0 : contactAceptBtn.addEventListener("click", function () {
        contactModal === null || contactModal === void 0 ? void 0 : contactModal.classList.add("pageDetailsAvailability__modalContainer-hidden");
    });
});
function checkFormInputs(arr, extraField) {
    var isValid = true;
    arr.forEach(function (input) {
        if (!input.value) {
            input.style.outline = "solid 1px red";
            input.addEventListener("focus", function () {
                input.style.outline = "none";
            });
            isValid = false;
        }
    });
    if (extraField && !extraField.value) {
        extraField.style.outline = "solid 1px red";
        extraField.addEventListener("focus", function () {
            extraField.style.outline = "none";
        });
        isValid = false;
    }
    return isValid;
}
