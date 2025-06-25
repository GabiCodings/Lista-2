const texto = "ola mundo ola";

const palavras = texto.split(" ");

let unicas = [];

for (let i = 0; i < palavras.length; i++) {
  let contador = 0;

  for (let j = 0; j < palavras.length; j++) {
    if (palavras[i] === palavras[j]) {
      contador++;
    }
  }

  if (contador === 1) {
    if (!unicas.includes(palavras[i])) {
      unicas.push(palavras[i]);
    }
  }
}
console.log(unicas);
