"use strict";

const scrollConatiner = document.querySelector(".gallery");

const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

scrollConatiner.addEventListener("wheel", function (e) {
  e.preventDefault();

  scrollConatiner.scrollLeft = e.deltaY;
  scrollConatiner.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollConatiner.style.scrollBehavior = "smooth";
  scrollConatiner.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
  scrollConatiner.style.scrollBehavior = "smooth";
  scrollConatiner.scrollLeft -= 900;
});
