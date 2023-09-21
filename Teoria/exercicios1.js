// Exercícios de fudamentos
// Exercícios 1: Olá, Mundo!
//Crie um script que imprima "Olá, Mundo!" no console

var minhaVariavel = "Olá, mundo!";
console.log(minhaVariavel);

// Exercício 2: Conversão de Tipos
// Dado o valor de uma string "1234", converta-o em um número e exiba o tipo da variável no console.
const num = "1234";
const numConvertido = Number(num);
console.log(typeof numConvertido);

//
// D: Curso Desafios de JavaScript
//

// Exercício 3: Manipulação de Strings
// Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase.
const frase = "JavaScript é incrível";
const numCaracteres = frase.length;
const numeDePalavras = frase.split(" ").length;

console.log(`O número de caracteres é: ${numCaracteres}`);
console.log(`O número de palavras é: ${numeDePalavras}`);

// Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.

const frutas = ["maça", "morango", "manga", "melão", "melancia"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); // maça, morango, manga, melão, melancia];
}

// Exercício 5: Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM"). Use o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.
function converterHorario(horario24) {
    const [hora, minuto] = horario24.split(":");
    let hora12 = hora % 12 || 12;
    const periodo = hora < 12 ? "AM" : "PM";
    return `${hora12}:${minuto} ${periodo}`;
  }
  
  console.log(converterHorario("14:30")); // "2:30 PM"
  console.log(converterHorario("00:00")); // "12:00 AM"
  console.log(converterHorario("12:00")); // "12:00 PM"