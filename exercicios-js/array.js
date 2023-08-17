const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)

// como o array tem um número de posição menor que a posição indicada, no resultado apresentará a quantidade de números vazios para chegar na posição informada.
//valores[10] = 10
//console.log(valores)


// tamanho do array
console.log(valores.length)

// colocar valores dentro do array 
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// tirar o último valor do array e retornar a tela
console.log(valores.pop())

// outra forma de excluir: 
delete valores[0]
console.log(valores)

// mostra o tipo do array
console.log(typeof valores)

