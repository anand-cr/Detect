//! ********VARIABLE DECLERATION********
//*  Var and let
//*  using var -> it will be scoped to nearest function
//*  using let -> it will be scoped to nearest block
// let a: number;
//* boolean string any number[] etc...
// enum Color {Red=0 , Green , blue};
// let backgroundColor =Color.Red
//! type asssertions
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c')
// let endsWithC_alt = (message as string).endsWith('c')
//!arrow function to define functions
// let log = function(message){
//     console.log(message);
// }
// let doLog = (message) => {
//     console.log("for multiple lines");
//     console.log("for multiple lines");
// }
// let doLog1 = (message) => console.log("for single lines");
// let doLog2 = () => console.log("for no parameters");
//! Custom types
// let drawPoint = (point) => {
//     //..
// } 
// drawPoint({
//     x: 1,
//     y: 2
// })
//* to make sure the code doesnt break by passing the wrong types
//* we use custom type assertion
// let drawPoint1 = (point:{x: number,y:number}) => {
//     //..
// } 
// drawPoint({
//     x: 1,
//     y: 2
// })
//* Better way is to use an interface 
//* interface defines the shape 
// interface Point {
//     x:number,
//     y: number
// }
// let drawPointWithInerface = (point:Point) => {
//     //..
// } 
//* Problem with this is there is no cohesion
//* the Point interface and drawPoint are highly related and should be in one unit
//* interface cant have implementation only signature
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
