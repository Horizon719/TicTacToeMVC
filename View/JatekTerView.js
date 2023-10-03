import ElemView from "./elemView.js";

class JatekTerView{
    constructor(szuloElem){
        for (let i = 0; i < 9; i++) {
            new ElemView(szuloElem, i)
        }
    }

} export default JatekTerView
