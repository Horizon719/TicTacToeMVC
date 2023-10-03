class ElemView{
    #index;
    #allapot
    constructor(szuloElem, index){
        this.szuloElem = szuloElem;
        this.#index = index;
        this.#allapot = true;
        this.#htmlLetrehozasa();
        this.elem = $(".elem:last-child")
        this.pElem = this.elem.children("p");
        this.elem.on("click", ()=>{
            if (this.#allapot) {
                this.#esemenyLetrehozas("kivalasztas");
                this.#allapot = false;
            }
        })
        
    }

    getIndex(){
        return this.#index;
    }

    #htmlLetrehozasa(){
        let txt =  `<div class="elem">
                        <p></p>
                    </div>`;
        this.szuloElem.append(txt);
    }

    setErtek(jel){
        this.pElem.html(jel);
    }

    #esemenyLetrehozas(esemenynev){
        const esemenyem = new CustomEvent(esemenynev, {detail: this});
        window.dispatchEvent(esemenyem);
    }

} export default ElemView
