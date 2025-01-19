import { concatenarStrings } from '../../atividades/arrays/atividade2';

describe('Testando função concatenarStrings', () => {
  test('Deve concatenar as strings de um array com espaço', () => {
    const arrayStrings = ["Arrays", "com", "TypeScript", "são", "divertidos!"];
    const frase = concatenarStrings(arrayStrings);
    expect(frase).toBe("Arrays com TypeScript são divertidos!");
  });
});
