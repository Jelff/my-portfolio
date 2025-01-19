import { ordenarArray } from '../../atividades/arrays/atividade3';

describe('Testando função ordenarArray', () => {
  test('Deve ordenar um array de strings', () => {
    const arrayObjetos = ["carro", "boneco", "ave", "lapis"];
    const resultado = ordenarArray(arrayObjetos);
    expect(resultado).toEqual(["ave", "boneco", "carro", "lapis"]);
  });
});
