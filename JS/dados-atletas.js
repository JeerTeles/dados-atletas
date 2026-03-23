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

const atletaAndre = new Atleta("André", 28, 65, 1.50, [10, 9, 8, 5, 7])
console.log("------- Dados do atleta -----------")
console.log("Nome do atleta:", atletaAndre.obtemNomeAtleta())
console.log("Categoria do Atleta:", atletaAndre.calculaCategoria())
console.log("IMC do atleta:", atletaAndre.calculaIMC())
console.log("Media do atleta:", atletaAndre.calculaMediaValida())