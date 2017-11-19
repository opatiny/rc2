

#include <Servo.h> //import servo library

Servo servo1;//defining the first servo 're gonna use
Servo servo2;
Servo servo3;

int pos = 0; //servo1 initial position

int servoDelay = 25; //time you wait between every actions the servo does



void setup()
{
  servo1.attach( A1 ); //defining wich pin is controlling the servo
  servo1.write(pos);
  
  servo2.attach(A2 );
  servo2.write(pos);
  
  servo3.attach( A0 );
  servo3.write(pos);
}


void loop() {
  for (pos=0; pos< 160; pos++) {
    servo1.write(pos);
    servo2.write(pos);
    servo3.write(pos);
    delay(servoDelay);
  }
   for ( pos=160; pos> 0; pos--) {
    servo1.write(pos);
    servo2.write(pos);
    servo3.write(pos);
    delay(servoDelay);
  }
}


