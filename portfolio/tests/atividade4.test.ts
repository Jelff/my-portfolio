import { pegarDoisPrimeiros } from '../../atividades/arrays/atividade4';

describe('Testando função pegarDoisPrimeiros', () => {
  test('Deve retornar os dois primeiros elementos do array', () => {
    const arrayNumerosSlice = [2, 4, 6, 2, 8, 9, 5];
    const resultado = pegarDoisPrimeiros(arrayNumerosSlice);
    expect(resultado).toEqual([2, 4]);
  });
});
