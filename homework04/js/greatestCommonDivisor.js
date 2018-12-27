greatestCommonDivisor = (a, b) => {
    if ( ! b) {
        return a;
    }

    return greatestCommonDivisor(b, a % b);
};

document.getElementById('checkGCD').addEventListener('click', () => {
    let result = greatestCommonDivisor(document.getElementById('firstNumber').value, document.getElementById('secondNumber').value)
    document.getElementById('greatestCommonDivisor').innerHTML = `<b>Greatest common divisor: ${result}</b>`;
});