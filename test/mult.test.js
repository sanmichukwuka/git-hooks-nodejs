const sum = require('../src/mult')

it('should return correct mult', () => {
    const result = sum(2,5)
    expect(result).toBe(10)

})