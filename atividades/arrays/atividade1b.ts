const arrayNumeros = [3, 5, 7, 3, 8, 9, 1];

export function quadradosComForEach(array: number[]): number[] {
    const resultado: number[] = [];
    array.forEach((num) => resultado.push(num ** 2));
    return resultado;
}

//resultados
const quadradosForEach = quadradosComForEach(arrayNumeros);
console.log("Quadrados (usando forEach):", quadradosForEach);