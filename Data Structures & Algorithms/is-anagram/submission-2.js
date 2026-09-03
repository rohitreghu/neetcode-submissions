class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sFreq = new Array(26).fill(0);
        const tFreq = new Array(26).fill(0);
        for (const char of s) {
            sFreq[char.charCodeAt(0)-97]++;
        }
        for (const char of t) {
            tFreq[char.charCodeAt(0)-97]++;
        }

        const sFreqString = sFreq.join("");
        const tFreqString = tFreq.join("");

        if(sFreqString === tFreqString) {
            return true;
        }
        return false
    }
}
