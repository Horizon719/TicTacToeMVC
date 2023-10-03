import Model from "../Model/Model.js"
import ElemView from "../View/elemView.js"

class Controller{
    constructor(){
        const MODEL = new Model();
        const ELEM = new ElemView($(".negyzet"));

        $(window).on("kivalasztas", function(event){
            MODEL.setAllapot();
            ELEM.setErtek(MODEL.getAllapot());
            
        })
        
    }
} export default Controller
