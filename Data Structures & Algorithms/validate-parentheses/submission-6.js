class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (const char of s) {
            if (["(", "{", "["].includes(char)) {
                stack.push(char)
            } else {
                if(stack.length === 0) {
                    return false;
                }
                const last = stack.pop();
                if (char === ")" && last !== "(" || char === "}" && last !== "{" || char === "]" && last !== "[" ) {
                    return false
                }
            }
        }
        if(stack.length) {
            return false
        }
        return true
    }
}
