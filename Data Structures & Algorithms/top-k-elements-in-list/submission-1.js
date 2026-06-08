class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsFreq = {};

        nums.forEach((num) => {
            if (numsFreq.hasOwnProperty(num)) {
                numsFreq[num]++;
            } else {
                numsFreq[num] = 1;
            }
        });

        const freqArr = new Array(nums.length).fill(null);

        Object.keys(numsFreq).forEach((num) => {
            if (freqArr[numsFreq[num]-1] !== null) {
                freqArr[numsFreq[num]-1].push(num);
            } else {
                freqArr[numsFreq[num]-1] = [num];
            }
        });
        const result = [];
        let i = nums.length - 1;

        while (result.length < k) {
            if (freqArr[i] !== null) {
                result.push(...freqArr[i]);
            }
            i--;
        }

        return result;
    }
}
