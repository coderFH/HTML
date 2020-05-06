/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:
    给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/two-sum
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
var twoSum = function(nums, target) {
    var onIndex = 0;
    var twoIndex = 0;
    var isHaveValue = false;
    for (var i = 0;i < nums.length ; i++) {
        if (isHaveValue) {
            break;
        }
        onIndex = i;
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                twoIndex = j;
                isHaveValue = true;
                break;
            }
        }
    }
    if (isHaveValue) {
        return [onIndex, twoIndex];
    } else {
        return [];
    }
 };

var twoSum2 = function (nums,target) {
    let arr = new Array();
    for (var i = 0; i< nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                arr.push(i,j);
                return arr;
            }
        }
    }
};

var twoSum3 = function(nums,target) {
    let map = new Map();
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        let key = target - nums[i];
        if (map.has(key)) {
            let idx = map.get(key);
            arr.push(idx,i);
        } else {
            map.set(nums[i],i);
        }
    }
    return arr;
}

var nums = [2,7,11,5];
var target = 9;
console.log(twoSum3(nums, target));