

console.log("The is leet code problem 283");

function moveZero(nums){
    let j = 0;

    for (let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            [nums[j], nums[i]] = [nums[i], nums[j]];
            j++;
        }
    }
    return nums;
}

console.log(moveZero([1,0,3,5,0,9,0,5]));

console.log(moveZero([4,12,0,2,0,8,0,19,13]));