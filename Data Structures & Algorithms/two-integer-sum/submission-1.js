class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsHash = {};

        for (let i = 0; i < nums.length; i++) {
            const delta = target - nums[i];
            if(!numsHash.hasOwnProperty(delta)) {
                numsHash[nums[i]] = i
            } else {
                return [numsHash[delta], i]
            }
        }
    }
}
