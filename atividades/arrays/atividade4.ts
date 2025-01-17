export function pegarDoisPrimeiros(array: number[]): number[] {
    return array.slice(0, 2);
}

//resultados
const arrayNumerosSlice = [2, 4, 6, 2, 8, 9, 5];
const doisPrimeiros = pegarDoisPrimeiros(arrayNumerosSlice);
console.log("Dois primeiros elementos:", doisPrimeiros);

