

#include <Servo.h> //import servo library

Servo servo1;//defining the first servo 're gonna use
Servo servo2;
Servo servo3;

int pos = 90; //servo1 initial position

int servoDelay = 25; //time you wait between every actions the servo does


void setup(){
  servo1.attach( A1 ); //defining wich pin is controlling the servo
  servo1.write(pos);

  servo2.attach(A2 );
  servo2.write(pos);

  servo3.attach( A0 );
  servo3.write(pos);

}

void loop(){

  servo1.write(10);
  servo3.write(90);
  delay(5000);
  servo2.write(10);
  servo1.write(90);
  delay(5000);
  servo3.write(10);
  servo2.write(90);
  delay(5000);
  
    /*servo1.write(170);
  servo3.write(90);
  delay(5000);
  servo2.write(170);
  servo1.write(90);
  delay(5000);
  servo3.write(170);
  servo2.write(90);
  delay(5000);*/
  
}
