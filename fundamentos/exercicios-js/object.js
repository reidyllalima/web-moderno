const prod1 = {}
prod1.nome = 'Iphone 13'
prod1.preco = 4299.99
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço 

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        nome: 1,
        obj: {
            teste: 2
        }
    }
}

console.log(prod1)
console.log(prod2)
