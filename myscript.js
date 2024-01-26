function sum(nums, target) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndices.hasOwnProperty(complement)) {
            return [numIndices[complement], i];
        }

        numIndices[nums[i]] = i;
    }
}

const nums = [2, 9, 11, 15];
const target = 20;
const result = sum(nums, target);
console.log(result);

