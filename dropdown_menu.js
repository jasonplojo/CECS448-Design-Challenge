// Function that will toggle the dropdown-show style for the menu item
// passed, that is defined in "style.css".
function showContent(menuItem, buttonItem) {

  // This will toggle the content to hide/show.
  document.getElementById(menuItem).classList.toggle("dropdown-hide");


  // Toggle triangle for section button
  var section_dropdown =
    document.getElementById(buttonItem).classList.contains("triangle-up") ||
    document.getElementById(buttonItem).classList.contains("triangle-down");

  if (section_dropdown) {
    // This will toggle the direction of the triangle. "triangle-down" is initialized
    // in the div. This will remove "triangle-down" and add "triangle-up". It will
    // work going the other direction too.
    document.getElementById(buttonItem).classList.toggle("triangle-up");
    document.getElementById(buttonItem).classList.toggle("triangle-down");

    return;
  }

  var aside_dropdown =
    document.getElementById(buttonItem).classList.contains("triangle-down-aside") ||
    document.getElementById(buttonItem).classList.contains("triangle-up-aside");

  if (aside_dropdown) {
    document.getElementById(buttonItem).classList.toggle("triangle-up-aside");
    document.getElementById(buttonItem).classList.toggle("triangle-down-aside");
  }
}
