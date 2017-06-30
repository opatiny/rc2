/*
 * Created by opatiny on 30.06.17.
 */

"use strict";

// angleServo are the angle of the three different servos, it is between 0 and 180 degrees


//var radiusCenter = 40; // rayon du cercle défini par la masse au centre du cylindre en [mm]
var xMassPosition = 20; // composante x de la position de la masse en [mm]
var yMassPosition = 20; // composante y de la position de la masse en [mm]
var radiusServo = 40; // rayon défini par l'axe du servo en [mm]
var bigRadius = 200; // distance between center of cylinder and center of servo [mm]
var distance = 200; // distance between point on center circle of cylinder and end of servo axis [mm]


function formula(xMassPosition, yMassPosition, bigRadius, radiusServo, distance) {

    var x = xMassPosition;
    var y = yMassPosition;
    var d = distance;
    var R = bigRadius;
    var s = radiusServo;

    var delta = x ** 2 + y ** 2 + s ** 2 - d ** 2 - R ** 2;

    // a is the x component of a point situated on the circle described by the end of the servos axis, this function returns two values on the circle (a1, a2), but only one is correct.

    var a1 = ( 2 * y ** 2 * R - (R - x) * delta + y * Math.sqrt(4 * ( -R * (R - x) * delta + y**2 * R**2 + (y**2 * (R - x)**2) * (s**2 - R**2) ) - delta**2) ) / ( 2 * (y**2 + (R - x)**2) );
    var a2 = ( 2 * y ** 2 * R - (R - x) * delta - y * Math.sqrt(4 * ( -R * (R - x) * delta + y**2 * R**2 + (y**2 * (R - x)**2) * (s**2 - R**2) ) - delta**2) ) / ( 2 * (y**2 + (R - x)**2) );

    var a;
    if ((y > 0) || (y = 0)) {
        a = Math.max(a1, a2);
    } else {
        a = Math.min(a1, a2);
    }

    var result = Math.acos((a - R) / s);

    return result;

}

var results=[];

var angleServo =  formula(xMassPosition, yMassPosition, bigRadius, radiusServo, distance);
// var angleServo2 =  formula(radius, radiusServo, radiusCenter, (angleCenter+120), distance);
// var angleServo3 =  formula(radius, radiusServo, radiusCenter, (angleCenter+240), distance);

    results.push({
        xMassPosition,
        yMassPosition,
        angleServo
        // angleServo2,
        // angleServo3
    });

    console.log(xMassPosition+'\t'+yMassPosition+'\t'+angleServo);


//console.log(results);

