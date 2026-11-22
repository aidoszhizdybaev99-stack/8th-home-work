const nums: number[] = [10, 9, 1, 2, 100];
nums.sort();
console.log(nums); // [ 1, 10, 100, 2, 9 ]
nums.sort((a, b) => b - a);
console.log(nums);