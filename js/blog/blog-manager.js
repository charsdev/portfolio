class BlogManager
{
    constructor()
    {
        this.posts = [];

        this.currentPage = 0;

        this.postsPerPage = 3;
    }

    async initialize()
    {
        const response = await fetch("./blog/index.json");

        const data = await response.json();
        this.posts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    getPageCount()
    {
        return Math.ceil(
            this.posts.length / this.postsPerPage
        );
    }

    render()
    {
        const start =
            this.currentPage * this.postsPerPage;

        const visiblePosts =
            this.posts.slice(
                start,
                start + this.postsPerPage
            );

        let html = `
        <div class="prompt-line">
            chars@portfolio:~ $
            <span class="cmd-highlight">
                ls ./blog/
            </span>
        </div>
        `;

        visiblePosts.forEach(post =>
        {
            html += `
                <div
                    class="info-card clickable"
                    onclick="blog.open(${post.id})">

                    <h4>
                        [POST ${post.id}]
                        ${post.title}
                    </h4>

                    <p>${post.date}</p>

                    <p>
                        ${post.summary}
                    </p>

                </div>
            `;
        });

        html += `

        <div
        style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-top:15px;
        ">

            <button
            class="nav-btn"

            onclick="blog.previousPage()"

            ${this.currentPage==0?"disabled":""}
            >

                ◀ Prev

            </button>

            <span style="padding: 10px; flex: none">

                Page
                ${this.currentPage+1}
                /
                ${this.getPageCount()}

            </span>

            <button
            class="nav-btn"

            onclick="blog.nextPage()"

            ${this.currentPage>=this.getPageCount()-1?"disabled":""}
            >

                Next ▶

            </button>

        </div>

        `;

        document
            .getElementById("tab-content")
            .innerHTML = html;
    }

    nextPage()
    {
        if(this.currentPage>=this.getPageCount()-1)
            return;

        this.currentPage++;

        this.render();
    }

    previousPage()
    {
        if(this.currentPage==0)
            return;

        this.currentPage--;

        this.render();
    }

    async open(id)
    {
        const post =
            this.posts.find(x=>x.id==id);

        if(!post)
            return;

        const response =
            await fetch("./blog/"+post.file);

        const markdown =
            await response.text();

        openBlogModal(
            post,
            markdown
        );
    }
}

const blog = new BlogManager();