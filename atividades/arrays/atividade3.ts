export function ordenarArray(array: string[]): string[] {
    return array.sort();
}

//resultados
const arrayObjetos = ["carro", "boneco", "ave", "lapis"];
const objetosOrdenados = ordenarArray(arrayObjetos);
console.log("Array ordenado:", objetosOrdenados);

