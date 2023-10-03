class ElemView{
    constructor(szuloElem){
        this.szuloElem = szuloElem;
        this.#htmlLetrehozasa();
        this.elem = $(".elem:last-child")
        this.pElem = this.szuloElem.children("div").children("p");
        this.elem.on("click", ()=>{
            this.#esemenyLetrehozas("kivalasztas");
            console.log("ASD");
        })
        
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
        const esemenyem = new CustomEvent(esemenynev);
        window.dispatchEvent(esemenyem);
    }

} export default ElemView
