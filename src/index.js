module.exports = function check(str, bracketsConfig) {
    if (str.length % 2) return false;
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (stack[stack.length - 1] === str[i]) {
            stack.length--;
        }
        else {
            for (let j = 0; j < bracketsConfig.length; j++) {
                if (bracketsConfig[j][0] === str[i])
                    stack.push(bracketsConfig[j][1]);
            }
        }
    }
    if (!stack.length) return true;
    return false;
};








