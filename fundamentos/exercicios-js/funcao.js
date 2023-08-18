// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(2,3)

imprimirSoma(2) // NaN - not a number


// Função com retorno 
function soma(a,b = 0) {
    return a+b
}

console.log(soma(2,3))

// Armazenando uma função em uma variável
const imprimirSoma2 = function(a,b) {
    console.log(a+b)
}

imprimirSoma2(2, 3)

// Armazenando uma função arrow em uma variável 
const soma2 = (a,b) => {
    return a+b
}
console.log(soma2(2,3))

// Retorno implícito
const subtracao = (a,b) => a-b
console.log(subtracao(3,2))