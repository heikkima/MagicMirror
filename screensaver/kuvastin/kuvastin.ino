
void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(A0);

  Serial.println(sensorValue);

  if (sensorValue >= 60) {
   delay(1000);
  }
  
  delay(500);
}
