export default function destructuring(character) {
  const arr = [];
  character.special.forEach((item) => {
    const { id, icon, description = 'Описание недоступно' } = item;
    arr.push({ id, icon, description });
  });
  return arr;
}