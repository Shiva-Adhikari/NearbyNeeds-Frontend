/* <!-- STAR RATING --> */
/* <script> */
let rating = 3.5; // initial rating
const starRatingElement = document.getElementById("star-rating");
const ratingInput = document.getElementById("ratingInput");

function generateStars() {
  const fullStars = Math.floor(rating);
  const halfStars = rating - fullStars > 0 ? 1 : 0;
  let starHTML = "";

  // Generate star HTML for 5 stars
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starHTML += `<i class="bi bi-star-fill" data-index="${i + 1}"></i>`;
    } else if (i === fullStars && halfStars === 1) {
      starHTML += `<i class="bi bi-star-half" data-index="${i + 1}"></i>`;
    } else {
      starHTML += `<i class="bi bi-star" data-index="${i + 1}"></i>`;
    }
  }
  starRatingElement.innerHTML = starHTML;
}

// Detect click and allow half-star ratings
starRatingElement.addEventListener("click", (event) => {
  if (event.target.tagName === "I") {
    const index = parseInt(event.target.dataset.index);
    const starRect = event.target.getBoundingClientRect();
    const clickPosition = event.clientX - starRect.left; // Mouse position relative to the star
    const starWidth = starRect.width;

    // Determine if the click is on the left (half-star) or right (full-star)
    if (clickPosition < starWidth / 2) {
      rating = index - 0.5; // half star
    } else {
      rating = index; // full star
    }

    // Update the hidden input field with the new rating
    ratingInput.value = rating;

    updateRating();
  }
});

// Update the stars display based on the new rating
function updateRating() {
  generateStars(); // Regenerate stars based on the updated rating
}

// Initial render of the stars
generateStars();

// Set the initial rating in the hidden input field
ratingInput.value = rating;
/* </script> */
