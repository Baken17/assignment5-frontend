"use strict";
// Task 2: replace a paragraph's text when the user clicks a button.
document.getElementById("change-text").addEventListener("click", function () {
  document.getElementById("changing-text").textContent =
    "The paragraph has changed! JavaScript can update the DOM without reloading the page.";
});
// Task 3: change a div's background and text size.
const styleBox = document.getElementById("style-box");
const colors = ["#eaf2e8", "#fff0c7", "#e4eafa", "#f6e2da"];
let colorIndex = 0;
let largeText = false;
document.getElementById("change-color").addEventListener("click", function () {
  colorIndex = (colorIndex + 1) % colors.length;
  styleBox.style.backgroundColor = colors[colorIndex];
});
document.getElementById("change-size").addEventListener("click", function () {
  largeText = !largeText;
  styleBox.style.fontSize = largeText ? "24px" : "16px";
});
// Task 4: create a new li or remove the last li.
const itemList = document.getElementById("item-list");
const removeButton = document.getElementById("remove-item");
let nextItemId = 1;
function updateListState() {
  const count = itemList.children.length;
  removeButton.disabled = count === 0;
  document.getElementById("items-empty").hidden = count > 0;
  document.getElementById("item-count").textContent = count + (count === 1 ? " item" : " items");
}
document.getElementById("add-item").addEventListener("click", function () {
  const item = document.createElement("li");
  item.textContent = "Item " + nextItemId;
  nextItemId += 1;
  itemList.appendChild(item);
  updateListState();
});
removeButton.addEventListener("click", function () {
  if (itemList.lastElementChild) {
    itemList.lastElementChild.remove();
  }
  updateListState();
});
