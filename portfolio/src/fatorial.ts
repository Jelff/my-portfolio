export function fatorial(n: number): number {
    if (typeof n !== 'number' || isNaN(n)) {
      throw new Error('Entrada inválida: o valor deve ser um número');
    }
    if (n < 0) {
      throw new Error('Número deve ser não-negativo');
    }
    return n === 0 ? 1 : n * fatorial(n - 1);
  }
  