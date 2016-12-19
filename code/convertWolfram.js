var input='x = -cos^(-1)((-sqrt((4 a b sin(y) + 4 a b cos(y) + 4 a d + 2 b c sin(2 y) + 2 b c cos(2 y) + 2 b c + 4 c d cos(y))^2 - 4 (4 a^2 + 4 a c sin(y) + 4 a c cos(y) + 2 c^2) (-2 a^2 - 4 a c sin(y) + 2 b^2 sin(2 y) + 2 b^2 + 4 b d sin(y) + 4 b d cos(y) + c^2 cos(2 y) - c^2 + 2 d^2)) - 4 a b sin(y) - 4 a b cos(y) - 4 a d - 2 b c sin(2 y) - 2 b c cos(2 y) - 2 b c - 4 c d cos(y))/(2 (4 a^2 + 4 a c sin(y) + 4 a c cos(y) + 2 c^2)))';


var output=input
    .replace(/([0-9a-z]) (?=[a-z\(])/g,'$1 * ')
    .replace(/cos(?=\()/g,'Math.cos')
    .replace(/sin(?=\()/g,'Math.sin')
    .replace(/tan(?=\()/g,'Math.tan')
    .replace(/cos\^\(-1\)/g,'Math.acos')
    .replace(/sin\^\(-1\)/g,'Math.asin')
    .replace(/tan\^\(-1\)/g,'Math.atan')
    .replace(/sqrt/g,'Math.sqrt')
    .replace(/\^/g,'**');


console.log(output);