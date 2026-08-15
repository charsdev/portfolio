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
  <div class="prompt-line">chars@portaflio:~ $ <span class="cmd-highlight">ls ./projects/</span></div>
  
  <div class="projects-scroll-container">
    
    <!-- PROYECTO 1 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/img/poolday.png" alt="POOLDAY" />
      </div>
      <div class="card-right">
        <div>
          <h3>POOLDAY</h3>
          <p class="engine-subtitle">UEFN / Verse</p>
        </div>
        <p class="desc">
          Custom economy, dynamic radar, and match system for 5v5 gameplay. Custom mini-game with custom UI components.
        </p>
        <button class="btn-open-project-retro" onclick="openProjectModal('poolday')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

    <!-- PROYECTO 2 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/img/boot-protocol.png" alt="BOOT_PROTOCOL" />
      </div>
      <div class="card-right">
        <div>
          <h3>BOOT_PROTOCOL</h3>
          <p class="engine-subtitle">Unreal Engine / C++</p>
        </div>
        <p class="desc">
          Custom physics, Custom Materials, Interaction Systems and notification system.
        </p>
        <button class="btn-open-project-retro" onclick="openProjectModal('boot-protocol')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

    <!-- PROYECTO 3 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/img/dynamic-friend-list.png" alt="DYNAMIC_FRIEND_LIST" />
      </div>
      <div class="card-right">
        <div>
          <h3>DYNAMIC_FRIEND_LIST</h3>
          <p class="engine-subtitle">Unreal Engine 5 / C++</p>
        </div>
        <p class="desc">
          MVVM UMG C++ Project, Fantasy Friend List where disconnect and connect randomly showing notification and tooltips.
        </p> 
        <button class="btn-open-project-retro" onclick="openProjectModal('dynamic-friend-list')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

     <!-- PROYECTO 4 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/img/horde-combat.png" alt="HORDE_COMBAT" />
      </div>
      <div class="card-right">
        <div>
          <h3>HORDE_COMBAT</h3>
          <p class="engine-subtitle">Unreal Engine 5 / C++</p>
        </div>
        <p class="desc">
          Action Combat RPG with c++ and GAS.
        </p>
        <button class="btn-open-project-retro" onclick="openProjectModal('horde-combat')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

     <!-- PROYECTO 5 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/img/topic-twister.png" alt="TOPIC_TWISTER" />
      </div>
      <div class="card-right">
        <div>
          <h3>TOPIC_TWISTER</h3>
          <p class="engine-subtitle"> Unity / C#</p>
        </div>
        <p class="desc">
        Topic Twister clone created in unity with MVP archicture and TDD, created with .net WebServer.
        </p>
        <button class="btn-open-project-retro" onclick="openProjectModal('topic-twister')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

     <!-- PROYECTO 6 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/img/binding-of-chars.png" alt="BINDING_OF_CHARS" />
      </div>
      <div class="card-right">
        <div>
          <h3>BINDING_OF_CHARS</h3>
          <p class="engine-subtitle">Unity / C#</p>
        </div>
        <p class="desc">
          Binding of Isaac Clone made it on stream using A* for pathfinding and procedurally generated rooms.
        </p>
        <button class="btn-open-project-retro" onclick="openProjectModal('binding-of-chars')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

     <!-- PROYECTO 7 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/img/carnival_frenzy.png" alt="CARNIVAL_FRENZY" />
      </div>
      <div class="card-right">
        <div>
          <h3>CARNIVAL_FRENZY</h3>
          <p class="engine-subtitle">Godot / GDScript</p>
        </div>
        <p class="desc">
          Created in 1 week using Godot engine for DV Start Gamejam, handle a custom system event.
        </p>
        <button class="btn-open-project-retro" onclick="openProjectModal('carnival-frenzy')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

     <!-- PROYECTO 8 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/img/this-is-sparta.png" alt="THIS_IS_SPARTA" />
      </div>
      <div class="card-right">
        <div>
          <h3>THIS_IS_SPARTA</h3>
          <p class="engine-subtitle">Unreal Engine 5 / C++</p>
        </div>
        <p class="desc">
          Mutable, Replication and Animation blueprints, two teams fight by press a up a button.
        </p>
        <button class="btn-open-project-retro" onclick="openProjectModal('this-is-sparta')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

     <!-- PROYECTO 9 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/img/virtual-bowling-3d.png" alt="VIRTUAL_BOWLING_3D" />
      </div>
      <div class="card-right">
        <div>
          <h3>VIRTUAL_BOWLING_3D</h3>
          <p class="engine-subtitle">Unity / C#</p>
        </div>
        <p class="desc">
          A project where recreate the kata bowling with a synthwave style and monochrome pallete. Shaders and MVP Architecture.
        </p>
        <button class="btn-open-project-retro" onclick="openProjectModal('virtual-bowling-3d')">
          [ OPEN PROJECT ]
        </button>
      </div>
    </article>

    <!-- PROYECTO 10 -->
    <article class="project-card-split">
      <div class="card-left">
        <span class="screenshot-label">[ SCREENSHOT ]</span>
        <img src="assets/img/nexus-defense.png" alt="NEXUS_DEFENSE" />
      </div>
      <div class="card-right">
        <div>
          <h3>NEXUS_DEFENSE</h3>
          <p class="engine-subtitle">Unity / C#</p>
        </div>
        <p class="desc">
          A minimalist tower defense game with custom ability system where hordes attack our nexus.
        </p>
        <button class="btn-open-project-retro" onclick="openProjectModal('nexus-defender')">
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

      certifications: `
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
          <p><strong style="color: var(--text)">1 | about</strong> - Read about me</p>
          <p><strong style="color: var(--text)">2 | projects</strong> - Read projects</p>
          <p><strong style="color: var(--text)">3 | skills</strong> - Read tecnical skills</p>
          <p><strong style="color: var(--text)">4 | certifications</strong> - Read certifications</p>
          <p><strong style="color: var(--text)">5 | contact</strong> - Read contact channels</p>
          <p><strong style="color: var(--text)">pong</strong> - Play retro game pong</p>
          <p><strong style="color: var(--text)">cv | resume</strong> - Read CV</p>
          <p><strong style="color: var(--text)">clear</strong> - Clear screen</p>
        </div>
      `
    };

    
  const projectData = {
  "poolday": {
    title: "PROJECT.exe - POOLDAY",
    name: "POOLDAY",
    techStack: "UEFN / Verse",
    description: "Competitive 4v4 multiplayer deathmatch framework. Features modular round logic, weapon shop integration, dynamic radar tracking, and dedicated spectator mechanics.",
    systems: ["Economy & Shop", "Dynamic Radar", "Kill Feed", "Scoreboard", "Spectator System"],
    tech: "Verse · UEFN · UI · Networking",
    video: "https://www.youtube.com/embed/r7A2FkMSn6E?si=wPItT1_QbNmrh5sO",
    github: "https://github.com/charsdev/UEFN-Poolday",
  },
  "dynamic-friend-list": {
    title: "PROJECT.exe - DYNAMIC_FRIEND_LIST",
    name: "DYNAMIC_FRIEND_LIST",
    techStack: "Unreal Engine / C++",
    description: "Data-driven social HUD system built with asynchronous UI architecture. Utilizes an MVVM pattern with dynamic DataTables, event-driven status updates, real-time notifications, and UMG animations.",
    systems: ["UMG", "MVVM Architecture", "DataTable Model", "Event-Driven UI"],
    tech: "C++ · Slate/UMG · UI Architecture",
    video: "https://www.youtube.com/embed/_bUkJxFN1as?si=rw6yLSwysmCP-uGX",
    github: 'https://github.com/charsdev/Dynamic-Friends-List'
  },
  "horde-combat": {
    title: "PROJECT.exe - HORDE_COMBAT",
    name: "HORDE COMBAT",
    techStack: "Unreal Engine / C++",
    description: "3D Action RPG roguelike built with Unreal Engine's Gameplay Ability System (GAS). Features dynamic horde spawning, dynamic difficulty scaling, modular combat abilities, and a roguelike progression system.",
    systems: ["Gameplay Ability System (GAS)", "Wave Enemy Spawner", "Combat & Leveling Pipeline", "AI Behavior Trees"],
    tech: "C++ · GAS · AI Architecture · RPG Systems",
    video: "assets/videos/horde-combat.mp4",
    github: ''
  },
  "boot-protocol": {
    title: "PROJECT.exe - BOOT_PROTOCOL",
    name: "BOOT PROTOCOL",
    techStack: "Unreal Engine / C++",
    description: "Modular third-person puzzle framework. Decouples core gameplay logic and inventory/item interaction requirements in C++ while leveraging Blueprints for rapid visual presentation and UI feedback.",
    systems: ["Modular Inventory", "Interaction Pipeline", "Notification Bus", "Retro CGI Shaders"],
    tech: "C++ · Blueprint Integration · Systems Design",
    video: "https://www.youtube.com/embed/DKzu8hnkzEU?si=qrwcqQtZdaHDhvKn",
    github: 'https://github.com/charsdev/Boot-Protocol'
  },
  "binding-of-chars": {
    title: "PROJECT.exe - BINDING_OF_CHARS",
    name: "BINDING OF CHARS",
    techStack: "Unity / C#",
    description: "2D top-down roguelike framework featuring procedurally generated symmetric dungeons, custom A* pathfinding, modular Behavior Trees for AI enemies, and a decoupled Event Bus system.",
    systems: ["Behavior Trees & FSM", "Procedural Generation", "A* Pathfinding", "Event Bus"],
    tech: "C# · AI · Procedural Algorithms",
    video: "https://www.youtube.com/embed/aWtJs1xcYf4?si=tV4gKiBB_Y33sgI7",
    github: 'https://github.com/charsdev/Binding-of-chars'
  },
  "topic-twister": {
    title: "PROJECT.exe - TOPIC_TWISTER",
    name: "TOPIC TWISTER",
    techStack: "Unity / C#",
    description: "Asynchronous multiplayer word game built following TDD practices and MVP architecture. Features real-time matchmaking and Firebase integration for dynamic question/answer validation.",
    systems: ["MVP Architecture", "Matchmaking", "Firebase API", "Unit Testing (TDD)"],
    tech: "C# · Backend Integration · Software Architecture",
    video: "https://www.youtube.com/embed/qG4avEfQTgo?si=41uljA0hdoexdwcR",
    github: 'https://github.com/charsdev/Topic-Twister-Clone'
  },
  "virtual-bowling-3d": {
    title: "PROJECT.exe - VIRTUAL_BOWLING_3D",
    name: "VIRTUAL BOWLING 3D",
    techStack: "Unity / C#",
    description: "Single-player 3D arcade bowling game featuring a Synthwave aesthetic. Clean code structure using MVP pattern, custom physics/pin scoring logic, Assembly Definitions (ADF), and custom Shaders/CG effects.",
    systems: ["Pin Physics & Scoring", "MVP Architecture", "Assembly Definitions", "Custom HLSL Shaders"],
    tech: "C# · Shaders · Optimization",
    video: "https://www.youtube.com/embed/Fo_nz42itqs?si=4fktKBGLvhS9mr-6",
    github: 'https://github.com/charsdev/Virtual-Bowling-3D'
  },
  "nexus-defender": {
    title: "NEXUS_DEFENDER",
    name: "NEXUS DEFENDER",
    techStack: "Unity / C#",
    description: "Action-packed hybrid combining Survivor-like and Tower Defense mechanics. Implements an extensible gameplay ability system (GAS-inspired) and an optimized wave enemy spawner.",
    systems: ["Gameplay Ability System", "Wave Spawner", "Targeting Logic", "Upgrade Pipeline"],
    tech: "C# · Gameplay Systems · Performance",
    video: "https://www.youtube.com/embed/hgq2oki0Xc8?si=Y1yt8cQ3UzPGv5rb",
    github: ''
  },
  "this-is-sparta": {
    title: "THIS_IS_SPARTA",
    name: "THIS IS SPARTA",
    techStack: "Unreal Engine / C++",
    description: "1v1 local/online party brawler driven by single-button mechanics. Features dynamic modular character customization using the Mutable plugin, Online Subsystem multiplayer integration, and a custom combat damage pipeline.",
    systems: ["Mutable Character System", "Online Subsystem", "Damage Pipeline", "Local/Network Input"],
    tech: "C++ · Networking · Character Systems",
    video: "https://www.youtube.com/embed/XUFyyq4XDJ8?si=VWKHN4K0uCcALqw8",
    github: ''
  },
  "carnival-frenzy": {
    title: "CARNIVAL_FRENZY",
    name: "CARNIVAL FRENZY",
    techStack: "Godot / GDScript",
    description: "Fast-paced platformer game developed in 1 week for a Game Jam. Features an event-driven architecture for chaotic minigame hazards, player controller mechanics, and responsive UI.",
    systems: ["Event-Driven Hazards", "Player Movement Physics", "Pickup Pipeline", "UI Controller"],
    tech: "GDScript · Game Jam · Rapid Prototyping",
    video: "https://www.youtube.com/embed/dXcee_O__Zo?si=fUu1rQBhCbKr05fT",
    github: ''
  }
};

const certData = {
  "unreal-engine-image-campus": {
    title: "DESARROLLO DE VIDEOJUEGOS CON UNREAL ENGINE",
    img: "assets/img/certifications/unreal-engine-image-campus.png",
  },
  "unity-game-dev-coderhouse": {
    title: "DESAROLLO DE VIDEOJUEGOS CON UNITY",
    img: "assets/img/certifications/unity-game-dev-coderhouse.png",
  },
  "unity-quark-academy": {
    title: "BOOTCAMP UNITY GAME ENGINE",
    img: "assets/img/certifications/unity-quark-academy.jpg",
  },
  "solid-udemy": {
    title: "SOLID PRINCIPLES: INTRODUCTION SOFTWARE ARCHITECTURE & DESIGN",
    img: "assets/img/certifications/solid-udemy.png",
  },
  "unreal-engine-5-de-0-a-dios-udemy": {
    title: "UNREAL ENGINE 5 DE 0 A DIOS",
    img: "assets/img/certifications/unreal-engine-5-de-0-a-dios-udemy.png",
  },
  "unreal-engine-5-one-course-solution-for-material-udemy": {
    title: "UNREAL ENGINE 5 ONE COURSE SOLUTION FOR MATERIAL",
    img: "assets/img/certifications/unreal-engine-5-one-course-solution-for-material-udemy.png",
  },
  "arte-para-videojuegos-davinci": {
    title: "ARTE PARA VIDEOJUEGOS",
    img: "assets/img/certifications/arte-para-videojuegos-davinci.png",
  },
  "unreal-engine-4-cpp-multiplayer": {
    title: "UNREAL 4 C++ MULTIPLAYER MASTER: INTERMEDIATE GAME DEV",
    img: "assets/img/certifications/unreal-engine-4-cpp-multiplayer.png",
  },
  "game-design-udemy": {
    title: "DISEÑO Y PRODUCCIÓN DE VIDEOJUEGOS DE 0 A PROFESIONAL",
    img: "assets/img/certifications/game-design-udemy.png",
  },
  "desarrollo-de-juegos-con-urneal-engine-de-0-a-profesional": {
    title: "DESARROLLO DE JUEGOS CON UNREAL ENGINE DE 0 A PROFESIONAL",
    img: "assets/img/certifications/desarrollo-de-juegos-con-urneal-engine-de-0-a-profesional.png",
  },
  "unreal-engine-5-cpp-advance-action-rpg": {
    title: "UNREAL ENGINE 5 C++: ADVANCE ACTION RPG",
    img: "assets/img/certifications/unreal-engine-5-cpp-advance-action-rpg.png",
  },
  "complete-c#-unity-developer-3d": {
    title: "COMPLETE C# UNITY GAME DEVELOPER 3D",
    img: "assets/img/certifications/complete-c#-unity-developer-3d.png",
  },
  "complete-c#-unity-developer-2d": {
    title: "COMPLETE C# UNITY GAME DEVELOPER 2D",
    img: "assets/img/certifications/complete-c#-unity-developer-2d.png",
  },
  "creating-a-8-chip-emulator-in-c": {
    title: "CREATING A 8 CHIP EMULATOR IN C",
    img: "assets/img/certifications/creating-a-8-chip-emulator-in-c.png",
  },
  "unreal-engine-5-cpp-create-custom-editor-tools": {
    title: "UNREAL ENGINE 5 CPP CREATE CUSTOM EDITOR TOOLS",
    img: "assets/img/certifications/unreal-engine-5-cpp-create-custom-editor-tools.png",
  },
  "how-to-make-a-melee-combat-system-in-unreal-engine-5-udemy": {
    title: "HOW TO MAKE A MELEE COMBAT SYSTEM IN UNREAL ENGINE 5",
    img: "assets/img/certifications/how-to-make-a-melee-combat-system-in-unreal-engine-5-udemy.png",
  },
  "math-for-videogames-the-fastest-way-to-get-smarter": {
    title: "MATH FOR VIDEOGAMES THE FASTEST WAY TO GET SMARTER",
    img: "assets/img/certifications/math-for-videogames-the-fastest-way-to-get-smarter.png",
  },
  "cpp-fundamentals-udemy": {
    title: "C++ FUNDAMENTALS: GAME PROGRAMMING FOR BEGINNERS",
    img: "assets/img/certifications/cpp-fundamentals-udemy.png",
  },
  "unreal-engine-cpp-developer-learn-cpp-and-make-videogames": {
    title: "UNREAL ENGINE C++ DEVELOPER: LEARN C++ AND MAKE VIDEO GAMES",
    img: "assets/img/certifications/unreal-engine-cpp-developer-learn-cpp-and-make-videogames.png",
  },
  "unreal-engine-4-mastery-create-multiplayer-games-with-cpp": {
    title: "UNREAL ENGINE 4 MASTERY: CREATE MULTIPLAYER GAMES WITH C++",
    img: "assets/img/certifications/unreal-engine-4-mastery-create-multiplayer-games-with-cpp.png",
  },
  "3d-graphics-programming-from-scratch": {
    title: "3D GRAPHICS PROGRAMMING FROM SCRATCH",
    img: "assets/img/certifications/3d-graphics-programming-from-scratch.png",
  },
  "begining-cpp-programming-from-begginer-to-beyond": {
    title: "BEGINING C++ PROGRAMMING FROM BEGGINER TO BEYOND",
    img: "assets/img/certifications/begining-cpp-programming-from-begginer-to-beyond.png",
  },
  "how-to-make-a-retro-fps-in-unreal-engine-5": {
    title: "HOW TO MAKE A RETRO FPS IN UNREAL ENGINE 5",
    img: "assets/img/certifications/how-to-make-a-retro-fps-in-unreal-engine-5.png",
  },
  "unreal-engine-5-blueprints-first-person-shooter": {
    title: "UNREAL ENGINE 5 BLUEPRINTS FIRST PERSON SHOOTER (FPS)",
    img: "assets/img/certifications/unreal-engine-5-blueprints-first-person-shooter.png",
  },
  "unreal-engine-5-cpp-multiplayer-shooter": {
    title: "UNREAL ENGINE 5 C++ MULTIPLAYER SHOOTER",
    img: "assets/img/certifications/unreal-engine-5-cpp-multiplayer-shooter.png",
  },
  "unreal-engine-5-y-blender-de-0-a-profesional": {
    title: "UNREAL ENGINE 5 Y BLENDER DE 0 A PROFESIONAL",
    img: "assets/img/certifications/unreal-engine-5-y-blender-de-0-a-profesional.png",
  },
  "unreal-engine-desde-0-crea-3-juegos-con-blueprints-y-cpp": {
    title: "UNREAL ENGINE DESDE 0 CREA 3 JUEGOS CON BLUEPRINTS Y C++",
    img: "assets/img/certifications/unreal-engine-desde-0-crea-3-juegos-con-blueprints-y-cpp.png",
  },
  "unreal-engine-5-cpp-ultimate-developer-course": {
    title: "UNREAL ENGINE 5 C++ ULTIMATE GAME DEVELOPER COURSE",
    img: "assets/img/certifications/unreal-engine-5-cpp-ultimate-developer-course.png",
  },
  "unreal-engine-4-the-ultimate-shooter-course": {
    title: "UNREAL ENGINE 5 C++ ULTIMATE SHOOTER COURSE",
    img: "assets/img/certifications/unreal-engine-4-the-ultimate-shooter-course.png",
  }
};

const certifications = [
  {
    id: 1,
    target: 'unreal-engine-image-campus',
    issuer: "Image Campus",
    name: "DESARROLLO DE VIDEOJUEGOS CON UNREAL ENGINE",
    year: "2024-03-15"
  },
  {
    id: 2,
    target: 'unity-game-dev-coderhouse',
    issuer: "CoderHouse",
    name: "DESAROLLO DE VIDEOJUEGOS CON UNITY",
    year: "2022-03-10"
  },
  {
    id: 3,
    target: 'unity-quark-academy',
    issuer: "Quark Talent",
    name: "BOOTCAMP UNITY GAME ENGINE",
    year: "2023-05-01"
  },
  {
    id: 4,
    target: 'solid-udemy',
    issuer: "Udemy",
    name: "SOLID Principles: Introduction Software Architecture & Design",
    year: "2022-08-24"
  },
  {
    id: 5,
    target: 'unreal-engine-5-de-0-a-dios-udemy',
    issuer: "Udemy",
    name: "Unreal Engine 5 de 0 a dios",
    year: "2025-09-06"
  },
  {
    id: 6,
    target: 'unreal-engine-5-one-course-solution-for-material-udemy',
    issuer: "Udemy",
    name: "Unreal Engine 5 one course solution for material",
    year: "2025-05-20"
  },
  {
    id: 7,
    target: 'arte-para-videojuegos-davinci',
    issuer: "Da vinci",
    name: "Arte para Videojuegos",
    year: "2025-12-04"
  },
  {
    id: 8,
    target: 'unreal-engine-4-cpp-multiplayer',
    issuer: "Udemy",
    name: "Unreal 4 C++ Multiplayer Master: Intermediate Game Dev",
    year: "2024-10-26"
  },
  {
    id: 9,
    target: 'game-design-udemy',
    issuer: "Udemy",
    name: "Diseño y producción de videojuegos de 0 a profesional",
    year: "2025-08-30"
  },
  {
    id: 10,
    target: 'desarrollo-de-juegos-con-urneal-engine-de-0-a-profesional',
    issuer: "Udemy",
    name: "Desarrollo de juegos con Unreal Engine de 0 a profesional",
    year: "2023-07-22"
  },
  {
    id: 11,
    target: 'unreal-engine-5-cpp-advance-action-rpg',
    issuer: "Udemy",
    name: "Unreal Engine 5 C++: Advance Action RPG",
    year: "2025-11-13"
  },
  {
    id: 12,
    target: 'complete-c#-unity-developer-3d',
    issuer: "Udemy",
    name: "Complete C# Unity Game Developer 3D",
    year: "2022-10-23"
  },
  {
    id: 13,
    target: 'complete-c#-unity-developer-2d',
    issuer: "Udemy",
    name: "Complete C# Unity Game Developer 2D",
    year: "2022-10-22"
  },
  {
    id: 14,
    target: 'creating-a-8-chip-emulator-in-c',
    issuer: "Udemy",
    name: "Creating a 8 chip emulator in C",
    year: "2022-10-25"
  },
  {
    id: 15,
    target: 'unreal-engine-5-cpp-create-custom-editor-tools',
    issuer: "Udemy",
    name: "Unreal engine 5 cpp create custom editor tools",
    year: "2025-09-15"
  },
  {
    id: 16,
    target: 'how-to-make-a-melee-combat-system-in-unreal-engine-5-udemy',
    issuer: "Udemy",
    name: "How to make a melee combat system in unreal engine 5",
    year: "2025-09-04"
  },
  {
    id: 17,
    target: 'math-for-videogames-the-fastest-way-to-get-smarter',
    issuer: "Udemy",
    name: "Math for videogames the fastest way to get smarter",
    year: "2023-03-20"
  },
  {
    id: 18,
    target: 'cpp-fundamentals-udemy',
    issuer: "Udemy",
    name: "C++ fundamentals: Game Programming For Beginners",
    year: "2025-10-13"
  },
  {
    id: 19,
    target: 'unreal-engine-cpp-developer-learn-cpp-and-make-videogames',
    issuer: "Udemy",
    name: "Unreal Engine c++ Developer: Learn C++ and Make Video Games",
    year: "2022-12-09"
  },
  {
    id: 20,
    target: 'unreal-engine-4-mastery-create-multiplayer-games-with-cpp',
    issuer: "Udemy",
    name: "Unreal Engine 4 mastery: Create Multiplayer Games with C++",
    year: "2025-09-14"
  },
  {
    id: 21,
    target: '3d-graphics-programming-from-scratch',
    issuer: "Pikuma",
    name: "3d Graphics Programming from scratch",
    year: "2022-10-11"
  },
  {
    id: 22,
    target: 'begining-cpp-programming-from-begginer-to-beyond',
    issuer: "Udemy",
    name: "Begining C++ Programming From Begginer to Beyond",
    year: "2023-01-30"
  },
  {
    id: 23,
    target: 'how-to-make-a-retro-fps-in-unreal-engine-5',
    issuer: "Udemy",
    name: "How to make a retro fps in Unreal Engine 5",
    year: "2025-10-13"
  },
  {
    id: 24,
    target: 'unreal-engine-5-blueprints-first-person-shooter',
    issuer: "Udemy",
    name: "Unreal engine 5 blueprints First Person Shooter (FPS)",
    year: "2024-05-21"
  },
  {
    id: 25,
    target: 'unreal-engine-5-cpp-multiplayer-shooter',
    issuer: "Udemy",
    name: "Unreal Engine 5 C++ Multiplayer Shooter",
    year: "2024-12-22"
  },
  {
    id: 26,
    target: 'unreal-engine-5-y-blender-de-0-a-profesional',
    issuer: "Udemy",
    name: "Unreal Engine 5 y Blender de 0 a Profesional",
    year: "2025-10-14"
  },
  {
    id: 27,
    target: 'unreal-engine-desde-0-crea-3-juegos-con-blueprints-y-cpp',
    issuer: "Udemy",
    name: "Unreal Engine Desde 0 crea 3 juegos con blueprints y c++",
    year: "2025-09-12"
  },
  {
    id: 28,
    target: 'unreal-engine-5-cpp-ultimate-developer-course',
    issuer: "Udemy",
    name: "Unreal Engine 5 C++ Ultimate Game Developer Course",
    year: "2025-08-27"
  },
  {
    id: 29,
    target: 'unreal-engine-4-the-ultimate-shooter-course',
    issuer: "Udemy",
    name: "Unreal Engine 5 C++ Ultimate Shooter Course",
    year: "2025-09-13"
  },
];

function openProjectModal(projectId) {
  const proj = projectData[projectId];
  if (!proj) return;

  playRetroBeep(750, 0.1, 'square');

  blogModalTitle.textContent = proj.title;
  blogModalContent.innerHTML = `
    <div class="card-media" style="height: 300px; margin-bottom: 12px;">
      <div class="media-placeholder">
        <iframe src="${proj.video}" title="YouTube video player"  width="500" height="280" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
        </iframe>
      </div>

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
      <a href="${proj.github}" target="_blank" class="nav-btn">[ GITHUB ]</a>
    </div>
  `;

  blogModal.style.display = "flex";
  blogModal.style.top = "50%";
  blogModal.style.left = "50%";
  blogModal.style.transform = "translate(-50%, -50%)";
}


function openCertModal(certId) {
  const cert = certData[certId];
  if (!cert) return;

  playRetroBeep(750, 0.1, 'square');

  blogModalTitle.textContent = "VIERWER.exe - " + cert.title;
  blogModalContent.innerHTML = `
    <div class="modal-body" id="blog-modal-content">
<div class="card-left">
        <span class="screenshot-label">[${cert.title}]</span>
        <img src="${cert.img} " alt="POOLDAY">
      </div>
  </div>
  `;

  blogModal.style.display = "flex";
  blogModal.style.top = "50%";
  blogModal.style.left = "50%";
  blogModal.style.transform = "translate(-50%, -50%)";
}
