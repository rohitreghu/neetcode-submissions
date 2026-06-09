class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }
        const s1Freq = new Array(26).fill(0);

        for (const char of s1) {
            s1Freq[char.charCodeAt(0) - 97]++;
        }
        const s1FreqStr = s1Freq.join(",");

        const s2WindowFreq = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s2WindowFreq[s2[i].charCodeAt(0) - 97]++;
        }
        if (s2WindowFreq.join(",") === s1FreqStr) {
            return true;
        }

        let l = 0;
        let r = s1.length;

        while (r < s2.length) {
            s2WindowFreq[s2[r].charCodeAt(0) - 97]++;
            s2WindowFreq[s2[l].charCodeAt(0) - 97]--;
            if (s2WindowFreq.join(",") === s1FreqStr) {
                return true;
            }
            r++;
            l++;
        }
        return false;
    }
}
