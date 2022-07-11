import destructuring from '../app';


test('check function', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }

  const received = destructuring(character);
  const expected = [
    {id: 8, icon: 'http://...', description: 'Двойной выстрел наносит двойной урон'},
    {id: 9, icon: 'http://...', description: 'Описание недоступно'}
  ];
  expect(received).toEqual(expected);
});