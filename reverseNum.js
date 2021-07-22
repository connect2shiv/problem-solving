// var reverse = function(x) {
//     let max = Math.pow(2, 31) - 1;
//     let min = Math.pow(-2, 31);
    
//     if (x < min || x > max)
//         return 0;
//     let newX = x, factor = 1, stack = [], result = 0;
//     if(x < 0) {
//         factor = -1;
//         newX = x * -1;
//     }
    
//     while(newX) {
//         stack.push(newX % 10);
//         newX = Math.floor(newX / 10);
//     }
    
//     for(let i = 0; i < stack.length; i++) {
//         result = (result * 10) + stack[i];
//     }
    
//     return factor * result;
// };

var reverse = function(x) {
    let result = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if (result > 2**31)
        return 0;
    let factor = 1;
    if(x < 0) {
        factor = -1;
    }
    
    return factor * result;
};

const x = reverse(1534236469);
console.log(x);

const y = reverse(110022);
console.log(y);

const z = reverse(-110022);
console.log(z);