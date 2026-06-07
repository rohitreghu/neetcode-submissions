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
            console.log("0", lAscii, rAscii)
            if (!(lAscii >= 48 && lAscii <= 57) && !(lAscii >= 97 && lAscii <= 122)) {
                console.log("1", l, r)
                l++;
                continue;
            }
            if (!(rAscii >= 48 && rAscii <= 57) && !(rAscii >= 97 && rAscii <= 122)) {
                console.log("2", l, r)
                r--;
                continue;
            }
            if(lowerCaseS[l] !== lowerCaseS[r]) {
                console.log("3", l, r)
                return false
            } else {
                console.log("4", l, r)
                l++;
                r--;
            }
        }
        return true;
    }
}
