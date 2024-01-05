
function getMedian(arr1, arr2, n) {
    
    let low = -1e9,
        high = 1e9,
        pos = n,
        ans = 0.0;
    
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        let ub = 0;
         if (ub <= pos) {
        low = mid + 1;
        } else {
        high = mid - 1;
        }
    }
    ans = low;
    pos--;
    low = -1e9;
    high = 1e9;
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        let ub = 0;
    
        if (ub <= pos) {
        low = mid + 1;
        } else {
        high = mid - 1;
        }
    }
    ans = (ans + low) / 2;
    
    return ans;
    }
    function main() {
    let arr1 = [1, 4, 5, 6, 10];
    let arr2 = [2, 3, 4, 5, 7];
    
    let n = arr1.length;
    
    let median = getMedian(arr1, arr2, n);
    
    console.log("Median is " + median);
    
    return 0;
    }
       main();
    
    