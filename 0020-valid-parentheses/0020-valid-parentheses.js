/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
const stack=[];
    const matchingBrackets={
        ')':'(',
        '}':'{',
        ']':'['
    };
    for(let char of s)
        {
            if(char in matchingBrackets)
                {
                    const top=stack.length>0 ? stack.pop():null;
                    if(top!==matchingBrackets[char])
                        {
                            return false;
                        }
                }
            else
                {
                    stack.push(char);
                }
        }
    return stack.length===0;
};