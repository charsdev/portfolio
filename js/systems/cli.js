const cliInput = document.getElementById("cli-input");
const typedTextDisplay = document.getElementById("typed-text");

let commandHistory = [];
let historyIndex = -1;

cliInput.addEventListener("input", () => {
	typedTextDisplay.textContent = cliInput.value;
});

cliInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const value = cliInput.value.trim();
        if (value !== "") {
          commandHistory.push(value);
          historyIndex = commandHistory.length;
          executeCommand(value);
          cliInput.value = "";
		  typedTextDisplay.textContent = "";
        }
      } else if (e.key === "ArrowUp") {
        if (commandHistory.length > 0 && historyIndex > 0) {
          historyIndex--;
          cliInput.value = commandHistory[historyIndex];
		  typedTextDisplay.textContent = commandHistory[historyIndex];
        }
        e.preventDefault();
      } else if (e.key === "ArrowDown") {
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          cliInput.value = commandHistory[historyIndex];
		  typedTextDisplay.textContent = commandHistory[historyIndex];
        } else {
          historyIndex = commandHistory.length;
          cliInput.value = "";
 		  typedTextDisplay.textContent = "";
        }
        e.preventDefault();
      }
    });

function focusCLI() {
	if (!isBooting && !isDragging && !isModalDragging) {
		cliInput.focus();
	}
}

