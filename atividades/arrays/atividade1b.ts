export function quadradosComForEach(array: number[]): number[] {
    const resultado: number[] = [];
    array.forEach((num) => resultado.push(num ** 2));
    return resultado;
}

