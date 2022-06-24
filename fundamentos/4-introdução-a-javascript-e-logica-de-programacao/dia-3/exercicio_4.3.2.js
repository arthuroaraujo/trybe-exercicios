let word = 'tryber';
let wordBackwards = '';

for(let index = word.length -1; index >= 0; index -= 1){
    wordBackwards += word[index]
}

console.log(wordBackwards)