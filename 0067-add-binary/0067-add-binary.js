/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result=[];
    let carry=0;
    const maxLength=Math.max(a.length,b.length);
    a=a.padStart(maxLength,'0');
    b=b.padStart(maxLength,'0');
    
    for(let i=maxLength-1;i>=0;i--)
        {
            const bitA=parseInt(a[i],10);
            const bitB=parseInt(b[i],10);
            const sum=bitA+bitB+carry;
            
            carry=Math.floor(sum/2);
            result.push(sum%2);
        }
    
    if(carry!=0)
        {
            result.push(carry);
        }
    
    return result.reverse().join('');
};