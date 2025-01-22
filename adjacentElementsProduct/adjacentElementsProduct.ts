export function adjacentElementsProduct(inputArray: number[]): number {
    let largest = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        const a = inputArray[i];
        const b = inputArray[i+1];
        const sum = a * b;
        largest = sum > largest ? sum : largest;
    }
    return largest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));