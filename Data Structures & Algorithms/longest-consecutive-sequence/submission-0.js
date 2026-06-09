class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set();

        nums.forEach((num) => {
            if(!numSet.has(num)) {
                numSet.add(num)
            }
        });

        let longest = 0;

        for (const num of nums) {
            if(!numSet.has(num-1)) {
                let count = 0
                let tempNum = num;
                while (numSet.has(tempNum)) {
                    count++;
                    tempNum++;
                };

                longest = Math.max(longest, count);
                if(longest > nums.length/2) {
                    break;
                }
            }
        }

        return longest;
    }
}
