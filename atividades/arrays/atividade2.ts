export function concatenarStrings(array: string[]): string {
    return array.join(" ");
}

//resultados
const arrayStrings = ["Arrays", "com", "TypeScript","são", "divertidos!"];
const frase = concatenarStrings(arrayStrings);
console.log("String concatenada:", frase);

