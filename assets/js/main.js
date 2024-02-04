document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("nav-toggle");
  const navMenu = document.querySelector(".nav-menu"); // Menggunakan .nav-menu sebagai selector

  toggleButton.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});
