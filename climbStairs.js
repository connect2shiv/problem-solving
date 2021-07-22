var climbStairs = function(n) {
    const result = [0];
    for(let i = 1; i <= n; i++) {
        let ways = 0;
        if (i - 1 === 0 || i - 2 === 0)
            ways += 1;
        if(i - 1 > 0)
            ways += result[i - 1];
        if(i - 2 > 0)
            ways += result[i - 2];
        console.log(ways);
        result[i] = ways;
    }
    return result.pop();
};

climbStairs(3);