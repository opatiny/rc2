/*
  Blink
 Turns on an LED on for one second, then off for one second, repeatedly.
 
 This example code is in the public domain.
 */

int led = 4;

void setup() {                
  pinMode(led, OUTPUT);     
}


void loop() {
  while(true){
    PORTD = 255;         // turn the LED on (HIGH is the voltage level)
    PORTD = 0;           // turn the LED off by making the voltage LOW
    PORTD = 255;         // turn the LED on (HIGH is the voltage level)
    PORTD = 0;            
    PORTD = 255;         
    PORTD = 0;            
    PORTD = 255;        
    PORTD = 0;            
 }
}



//for(int i=0; i<100; i++) { }
