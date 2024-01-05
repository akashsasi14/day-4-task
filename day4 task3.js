let arr = [4, 8, 7, 13, 12]
let sum = arr.reduce(function (x, y) {
    return x + y;
}, 0);
console.log("Sum using Reduce method: " + sum);