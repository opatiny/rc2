"use srict";

var formula1 = require('./formula1.js');
var formula2 = require('./formula2.js');
var formula3 = require('./formula3.js');
var formula4 = require('./formula4.js');

var radiusCenter = 40; // rayon du cercle défini par la masse au centre du cylindre en [mm]
var radiusServo = 40; // rayon défini par l'axe du servo en [mm]
var radius = 200; // distance between center of cylinder and center of servo [mm]
var distance = Math.sqrt(radiusServo**2 + radius**2); // distance between point on center circle of cylinder and end of servo axis [mm]


var results=[];


for( var angleCenter = 0; angleCenter <= 180; angleCenter+=10) {
    var angleServo11 =  formula1(radius, radiusServo, radiusCenter, angleCenter, distance);
    var angleServo12 =  formula2(radius, radiusServo, radiusCenter, angleCenter, distance);
    var angleServo13 =  formula3(radius, radiusServo, radiusCenter, angleCenter, distance);
    var angleServo14 =  formula4(radius, radiusServo, radiusCenter, angleCenter, distance);
 //   var angleServo2 =  formula(radius, radiusServo, radiusCenter, (angleCenter+120), distance);
 //   var angleServo3 =  formula(radius, radiusServo, radiusCenter, (angleCenter+240), distance);
    
    results.push({
        radiusCenter,
        radiusServo,
        radius,
        distance,
        angleServo11,
        angleServo12,
        angleServo13,
        angleServo14,
        angleCenter
    });
    console.log(angleCenter+'\t'+angleServo11.a1+'\t'+angleServo12.a1+'\t'+angleServo13.a1+'\t'+angleServo14.a1);
}

//console.log(results);

