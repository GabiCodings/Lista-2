const prompt = require("prompt-sync")();

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const chute = Number(prompt("Tentativa: "));

const diferenca = Math.abs(numeroAleatorio - chute);

while (true) {
  if (diferenca === 0) {
    console.log(`Numero Aleatorio: ${numeroAleatorio} e chute: ${chute}`);
    console.log("Acertou!");
  }
}
