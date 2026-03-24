class Atleta {
    constructor(nome, idade, peso, altura, nota) {
        this.nome = nome,
        this.idade = idade,
        this.peso = peso,
        this.altura = altura,
        this.nota = nota
    }

    calculaCategoria() {
        let categoria = "..."
        if(this.idade < 9 || this.idade > 30) {
            categoria = "Sem categoria"
            return categoria
        }
        else if(this.idade >= 9 && this.idade <= 11) {
            categoria = "Infantil"
            return categoria
        } 
        else if(this.idade >= 12 && this.idade <= 13) {
            categoria = "Juvenil"
            return categoria
        } 
        else if(this.idade >= 14 && this.idade <= 15) {
            categoria = "Intermediário"
            return categoria
        }
        else if(this.idade >= 16 && this.idade <= 30) {
            categoria = "Adulto"
            return categoria
        }
    }

    calculaIMC() {
        let imc = 0
        imc = this.peso / (this.altura * this.altura)
        return imc
    }

    calculaMediaValida() {
        this.nota.sort((a, b) => a - b);

        let notasComputadas = this.nota.slice(1, 4);
        let soma = 0;
        notasComputadas.forEach(function(nota) {
            soma += nota;
        });

        return soma / notasComputadas.length
    }

    obtemNomeAtleta() {
        return this.nome
    }

    obtemIdadeAtleta() {
        return this.idade
    }

    obtemPesoAtleta() {
        return this.peso
    }

    obtemNotasAtleta() {
        return this.nota
    }

    obtemCategoria() {
        return this.calculaCategoria()
    }

    obtemIMC() {
        return this.calculaIMC()
    }

    obtemMediaValida() {
        return this.calculaMediaValida()
    }
}
const atleta = new Atleta("Cesar Abascal",30, 80, 1.70,[10, 9.34, 8.42, 10, 7.88])
console.log("------- Dados do atleta -----------")
console.log("Nome:", atleta.obtemNomeAtleta())
console.log("Idade:", atleta.obtemIdadeAtleta())
console.log("Peso:", atleta.obtemPesoAtleta())
console.log("Altura:", atleta.altura)
console.log("Notas:", atleta.obtemNotasAtleta())
console.log("Categoria:", atleta.obtemCategoria())
console.log("IMC:", atleta.calculaIMC())
console.log("Media valida:", atleta.calculaMediaValida())
console.log("")

const atletaAndre = new Atleta("André", 28, 65, 1.50, [10, 9, 8, 5, 7])
console.log("------- Dados do atleta -----------")
console.log("Nome:", atletaAndre.obtemNomeAtleta())
console.log("Idade:", atletaAndre.obtemIdadeAtleta())
console.log("Peso:", atletaAndre.obtemPesoAtleta())
console.log("Altura:", atletaAndre.altura)
console.log("Notas:", atletaAndre.obtemNotasAtleta())
console.log("Categoria:", atletaAndre.obtemCategoria())
console.log("IMC:", atletaAndre.calculaIMC())
console.log("Media valida:", atletaAndre.calculaMediaValida())
console.log("\n")