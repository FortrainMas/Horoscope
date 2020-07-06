const {signsDeclinator, signInterpreter} = require('../utils/generator.utils');

test('Function signsDeclinator is working', () => {
  [
    expect(signsDeclinator('pisces')).toBe('рыб'),
    expect(signsDeclinator('Дракон')).toBe(null),
    expect(signsDeclinator('carpicorn')).toBe('козерогов')
  ]
});

test('Function signInterpreter is working', ()=>{
  [
    expect(signInterpreter('Рыбы')).toBe('pisces'),
    expect(signInterpreter('Рыба')).toBe('pisces'),
    expect(signInterpreter('Рыб')).toBe(null),
    expect(signInterpreter('Весы')).toBe('libra'),
    expect(signInterpreter('Скорпион')).toBe('scorpio'),
    expect(signInterpreter('Стрелец')).toBe('sagittarius'),
    expect(signInterpreter('Козерог')).toBe('carpicorn'),
    expect(signInterpreter('Водолей')).toBe('aquarius'),
    expect(signInterpreter('водолей')).toBe('aquarius'),
    expect(signInterpreter('Дева')).toBe('virgo'),
    expect(signInterpreter('Лев')).toBe('leo'),
    expect(signInterpreter('близнецы')).toBe('gemini'),
  ]
})