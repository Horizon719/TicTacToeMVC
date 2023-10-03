
class Model{
    #allapot;
    #allapotLista = [];
    #lepes;
    constructor(){
        this.#allapot = "";
        this.#allapotLista = [".",".",".",".",".",".",".",".","."]
        this.#lepes = 0;
    }

    setAllapot(index){
        this.#lepes++;
        if (this.#allapot === '' || this.#allapot === 'O') {
            this.#allapot = 'X';    
        } else if (this.#allapot === 'X') {
            this.#allapot = 'O';    
        }
        this.#allapotLista[index] = this.#allapot;
    }

    getAllapot(){
        return this.#allapot;
    }

    vegeVanE(){
        let eredmeny = this.#vizszintesEll();
        if (eredmeny.indexOf("XXX")>-1) {
            return "X nyert";
        }else if(eredmeny.indexOf("OOO")>-1){
            
        } else if (this.#lepes >= 9) {
            return "Döntetlen";
        }
        return "nincs vége";
    }

    #vizszintesEll(){
        let vText="";
        for (let i = 0; i < this.#allapotLista.length; i++) {
            vText += this.#allapotLista[i];
            if (i%3===2) {
                vText += "@";
            }
        }
        return vText;
    }
} export default Model
