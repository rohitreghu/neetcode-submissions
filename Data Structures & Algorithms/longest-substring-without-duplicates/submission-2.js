class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        const freqHash = {};
        let length = 0;

        while (r < s.length) {
            if (freqHash.hasOwnProperty(s[r])) {
                while (freqHash.hasOwnProperty(s[r])) {
                    delete freqHash[s[l]];
                    l++;
                }
            }
            freqHash[s[r]] = 1;
            length = Math.max(length, r - l + 1);
            r++;
        }
        return length;
    }
}
