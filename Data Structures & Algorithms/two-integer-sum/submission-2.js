class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsHash = {};
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (numsHash.hasOwnProperty(diff)) {
                return [numsHash[diff], i]
            } else {
                numsHash[nums[i]] = i
            }
        }
    }
}
