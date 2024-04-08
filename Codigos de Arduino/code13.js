// Código de Secuencia de 3 leds sumativo.

// // Definición del pin del botón
// const int buttonPin = 8;

// // Definición de un arreglo para los pines de los LEDs
// const int ledPins[] = {3, 2, 1};

// // Variable para almacenar el estado del botón
// int buttonState = 0;

// void setup() {
//   // Configuración de los pines de los LEDs como salidas
//   for (int i = 0; i < 3; i++) {
//     pinMode(ledPins[i], OUTPUT);
//   }

//   // Configuración del pin del botón como entrada
//   pinMode(buttonPin, INPUT);
// }

// void loop() {
//   // Lectura del estado del botón
//   buttonState = digitalRead(buttonPin);

//   // Si el botón está presionado (HIGH)
//   if (buttonState == HIGH) {
//     // Encender los LEDs uno por uno en orden ascendente
//     for (int i = 0; i < 3; i++) {
//       digitalWrite(ledPins[i], HIGH);
//       delay(1000); // Mantener el LED encendido durante 1 segundo
//     }
//   } else {
//     // Apagar todos los LEDs si el botón no está presionado
//     for (int i = 0; i < 3; i++) {
//       digitalWrite(ledPins[i], LOW);
//     }
//   }
// }