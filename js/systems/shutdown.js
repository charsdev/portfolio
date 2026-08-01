function closeTerminal(event) {
    if (event) event.stopPropagation();
    stopPong();
    
    playRetroBeep(200, 0.3, 'sawtooth');

    const termWindow = document.getElementById("terminal-window");
    const shutdownOverlay = document.getElementById("shutdown-overlay");

    termWindow.style.opacity = "0";
    termWindow.style.transform = "scale(0.95)";

    setTimeout(() => {
        termWindow.style.display = "none";
        closeBlogModal();
        shutdownOverlay.style.display = "flex";
    }, 300);
}

function rebootSystem() {
    sessionStorage.removeItem("boot-complete");
    location.reload();
}

function toggleMaximize(e) {
    e.stopPropagation();
    termWindow.classList.toggle("maximized");
}