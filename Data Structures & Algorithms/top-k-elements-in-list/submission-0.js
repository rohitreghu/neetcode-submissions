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

        const freqMap = {};

        Object.keys(numsFreq).forEach((key) => {
            if (freqMap.hasOwnProperty(numsFreq[key])) {
                freqMap[numsFreq[key]].push(key);
            } else {
                freqMap[numsFreq[key]] = [key];
            }
        });

        const frequencies = Object.keys(freqMap);
        frequencies.sort((a, b) => b - a);

        const result = [];

        for (const freq of frequencies) {
            result.push(...freqMap[freq]);
            if (result.length === k) {
                return result;
            }
        }
    }
}
