var matriz = [[1,2,3,4],
              [5,6,7,8],
              [9,10,11,12],
              [13,14,15,16]]
var soma = 0
var somacoluna = 0
var produto = 1
var produtolinha = 1
 for(var i = 0; i < matriz.length; i++) {
    for(var j = 0; j < matriz.length; j++) {   
    soma += matriz[i][j];      
    }
 }
for(var i = 0; i < matriz.length; i++) {
   somacoluna += matriz[i][0]
}
for(var j = 0; j < matriz.length; j++) {
   produtolinha *= matriz[0][j]
}
for(var i = 0; i < matriz.length; i++) {
   produto *= matriz[i][i]
}

console.log('1- A soma dos elementos de primeira coluna:',somacoluna)

console.log('2- O produto dos elementos da primeira linha:',produtolinha)

console.log('3- A soma de todos os elementos:',soma)

console.log('4- O produto da diagonal principal:',produto)