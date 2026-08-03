function renderBlogList() {
      let html = `<div class="prompt-line">chars@portfolio:~ $ <span class="cmd-highlight">ls -la ./blog/</span></div>`;
      blogPosts.forEach(post => {
        html += `
          <div class="info-card clickable" onclick="openBlogModal(${post.id})">
            <h4>[POST ${post.id}] ${post.title} <span style="color:var(--text-dim); font-size:10px;">(${post.date})</span></h4>
            <p>${post.summary}</p>
          </div>
        `;
      });
      html += `<p style="color: var(--text-dim); font-size: 11px; margin-top: 10px;">> Haz clic en un artículo o escribe 'post [id]' para abrirlo en una ventana nueva (ej. 'post 1').</p>`;
      return html;
  }

const logo = `                                                                                                    
              .................                                     .:::::::::------:.              
              :---------------:                                     .+**************+.              
              :---------------:                                     .+**************+.              
              :------*########:                                     .+########******+.              
              :------:                          .:.                          .+*****+.              
              :------:                        ..=*+.                         .+*****+.              
              :------:                        :==+#*.                        .+*****+.              
              :------:                      .-===+##*-                       .+*****+.              
              :------:                    ..-====+####=.                     .+*****+.              
              :------:                    .======+#####*..                   .+*****+.              
              :------:                  .:=======++#####*:                   .+*****+.              
              :------:                 .:======+++++*#####=.                 .+*****+.              
              :------:                .-======+++++++*#####+..               .+*****+.              
              :------:              ..=======+++++++++*#####*:.              .+*****+.              
              :------:              .=======+++++++++++*######=.             .+*****+.              
              :------:            .:======+++++++++++++++######+.            .+*****+.              
              :------:           .-======+++++++++++++++++######*:           .+*****+.              
              :------:          .-======+++++++++++++++++++*######=.         .+*****+.              
              =******:         .+++*****++++++++++++++++++++#######+.        .+*****+.              
              +@@@@@@-          :*######*++++++++++++++++++#%%%%%%#-.        .#@@@@@%:              
              +@@@@@@-           .*######*+++++++++++++++*%%%%%%%*.          .#@@@@@%:              
              +@@@@@@-            .=#######+++++++++++++*%%%%%%%+.           .#@@@@@%:              
              +@@@@@@-             .-*######+++++++++++#%%%%%%#-.            .#@@@@@%:              
              +@@@@@@-              .:*######*++++++++#%%%%%%*..             .#@@@@@%:              
              +@@@@@@-                .+######*+++++*#%%%%%%+.               .#@@@@@%:              
              +@@@@@@-                 .-######*+++*%%%%%%#-.                .#@@@@@%:              
              +@@@@@@-                  .:*#####*+*%%%%%%#:.                 .#@@@@@%:              
              +@@@@@@-                    .+######%%%%%%+.                   .#@@@@@%:              
              +@@@@@@-                      =#####%%%%#-                     .#@@@@@%:              
              +@@@@@@-                      .-####%%%#:.                     .#@@@@@%:              
              +@@@@@@-                        :*##%%+.                       .#@@@@@%:              
              +@@@@@@-                         .+##-.                        .#@@@@@%:              
              +@@@@@@-                          .-:.                         .#@@@@@%:              
              +@@@@@@-                                                       .#@@@@@%:              
              +@@@@@@@@@@@@@@@-                                     .#@@@@@@@@@@@@@@%:              
              +@@@@@@@@@@@@@@@-                                     .#@@@@@@@@@@@@@@%:              
              +@@@@@@@@@@@@@@@-                                     .#@@@@@@@@@@@@@@%:              
`;

  let logoPrinted = false;

  async function printLogo() {
    const pre = document.getElementById("smallest");
    pre.textContent = "";
    const logoSplit = logo.trimEnd().split("\n");
    const totalLines = logoSplit.length;

    if (!logoPrinted) {
        // 1. RELLENAR CON ESPACIOS VACÍOS: 
        // Generamos un bloque del mismo número de líneas vacías para reservar el alto exacto
        pre.textContent = "\n".repeat(totalLines - 1);

        // 2. ANIMACIÓN LÍNEA POR LÍNEA:
        // En cada iteración reemplazamos el contenido acumulando las líneas visibles
        // y manteniendo el resto como saltos de línea para preservar la altura.
        for (let i = 0; i < totalLines; i++) {
            const printedLines = logoSplit.slice(0, i + 1).join("\n");
            const remainingPadding = "\n".repeat(totalLines - 1 - i);

            pre.textContent = printedLines + remainingPadding;
            
            playRetroBeep(750, 0.1, 'square');
            await new Promise(resolve => setTimeout(resolve, 90));
        }
        
        logoPrinted = true;
    } else {
        // Si ya fue impreso previamente, renderizamos directamente todo el string
        pre.textContent = logoSplit.join("\n");
    }
}

function printAbout(activeTab, activeContent) {
      const pre = document.getElementById("fetch-info");
      pre.innerHTML += `
         <div class="sys-info">
              <div class="title">CARLOS ENRIQUE CANAVESIO</div>
              <div style="color: var(--text-dim); font-size: 11px;">Gameplay Programmer & Technical Designer</div>
            </div>

            <nav class="command-nav">
              <button class="nav-btn ${activeTab === 'about' ? 'active' : ''}" onclick="executeCommand('about')">[1] ./about.sh</button>
              <button class="nav-btn ${activeTab === 'projects' ? 'active' : ''}" onclick="executeCommand('projects')">[2] ./projects.sh</button>
              <button class="nav-btn ${activeTab === 'skills' ? 'active' : ''}" onclick="executeCommand('skills')">[3] ./skills.sh</button>
              <button class="nav-btn ${activeTab === 'contact' ? 'active' : ''}" onclick="executeCommand('contact')">[4] ./contact.sh</button>
              <button class="nav-btn ${activeTab === 'blog' ? 'active' : ''}" onclick="executeCommand('blog')">[5] ./blog.sh</button>
              <button class="nav-btn ${activeTab === 'pong' ? 'active' : ''}" onclick="executeCommand('pong')"> ./pong</button>
              <a href="https://drive.google.com/file/d/1SN8j2Wv2xjbDoKIKB6G1UCGTWh0i1h7a/view?usp=drive_link" download class="nav-btn hr-download">📄 [GET_CV.PDF]</a>
            </nav>

            <div id="tab-content" style="margin-top: 8px;">
              ${activeContent || sections['about']}
            </div>
          </div>`
          ;

}

async function loadNeofetchView(activeTab = 'about') {
      if (isBooting) return;
      stopPong();

      let activeContent = sections[activeTab];
      if (activeTab === 'blog') {
        activeContent = renderBlogList();
      }

      output.innerHTML = `
        <div class="neofetch-layout">
          <div class="logo-container">
          <pre id="smallest"
            style="
                font-size: 5px;
                line-height: 1.12;
                margin-top: 20px;
            "></pre>
          </div>

          <div id="fetch-info" class="fetch-info">
          </div>
      `;

    printLogo();
    printAbout(activeTab, activeContent);
    }