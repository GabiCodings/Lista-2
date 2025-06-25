const prompt = require("prompt-sync")();

function ehDataValida(dia, mes, ano) {
  const data = new Date(ano, mes - 1, dia);
  return (
    data.getFullYear() === ano &&
    data.getMonth() === mes - 1 &&
    data.getDate() === dia
  );
}

const dia = Number(prompt("Dia: "));
const mes = Number(prompt("Mês: "));
const anos = Number(prompt("Ano "));

if (ehDataValida(dia, mes, anos)) {
  console.log(`${dia}/${mes}/${anos} é uma data VALIDA`);
} else {
  console.log(`${dia}/${mes}/${anos} é uma data INVALIDA`);
}
