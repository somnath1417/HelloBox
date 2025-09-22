// Select elements
const greeting = document.getElementById("greeting");
const usernameInput = document.getElementById("username");
const greetBtn = document.getElementById("greetBtn");
const boxes = document.querySelectorAll(".box");

// Greet button functionality
greetBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  if (name) {
    greeting.textContent = `Hello, ${name}`;
  } else {
    greeting.textContent = "Hello";
  }
});

// Box color change functionality
boxes.forEach(box => {
  box.addEventListener("click", () => {
    box.style.backgroundColor = box.id; // id = color name
    box.style.color = "white";
  });
});
