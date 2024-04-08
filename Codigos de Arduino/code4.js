// Código de Aleatorio de 5 leds con botón.

// // Definición de pines para los LEDs
// const int ledPins[] = {2, 3, 4, 5, 6};

// // Definición del pin para el botón
// const int buttonPin = 7;

// // Variable para almacenar el estado anterior del botón
// int prevButtonState = LOW;

// void setup() {
//   // Inicialización de pines de LED como salida
//   for (int i = 0; i < 5; i++) {
//     pinMode(ledPins[i], OUTPUT);
//   }

//   // Inicialización del pin del botón como entrada
//   pinMode(buttonPin, INPUT);

//   // Inicialización del generador de números aleatorios
//   randomSeed(analogRead(0));
// }

// void loop() {
//   // Leer el estado actual del botón
//   int buttonState = digitalRead(buttonPin);

//   // Si el estado anterior del botón es bajo y el estado actual es alto (se ha presionado el botón)
//   if (prevButtonState == LOW && buttonState == HIGH) {
//     // Encender un LED aleatorio
//     int randomLED = random(5);
//     digitalWrite(ledPins[randomLED], HIGH);
//   }

//   // Actualizar el estado anterior del botón
//   prevButtonState = buttonState;

//   // Si el botón no está presionado
//   if (buttonState == LOW) {
//     // Apagar todos los LEDs
//     for (int i = 0; i < 5; i++) {
//       digitalWrite(ledPins[i], LOW);
//     }
//   }
// }