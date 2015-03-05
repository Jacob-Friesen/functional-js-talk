console.log('Iteration with mutable variables:');
 
var array = [1,2,3,4];
 
for (var i = 0; i < array.length; i += 1){
    console.log(array[i]);
}
 
// With immutability, an infinite loop
 
// const arr2 = [1,2,3,4];
 
// for (const i2 = 0; i2 < arr2.length; i2 += 1){
//     console.log(arr2[i2]);
// }
 
console.log('Iteration with immutable variables:');
 
const arr2 = [1,2,3,4];
 
const loop = function(arr) {
    // Doing this pure functional, so assuming no properties
    if (arr[0] !== undefined) {
        console.log(arr[0]);
        loop(arr.slice(1));
    }
}
loop(arr2);
 
console.log('Extending that into a forEach loop:');
 
const forEach = function(arr, callback) {
    // Doing this pure functional, so assuming no properties
    if (arr[0] !== undefined) {
        callback(arr[0]);
        forEach(arr.slice(1), callback);
    }
};
 
forEach([1,2,3], function(element) {
    console.log(element);
});
 
console.log('A map function using immutable variables:');
 
const map = function(arr, callback) {
    return realMap([], arr, callback);
};
 
const realMap = function(result, arr, callback) {
    // Doing this pure functional, so assuming no properties
    if (arr[0] !== undefined) {
        const newResult = result.concat(callback(arr[0]));
        return realMap(newResult, arr.slice(1), callback);
    }
 
    return result;
};
 
const doubled = map([1,2,3], function(element) {
    return element * 2;
});
console.log(doubled);
