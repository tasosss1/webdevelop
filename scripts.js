// Toggle Dark/Light mode
function toggleDarkMode() {
    const body = document.body;
    const modeIcon = document.getElementById('modeIcon');
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Change the icon depending on mode
    if (body.classList.contains('dark-mode')) {
        modeIcon.textContent = '🌙';  // Moon icon
    } else {
        modeIcon.textContent = '🌞';  // Sun icon
    }
}

// Remember the user's theme preference (dark or light mode)
window.onload = function () {
    if (localStorage.getItem("mode") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("modeIcon").textContent = "🌙";
    } else {
        document.body.classList.add("light-mode");
        document.getElementById("modeIcon").textContent = "🌞";
    }
};

// Update the local storage whenever the mode changes
document.getElementById('modeToggleBtn').addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});
