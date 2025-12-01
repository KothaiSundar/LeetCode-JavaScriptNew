/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {

    return[...nums,...nums];
//     var n=nums.length;
//     var ans=new Array(n*2);
//     for(var i=0;i<n;i++)
//     {
//         ans[i]=nums[i];
//         ans[i+n]=nums[i];
//     }
// return ans;
};