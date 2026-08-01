  function executeCommand(cmd) {
      const cleanCmd = cmd.trim().toLowerCase();

    if(cleanCmd.startsWith("post "))
    {
        blog.open(
            parseInt(
                cleanCmd.split(" ")[1]
            )
        );

        return;
    }
      switch (cleanCmd) {
        case '1':
        case 'about':
        case './about.sh':
        case 'cat about.txt':
          loadNeofetchView('about');
          break;

        case '2':
        case 'projects':
        case './projects.sh':
        case 'ls projects':
          loadNeofetchView('projects');
          break;

        case '3':
        case 'skills':
        case './skills.sh':
        case 'cat skills':
          loadNeofetchView('skills');
          break;

        case '4':
        case 'contact':
        case './contact.sh':
          loadNeofetchView('contact');
          break;

        case '5':
        case 'blog':
        case './blog.sh':
        case 'cat blog':
        case 'ls blog':
            blog.render();
          break;

        case 'pong':
        case './pong':
        case 'play':
          startPong();
          break;

        case 'cv':
        case 'get_cv':
        case 'download':
          const link = document.createElement('a');
          link.href = 'tu-cv.pdf';
          link.download = 'tu-cv.pdf';
          link.click();
          break;

        case 'help':
          loadNeofetchView('help');
          break;

        case 'clear':
        case 'cls':
        case 'exit':
          loadNeofetchView('about');
          break;

        case 'shutdown':
        case 'poweroff':
          closeTerminal(null);
          break;

        default:
          stopPong();
          const contentContainer = output.querySelector('#tab-content');
          if (contentContainer) {
            contentContainer.innerHTML = `
              <div class="prompt-line">chars@portfolio:~ $ <span class="cmd-highlight">${cleanCmd}</span></div>
              <p style="color: #ff5555;">zsh: command not found: ${cleanCmd}</p>
              <p style="color: var(--text-dim); font-size: 11px;">Escribe 'help' para ver comandos válidos o presiona un botón arriba.</p>
            `;
          }
          break;
      }
    }