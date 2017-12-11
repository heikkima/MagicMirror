
void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(A0);

  Serial.println(sensorValue);

<<<<<<< HEAD
  if (sensorValue >= 60) {
=======
  if (sensorValue >= 65) {
>>>>>>> ff64e4fea4066e6b468da140b35ebfe1140b4e3c
   delay(1000);
  }
  
  delay(500);
}
