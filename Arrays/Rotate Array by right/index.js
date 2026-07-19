

console.log("The is leet code problem 189");

function reversArray(arr, left, right){

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

function rotateArray(nums, k){
    let n = nums.length;

    k = k % n;

    reversArray(nums, 0, n-1);

    reversArray(nums, 0, k-1);

    reversArray(nums, k, n-1);

    return nums;
}


console.log(rotateArray([1,2,3,4,5,6,7], 3));

console.log(rotateArray([-1, -99, 10, 100], 2));