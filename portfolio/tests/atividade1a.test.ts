import { arrayNumeros, quadradosFor } from '../../atividades/arrays/atividade1a';

describe('Testando funções da atividade 1a', () => {
  test('Deve retornar os quadrados dos números no array', () => {
    const resultado = quadradosFor(arrayNumeros);
    expect(resultado).toEqual([9, 25, 49, 9, 64, 81, 1]);
  });
});
