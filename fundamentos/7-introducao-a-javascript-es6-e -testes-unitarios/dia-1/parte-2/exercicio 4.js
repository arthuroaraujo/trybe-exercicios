const substitua = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index +=1) {
        if (fraseArray[index] === 'x') {
            fraseArray[index] = nome;
        }
    }
    return fraseArray.join(' ');
};

console.log(substitua('Bebeto'));

const minhasSkills = (func) => {
    const skills = ['CSS', 'HTML', 'JavaScript'];
    let resultado = `
    ${func}

    Minhas três principais habilidades são:`;

    skills.forEach((skill) => { 
        resultado = `${resultado}
        - ${skill}`;
      });
      return resultado;
    };

console.log(minhasSkills(substitua('Bebeto')));