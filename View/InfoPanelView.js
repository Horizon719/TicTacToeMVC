class InfoPanelView{

    constructor(szuloElem, next, end){
        this.szuloElem = szuloElem;
        this.#htmlLetrehozasa();
        this.szoveg = $(".szoveg:last-child");
        this.pElem = this.szoveg.children("p");
    }

    #htmlLetrehozasa(){
        let txt =  `<div class="szoveg">
                    <h2>Infopanel</h2><br>
                    <p></p>
                    </div>`;
        this.szuloElem.append(txt);
    }

    setSzoveg(txt){
        this.pElem.html(txt);
    }
} export default InfoPanelView
