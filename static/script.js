// -------------------------------hamburger-js-----------------------------

document.getElementById("hamburger-btn").addEventListener("click", function () {
  var slidingMenu = document.getElementById("sliding-menu");
  slidingMenu.style.display = "block";
  slidingMenu.style.animation = "slideDown 0.8s ease";

  // Handle cancel button click
  document.getElementById("cancel-btn").addEventListener("click", function () {
    slidingMenu.style.animation = "slideUp 0.8s ease"; // Apply slideUp animation
    setTimeout(function () {
      slidingMenu.style.display = "none"; // Hide the sliding menu after the animation completes
      slidingMenu.style.animation = "none"; // Remove the animation
    }, 500); // Adjust the timeout based on the animation duration
  });
});
