// Add menu button on navbar for mobile view
const button = document.getElementById("toggle-button");
const navBarId = document.getElementById("navBarId");

button.addEventListener("click", () => {
  navBarId.classList.toggle("active");
});
navBarId.addEventListener("click", () => {
  navBarId.classList.remove("active");
});

//Change navbar background color on scroll
$(document).ready(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (navBarId.clientWidth >= 520) {
      if (scroll > 300) {
        $(".navBar").css("background", "var(--black)");
      } else {
        $(".navBar").css("background", "transparent");
      }
    }
  });
});
