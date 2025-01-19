import { filtrarPares } from '../../atividades/arrays/atividade5';

describe('Testando função filtrarPares', () => {
  test('Deve filtrar apenas os números pares do array', () => {
    const arrayNumerosFiltrar = [8, 3, 9, 5, 6, 12];
    const resultado = filtrarPares(arrayNumerosFiltrar);
    expect(resultado).toEqual([8, 6, 12]);
  });
});
