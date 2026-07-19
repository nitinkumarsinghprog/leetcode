

console.log("The is leet code problem two sum");

function twoSum(arr, k){
    let map = new Map();

    for (let i=0; i<arr.length; i++){
        let diff = k - arr[i];
        if(map.has(diff)){
            return [map.get(diff), i];
        }
        map.set(arr[i], i);
    }
}

console.log(twoSum([2,7,11,15], 9));