//! ********VARIABLE DECLERATION********

//*  Var and let
//*  using var -> it will be scoped to nearest function
//*  using let -> it will be scoped to nearest block
 
let a: number;

//* boolean string any number[] etc...

enum Color {Red=0 , Green , blue};
let backgroundColor =Color.Red

//! type asssertions

let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c')
let endsWithC_alt = (message as string).endsWith('c')


//!arrow function to define functions

let log = function(message){
    console.log(message);
}

let doLog = (message) => {
    console.log("for multiple lines");
    console.log("for multiple lines");
}

let doLog1 = (message) => console.log("for single lines");

let doLog2 = () => console.log("for no parameters");

//! Custom types

let drawPoint = (point) => {
    //..
} 

drawPoint({
    x: 1,
    y: 2
})
//* to make sure the code doesnt break by passing the wrong types
//* we use custom type assertion

let drawPoint1 = (point:{x: number,y:number}) => {
    //..
} 

drawPoint({
    x: 1,
    y: 2
})

//* Better way is to use an interface 
//* interface defines the shape 

interface Point {
    x:number,
    y: number
}

let drawPointWithInerface = (point:Point) => {
    //..
} 

//* Problem with this is there is no cohesion
//* the Point interface and drawPoint are highly related and should be in one unit
//* interface cant have implementation only signature

class Point {
    x: number;
    y: number;

    draw(){
        console.log('X: ' + this.x );
    }

    getDistance(another: Point){
        //...
    }
}

let point = new Point();
point.x = 1
point.y =2
point.draw();

//! using constructor
class PointC {
    x: number;
    y: number;

    //* in typescript we cant have multiple constructors
    //* make it optional by ?
    constructor(x? : number,y?: number){
    this.x = x;
    this.y = y;

    }

    draw(){
        console.log('X: ' + this.x );
    }

    getDistance(another: Point){
        //...
    }
}

let pointC = new PointC(1,2);
point.draw();

//! access modifier
//* public private and protected

class PointD {
    private x: number;
    protected y: number;

    constructor(x? : number,y?: number){
    this.x = x;
    this.y = y;

    }

    draw(){
        console.log('X: ' + this.x );
    }

    getDistance(another: Point){
        //...
    }
}

let pointD = new PointD(1,2);
pointD.draw();

//! Access Modifiers in Constructor Parameters 

//* if we declare the access specifiers in thenconstructor 
//* it will create the variable and also initialize it with the value
class PointE {
    
    constructor(private x? : number, private y?: number){
    }

    draw(){
        console.log('X: ' + this.x );
    }

    getDistance(another: Point){
        //...
    }
}

let pointE = new PointE(1,2);
pointD.draw();

//! setting up getters and setters using set and get


class PointF {
    
    constructor(private _x? : number, private _y?: number){
    }

    draw(){
        console.log('X: ' + this._x );
    }

    getDistance(another: Point){
        //...
    }

    get x(){
        return this._x
    }
    
    set x(value){
        if (value < 0)
            throw new Error("value invalid")
        
        this._x = value
    }
}

let pointF = new PointF(1,2);
let x = pointF.x //directly assign like fields instead of methods
pointF.x = 10;
pointF.draw();

//! MODULE
import {point} from 'relative path from this file'
import {point} from './point'