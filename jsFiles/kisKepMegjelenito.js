class kisKepMegjelenito{
    #szuloElem;
    #list;
    constructor(szuloElem, list){
        this.#szuloElem = szuloElem;
        this.#list = list
        this.#kisKepKilistaz();
    }

    #kisKepKilistaz(){
        listaHossz = this.#list.length
        let txt = "";
        for (let index = 0; index < listaHossz; index++) {
            txt += `<div><img src=${this.#list[index]}></div>`;            
        }
        this.#szuloElem.append(txt);
    }
}

export default kisKepMegjelenito