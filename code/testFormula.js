"use srict";

var formula = require('./formula.js');

var radiusCenter = 40; // rayon du cercle défini par la masse au centre du cylindre en [mm]
var radiusServo = 40; // rayon défini par l'axe du servo en [mm]
var radius = 200; // distance between center of cylinder and center of servo [mm]
var distance = Math.sqrt(radiusServo**2 + radius**2); // distance between point on center circle of cylinder and end of servo axis [mm]


var results=[];


for( var angleCenter = 0; angleCenter <= 180; angleCenter+=10) {
    var angleServo1 =  formula(radius, radiusServo, radiusCenter, angleCenter, distance);
 //   var angleServo2 =  formula(radius, radiusServo, radiusCenter, (angleCenter+120), distance);
 //   var angleServo3 =  formula(radius, radiusServo, radiusCenter, (angleCenter+240), distance);
    
    results.push({
        radiusCenter,
        radiusServo,
        radius,
        distance,
        angleServo1,
        angleCenter
    });
    console.log(angleCenter+'\t'+angleServo1.a1);
}

//console.log(results);

