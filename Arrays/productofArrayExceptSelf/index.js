

console.log("The is leet code problem 238");

function exceptSelf(nums){
    let n = nums.length;
    let left = new Array(n);
    let right = new Array(n);
    left[0] = 1;
    right[n-1] = 1;

    //for left 
    for(let i = 1; i<nums.length; i++){
        left[i] = left[i-1]*nums[i-1];
    }

    //for right
    for(let i =n-2; i>=0; i--){
        right[i]= right[i+1]*nums[i+1];
    }

    let result = [];
    for(let i=0; i<nums.length; i++){
        let product = left[i]*right[i];
        result.push(product);
    }

    return result;
}

console.log(exceptSelf([1,2,3,4]));