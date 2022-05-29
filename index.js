var matriz = [[1,3,3,4],
              [5,6,7,8],
              [9,10,11,12],
              [13,14,15,16]]
var soma = 0
var somacoluna = 0
var produto = 0
var produtolinha = 0
 for(var i = 0; i < matriz.length; i++) {
    for(var j = 0; j < matriz.length; j++) {
      
    soma += matriz[i][j];
      
    somacoluna = matriz[0][0] + matriz[1][0] + matriz[2][0] + matriz[3][0]
      
    produtolinha = matriz[0][0] * matriz[0][1] * matriz[0][2] * matriz[0][3]
      
    produto = matriz[0][0] * matriz[1][1] * matriz[2][2] * matriz[3][3]
      
    }
 }

console.log('1- A soma dos elementos de primeira coluna:',somacoluna)

console.log('2- O produto dos elementos da primeira linha:',produtolinha)

console.log('3- A soma de todos os elementos:',soma)

console.log('4- O produto da diagonal principal:',produto)
