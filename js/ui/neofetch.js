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
      html += `<p style="color: var(--text-dim); font-size: 11px; margin-top: 10px;">> Click on an article or type 'post [id]' to open it in a new window (e.g., 'post 1').</p>`;
      return html;
}

function renderCertificationsList() {
  certificationManager.initialize(certifications);
  certificationManager.render();
  
      // let html = `<div class="prompt-line">chars@portfolio:~ $ cat ./certifications.txt</span></div>`;
      // html += `<div class="cert-grid" id="certGrid">`;
      // certifications.forEach(cert => {
      //   html += `
      //     <div class="cert-card" id=${cert.id}>
      //        <div class="cert-issuer">${cert.issuer}</div>
      //         <div class="cert-name">${cert.name}</div>
      //         <div class="cert-year">${cert.year}</div>
      //         <button class="btn-open-project-retro" style="align-self: center;" onclick="openCertModal('${cert.target}')">
      //           [ VIEW CERTIFICATE ]
      //         </button>
      //     </div>
      //   `;
      // });
      // html += `</div>`;
      // return html;
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
        pre.textContent = "\n".repeat(totalLines - 1);

        for (let i = 0; i < totalLines; i++) {
            const printedLines = logoSplit.slice(0, i + 1).join("\n");
            const remainingPadding = "\n".repeat(totalLines - 1 - i);

            pre.textContent = printedLines + remainingPadding;
            
            playRetroBeep(750, 0.1, 'square');
            await new Promise(resolve => setTimeout(resolve, 90));
        }
        
        logoPrinted = true;
    } else {
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
              <button class="nav-btn ${activeTab === 'certifications' ? 'active' : ''}" onclick="executeCommand('certifications')">[4] ./certifications.sh</button>
              <button class="nav-btn ${activeTab === 'contact' ? 'active' : ''}" onclick="executeCommand('contact')">[5] ./contact.sh</button>
              <button class="nav-btn ${activeTab === 'pong' ? 'active' : ''}" onclick="executeCommand('pong')"> ./pong</button>
              <a href="https://drive.google.com/file/d/1SN8j2Wv2xjbDoKIKB6G1UCGTWh0i1h7a/view?usp=drive_link" target="_blank" class="nav-btn hr-download">[GET_CV.PDF]</a>
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
      // if (activeTab === 'blog') {
      //   activeContent = renderBlogList();
      // }

      output.innerHTML = `
        <div class="neofetch-layout">
          <div class="logo-container">
          <pre id="smallest"
            style="
                font-size: 5px;
                line-height: 1.12;
                margin-top: 56px;
            "></pre>
          </div>

          <div id="fetch-info" class="fetch-info">
          </div>
      `;

    printLogo();
    printAbout(activeTab, activeContent);
    
      if (activeTab === 'certifications') {
        activeContent = renderCertificationsList();
      }

    }