export function fatorial(n: number): number {
    if (n < 0) throw new Error('Número deve ser não-negativo');
    return n === 0 ? 1 : n * fatorial(n - 1);
  }
  