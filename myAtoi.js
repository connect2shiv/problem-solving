var myAtoi = function(s) {
    if(!s.length) return 0;
    const str = s.trim();
    const nums = [];
    let factor = 1, i = 0;
    if(str[0] === '-') {
        factor = -1;
    }
    if(str[0] === '+' || str[0] === '-') {
        i = 1;
    }

    while(i < str.length) {
        if(str[i].match(/[0-9]/g))
            nums.push(str[i]);
        else
            break;
        i++;
    }
    if(!nums.length)
        return 0;
    let result = 0;
    for(let num of nums) {
        result = (result * 10) + parseInt(num);
    }
    
    result = factor * result;
    if (result < -(2**31))
        return -(2**31);
    if (result > (2**31 - 1))
        return 2**31 - 1;
    
    return result;
};

myAtoi("42");