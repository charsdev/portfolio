const output = document.getElementById("content-body");

let isBooting = false;
let skipAnimation = false;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function print(text = "") { output.textContent += text + "\n"; }

function clearScreen() { output.textContent = ""; }

async function typeText(text, speed = 10) {
      for (let i = 0; i < text.length; i++) {
        if (skipAnimation) {
          output.textContent += text.slice(i);
          break;
        }
        output.textContent += text[i];
        await sleep(speed);
      }
    }

async function typeLine(text, speed = 15) {
    await typeText(text, speed);
    output.textContent += "\n";
}

async function bootSequence() {
      isBooting = true;
      output.classList.add("boot-text");
      clearScreen();

      playRetroBeep(880, 0.15, 'square'); 

      await sleep(400);
      await typeLine(">", 40);
      await sleep(300);
      await typeLine("> boot chars-os");
      await sleep(200);

      print();
      await typeLine("BOOTING CHARS OS....");
      print();

      const loading = [
        "Loading Gameplay Systems.....OK",
        "Loading Technical Design.....OK",
        "Loading Interactive Systems....OK",
        "Loading Coffee................OK",
        "Loading Creativity............OK",
        "Loading Bugs................ERROR",
        "Ignoring Errors..............OK"
      ];

      for (const line of loading) {
        if (skipAnimation) break;
        
        if (line.includes("ERROR")) {
          playRetroBeep(150, 0.2, 'sawtooth');
        } else {
          playRetroBeep(600, 0.04, 'square');
        }

        await typeLine(line, 8);
        await sleep(150);
      }

      await sleep(300);
      playRetroBeep(1200, 0.1, 'square');

      await sleep(300);
      sessionStorage.setItem("boot-complete", "true");
      isBooting = false;
      output.classList.remove("boot-text");
      
      loadNeofetchView('about');
    }