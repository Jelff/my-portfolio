import { fatorial } from '../src/fatorial';

test('Fatorial de 0 deve ser 1', () => {
  expect(fatorial(0)).toBe(1);
});

test('Fatorial de 5 deve ser 120', () => {
  expect(fatorial(5)).toBe(120);
});
