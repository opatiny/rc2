"use strict"

/**
 * 
 * @param radius
 * @param radiusServo
 * @param radiusCenter
 * @param angleCenter
 * @param distance
 */
function formula(radius, radiusServo, radiusCenter, angleCenter, distance) {
    var a = 2*radius*radiusServo;
    var b = -2*radius*radiusCenter;
    var c = -2*radiusCenter*radiusServo;
    var d = radiusCenter**2 + radiusServo**2 + radius**2 - distance**2;
    var y = angleCenter  * Math.PI / 180;
    return {
        a1: formula1(a, b, c, d, y) * 180 / Math.PI,
        a2: formula2(a, b, c, d, y) * 180 / Math.PI,
        a3: formula3(a, b, c, d, y) * 180 / Math.PI,
        a4: formula4(a, b, c, d, y) * 180 / Math.PI
    };
}

function formula1(a,b,c,d,y) {
    var x = -Math.acos((-Math.sqrt((4 * a * b * Math.sin(y) + 4 * a * b * Math.cos(y) + 4 * a * d + 2 * b * c * Math.sin(2 * y) + 2 * b * c * Math.cos(2 * y) + 2 * b * c + 4 * c * d * Math.cos(y))**2 - 4 * (4 * a**2 + 4 * a * c * Math.sin(y) + 4 * a * c * Math.cos(y) + 2 * c**2) * (-2 * a**2 - 4 * a * c * Math.sin(y) + 2 * b**2 * Math.sin(2 * y) + 2 * b**2 + 4 * b * d * Math.sin(y) + 4 * b * d * Math.cos(y) + c**2 * Math.cos(2 * y) - c**2 + 2 * d**2)) - 4 * a * b * Math.sin(y) - 4 * a * b * Math.cos(y) - 4 * a * d - 2 * b * c * Math.sin(2 * y) - 2 * b * c * Math.cos(2 * y) - 2 * b * c - 4 * c * d * Math.cos(y))/(2 * (4 * a**2 + 4 * a * c * Math.sin(y) + 4 * a * c * Math.cos(y) + 2 * c**2)));
    return x;
}


function formula2(a,b,c,d,y) {
    var x = Math.acos((-Math.sqrt((4 * a * b * Math.sin(y) + 4 * a * b * Math.cos(y) + 4 * a * d + 2 * b * c * Math.sin(2 * y) + 2 * b * c * Math.cos(2 * y) + 2 * b * c + 4 * c * d * Math.cos(y))**2 - 4 * (4 * a**2 + 4 * a * c * Math.sin(y) + 4 * a * c * Math.cos(y) + 2 * c**2) * (-2 * a**2 - 4 * a * c * Math.sin(y) + 2 * b**2 * Math.sin(2 * y) + 2 * b**2 + 4 * b * d * Math.sin(y) + 4 * b * d * Math.cos(y) + c**2 * Math.cos(2 * y) - c**2 + 2 * d**2)) - 4 * a * b * Math.sin(y) - 4 * a * b * Math.cos(y) - 4 * a * d - 2 * b * c * Math.sin(2 * y) - 2 * b * c * Math.cos(2 * y) - 2 * b * c - 4 * c * d * Math.cos(y))/(2 * (4 * a**2 + 4 * a * c * Math.sin(y) + 4 * a * c * Math.cos(y) + 2 * c**2)));
    return x;
}

function formula3(a,b,c,d,y) {
    var x = -Math.acos((Math.sqrt((4 * a * b * Math.sin(y) + 4 * a * b * Math.cos(y) + 4 * a * d + 2 * b * c * Math.sin(2 * y) + 2 * b * c * Math.cos(2 * y) + 2 * b * c + 4 * c * d * Math.cos(y))**2 - 4 * (4 * a**2 + 4 * a * c * Math.sin(y) + 4 * a * c * Math.cos(y) + 2 * c**2) * (-2 * a**2 - 4 * a * c * Math.sin(y) + 2 * b**2 * Math.sin(2 * y) + 2 * b**2 + 4 * b * d * Math.sin(y) + 4 * b * d * Math.cos(y) + c**2 * Math.cos(2 * y) - c**2 + 2 * d**2)) - 4 * a * b * Math.sin(y) - 4 * a * b * Math.cos(y) - 4 * a * d - 2 * b * c * Math.sin(2 * y) - 2 * b * c * Math.cos(2 * y) - 2 * b * c - 4 * c * d * Math.cos(y))/(2 * (4 * a**2 + 4 * a * c * Math.sin(y) + 4 * a * c * Math.cos(y) + 2 * c**2)));
    return x;
}

function formula4(a,b,c,d,y) {
    var x = Math.acos((Math.sqrt((4 * a * b * Math.sin(y) + 4 * a * b * Math.cos(y) + 4 * a * d + 2 * b * c * Math.sin(2 * y) + 2 * b * c * Math.cos(2 * y) + 2 * b * c + 4 * c * d * Math.cos(y))**2 - 4 * (4 * a**2 + 4 * a * c * Math.sin(y) + 4 * a * c * Math.cos(y) + 2 * c**2) * (-2 * a**2 - 4 * a * c * Math.sin(y) + 2 * b**2 * Math.sin(2 * y) + 2 * b**2 + 4 * b * d * Math.sin(y) + 4 * b * d * Math.cos(y) + c**2 * Math.cos(2 * y) - c**2 + 2 * d**2)) - 4 * a * b * Math.sin(y) - 4 * a * b * Math.cos(y) - 4 * a * d - 2 * b * c * Math.sin(2 * y) - 2 * b * c * Math.cos(2 * y) - 2 * b * c - 4 * c * d * Math.cos(y))/(2 * (4 * a**2 + 4 * a * c * Math.sin(y) + 4 * a * c * Math.cos(y) + 2 * c**2)));
    return x;
}
module.exports = {
    formula1,
    formula2,
    formula3,
    formula4
};
