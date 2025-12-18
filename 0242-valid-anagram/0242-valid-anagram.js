/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length)
    return false;

    let count=new Array(256).fill(0);

    for(let i=0;i<s.length;i++)
    {
        count[s.charCodeAt(i)]++;
        count[t.charCodeAt(i)]--;
    }

    for(let c of count)
    {
        if(c!==0)
        {
            return false;
        }
    }
    return true;
};