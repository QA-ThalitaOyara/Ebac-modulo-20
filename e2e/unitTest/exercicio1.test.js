const {calcMdc} = require('../integration/exercicio1')

describe('Validar calculo MDC', () => {
    it('calcular o MDC entre dois numeros', () => {
        expect(calcMdc(252,105)).toBe(21)
        expect(calcMdc(100,50)).toBe(50)
        expect(calcMdc(15,10)).not.toBe(3)
    })
})