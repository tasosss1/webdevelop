// Dark mode toggle functionality
function toggleDarkMode() {
    const body = document.body;
    const modeIcon = document.getElementById('modeIcon');
    body.classList.toggle('dark-mode');
    
    // Toggle between moon and sun icon
    if (body.classList.contains('dark-mode')) {
        modeIcon.textContent = '🌙'; // Moon icon for dark mode
    } else {
        modeIcon.textContent = '🌞'; // Sun icon for light mode
    }
}

// Update the button link dynamically based on screen size
window.addEventListener('resize', function () {
    const startTutorialsButton = document.getElementById('startTutorialsButton');
    
    if (window.innerWidth <= 767) {
        startTutorialsButton.setAttribute('href', '#tutorials');
    } else {
        startTutorialsButton.setAttribute('href', '#top');
    }
});

// Initialize the button behavior on load
window.addEventListener('load', function () {
    const startTutorialsButton = document.getElementById('startTutorialsButton');
    
    if (window.innerWidth <= 767) {
        startTutorialsButton.setAttribute('href', '#tutorials');
    } else {
        startTutorialsButton.setAttribute('href', '#top');
    }
});
