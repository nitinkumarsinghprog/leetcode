

console.log("The is leet code problem 217");

function duplicate(nums){
    let set = new Set();

    for (let i=0; i<nums.length; i++){
        if(set.has(nums[i])){
            return true;
        }
        set.add(nums[i]);
    }
    return false;
}

console.log(duplicate([1,2,3,4,1]));


console.log(duplicate([1,2,3,4,5,6]));