const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortfunction = (a, b) => (a - b);

oddsAndEvens.sort(sortfunction);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

//OU

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);