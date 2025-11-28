/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var total=0;
    var sum=0;

    for(var i=0;i<nums.length;i++)
    {
        total=total+nums[i];
    }

    for(var j=0;j<nums.length;j++)
    {
        if(total-sum-nums[j]==sum)
        return j;

        sum=sum+nums[j];
    }
    return -1;
};