/**
 * Created by opatiny on 11/02/17.
 */
"use strict"





function GivesAngleServo(angleCenter) {
    var radiusCenter = 40; // rayon du cercle défini par la masse au centre du cylindre en [mm]
    var radiusServo = 40; // rayon défini par l'axe du servo en [mm]
    var radius = 200; // distance between center of cylinder and center of servo [mm]
    var distance = Math.sqrt(radiusServo**2 + radius**2); // distance between point on center circle of cylinder and end of servo axis [mm]

    var a = 2*radius*radiusServo;
    var b = -2*radius*radiusCenter;
    var c = -2*radiusCenter*radiusServo;
    var d = radiusCenter**2 + radiusServo**2 + radius**2 - distance**2;
    var y = angleCenter  * Math.PI / 180;

    var x = Math.acos((Math.sqrt((4 * a * b * Math.sin(y) + 4 * a * b * Math.cos(y) + 4 * a * d + 2 * b * c * Math.sin(2 * y) + 2 * b * c * Math.cos(2 * y) + 2 * b * c + 4 * c * d * Math.cos(y))**2 - 4 * (4 * a**2 + 4 * a * c * Math.sin(y) + 4 * a * c * Math.cos(y) + 2 * c**2) * (-2 * a**2 - 4 * a * c * Math.sin(y) + 2 * b**2 * Math.sin(2 * y) + 2 * b**2 + 4 * b * d * Math.sin(y) + 4 * b * d * Math.cos(y) + c**2 * Math.cos(2 * y) - c**2 + 2 * d**2)) - 4 * a * b * Math.sin(y) - 4 * a * b * Math.cos(y) - 4 * a * d - 2 * b * c * Math.sin(2 * y) - 2 * b * c * Math.cos(2 * y) - 2 * b * c - 4 * c * d * Math.cos(y))/(2 * (4 * a**2 + 4 * a * c * Math.sin(y) + 4 * a * c * Math.cos(y) + 2 * c**2)));
    return x;

}

for( var angleCenter = 0; angleCenter <= 180; angleCenter+=5) {

    var angleServo = GivesAngleServo(angleCenter);

    console.log(angleCenter+'\t'+angleServo*180/Math.PI);
}
