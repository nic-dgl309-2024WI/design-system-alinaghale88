// Code to make hamburger menu functional
function showNav() {
    var element1 = document.getElementsByClassName("c-menu-block");
    var toggleButton = document.getElementById("toggleButton");
    var closeButton = document.getElementById("closeButton");
    for (var i = 0; i < element1.length; i++) {
      element1[i].classList.toggle("c-menu-block--show-items");
    }
    toggleButton.style.display =
      toggleButton.style.display === "none" ? "block" : "none";
    closeButton.style.display =
      closeButton.style.display === "none" ? "block" : "none";
  }

// Code to set the active state
const navLinks = document.querySelectorAll(
  ".c-nav-menu__link"
); // Get all navigation links

const currentPageUrl = window.location.href; // Get the current page URL

navLinks.forEach((link) => {
  // Check if the link href matches the current page URL
  if (link.href === currentPageUrl && !link.href.includes('#')) {
    // Add a class to mark it as active
    link.classList.add("link--active");
  }
});

// Code to handle dropdown toggle
function toggleDropdown() {
    var dropdownMenu = document.getElementById("resourcesDropdown");
    if (window.innerWidth < 1200) { // Adjust the screen width according to your mobile breakpoint
        if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
            dropdownMenu.style.display = "block";
        } else {
            dropdownMenu.style.display = "none";
        }
    }
}