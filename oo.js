console.log('Object and standard way of creating functions:');

var add = new Function('x', 'y', 'return x + y');
console.log(add(4, 5));
 
add = function(x, y) {
    return x + y;
}
 
console.log(add(4, 5));
 
// Basic shape object generator which has not been prepared for inheritance.
// var Shape = function() {
//     var self = {};
 
//     self.type = 'shape';
//     self.sayType = function() {
//         console.log(self.type);
//     }
 
//     return self;
// }
 
// var shape = Shape();
// shape.sayType();

console.log('The shape and position objects:');
 
var Shape = function(parent) {
    var self = parent;
 
    self.type = 'shape';
    self.sayType = function() {
        console.log(self.type);
    }
 
    return self;
}
 
var shape = Shape({});
shape.sayType();
 
var Position = function(parent) {
    var self = parent;
 
    self.x = 0;
    self.y = 0;
    self.sayPosition = function() {
        console.log(self.x + ':' + self.y);
    }
 
    return self;
}
 
var position = Position({});
position.sayPosition();

console.log('The inherited CenterCircle object:');
 
var CenterCircle = function(parent) {
    var self = parent;
 
    self.x = 6;
    self.y = 6;
    self.type = 'circle';
 
    return self;
}
 
var centerCircle = CenterCircle(Shape(Position({})));
centerCircle.sayPosition();
centerCircle.sayType();