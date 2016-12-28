'use strict';

function a() {
    var s = 10;
    return s;
}
console.log(a());

function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
console.log(f(false));
console.log(f(true));

function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i <currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}

for (var i = 0; i < 10; i++) {
    //setTimeout(function () {console.log(i)},100 * i);
    (function (i) {
        setTimeout(function () { console.log(i); },100 * i);
    })(i);
}
//interfaces:
interface LabelledValue {
    label: string;
}
function printLabel (labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare (config: SquareConfig): {color: string; area: number}  {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: "black", width: 200} as SquareConfig);
console.log(mySquare);

interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20};
console.log(p1.x);

let aa: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = aa;
/*
ro[0] = 12;
ro.push(5);
ro.length = 100;
aa = ro;
*/
aa = ro as number[];

let deck = {

}