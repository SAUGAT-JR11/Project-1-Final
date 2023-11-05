
// var swiper = new Swiper(".room-slider", {
//     spaceBetween: 20,
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         991: {
//             slidesPerView: 3,
//         },
//     },
// });

// Select the element with the class "card-slider"
const cardSlider = document.querySelector(".card-slider");

// Initialize a variable to keep track of the current card index
let cardIndex = 0;

// Define a function to change the currently displayed card
function changeCard(direction) {
    // Update the card index based on the desired direction (positive or negative)
    cardIndex += direction;

    // Get the width of a single card within the slider
    const cardWidth = cardSlider.offsetWidth;

    // Ensure that the card index doesn't go below 0 or exceed the number of cards
    cardIndex = Math.max(0, Math.min(cardIndex, cardSlider.children.length - 1));

    // Translate the card slider container horizontally to display the desired card
    cardSlider.style.transform = `translateX(-${cardIndex * cardWidth}px)`;

    // Enable or disable the "Next" and "Previous" buttons based on the card index
    document.querySelector(".next-button").disabled = cardIndex >= cardSlider.children.length - 1;

    // Disable the "Previous" button if the card index is at or before the first card
    document.querySelector(".prev-button").disabled = cardIndex <= 0;
}
