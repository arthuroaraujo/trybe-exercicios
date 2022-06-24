// 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
// Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.

let divisiveis = 0; 

for(let index = 15; index <= 155; index += 1){
    if (index % 3 === 0) {
        divisiveis += 1;
    }
}

if (divisiveis >= 50){
    console.log('mensagem secreta');
}else{
    console.log(divisiveis)
}