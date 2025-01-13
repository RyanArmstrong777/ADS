const orbs = document.querySelectorAll(".orb-button");
const cardSlider = document.getElementById("card-slider");

orbs.forEach((orb, index) => {
    orb.addEventListener("click", () => {
        cardSlider.style.transition = "0.5s ease";
        orbs.forEach(orb => orb.classList.remove("active"));
        orb.classList.add("active");
        currentSlideIndex = index;
        translateX = -currentSlideIndex * (cardSlider.offsetWidth / 4);
        cardSlider.style.transform = `translateX(${translateX}px)`;
    });
});

let startX = 0;
let currentX = 0;
let translateX = 0;
let currentSlideIndex = 0;

cardSlider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    cardSlider.style.transition = "none";
    e.preventDefault();
});
  
cardSlider.addEventListener("touchmove", (e) => {
    const touchX = e.touches[0].clientX;
    currentX = touchX - startX;
    let newTranslateX = translateX + currentX;
  
    const minTranslateX = -3 * (window.innerWidth - 20);
    const maxTranslateX = 0;
    newTranslateX = Math.max(minTranslateX, Math.min(newTranslateX, maxTranslateX));
  
    cardSlider.style.transform = `translateX(${newTranslateX}px)`;

    e.preventDefault();
});
  
cardSlider.addEventListener("touchend", () => {
    if (currentX < -100 && currentSlideIndex < orbs.length - 1) {
      currentSlideIndex++;
    } else if (currentX > 100 && currentSlideIndex > 0) {
      currentSlideIndex--;
    }
    translateX = -currentSlideIndex * (window.innerWidth - 20);
    cardSlider.style.transition = "transform 0.5s ease";
    cardSlider.style.transform = `translateX(${translateX}px)`;
    orbs[currentSlideIndex].click();
    currentX = 0;
});