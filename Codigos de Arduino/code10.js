// Código de Parpadeo de 2 segundos en 2 leds (más lento).

// const int ledPins[] = {3, 2};
// int buttonState = LOW;
// int prevButtonState = LOW;
// bool isButtonPressed = false;

// void setup()
// {
//   for (int i = 0; i < 2; i++) {
//     pinMode(ledPins[i], OUTPUT);
//   }
//   pinMode(8, INPUT);
// }

// void loop()
// {
//   buttonState = digitalRead(8);

//   // Si el estado anterior del botón es bajo y el estado actual es alto (se ha presionado el botón)
//   if (prevButtonState == LOW && buttonState == HIGH) {
//     isButtonPressed = true;
//   }

//   prevButtonState = buttonState;

//   if (isButtonPressed) {
//     digitalWrite(ledPins[0], HIGH);
//     digitalWrite(ledPins[1], HIGH);
//     delay(500); // Esperar 2 segundos
//     digitalWrite(ledPins[0], LOW);
//     digitalWrite(ledPins[1], LOW);
//     delay(2000); // Esperar 0.5 segundos antes de repetir
//   }
// }