class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const lowerCaseS = s.toLowerCase();
        let l = 0;
        let r = s.length - 1;
        console.log(lowerCaseS);

        while (l < r) {
            const lAscii = lowerCaseS.charCodeAt(l);
            const rAscii = lowerCaseS.charCodeAt(r);
            if (!(lAscii >= 48 && lAscii <= 57) && !(lAscii >= 97 && lAscii <= 122)) {
                l++;
                continue;
            }
            if (!(rAscii >= 48 && rAscii <= 57) && !(rAscii >= 97 && rAscii <= 122)) {
                r--;
                continue;
            }
            if(lowerCaseS[l] !== lowerCaseS[r]) {
                return false
            } else {
                l++;
                r--;
            }
        }
        return true;
    }
}
