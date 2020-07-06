const {signsDeclinator} = require('../utils/generator.utils');

test('Function signsDeclinator is working', () => {
  [
    expect(signsDeclinator('Рыбы')).toBe('рыб'),
    expect(signsDeclinator('Дракон')).toBe(null),
    expect(signsDeclinator('рыба')).toBe('рыб')
  ]
});