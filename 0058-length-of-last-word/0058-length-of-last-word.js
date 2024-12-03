/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i=s.length-1;
    let length=0;
    
    while(i>=0 && s.charAt(i)===' ')
        {
            i--;
        }
    
    while(i>=0 && s.charAt(i)!==' ')
        {
            length++;
            i--;
        }
    return length;
};