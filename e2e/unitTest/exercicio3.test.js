const {funcaoSoma} = require('../integration/exercicio3')

describe('Validar', () => {
    it('total', () => {
        expect(funcaoSoma(5,7)).toBe(156361)
        expect(funcaoSoma(3,5)).toEqual(233168)
    })
    it('valor diferente', () => {
        expect(funcaoSoma(3,5)).not.toBe(500)
    });
})