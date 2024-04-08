// Código de Cambio de estado estático con 6 leds ->

// const int buttonPin = 8;
// const int ledPins[] = {6, 5, 4, 3, 2, 1};
// int buttonState = 0;
// int state = 0;

// void setup() {
//   for (int i = 0; i < 6; i++) {
//     pinMode(ledPins[i], OUTPUT);
//   }
//   pinMode(buttonPin, INPUT);
// }

// void loop() {
//   buttonState = digitalRead(buttonPin);

//   if (buttonState == HIGH) {
//     if (state == 0) {
//       for (int i = 0; i < 6; i += 2) {
//         digitalWrite(ledPins[i], HIGH);
//       for (int i = 1; i < 6; i += 2) {
//         digitalWrite(ledPins[i], LOW);
//       }
//       }
//       state = 1;
//     } else {
//       for (int i = 1; i < 6; i += 2) {
//         digitalWrite(ledPins[i], HIGH);
//       }
//       for (int i = 0; i < 6; i += 2) {
//         digitalWrite(ledPins[i], LOW);
//       }
//       state = 0;
//     }
//     delay(1000); // Debounce
//   }
// }