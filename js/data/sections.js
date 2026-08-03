const sections = {
      about: `
        <div class="prompt-line">chars@portfolio:~ $ <span class="cmd-highlight">cat ./about.txt</span></div>
        <p>Gameplay Programmer with 11+ years of self-taught experience building gameplay systems & UI architecture.</p>
        <p style="color: var(--text-dim);">Focus: Network replication, modular mechanics, performance optimization.</p>
        <div class="info-card" style="margin-top: 10px;">
          <h4>OS STATUS</h4>
          <p>Active — Open for Remote / Full-Time opportunities.</p>
        </div>
      `,

      projects: `
  <div class="prompt-line">chars@portafolio:~ $ <span class="cmd-highlight">ls ./projects/</span></div>
  
  <div class="projects-scroll-container">
    
    <!-- PROYECTO 1 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/cs_deathmatch.png" alt="CS_DEATHMATCH_SYSTEM" />
      </div>
      <div class="card-right">
        <div>
          <h3>CS_DEATHMATCH_SYSTEM</h3>
          <p class="engine-subtitle">UEFN / Verse</p>
        </div>
        <p class="desc">
          Custom economy, dynamic radar, and replication for 5v5 gameplay. Custom mini-game engine with custom UI components.
        </p>
        <p class="tags">[ UE5 ] , [ Verse ] , [ Networking ]</p>
        <button class="btn-open-project-retro" onclick="openProjectModal('cs-deathmatch')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

    <!-- PROYECTO 2 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/frog_adventure.png" alt="FROG_ADVENTURE" />
      </div>
      <div class="card-right">
        <div>
          <h3>FROG_ADVENTURE</h3>
          <p class="engine-subtitle">Godot / C++</p>
        </div>
        <p class="desc">
          Custom physics engine & hierarchical state machines for AI gameplay architecture.
        </p>
        <p class="tags">[ GODOT ] , [ C++ ] , [ GAMEPLAY ]</p>
        <button class="btn-open-project-retro" onclick="openProjectModal('frog-adventure')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

    <!-- PROYECTO 3 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/carnival_wheel.png" alt="CARNIVAL_WHEEL_3D" />
      </div>
      <div class="card-right">
        <div>
          <h3>CARNIVAL_WHEEL_3D</h3>
          <p class="engine-subtitle">Unreal Engine 5</p>
        </div>
        <p class="desc">
          Physics mini-game featuring interactive physics calculations and dynamic Slate/UMG UI components.
        </p>
        <p class="tags">[ UE5 ] , [ C++ ] , [ PHYSICS ]</p>
        <button class="btn-open-project-retro" onclick="openProjectModal('carnival-wheel')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

     <!-- PROYECTO 3 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/carnival_wheel.png" alt="CARNIVAL_WHEEL_3D" />
      </div>
      <div class="card-right">
        <div>
          <h3>CARNIVAL_WHEEL_3D</h3>
          <p class="engine-subtitle">Unreal Engine 5</p>
        </div>
        <p class="desc">
          Physics mini-game featuring interactive physics calculations and dynamic Slate/UMG UI components.
        </p>
        <p class="tags">[ UE5 ] , [ C++ ] , [ PHYSICS ]</p>
        <button class="btn-open-project-retro" onclick="openProjectModal('carnival-wheel')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

     <!-- PROYECTO 3 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/carnival_wheel.png" alt="CARNIVAL_WHEEL_3D" />
      </div>
      <div class="card-right">
        <div>
          <h3>CARNIVAL_WHEEL_3D</h3>
          <p class="engine-subtitle">Unreal Engine 5</p>
        </div>
        <p class="desc">
          Physics mini-game featuring interactive physics calculations and dynamic Slate/UMG UI components.
        </p>
        <p class="tags">[ UE5 ] , [ C++ ] , [ PHYSICS ]</p>
        <button class="btn-open-project-retro" onclick="openProjectModal('carnival-wheel')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

     <!-- PROYECTO 3 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/carnival_wheel.png" alt="CARNIVAL_WHEEL_3D" />
      </div>
      <div class="card-right">
        <div>
          <h3>CARNIVAL_WHEEL_3D</h3>
          <p class="engine-subtitle">Unreal Engine 5</p>
        </div>
        <p class="desc">
          Physics mini-game featuring interactive physics calculations and dynamic Slate/UMG UI components.
        </p>
        <p class="tags">[ UE5 ] , [ C++ ] , [ PHYSICS ]</p>
        <button class="btn-open-project-retro" onclick="openProjectModal('carnival-wheel')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

     <!-- PROYECTO 3 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/carnival_wheel.png" alt="CARNIVAL_WHEEL_3D" />
      </div>
      <div class="card-right">
        <div>
          <h3>CARNIVAL_WHEEL_3D</h3>
          <p class="engine-subtitle">Unreal Engine 5</p>
        </div>
        <p class="desc">
          Physics mini-game featuring interactive physics calculations and dynamic Slate/UMG UI components.
        </p>
        <p class="tags">[ UE5 ] , [ C++ ] , [ PHYSICS ]</p>
        <button class="btn-open-project-retro" onclick="openProjectModal('carnival-wheel')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

     <!-- PROYECTO 3 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/carnival_wheel.png" alt="CARNIVAL_WHEEL_3D" />
      </div>
      <div class="card-right">
        <div>
          <h3>CARNIVAL_WHEEL_3D</h3>
          <p class="engine-subtitle">Unreal Engine 5</p>
        </div>
        <p class="desc">
          Physics mini-game featuring interactive physics calculations and dynamic Slate/UMG UI components.
        </p>
        <p class="tags">[ UE5 ] , [ C++ ] , [ PHYSICS ]</p>
        <button class="btn-open-project-retro" onclick="openProjectModal('carnival-wheel')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

     <!-- PROYECTO 3 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/carnival_wheel.png" alt="CARNIVAL_WHEEL_3D" />
      </div>
      <div class="card-right">
        <div>
          <h3>CARNIVAL_WHEEL_3D</h3>
          <p class="engine-subtitle">Unreal Engine 5</p>
        </div>
        <p class="desc">
          Physics mini-game featuring interactive physics calculations and dynamic Slate/UMG UI components.
        </p>
        <p class="tags">[ UE5 ] , [ C++ ] , [ PHYSICS ]</p>
        <button class="btn-open-project-retro" onclick="openProjectModal('carnival-wheel')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

  </div>
`,

      skills: `
        <div class="prompt-line">chars@portfolio:~ $ <span class="cmd-highlight">cat ./skills.env</span></div>
        <div class="info-card">
          <h4>LANGUAGES</h4>
          <p>C, C++, C#, Java, Verse, GDScript</p>
        </div>
        <div class="info-card">
          <h4>ENGINES</h4>
          <p>Unreal Engine 5, UEFN, Unity, Godot Engine</p>
        </div>
        <div class="info-card">
          <h4>CORE ARCHITECTURE</h4>
          <p>Network Replication, UI Systems, Gameplay systems</p>
        </div>
      `,

      contact: `
        <div class="prompt-line">chars@portfolio:~ $ <span class="cmd-highlight">./contact.sh</span></div>
        <div class="info-card clickable onclick="window.open('mailto:charsdeveloper@gmail.com');">
          <h4>EMAIL</h4>
          <p>charsdeveloper@gmail.com</p>
        </div>
        <div class="info-card clickable" onclick="window.open('https://linkedin.com/in/carlos-enrique-canavesio-81b13b166', '_blank');">
          <h4>LINKEDIN</h4>
          <p>linkedin.com/in/carlos-enrique-canavesio-81b13b166</p>
        </div>
        <div class="info-card clickable" onclick="window.open('https://github.com/charsdev', '_blank');">
          <h4>GITHUB</h4>
          <p>https://github.com/charsdev</p>
        </div>
      `,

      help: `
        <div class="prompt-line">chars@portfolio:~ $ <span class="cmd-highlight">help</span></div>
        <p style="color: var(--text-dim);">Comandos disponibles:</p>
        <div class="info-card" style="margin-top: 6px;">
          <p><strong style="color: var(--text)">1 | about</strong> - Ver sobre mí</p>
          <p><strong style="color: var(--text)">2 | projects</strong> - Ver proyectos</p>
          <p><strong style="color: var(--text)">3 | skills</strong> - Ver habilidades técnicas</p>
          <p><strong style="color: var(--text)">4 | contact</strong> - Ver canales de contacto</p>
          <p><strong style="color: var(--text)">5 | blog</strong> - Ver lista de publicaciones</p>
          <p><strong style="color: var(--text)">post [id]</strong> - Abrir post en una ventana nueva (ej: post 1)</p>
          <p><strong style="color: var(--text)">pong</strong> - Jugar al minijuego retro Pong</p>
          <p><strong style="color: var(--text)">cv | download</strong> - Descargar CV en PDF</p>
          <p><strong style="color: var(--text)">clear</strong> - Reiniciar vista</p>
        </div>
      `
    };

    
    const projectData = {
  "cs-deathmatch": {
    title: "PROJECT.exe - CS_DEATHMATCH_SYSTEM",
    name: "CS DEATHMATCH SYSTEM",
    techStack: "UEFN / Verse",
    description: "Multiplayer deathmatch framework featuring competitive 5v5 architecture, weapon shop integration, dynamic radar, and spectator mechanics.",
    systems: ["Economy", "Shop", "Radar", "Kill Feed", "Scoreboard", "Spectator Camera"],
    tech: "Verse · UEFN · UI · Networking",
    video: "#",
    github: "#",
    play: "#"
  },
  "frog-adventure": {
    title: "PROJECT.exe - FROG_ADVENTURE",
    name: "FROG ADVENTURE",
    techStack: "Godot / C++",
    description: "2D platformer framework built around custom physics integration and hierarchical state machines for advanced AI behavior.",
    systems: ["Custom Physics Engine", "AI State Machines", "Tilemap Collision", "Animation Controller"],
    tech: "Godot · C++ · Gameplay Architecture",
    video: "#",
    github: "#",
    play: "#"
  }
};


function openProjectModal(projectId) {
  const proj = projectData[projectId];
  if (!proj) return;

  playRetroBeep(750, 0.1, 'square');

  blogModalTitle.textContent = proj.title;
  blogModalContent.innerHTML = `
    <div class="card-media" style="height: 180px; margin-bottom: 12px;">
      <div class="media-placeholder">[ GAMEPLAY IMAGE / GIF ]</div>
    </div>
    <h3 style="font-size: 14px; font-weight: bold;">${proj.name}</h3>
    <p style="color: var(--text-dim); font-size: 11px; margin-bottom: 8px;">${proj.techStack}</p>
    
    <div style="border-bottom: 1px dashed var(--border); margin: 8px 0;"></div>

    <h4 style="font-size: 11px; margin-top: 8px; color: var(--border);">DESCRIPTION</h4>
    <p style="font-size: 11px; color: #ccc; margin-bottom: 8px;">${proj.description}</p>

    <h4 style="font-size: 11px; margin-top: 8px; color: var(--border);">SYSTEMS</h4>
    <ul class="systems-list" style="font-size: 11px; color: #ccc; margin-bottom: 8px;">
      ${proj.systems.map(sys => `<li>${sys}</li>`).join('')}
    </ul>

    <h4 style="font-size: 11px; margin-top: 8px; color: var(--border);">TECH</h4>
    <p style="font-size: 11px; color: var(--text-dim);">${proj.tech}</p>

    <div class="modal-actions">
      <a href="${proj.video}" target="_blank" class="nav-btn">[ VIDEO ]</a>
      <a href="${proj.github}" target="_blank" class="nav-btn">[ GITHUB ]</a>
      <a href="${proj.play}" target="_blank" class="nav-btn">[ PLAY ]</a>
    </div>
  `;

  blogModal.style.display = "flex";
  blogModal.style.top = "50%";
  blogModal.style.left = "50%";
  blogModal.style.transform = "translate(-50%, -50%)";
}
