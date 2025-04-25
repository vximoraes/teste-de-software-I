import { describe, expect, test } from '@jest/globals'
import { somar, subtrair, dividir, multiplicar } from '../index'

// Cenário de teste
describe("Deve retornar asserções com valores inteiros positivos", () => {
    test ('Deve retornar a soma de 1 + 1 igual a 2', () => {
        const valorEsperado = 2
        const valorRetornado = (somar(1, 1)) 
        expect(valorRetornado).toBe(valorEsperado)
    })
})

// Cenário de teste
describe("Deve retornar asserções com valores inteiros negativos", () => {
    test ('Deve retornar a soma de 1 + -10 igual a -9', () => {
        const valorEsperado = -9
        const valorRetornado = (somar(1, -10)) 
        expect(valorRetornado).toBe(valorEsperado)
    })
})