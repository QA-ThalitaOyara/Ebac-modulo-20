const {array, primeiroValor, ultimoValor} = require('../integration/exercicio2')

describe('Validar valores de um array', () => {
    it('validar array', () => {
        expect([1,2,3,4,5,6,7,8,9]).toEqual(expect.arrayContaining(array))
    })
    it('validar primeiro valor', () => {
        expect(primeiroValor).toBe(1)
    })
    it('validar ultimo valor', () => {
        expect(ultimoValor).toBe(9) 
    })
})