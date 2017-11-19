//define pins. I used pins 4 and 5
#define irLedPin 4          // IR Led on this pin
#define irSensorPin 5       // IR sensor on this pin
int led = 13;

int irRead(int readPin, int triggerPin); //function prototype

void setup() {
  pinMode(led, OUTPUT);     
  pinMode(irSensorPin, INPUT);
  pinMode(irLedPin, OUTPUT);
  Serial.begin(115200); 
  // prints title with ending line break 
  Serial.println("Program Starting"); 
  // wait for the long string to be sent 
  delay(100); 
}

#define eventsSize 64

int previousActive=0;
long events[eventsSize];
byte eventsType[eventsSize];
int position = 0;

void loop() {  
  //  if (position > 64) return;
  int active = irRead(irSensorPin, irLedPin); //display the results
  if (previousActive != active) {
    previousActive=active;
    if (position < eventsSize) {
      events[position]=micros();
      eventsType[position]=active;
      position++;
    }
  }

  if (active==0) {
    digitalWrite(led, LOW);
  } 
  else {
    digitalWrite(led, HIGH);
  }

  if (position == eventsSize) {
    for (byte i=0; i<eventsSize; i=i+2) {
      Serial.print(i);
      Serial.print("\t");
      Serial.print(events[i]);
      Serial.print("\t");
      Serial.print(events[i+1]);
      Serial.print("\t");
      if (i>0) {
        Serial.print(events[i]-events[i-1]);
        Serial.print("\t");
      } 
      else {
        Serial.print("\t");
      }
      Serial.println(events[i+1]-events[i]);
    } 
    position++;
  }
}



int halfPeriod = 4; //one period at 38.5khZ is aproximately 26 microseconds

int irRead(int readPin, int triggerPin)
{
  digitalWrite(triggerPin, HIGH); 
  delayMicroseconds(halfPeriod);
  digitalWrite(triggerPin, LOW); 
  delayMicroseconds(halfPeriod - 1);     // - 1 to make up for digitaWrite overhead    

  return digitalRead(readPin);
}


void myDelay(int numberTime) {
   for (int i=0; i<numberTime; i++) {
   } 
}




