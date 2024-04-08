// Código de Switch botón: un clic encendido, un clic apagado.

// const int led1 = 4;
// const int buttonPin1 = 5;

// // Variable para almacenar el estado del botón anterior
// int prevButtonState = LOW;

// // Variable para almacenar el estado del LED
// int ledState = LOW;

// void setup() {
//   pinMode(led1, OUTPUT);
//   pinMode(buttonPin1, INPUT);
// }

// void loop() {
//   // Leer el estado actual del botón
//   int buttonState = digitalRead(buttonPin1);

//   // Si el estado anterior del botón es bajo y el estado actual es alto (se ha presionado el botón)
//   if (prevButtonState == LOW && buttonState == HIGH) {
//     // Cambiar el estado del LED (encender o apagar)
//     ledState = (ledState == LOW) ? HIGH : LOW;
//     digitalWrite(led1, ledState);
//   }

//   // Actualizar el estado anterior del botón
//   prevButtonState = buttonState;
// }