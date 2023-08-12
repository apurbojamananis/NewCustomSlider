const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const backgroundVideo = document.querySelectorAll(".background-video");

const progressBarsContainerOne = document.querySelector(".progress-bars-One");
const progressBarsContainerTwo = document.querySelector(".progress-bars-Two");
const progressBarsContainerThree = document.querySelector(
  ".progress-bars-Three"
);
const videoSlideOne = document.querySelector(".videoSlideOne");
const videoSlideTwo = document.querySelector(".videoSlideTwo");
const videoSlideThree = document.querySelector(".videoSlideThree");

//tab

const details1 = document.getElementById("details1");
const shopping1 = document.getElementById("shopping1");
const para1 = document.getElementById("para1");
const details2 = document.getElementById("details2");
const shopping2 = document.getElementById("shopping2");
const para2 = document.getElementById("para2");
const details3 = document.getElementById("details3");
const shopping3 = document.getElementById("shopping3");
const para3 = document.getElementById("para3");

tab(details1, shopping1, para1);
tab(details2, shopping2, para2);
tab(details3, shopping3, para3);

function tab(details, shopping, para) {
  shopping.addEventListener("click", () => {
    para.innerText = `Shopping - Rlife tropical punch is a refeshing and delicious drink that
            transports you to the beaches of the Caribbean's. Tropical Punch is an  of tropical fruit  that will leave you feeling  and refreshed without the crash! `;
    shopping.style.borderBottom = "2px solid #ff9700";
    details.style.borderBottom = "none";
    gsap.from("p", {
      x: -100,
      duration: 1,
    });
  });
  details.addEventListener("click", () => {
    para.innerText = `Details - Rlife tropical punch is a refeshing and delicious drink that transports you to the beaches of the Caribbean's. Rlife Tropical Punch is an explosion of tropical fruit flavors that will leave you feeling invigorated and refreshed without the crash! `;
    details.style.borderBottom = "2px solid #ff9700";
    shopping.style.borderBottom = "none";

    gsap.from("p", {
      x: -100,
      duration: 1,
    });
  });
}

// video play
function playVideo(videoSlide) {
  if (videoSlide.paused) {
    videoSlide.play();
  }
}

// slider

let currentIndex = 0;

prevButton.addEventListener("click", () => {
  let newIndex = (currentIndex - 1 + slides.length) % slides.length;
  currentIndex = newIndex;
  updateSliderPosition();
  progressBars(progressBarsContainerOne);
  progressBars(progressBarsContainerTwo);
  progressBars(progressBarsContainerThree);
  gsapAnimation();
  playVideo(videoSlideOne);
  playVideo(videoSlideTwo);
  playVideo(videoSlideThree);
});

nextButton.addEventListener("click", () => {
  let newIndex = (currentIndex + 1) % slides.length;
  currentIndex = newIndex;
  updateSliderPosition();
  progressBars(progressBarsContainerOne);
  progressBars(progressBarsContainerTwo);
  progressBars(progressBarsContainerThree);
  gsapAnimation();
  playVideo(videoSlideOne);
  playVideo(videoSlideTwo);
  playVideo(videoSlideThree);
});

function updateSliderPosition() {
  slider.style.transition = "none";
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  setTimeout(() => {
    slider.style.transition = "transform 0.3s ease-in-out";
  }, 10);
}

function progressBars(progressBarsContainer) {
  const progressBars = progressBarsContainer.querySelectorAll(".progress-bar");

  let progressStartValues = [0, 0, 0, 0]; // Use an array to store progress values for each progress bar
  let progressEndValue = 90;
  let speed = 10;
  progressBars.forEach((progressBar, index) => {
    let progress = setInterval(() => {
      progressStartValues[index]++; // Use progressStartValues[index] instead of progressStartValue
      progressBar.style.background = `conic-gradient(
rgb(255, 151, 0) ${3.6 * progressStartValues[index]}deg,
rgba(201, 201, 200, 0.5) 0deg)`;

      if (progressStartValues[index] == progressEndValue) {
        clearInterval(progress);
      }
    }, speed);

    return progress;
  });
}

progressBars(progressBarsContainerOne);
progressBars(progressBarsContainerTwo);
progressBars(progressBarsContainerThree);

// Animation

const rightImage3 = document.querySelectorAll(".right-Image-3");
const rightImage2 = document.querySelectorAll(".right-Image-2");
const rightImage1 = document.querySelectorAll(".right-Image-1");

const centerImage3 = document.querySelectorAll(".center-image-3");
const centerImage2 = document.querySelectorAll(".center-image-2");
const centerImage1 = document.querySelectorAll(".center-image-1");

gsapAnimation();

function gsapAnimation() {
  // left
  gsap.from("h2", {
    y: -50,
    duration: 0.5,
  });
  gsap.from("p", {
    x: -100,
    duration: 1,
  });
  //   center

  gsap.from(centerImage1, {
    y: 200,
    duration: 1.5,
  });
  gsap.from(centerImage2, {
    y: 200,
    duration: 1.5,
  });
  gsap.from(centerImage3, {
    y: 200,
    duration: 1.5,
  });

  // Right
  gsap.from(rightImage1, {
    x: 50,
    duration: 0.8,
  });
  gsap.from(rightImage2, {
    x: 50,
    duration: 0.8,
  });
  gsap.from(rightImage3, {
    x: 50,
    duration: 0.8,
  });
}
