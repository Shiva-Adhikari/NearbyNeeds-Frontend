// <!-- Drop Down -->
// {/* <script> */}
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.querySelectorAll(".dropdown-item").forEach((item) => {
      item.addEventListener("click", function (event) {
        event.preventDefault();
        dropdown.querySelector(".dropdown-toggle").textContent =
          this.textContent;
      });
    });
  });
// {/* </script> */}