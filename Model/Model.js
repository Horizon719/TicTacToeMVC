
class Model{
    #allapot;
    constructor(){
        this.#allapot = "X";
    }

    setAllapot(){
        if (this.#allapot === '' || this.#allapot === 'O') {
            this.#allapot = 'X';    
        } else if (this.#allapot === 'X') {
            this.#allapot = 'O';    
        }
    }

    getAllapot(){
        return this.#allapot;
    }
} export default Model
