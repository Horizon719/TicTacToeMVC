import Model from "../Model/Model.js"
import JatekTerView from "../View/JatekTerView.js";

class Controller{
    constructor(){
        const MODEL = new Model();
        new JatekTerView($(".negyzet"));

        $(window).on("kivalasztas", function(event){
            this.MODEL.setAllapot(event.detail.getIndex());
            event.detail.setErtek(MODEL.getAllapot());
            console.log(this.MODEL.vegeVanE());
        })
        
    }
} export default Controller
