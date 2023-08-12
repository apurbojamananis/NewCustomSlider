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
});

nextButton.addEventListener("click", () => {
  let newIndex = (currentIndex + 1) % slides.length;
  currentIndex = newIndex;
  updateSliderPosition();
  progressBars(progressBarsContainerOne);
  progressBars(progressBarsContainerTwo);
  progressBars(progressBarsContainerThree);
  gsapAnimation();
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
