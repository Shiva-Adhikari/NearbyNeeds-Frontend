// {/* <script> */}
// Toggle button active state
const registerUserBtn = document.getElementById("registerUser");
const registerProviderBtn = document.getElementById("registerProvider");

registerUserBtn.addEventListener("click", function () {
  registerUserBtn.classList.add("active");
  registerProviderBtn.classList.remove("active");
});

registerProviderBtn.addEventListener("click", function () {
  registerProviderBtn.classList.add("active");
  registerUserBtn.classList.remove("active");
});
// </script>

// <!-- NAVBAR HIDE -->
// {/* <script> */}
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    navbar.classList.remove("d-none");
  } else {
    navbar.classList.add("d-none");
  }
});
// </script>
