const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

const testimonials = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

menuToggle.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
let currentIndex = 0;
const total = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % total;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + total) % total;
  showTestimonial(currentIndex);
}

nextBtn.addEventListener("click", () => {
  nextTestimonial();
  resetInterval();
});

prevBtn.addEventListener("click", () => {
  prevTestimonial();
  resetInterval();
});

showTestimonial(currentIndex);

let slideInterval = setInterval(nextTestimonial, 2000);

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextTestimonial, 2000);
}
