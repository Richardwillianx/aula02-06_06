"use strict";
// // Crie uma Classe que modele uma bola:
// //a. Atributos
// I. Cor
// II. Circuferência
// III. Mateial
Object.defineProperty(exports, "__esModule", { value: true });
// b. Métodos
// I. Trocar a cor
// II. Mostrar a cor
class Bola {
    constructor(corInc, circuferenciaInc, materialInc) {
        this.cor = corInc;
        this.circuferencia = circuferenciaInc;
        this.material = materialInc;
    }
    changeColor(newColor) {
        this.cor = newColor;
        console.log(`A nova cor da bola é:  ${this.cor}.`);
    }
    showColor() {
        return this.cor;
    }
}
const bola = new Bola("White", 50, "porcelain");
exports.default = Bola;
console.log("<---- Atividade 02 ----->");
bola.changeColor("Green");
bola.changeColor("Purple");
console.log("<---- Atividade 02 ----->");
