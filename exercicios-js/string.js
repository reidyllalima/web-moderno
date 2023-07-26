const escola = "Cod3r"

console.log(escola.charAt(4)) // mostra a quarta letra do array/palavra
console.log(escola.charAt(5)) // não existe, então não mostra erro, mas consta como vazio

console.log(escola.charCodeAt(3)) // índice 3, mas pega o valor da tabela ASCII
console.log(escola.indexOf('3')) // saber em que índice o dígito está 

console.log(escola.substring(1)) // mostra a palavra a partir do indice indicado
console.log(escola.substring(0,3)) // vai do índice 0 até o 3 sem incluir o índice 3

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) // substitui onde tem o primeiro 3 pela letra e

console.log('Ana,Maria,Pedro'.split(',')) //Monta um array separado por vírgula
