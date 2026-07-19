

console.log("The is leet code problem 121");

function maxProfit(prices){
    let min = prices[0];
    let max = 0;

    for (let i=0; i<prices.length; i++){

        min = Math.min(min, prices[i]);
        let profit = prices[i] - min;
        max = Math.max(max, profit);
    }

    return max;
}

console.log(maxProfit([7,1,5,3,6,4]));