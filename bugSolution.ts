function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2.filter(item => typeof item === 'number'));
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, '6'];

const combined = combine(arr1, arr2); // Now correctly concatenates only numbers.