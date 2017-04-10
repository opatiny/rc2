

#include <Servo.h> //import servo library

Servo servo1;//defining the first servo 're gonna use
Servo servo2;
Servo servo3;

int pos = 10; //servo1 initial position

int servoDelay = 100; //time you wait between every actions the servo does

int currentDirection=1;
int angle1=90;

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
  while(true) {
    angle1+=currentDirection;
    if (angle1>170 || angle1<90) {
      currentDirection*=-1;
    } 
    else {
    servo1.write(pos);
    }
    servo1.write(angle1);
   
    delay(servoDelay);
  }

}



