#include <Servo.h>

Servo servo1;
Servo servo2;
Servo servo3;
byte angles[] = {
  0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 173, 166, 159, 152, 145, 137, 129, 120, 111, 102, 91, 80, 68, 56, 43, 29, 15};
  
int nbAngles = sizeof(angles);


void setup (){
  servo1.attach(A0);
  servo2.attach(A1);
  servo3.attach(A2);
}

int counter = 0;

void loop () {
  servo1.write(angles[counter]);
  servo2.write(angles[(counter + nbAngles / 3) % nbAngles]);
  servo3.write(angles[counter + nbAngles / 3 * 2] % nbAngles);
  
  counter++;
  delay(200);

}
