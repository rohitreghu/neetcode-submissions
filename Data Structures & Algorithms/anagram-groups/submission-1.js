class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const stringFreqHashMap = {};

        for (const str of strs) {
            const freqArr = new Array(26).fill(0);

            for (const char of str) {
                freqArr[char.charCodeAt(0) - 97]++;
            }

            if (stringFreqHashMap.hasOwnProperty(freqArr.join(","))) {
                stringFreqHashMap[freqArr.join(",")].push(str);
            } else {
                stringFreqHashMap[freqArr.join(",")] = [str];
            }
        }

        return Object.values(stringFreqHashMap);
    }
}
