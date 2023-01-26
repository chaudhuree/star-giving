const rating = document.getElementById("rating");
const input = document.getElementById("rating-input");
const submitButton = document.getElementById("submit-rating");
const stars = rating.getElementsByTagName("i");

submitButton.addEventListener("click", updateRating);

function updateRating() {
    let ratingValue = input.value;

    for (let i = 0; i < stars.length; i++) {
        if (i < ratingValue) {
            stars[i].classList.add("checked");
        } else {
            stars[i].classList.remove("checked");
        }
    }
}

updateRating(); // initial call to display the rating
