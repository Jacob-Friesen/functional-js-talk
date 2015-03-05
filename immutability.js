/**
 * This is a ECMA 6 proposal. Supported in very modern browsers e.g. IE 11. Some browsers even make it fail.
 * Finally, this is not well supported in strict mode.
 */
console.log('const keyword:');

const A = 1;
 
console.log(A);
A = 2;// Some environments will cause an error here e.g. Firefox
console.log(A);
 
/**
 * Supported fully in IE 9 and all relatively modern browsers. There is also a defineProperties method.
 */
console.log('Object.defineProperty:');

var a = {}
Object.defineProperty(a, 'A', {
    value: 1
    // default is readonly which can be set to false
});
 
console.log(a.A);
a.A = 2;
console.log(a.A);
 
/**
 * Full support in all browsers because this is part of core JavaScript.
 */
console.log('Constants object:');

var Constants = function() {
    var self = {};
    var keyValue = {};
 
    self.set = function(name, value) {
        if (keyValue[name] === undefined){
            keyValue[name] = value;
        }
 
        // (recommended)
        // throw('Error: ' + name + ' cannot be set again. It is currently ' + keyValue[name]);
    };
 
 
    self.get = function(name) {
        return keyValue[name];
    };
 
    return self;
};
 
var a = Constants();
a.set('A', 1);
 
console.log(a.get('A'));
a.set('A', 1);
console.log(a.get('A'));
