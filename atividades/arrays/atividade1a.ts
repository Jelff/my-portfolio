export const arrayNumeros = [3, 5, 7, 3, 8, 9, 1];

export function quadradosFor(array: number[]): number[] {
    const resultado: number[] = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i] ** 2);
    }
    return resultado;
}
