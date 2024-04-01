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
const navLinks = document.querySelectorAll(".c-nav-menu__link"); // Get all navigation links

const currentPageUrl = window.location.href; // Get the current page URL

navLinks.forEach((link) => {
  // Check if the link href matches the current page URL
  if (link.href === currentPageUrl && !link.href.includes("#")) {
    // Add a class to mark it as active
    link.classList.add("link--active");
  }
});

// Code to handle dropdown toggle in navigation menu
function toggleDropdown() {
  var dropdownMenu = document.getElementById("resourcesDropdown");
  if (window.innerWidth < 1200) {
    // Adjust the screen width according to your mobile breakpoint
    if (
      dropdownMenu.style.display === "none" ||
      dropdownMenu.style.display === ""
    ) {
      dropdownMenu.style.display = "block";
    } else {
      dropdownMenu.style.display = "none";
    }
  }
}

// Function to toggle the visibility of the notice section
function toggleNotice() {
  var noticeSection = document.getElementById("noticeSection");
  var dropdownButton = document.getElementById("dropdownButton");

  if (noticeSection.classList.contains("l-none")) {
    noticeSection.classList.remove("l-none");
    dropdownButton.style.display = "none";
  } else {
    noticeSection.classList.add("l-none");
    dropdownButton.style.display = "block";
  }
}

// Function to hide the notice section
function hideNotice() {
  var noticeSection = document.getElementById("noticeSection");
  var dropdownButton = document.getElementById("dropdownButton");

  noticeSection.classList.add("l-none");
  dropdownButton.style.display = "block";
}

// Code for the hero section slider
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.c-slider__slide');
  const dotsContainer = document.querySelector('.c-slider__navigation');
  const dots = [];

  let currentIndex = 0;
  let interval;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.transform = `translateX(-${index * 100}%)`;
      });

      dots.forEach((dot, i) => {
          dot.classList.remove('c-slider__slide--active');
          if (i === index) {
              dot.classList.add('c-slider__slide--active');
          }
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }

  interval = setInterval(nextSlide, 3000);

  slides.forEach((slide, i) => {
      const dot = document.createElement('div');
      dot.classList.add('c-slider__navigation-dot');
      if (i === 0) {
          dot.classList.add('c-slider__slide--active');
      }
      dot.addEventListener('click', () => {
          clearInterval(interval);
          currentIndex = i;
          showSlide(currentIndex);
          interval = setInterval(nextSlide, 3000);
      });
      dotsContainer.appendChild(dot);
      dots.push(dot);
  });
});