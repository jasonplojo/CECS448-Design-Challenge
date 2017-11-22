// Function that will toggle the dropdown-show style for the menu item
// passed, that is defined in "style.css".
function showContent(menuItem, buttonItem) {
  document.getElementById(menuItem).classList.toggle("dropdown-hide");

  document.getElementById(buttonItem).classList.toggle("triangle-up");
  document.getElementById(buttonItem).classList.toggle("triangle-down");
}
