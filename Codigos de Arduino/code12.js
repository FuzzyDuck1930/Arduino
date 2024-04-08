// Código de Secuencia de 3 leds intercalado.

// // Definición del pin del botón
// const int buttonPin = 8;

// // Definición de un arreglo para los pines de los LEDs
// const int ledPins[] = {3, 2, 1};

// // Variables para almacenar el estado del botón y del programa
// int buttonState = 0;
// int state = 0;

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
//     // Si el estado actual del programa es 0
//     if (state == 0) {
//       // Encender los LEDs uno por uno en orden ascendente
//       for (int i = 0; i < 3; i++) {
//         digitalWrite(ledPins[i], HIGH);
//         delay(1000);
//         digitalWrite(ledPins[i], LOW);
//       }
//       // Cambiar el estado del programa a 1
//       state = 1;
//     } else {
//       // Si el estado actual del programa es 1, apagar los LEDs en orden descendente
//       for (int i = 3; i >= 0; i--) {
//         digitalWrite(ledPins[i], HIGH);
//         delay(1000);
//         digitalWrite(ledPins[i], LOW);
//       }
//       // Cambiar el estado del programa a 0
//       state = 0;
//     }
//     delay(100); // Debounce
//   }
// }