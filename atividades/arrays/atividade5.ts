export function filtrarPares(array: number[]): number[] {
    return array.filter((num) => num % 2 === 0);
}

//resultados
const arrayNumerosFiltrar = [8, 3, 9, 5, 6, 12];
const numerosPares = filtrarPares(arrayNumerosFiltrar);
console.log("Números pares:", numerosPares);

