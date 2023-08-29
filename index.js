// this is a js file
// Gabriel Barros
/*A)1)
const bool1 = true
const bool2 = false
const bool3 = !bool2
** bool1 true, bool2 false, bool3 true

let resultado = bool1 && bool2
console.log("a. ", resultado)

**Será impresso "a. true, false"

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

**Será impresso "b. true, false, true"

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)

**Será impresso "c. false, true"

console.log("d. ", typeof resultado)

**Será impresso "d. string"

**2)

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero
console.log(soma)
**corrigindo 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
const soma = (primeiroNumero + segundoNumero);
console.log(primeiroNumero + segundoNumero)

**Irá ser impresso a soma no console apos obter os valores
**3)
para que a soma ocorra da forma correta, certifique-se que os valores constam como numero, use a função Number() para transformar uma string em numero 

B)1)
*/
let minhaIdade = Number(prompt("Qual a sua idade"))
let idadeAmigo = Number(prompt("Qual a idade do seu/sua melhor amigo/a (caso tenha um)?"))
console.log("Sua idade é maior do que a do seu melhor amigo?", minhaIdade > idadeAmigo);
let diferença = minhaIdade - idadeAmigo
console.log("temos a diferença de",diferença);
//***2)
let valorPar = Number(prompt("insira um número par, por favor"));
console.log("Resultado da divisão",(valorPar / 2),"e o resto da divisão é", (valorPar % 2 ));
//Todo numero par dividido por dois, o resto da dividão é 0
//Caso seja inserido um valor ímpar o resto da divisão é maior que 0

//*3)

let idadeAnos = Number(prompt("Qual a sua idade em ANOS?"));
let idadadeMeses = idadeAnos * 12
let idadeDias = idadeAnos *  365.25
let idadeHoras = idadeAnos * 8760

console.log("A idade em anos é", idadeAnos, "já sua idade em meses é", idadadeMeses, "em dias é", idadeDias, "e em horas é", idadeHoras);

//4)
let numeroUm = Number(prompt("Digite um número"));
let numeroDois = Number(prompt("mais um número, por favor")); 

let umMqdois = numeroUm > numeroDois 
let umIdois = numeroUm === numeroDois
let umDivisiveldois = numeroUm % numeroDois === 0
let doisDivisivelum = numeroDois % numeroUm === 0 

console.log("O primeiro numero é maior que segundo?", umMqdois);
console.log("O primeiro numero é igual ao segundo?", umIdois);
console.log("O primeiro numero é divisível pelo segundo?", umDivisiveldois);
console.log("O segundo numero é divisível pelo primeiro?", doisDivisivelum); 
