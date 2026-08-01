 const blogModal = document.getElementById("blog-modal-window");
    const blogModalHeader = document.getElementById("blog-modal-header");
    const blogModalContent = document.getElementById("blog-modal-content");
    const blogModalTitle = document.getElementById("blog-modal-title");

function openBlogModal(
    post,
    markdown
)
{
    blogModalTitle.textContent = `READER.exe - ./blog/${post.file}`;


    blogModalContent.innerHTML =

    `        
    
          <p style="color: var(--text-dim); font-size: 11px; margin-bottom: 12px;">Publicado: ${post.date}</p>

        <div class="info-card" style="padding: 12px;">
          <div style="font-size: 12px; line-height: 1.6; color: #ddd;">
            ${parseMarkdown(markdown)}
          </div>
        </div>


        <button class="nav-btn" onclick="closeBlogModal()" style="margin-top: 10px;">[X] Close</button>

    `;

      blogModal.style.display="flex";
      blogModal.style.top = "50%";
      blogModal.style.left = "50%";
      blogModal.style.transform = "translate(-50%, -50%)";
}

    function closeBlogModal() {
      playRetroBeep(400, 0.08, 'square');
      // Detener la reproducción del vídeo al cerrar la ventana modal
      const iframe = blogModalContent.querySelector('iframe');
      if (iframe) {
        iframe.src = iframe.src;
      }
      blogModal.style.display = "none";
    }

    /* DRAG & DROP PARA LA VENTANA MODAL */
    let isModalDragging = false;
    let modalOffsetX = 0;
    let modalOffsetY = 0;

    blogModalHeader.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains('btn-close')) return;
      isModalDragging = true;
      
      const rect = blogModal.getBoundingClientRect();
      modalOffsetX = e.clientX - rect.left;
      modalOffsetY = e.clientY - rect.top;

      blogModal.style.transform = "none"; 
      blogModal.style.left = `${rect.left}px`;
      blogModal.style.top = `${rect.top}px`;
    });

    document.addEventListener("mousemove", (e) => {
      if (!isModalDragging) return;
      blogModal.style.left = `${e.clientX - modalOffsetX}px`;
      blogModal.style.top = `${e.clientY - modalOffsetY}px`;
    });

    document.addEventListener("mouseup", () => {
      isModalDragging = false;
    });
