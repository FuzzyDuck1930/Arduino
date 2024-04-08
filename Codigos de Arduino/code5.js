//Código de Correspondencia 3 botones con 3 leds.

//FORMA 1

// const int led1 = 2;
// const int led2 = 3;
// const int led3 = 4;

// // Definición del pin para el botón
// const int buttonPin1 = 7;
// const int buttonPin2 = 6;
// const int buttonPin3 = 5;


// void setup() {
//   pinMode(led1, OUTPUT);
//   pinMode(led2, OUTPUT);
//   pinMode(led3, OUTPUT);
//   pinMode(buttonPin1, INPUT);
//   pinMode(buttonPin2, INPUT);
//   pinMode(buttonPin3, INPUT);
// }

// void loop() {
//   if(digitalRead(7)==HIGH){
//      digitalWrite(led1,HIGH);
//      delay(1000);
//   } if(digitalRead(6)==HIGH){
//   	digitalWrite(led2,HIGH);
//     delay(1000);
//   } if(digitalRead(5)==HIGH){
//   	digitalWrite(led3,HIGH);
//     delay(1000);
//   } else {
//   	digitalWrite(led1,LOW);
//     delay(100);
//     digitalWrite(led2,LOW);
//     delay(100);
//     digitalWrite(led3,LOW);
//     delay(100);
//   }
// }

// FORMA 2

// // Definición de pines para los LEDs
// const int ledPins[] = {2, 3, 4};

// // Definición de pines para los botones
// const int buttonPins[] = {5, 6, 7};

// void setup() {
//   // Inicialización de pines de LED como salida
//   for (int i = 0; i < 3; i++) {
//     pinMode(ledPins[i], OUTPUT);
//   }

//   // Inicialización de pines de botón como entrada
//   for (int i = 0; i < 3; i++) {
//     pinMode(buttonPins[i], INPUT);
//   }
// }

// void loop() {
//   // Leer el estado de los botones
//   for (int i = 0; i < 3; i++) {
//     int buttonState = digitalRead(buttonPins[i]);

//     // Si el botón está presionado, encender el LED correspondiente
//     if (buttonState == HIGH) {
//       digitalWrite(ledPins[i], HIGH);
//     } else {
//       digitalWrite(ledPins[i], LOW);
//     }
//   }
// }