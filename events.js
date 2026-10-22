"use strict";
// Task 5: explicit mouseover and mouseout event handlers.
const hoverBox = document.getElementById("hover-box");
function highlightBox() {
  hoverBox.style.backgroundColor = "#f7dfa0";
  hoverBox.textContent = "Hello there! The event was detected.";
}
function restoreBox() {
  hoverBox.style.backgroundColor = "#eaf2e8";
  hoverBox.textContent = "Move your mouse here ↗";
}
hoverBox.addEventListener("mouseover", highlightBox);
hoverBox.addEventListener("mouseout", restoreBox);
hoverBox.addEventListener("focus", highlightBox);
hoverBox.addEventListener("blur", restoreBox);

// Task 6: keyup is required; input also handles paste and mobile keyboards.
const liveInput = document.getElementById("live-input");
function updatePreview() {
  document.getElementById("live-value").textContent =
    liveInput.value || "Your message will appear here.";
}
liveInput.addEventListener("keyup", updatePreview);
liveInput.addEventListener("input", updatePreview);

// Task 7: four operations with validation before doing arithmetic.
document.getElementById("calculator-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const firstInput = document.getElementById("first-number");
  const secondInput = document.getElementById("second-number");
  const operation = document.getElementById("operation").value;
  const output = document.getElementById("calculation-result");
  output.classList.remove("error");
  firstInput.removeAttribute("aria-invalid");
  secondInput.removeAttribute("aria-invalid");
  function showError(message) {
    output.textContent = message;
    output.classList.add("error");
  }
  const a = firstInput.valueAsNumber;
  const b = secondInput.valueAsNumber;
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    showError("Please enter two valid numbers.");
    const invalidInput = !Number.isFinite(a) ? firstInput : secondInput;
    invalidInput.setAttribute("aria-invalid", "true");
    invalidInput.focus();
    return;
  }
  let result;
  switch (operation) {
    case "add": result = a + b; break;
    case "subtract": result = a - b; break;
    case "multiply": result = a * b; break;
    case "divide":
      if (b === 0) {
        showError("Cannot divide by zero.");
        secondInput.setAttribute("aria-invalid", "true");
        secondInput.focus();
        return;
      }
      result = a / b;
      break;
    default: showError("Please choose an operation."); return;
  }
  if (!Number.isFinite(result)) {
    showError("Result is too large. Try smaller numbers.");
    return;
  }
  // Limit display precision to avoid long floating-point tails such as 0.30000000000000004.
  output.textContent = String(Number(result.toPrecision(12)));
});
