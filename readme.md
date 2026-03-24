# 🏃‍♂️ Sistema de Gestão de Atletas

Este projeto utiliza **Programação Orientada a Objetos** em JavaScript para gerenciar dados de atletas, calcular categorias por idade, IMC e médias de desempenho descartando notas extremas.

## 🚀 Funcionalidades

1. **Cálculo de Categoria:** Identifica automaticamente a categoria do atleta (Infantil, Juvenil, Intermediário ou Adulto) com base na idade.
2. **Cálculo de IMC:** Realiza o cálculo do Índice de Massa Corporal utilizando peso e altura.
3. **Média de Notas Válida:** Implementa uma lógica competitiva que ordena as notas e descarta a maior e a menor antes de calcular a média.
4. **Encapsulamento de Dados:** Utiliza métodos "getters" (obtem...) para acessar as propriedades do objeto de forma organizada.
5. **Relatório Automático:** Exibe no console um resumo completo de todos os dados processados do atleta.

## 📊 Tabela de Categorias

| Idade | Categoria |
| :--- | :--- |
| 9 a 11 anos | Infantil |
| 12 a 13 anos | Juvenil |
| 14 a 15 anos | Intermediário |
| 16 a 30 anos | Adulto |
| Outras idades | Sem categoria |

## 🛠️ Tecnologias e Conceitos

* **JavaScript ES6+**
* **Classes e Objetos:** Estrutura principal do código.
* **Lógica de Array:** Uso de `sort()`, `slice()` e `forEach()`.
* **Template Strings:** Para exibição de dados formatados no console.

## 💻 Como Usar

1. Clone este repositório ou copie o código da classe.
2. Instancie um novo atleta passando os parâmetros:
   ```javascript
   const meuAtleta = new Atleta("Nome", idade, peso, altura, [notas]);

3.   Execute o arquivo usando o Node.js: