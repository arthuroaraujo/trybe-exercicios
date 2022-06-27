function maiorIndice (numbers){
    let maior = 0
    for(let number of numbers){
        if(numbers[number] > maior){
            numbers[number] = maior;
        }
    }
}

console.log(maiorIndice([2, 3, 6, 7, 10, 1]));