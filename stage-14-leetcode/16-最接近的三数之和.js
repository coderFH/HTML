/*
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum-closest
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b);

    let result = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {

       let star = i + 1;
       let end = nums.length - 1;

       while(star < end) {
           let sum = nums[i] + nums[star] + nums[end];
           if (Math.abs(target - sum) < Math.abs(target - result)) {
               result = sum;
           }  
           if(sum > target) {
               end--;
           } else {
               star++;
           }
       }
    }
    return result; 
};

threeSumClosest([1,2,1,5],8);