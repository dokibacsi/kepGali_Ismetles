import { VERSENYZOK } from "./list.js";

class kepLista{
    #list = [];
    #id;

    constructor(){
        this.#list = VERSENYZOK
        this.#id = 0;
    }

    getList(){
        return this.#list;
    }

    getAktKep(){
        return this.#list[this.#id];
    }

    right(){
        this.#id++;
        if(this.#id >= this.#lista.length){
            this.#id = 0;
        }
    }

    left(){
        this.#id--;
        if(this.#id < 0){
            this.#id = this.#lista.length - 1;
        }
    }
}

export default kepLista;