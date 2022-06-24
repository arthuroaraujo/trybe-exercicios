// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração  que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

let jogador1 = 'papel'; 
let jogador2 = 'tesoura'; 

if(jogador1 === jogador2){
    console.log('Empate');
}else if(jogador1 === 'pedra' && jogador2 === 'tesoura'){
    console.log('Jogador 1 vence');
}else if(jogador1 === 'papel' && jogador2 === 'pedra'){
    console.log('Jogador 1 vence');
}else if(jogador1 === 'tesoura' && jogador2 === 'papel'){
    console.log('Jogador 1 vence');
}else {
    console.log('Jogador 2 vence');
}