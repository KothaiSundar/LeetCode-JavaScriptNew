/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    var reverse = 0;
    var temp = x;

    while (temp > 0) {
      const digit =temp % 10;
      reverse = reverse * 10 + digit;
     temp= ~~(temp / 10);
    }

    return reverse == x;
};