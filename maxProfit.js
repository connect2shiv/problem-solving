// var maxProfit = function(prices) {
//     if (prices.length === 0) return 0;
//     let profit = 0, p1 = 0, p2 = 1;
//     for(p2 = 1; p2 < prices.length; p2++) {
//         if(buy && prices[p1] < prices[p2]) {
//             buy = false;
//         } else if (!buy) {
//             if (prices[p2 -1] > prices[p2]) {
//                 profit += prices[p2 - 1] - prices[p1];
//                 buy = true;
//                 p1 = p2;
//             }
//         } else {
//             p1++;
//         }
//     }
//     if(!buy) {
//         profit += prices[p2 - 1] - prices[p1];
//     }
//     console.log("Profit ===> ", profit);
//     return profit;
// };

var maxProfit = function(prices) {
    if (prices.length === 0) return 0;
    let profit = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    console.log("Profit ===> ", profit);
    return profit;
};

maxProfit([4, 2, 5, 3, 4, 6]);
maxProfit([1, 2, 3, 4, 5]);
maxProfit([5, 4, 3, 2, 1]);