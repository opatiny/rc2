"use srict";

var formula = require('./formula.js');

var radiusCenter = 20; // rayon du cercle défini par la masse au centre du cylindre en [mm]
var radiusServer = 40; // rayon défini par l'axe du servo en [mm]
var radius = 200; // distance between center of cylinder and center of servo [mm]
var distance = Math.sqrt(radiusServer**2 + radius**2); // distance between point on center circle of cylinder and end of servo axis [mm]


var results=[];


for( var angleCenter = 0; angleCenter <= 180; angleCenter++) {
    var angleServo1 =  formula(a, b, c, angleCenter);
    var angleServo2 =  formula(a, b, c, angleCenter+120);
    var angleServo3 =  formula(a, b, c, angleCenter+240);
    results.push({
        radiusCenter,
        radiusServer,
        radius,
        distance,
        angleServo1,
        angleServo2,
        angleServo3,
        angleCenter
    });
    console.log(angleCenter, angleServo1, angleServo2, angleServo3);
}

console.log(results);

