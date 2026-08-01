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
        <div class="prompt-line">chars@portfolio:~ $ <span class="cmd-highlight">ls -la ./projects/</span></div>
        <div class="info-card">
          <h4>01. CS_DEATHMATCH_SYSTEM [Verse/UEFN]</h4>
          <p>Custom economy, dynamic radar, and replication for 5v5 gameplay.</p>
        </div>
        <div class="info-card">
          <h4>02. FROG_ADVENTURE_2D [C++/Godot]</h4>
          <p>Custom physics engine & hierarchical state machines for AI.</p>
        </div>
        <div class="info-card">
          <h4>03. CARNIVAL_WHEEL_3D [Unreal Engine 5]</h4>
          <p>Physics mini-game with custom UI components.</p>
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
        <div class="prompt-line">chars@portfolio:~ $ <span class="cmd-highlight">./connect.sh</span></div>
        <div class="info-card">
          <h4>EMAIL</h4>
          <p>charsdeveloper@gmail.com</p>
        </div>
        <div class="info-card" onclick="window.open('https://linkedin.com/in/carlos-enrique-canavesio-81b13b166', '_blank');">
          <h4>LINKEDIN</h4>
          <p>linkedin.com/in/carlos-enrique-canavesio-81b13b166</p>
        </div>
        <div class="info-card" onclick="window.open('https://github.com/charsdev', '_blank');">
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
