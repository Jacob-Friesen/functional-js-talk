console.log('Original fib function:');

var fib = function(n) {
    if (n < 2) {
        return n;
    }
 
    return fib(n - 1) + fib(n - 2);
}
 
console.log(fib(2));
console.log(fib(40));
 
// The original memoize function:
// var memoize = function(callback) {
//     var results = {};
 
//     return function(n) {
//         if (results[n]) {
//             return results[n];
//         }
 
//         results[n] = callback(n);
//         return results[n];
//     };
// };
 
// The extended memoize function:
var memoize = function(callback) {
    memoize.results = {};
 
    return function(n) {
        if (memoize.results[n]) {
            return memoize.results[n];
        }
 
        memoize.results[n] = callback(n);
        return memoize.results[n];
    };
};

console.log('The new memoized fib function:');

var fastFib = memoize(function(n) {
    if (n < 2) {
        return n;
    }
 
    return fastFib(n - 1) + fastFib(n - 2);
});
 
console.log(fastFib(40));
console.log(memoize.results);
