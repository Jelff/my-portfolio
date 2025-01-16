import { fatorial } from '../src/fatorial';

describe('Fatorial Function', () => {

  test('Fatorial de 0 deve ser 1', () => {


    test('Fatorial de 0 deve ser 1', () => {

    expect(fatorial(0)).toBe(1);
  });

  test('Fatorial de 1 deve ser 1', () => {
    expect(fatorial(1)).toBe(1);
  });

  test('Fatorial de 5 deve ser 120', () => {
    expect(fatorial(5)).toBe(120);
  });

  test('Fatorial de 10 deve ser 3628800', () => {
    expect(fatorial(10)).toBe(3628800);
  });

  test('Fatorial de um número negativo deve lançar erro', () => {
    expect(() => fatorial(-1)).toThrow('Número deve ser não-negativo');
  });


  //Cenário: Valores grandes
  test('Fatorial de 20 deve ser 2432902008176640000', () => {
    expect(fatorial(20)).toBe(2432902008176640000);
  });

  test('Fatorial com entrada inválida deve lançar erro (undefined)', () => {
    expect(() => fatorial(undefined as unknown as number)).toThrowError();
  });

  test('Fatorial com entrada inválida deve lançar erro (null)', () => {
    expect(() => fatorial(null as unknown as number)).toThrowError();
  });
});
