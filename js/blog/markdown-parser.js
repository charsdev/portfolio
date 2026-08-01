function parseMarkdown(markdown) {
    let html = markdown;

    html = html.replace(
        /^### (.*$)/gim,
        `<h3 style="font-size: 15px; margin-bottom: 4px; color: #fff;">$1</h3>`
    );

    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    html = html.replace(
        /\[youtube\](.*?)\[\/youtube\]/gs,
        `
        <div class="video-container">
            <iframe src="$1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
            </iframe>
        </div>
        `
    );

    html = html.replace(
        /\*\*(.*?)\*\*/g,
        "<strong>$1</strong>"
    );

    const blocks = html
        .split(/\n\s*\n/) 
        .map(block => {
            const trimmed = block.trim();
            if (!trimmed) return "";

            if (
                trimmed.startsWith("<h") ||
                trimmed.startsWith("<div") ||
                trimmed.startsWith("<!--") ||
                trimmed.startsWith("<br")
            ) {
                return trimmed;
            }

            return `<p>${trimmed}</p>`;
        })
        .filter(Boolean)
        .join("\n\n");

    return blocks;
}