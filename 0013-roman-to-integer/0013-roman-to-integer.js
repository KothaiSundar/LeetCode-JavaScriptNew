/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let i,sum=0;
    const romans ={
        I: 1,
        V :5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
        
    }
    for(i=0;i<s.length;i++)
        {
            if(i<s.length-1 &&  romans[s[i]]<romans[s[i+1]])
                {
                    sum-=romans[s[i]];
                }
            else
                {
                    sum+=romans[s[i]];
                }
        }
    return sum;
};