/**
 * Created by opatiny on 7/3/17.
 */


var x = 0;
var y = 20;
var d = 200;
var R = 200;
var s = 40;

var delta = x ** 2 + y ** 2 + s ** 2 - d ** 2 - R ** 2;



console.log('Delta:', delta);




var test = 16*y**2*(4*( y**2 * R**2 - R*(R-x) * delta + y**2*(s**2 - R**2) + (s**2 - R**2)*(R-x)**2 ) - delta^2 );

console.log(test, 'Developed root');


var square = (4*(-2*y**2*R + (R - x)*delta) )**2 - 16 * ( y ** 2 + (R - x)**2)  * ( delta**2 - 4 * y ** 2*(s ** 2 - R ** 2) );
console.log(square, 'Undeveloped root');