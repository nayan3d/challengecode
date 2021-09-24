// 1. Two Sum
// Easy  35%

// Given an array of integers, return indices of the two numbers such that they
// add up to a specific target.

// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const hash = {}
  for (let i = 0, n = nums.length; i < n; i++) {
    if (hash[nums[i]] != null) return [hash[nums[i]], i]
    hash[target - nums[i]] = i
  }
  return [-1, -1]
}


;[
  [[2, 7, 11, 15], 9]           // [0, 1]
].forEach(args => {
  console.log(twoSum(...args))
})


