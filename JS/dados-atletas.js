class Atleta {
    constructor(nome, idade, peso, altura, nota) {
        this.nome = nome,
        this.idade = idade,
        this.peso = peso,
        this.altura = altura,
        this.nota = nota
    }

    calculaCategoria() {
        if(this.idade >= 9 && this.idade <= 11) {
            return "Infantil"
        } else if (this.idade > 11) {
            return "Adulto"
        }
    }

    calculaIMC() {

    }

    calculaMediaValida() {

    }

    obtemNomeAtleta() {

    }

    obtemIdadeAtleta() {

    }

    obtemPesoAtleta() {

    }

    obtemNotasAtleta() {

    }

    obtemCategoria() {

    }

    obtemIMC() {

    }

    obtemMediaValida() {

    }
}

const AtletaAndre = new Atleta("André", 10, 65, 1.50, [10, 9, 8, 5, 7])
console.log("Categoria do Atleta:", AtletaAndre.calculaCategoria());