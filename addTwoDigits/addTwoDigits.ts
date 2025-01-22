export function addTwoDigits(n: any): number {
    const nums = n.toString().split('');
    return nums.reduce((acc: number, num: string) => acc += parseInt(num), 0);
}

console.log(addTwoDigits(29));