let a = 5
let b = 5

export function somar(a, b) {
    let resultado = a + b
    console.log(`${a} + ${b} = ${resultado}`);
    return resultado
}

export function subtrair(a, b) {
    let resultado = a - b
    console.log(`${a} - ${b} = ${resultado}`);
    return resultado
}

export function multiplicar(a, b) {
    let resultado = a * b
    console.log(`${a} × ${b} = ${resultado}`);
    return resultado
}

export function dividir(a, b) {
    if(b == 0) {
        throw new Error ("Divisor inválido")
    }

    let resultado = a / b
    console.log(`${a} ÷ ${b} = ${resultado}`);
    return resultado
}

somar(a, b)
subtrair(a, b)
multiplicar(a, b)
dividir(a, b)