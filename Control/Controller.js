import Model from "../Model/Model.js"
import InfoPanelView from "../View/InfoPanelView.js";
import JatekTerView from "../View/JatekTerView.js";

class Controller{
    constructor(){
        const MODEL = new Model();
        new JatekTerView($(".negyzet"));
        const INFO = new InfoPanelView($(".infopanel"));

        $(window).on("kivalasztas", function(event){
            MODEL.setAllapot(event.detail.getIndex());
            event.detail.setErtek(MODEL.getAllapot());
            if (MODEL.vegeVanE() == "nincsvége") {
                INFO.setSzoveg(MODEL.kovetkezoAllapot() + " következik")
            } else {
                INFO.setSzoveg(MODEL.vegeVanE());
            }
        })
        
    }
} export default Controller
