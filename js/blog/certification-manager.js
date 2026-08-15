class CertificationManager
{
    constructor()
    {
        this.records = [];
        this.currentPage = 0;
        this.recordPerPage = 4;
    }

    initialize(data)
    {
        this.records = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    getPageCount()
    {
        return Math.ceil(
            this.records.length / this.recordPerPage
        );
    }

    render()
    {
        const start =
            this.currentPage * this.recordPerPage;

        const visibleRecords =
            this.records.slice(
                start,
                start + this.recordPerPage
            );

        let html = `
        <div class="prompt-line">
            chars@portfolio:~ $
            <span class="cmd-highlight">
                ls ./certifications/
            </span>
        </div>
        `;

        html += `<div class="cert-grid" id="certGrid">`;
        visibleRecords.forEach(record => {
            html += `
            <div class="cert-card" id=${record.id}>
                <div class="cert-issuer">${record.issuer}</div>
                <div class="cert-name">${record.name}</div>
                <div class="cert-year">${record.year}</div>
                <button class="btn-open-project-retro" style="align-self: center;" onclick="openCertModal('${record.target}')">
                    [ VIEW CERTIFICATE ]
                </button>
            </div>
            `;
        });
        html += `</div>`;


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

            onclick="certificationManager.previousPage()"

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

            onclick="certificationManager.nextPage()"

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
        const record = this.records.find(x=>x.id==id);

        if(!record)
            return;

        openCertModal(
            record
        );
    }
}

const certificationManager = new CertificationManager();