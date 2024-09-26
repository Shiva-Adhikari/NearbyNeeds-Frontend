// {/* <script> */}
// Flip the card on "Proceed with Booking"
document
  .querySelector(".btn-proceed")
  .addEventListener("click", function () {
    document.querySelector(".booking-box").classList.add("flipped");
  });

// No need for back or cancel button to flip the card back
// {/* </script> */}