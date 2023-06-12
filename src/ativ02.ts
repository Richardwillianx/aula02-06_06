// // Crie uma Classe que modele uma bola:
// //a. Atributos
// I. Cor
// II. Circuferência
// III. Mateial

// b. Métodos
// I. Trocar a cor
// II. Mostrar a cor

class Bola {
  cor: string;
  circuferencia: number;
  material: string;

  constructor(corInc: string, circuferenciaInc: number, materialInc: string) {
    this.cor = corInc;
    this.circuferencia = circuferenciaInc;
    this.material = materialInc;
  }

  changeColor(newColor: string) {
    this.cor = newColor;
    console.log(`A nova cor da bola é:  ${this.cor}.`);
  }

  showColor() {
    return this.cor;
  }
}

const bola = new Bola("White", 50, "porcelain");

export default Bola;

console.log("<---- Atividade 02 ----->");

bola.changeColor("Green");
bola.changeColor("Purple");

console.log("<---- Atividade 02 ----->");
