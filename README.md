# Lista de Tarefas 2 - JavaScript

Este repositório contém a resolução da **Lista de Tarefas 2** da disciplina de Programação, com foco em **estruturas de controle, funções, arrays e objetos em JavaScript**.

## 📁 Organização

Cada exercício está numerado:

1. **Ex1.js**
2. **Ex2.js**
3. **Ex3.js**

---

## ✅ Como Executar Localmente

### 🔧 Pré-requisitos

- Ter o [Node.js](https://nodejs.org/) instalado na sua máquina.
- Um editor de código como o [Visual Studio Code](https://code.visualstudio.com/).

### 🚀 Passos para rodar

1. Clone este repositório:

```bash
git clone https://github.com/GabiCodings/Lista-2.git
```

2. Acesse a pasta do projeto:

```bash
cd Lista-2
```

3. Execute o arquivo com Node.js:

```bash
node Ex1.js
```

Caso esteja utilizando um navegador para testes, você também pode copiar os exercícios individualmente e colar no console do navegador (F12 → Aba Console).

---

## 📋 Lista de Exercícios

### 🔹 Seção 1: Estruturas de Controle Avançadas

1. **Validação de Datas**  
   Função `ehDataValida(dia, mes, ano)` que retorna `true` se a data for válida, considerando ano bissexto.

2. **Jogo de Adivinhação**  
   Número aleatório de 1 a 100, com tentativas contadas e dicas de "mais alto" ou "mais baixo".

3. **Palavras Únicas**  
   Dada uma string com palavras repetidas, retorna um array com palavras únicas usando estruturas de repetição.

---

### 🔹 Seção 2: Funções e Recursão

4. **Fatorial Recursivo**  
   Função `fatorial(n)` implementada recursivamente. Lança erro se `n < 0`.

5. **Debounce**  
   Função `debounce(fn, delay)` que evita chamadas consecutivas de `fn` em um intervalo curto.

6. **Memoization**  
   Função `memoize(fn)` que armazena resultados anteriores em cache para acelerar chamadas repetidas.

---

### 🔹 Seção 3: Arrays e Objetos Complexos

7. **Mapeamento e Ordenação**  
   Dado um array `produtos = [{ nome, preco }]`, retorna apenas os nomes ordenados por preço crescente usando `map` e `sort`.

8. **Agrupamento por Propriedade**  
   Usando `reduce`, transforma um array de vendas `[{ cliente, total }]` em um objeto com a soma total por cliente.

9. **Conversão Entre Formatos**
   - `paresParaObjeto(pares)`: transforma array de pares em objeto.
   - `objetoParaPares(obj)`: transforma objeto em array de pares `[ [chave, valor], ... ]`.

---

## 📝 Observações

- Os exercícios foram desenvolvidos com foco na prática de lógica, funções e manipulação de estruturas em JavaScript.
- Para questões interativas (como o jogo de adivinhação), utilize um terminal com Node.js ou o console do navegador.

---

## 👩‍💻 Autora

**Gabriela Schumacher**  
🔗 [LinkedIn](https://www.linkedin.com/in/gabriela-schumacher-neves/)

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.
