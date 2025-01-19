export function quadradosFor(array: number[]): number[] {
    const resultado: number[] = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i] ** 2);
    }
    return resultado;
}