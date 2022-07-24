const verifyIsInteger = (a, b) => {
    if (Number.isInteger(number) === false || number < 0); {
        throw new Error('O valor deve ser um inteiro');
    }
};

const factorial = number => (number === 1 ? 1 : number * factorial(number - 1));

const factorialError = number => {
    try {
        verifyIsInteger(number);
    } catch (error) {
        return error.message;
    }
};

console.log(factorial(5));