/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   var i=digits.length-1;
    
    while(digits[i]===9)
        {
            digits[i]=0;
            i--;
        }
    if(i<0)
        {
            var array=[1];
            digits=array.concat(digits);
        }
    else{
        digits[i]++;
    }
    
    return digits;
};