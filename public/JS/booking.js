var errorMessage = document.getElementById("formErrorMessage");
var form = document.getElementById("availabilityForm");
var modal = document.getElementById("availabilityModal");
var aceptBtn = document.getElementById("modalBtn");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    var inputs = form.querySelectorAll("input");
    var textArea = form.querySelector("textarea");
    var isValid = checkInputs(inputs);
    if (!isValid)
        return errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.classList.add("show");
    setTimeout(function () {
        modal === null || modal === void 0 ? void 0 : modal.classList.remove("pageDetailsAvailability__modalContainer-hidden");
        errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.classList.remove("show");
        inputs.forEach(function (item) {
            if (item.type !== "submit")
                item.value = "";
        });
        if (textArea)
            textArea.value = "";
    }, 500);
    aceptBtn === null || aceptBtn === void 0 ? void 0 : aceptBtn.addEventListener("click", function () {
        modal === null || modal === void 0 ? void 0 : modal.classList.add("pageDetailsAvailability__modalContainer-hidden");
    });
});
function checkInputs(arr) {
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
    return isValid;
}
