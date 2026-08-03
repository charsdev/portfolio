let pongAnimationId = null;
let pongKeys = { up: false, down: false };

function startPong() {
  stopPong();

  output.innerHTML = `
    <div class="pong-container">
      <div class="prompt-line" style="width:100%;">chars@portfolio:~ $ <span class="cmd-highlight">./pong.exe</span></div>
      <canvas id="pongCanvas" width="600" height="300"></canvas>
      <div class="pong-controls-hint">
        <span>[W/S] or [▲/▼] for player movement </span> | <span>Write exit or press q to exit</span>
      </div>
    </div>
  `;

  const pCanvas = document.getElementById("pongCanvas");
  const pCtx = pCanvas.getContext("2d");

  const paddleWidth = 10;
  const paddleHeight = 60;
  
  let playerY = (pCanvas.height - paddleHeight) / 2;
  let aiY = (pCanvas.height - paddleHeight) / 2;

  let ballX = pCanvas.width / 2;
  let ballY = pCanvas.height / 2;

  let ballSpeedX = 240 * (Math.random() > 0.5 ? 1 : -1);
  let ballSpeedY = 180 * (Math.random() > 0.5 ? 1 : -1);
  const ballSize = 8;

  let playerScore = 0;
  let aiScore = 0;

  function handlePongKeyDown(e) {
    if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
      pongKeys.up = true;
      e.preventDefault();
    }
    if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
      pongKeys.down = true;
      e.preventDefault();
    }
    if (e.key === "q" || e.key === "Q") {
      executeCommand('clear');
    }
  }

  function handlePongKeyUp(e) {
    if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") pongKeys.up = false;
    if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") pongKeys.down = false;
  }

  window.addEventListener("keydown", handlePongKeyDown);
  window.addEventListener("keyup", handlePongKeyUp);

  function resetBall() {
    ballX = pCanvas.width / 2;
    ballY = pCanvas.height / 2;
    ballSpeedX = 240 * (Math.random() > 0.5 ? 1 : -1);
    ballSpeedY = (Math.random() * 240 - 120);
  }

  // Recibe dt (deltaTime en segundos)
  function updatePong(dt) {
    const playerSpeed = 300; // píxeles por segundo
    const aiSpeed = 228;

    if (pongKeys.up && playerY > 0) playerY -= playerSpeed * dt;
    if (pongKeys.down && playerY < pCanvas.height - paddleHeight) playerY += playerSpeed * dt;

    const aiCenter = aiY + paddleHeight / 2;
    if (aiCenter < ballY - 15 && aiY < pCanvas.height - paddleHeight) {
      aiY += aiSpeed * dt;
    } else if (aiCenter > ballY + 15 && aiY > 0) {
      aiY -= aiSpeed * dt;
    }

    ballX += ballSpeedX * dt;
    ballY += ballSpeedY * dt;

    if (ballY - ballSize / 2 <= 0 || ballY + ballSize / 2 >= pCanvas.height) {
      ballSpeedY = -ballSpeedY;
      playRetroBeep(300, 0.04, 'square');
    }

    const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

    if (
      ballX - ballSize / 2 <= paddleWidth + 10 &&
      ballY >= playerY &&
      ballY <= playerY + paddleHeight
    ) {
      ballSpeedX = -ballSpeedX * 1.05;
      ballSpeedX = clamp(ballSpeedX, -480, 480);
      ballX = paddleWidth + 10 + ballSize / 2;
      playRetroBeep(600, 0.05, 'square');
    }

    if (
      ballX + ballSize / 2 >= pCanvas.width - paddleWidth - 10 &&
      ballY >= aiY &&
      ballY <= aiY + paddleHeight
    ) {
      ballSpeedX = -ballSpeedX * 1.05;
      ballSpeedX = clamp(ballSpeedX, -480, 480);
      ballX = pCanvas.width - paddleWidth - 10 - ballSize / 2;
      playRetroBeep(500, 0.05, 'square');
    }

    if (ballX < 0) {
      aiScore++;
      playRetroBeep(200, 0.2, 'sawtooth');
      resetBall();
    } else if (ballX > pCanvas.width) {
      playerScore++;
      playRetroBeep(900, 0.15, 'square');
      resetBall();
    }
  }

  function renderPong() {
    pCtx.fillStyle = "#000000";
    pCtx.fillRect(0, 0, pCanvas.width, pCanvas.height);

    pCtx.strokeStyle = "#ffffff";
    pCtx.lineWidth = 2;
    pCtx.setLineDash([6, 6]);
    pCtx.beginPath();
    pCtx.moveTo(pCanvas.width / 2, 0);
    pCtx.lineTo(pCanvas.width / 2, pCanvas.height);
    pCtx.stroke();
    pCtx.setLineDash([]);

    pCtx.fillStyle = "#ffffff";
    pCtx.fillRect(10, playerY, paddleWidth, paddleHeight);
    pCtx.fillRect(pCanvas.width - paddleWidth - 10, aiY, paddleWidth, paddleHeight);

    pCtx.fillRect(ballX - ballSize / 2, ballY - ballSize / 2, ballSize, ballSize);

    pCtx.font = "20px 'Courier Prime', monospace";
    pCtx.fillText(playerScore, pCanvas.width / 4, 35);
    pCtx.fillText(aiScore, (3 * pCanvas.width) / 4, 35);
  }

  let lastTime = null;

  function gameLoop(timestamp) {
    if (!lastTime) lastTime = timestamp;
    
    let dt = (timestamp - lastTime) / 1000;
    
    if (dt > 0.1) dt = 0.1;

    lastTime = timestamp;

    updatePong(dt);
    renderPong();
    pongAnimationId = requestAnimationFrame(gameLoop);
  }

  pongAnimationId = requestAnimationFrame(gameLoop);

  window.pongCleanup = () => {
    window.removeEventListener("keydown", handlePongKeyDown);
    window.removeEventListener("keyup", handlePongKeyUp);
  };
}

function stopPong() {
  if (pongAnimationId) {
    cancelAnimationFrame(pongAnimationId);
    pongAnimationId = null;
  }
  if (window.pongCleanup) {
    window.pongCleanup();
    window.pongCleanup = null;
  }
}