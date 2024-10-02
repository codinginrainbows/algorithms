function two_sum(nums, target) {
    for (let i = 0; i <= nums.length-1; i++) {
        for (let j = 1; j <= nums.length-1; j++) {
           if (nums[i] + nums[j] == target) {
                return [i,j]
           }
        }
    }

    return
};

let nums = [2,7,11,15]
let target = 9

/*
let nums = [3,2,4]
let target = 6

let nums = [3,3]
let target = 6
*/

console.log(two_sum(nums, target))
