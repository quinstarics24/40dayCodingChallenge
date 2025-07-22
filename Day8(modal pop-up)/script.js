// Get elements
const openBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-btn");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal on (X)
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
