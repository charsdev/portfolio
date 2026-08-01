async function initialize() {
    await blog.initialize();

    if(sessionStorage.getItem("boot-complete"))
    {
        loadNeofetchView("about");
        focusCLI();
    }
    else
    {
        await bootSequence();
        focusCLI();
    }
}


initialize();

const liveClock = document.getElementById("live-clock");

function updateClock() {
      const now = new Date();
      liveClock.textContent = now.toTimeString().split(' ')[0];
    }
setInterval(updateClock, 1000);
updateClock();


    