class nagyKepMegjelenito {
    #szuloElem
    #aktualisKep;
    constructor(aktualisKep, szuloElem) {
        this.#aktualisKep = aktualisKep;
        this.#szuloElem = szuloElem;
        this.#nagykepOsszeallit();
        this.#leftButton = $("#left")
        this.#rightButton = $("#right")
    }

    #nagykepOsszeallit() {
        let txt = "<div id='hatPanel'>"
        txt += "<button id='left'> <<< </button>"
        txt += `<div><img src=${this.#aktualisKep}></div>`
        txt += "<button id='right'> >>> </button>"
        txt += "</div>"

        this.#szuloElem.append(txt);
    }
}

export default nagyKepMegjelenito