class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hashMap = {};

        for (const char of s) {
            if(hashMap.hasOwnProperty(char)) {
                hashMap[char] ++;
            } else {
                hashMap[char] = 1
            }
        }

        for (const char of t) {
            if(hashMap.hasOwnProperty(char)) {
                if(hashMap[char] === 1) {
                    delete hashMap[char];
                } else {
                    hashMap[char] --;
                }
            } else {
                return false;
            }
        }

        if(Object.keys(hashMap).length) {
            return false;
        }

        return true
    }
}
