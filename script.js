const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    body.classList.add("light");
    toggleButton.textContent = "☀️";
}

// Toggle theme on click
toggleButton.addEventListener("click", () => {
    body.classList.toggle("light");

    const isLight = body.classList.contains("light");
    toggleButton.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});