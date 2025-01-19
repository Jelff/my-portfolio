import { arrayNumeros, quadradosComForEach } from '../../atividades/arrays/atividade1b';

describe('Testando a função quadradosComForEach', () => {
  test('Deve retornar os quadrados dos números no array usando forEach', () => {
    const resultado = quadradosComForEach(arrayNumeros);
    expect(resultado).toEqual([9, 25, 49, 9, 64, 81, 1]); 
  });
});
