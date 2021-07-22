// var plusOne = function(digits) {
//     let nums = [], result = digits[0];
//     for(let i = 1; i < digits.length; i++) {
//         result = (result * 10) + digits[i];
//     }
//     result += 1;
//     while(result) {
//         nums.push(result % 10);
//         result = Math.floor(result / 10); 
//     }
    
//     for(let i = 0, j = nums.length - 1; i < j; i++, j--) {
//         nums[i] = nums[i] + nums[j];
//         nums[j] = nums[i] - nums[j];
//         nums[i] = nums[i] - nums[j];
//     }
//     console.log(nums);
//     return nums;
// };

var plusOne = function(digits) {
    digits[digits.length - 1] += 1;
    
    for(var i = digits.length - 1; i > 0 && digits[i] === 10; i--) {
        digits[i] = 0;
        digits[i - 1] += 1;  
    }
    if(digits[0] === 10) {
        digits[0] = 1;
        digits.push(0);
    }
    console.log(digits);
    return digits;
};

plusOne([1, 2, 4]);
plusOne([1, 2, 9]);
plusOne([9, 9, 9]);
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);
console.log([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);

