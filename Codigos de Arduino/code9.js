// Código de Parpadeo de 1/2 segundo por ciclo (Rápido)

// int led1 = 2;
// int buttonState = LOW;
// int prevButtonState = LOW;
// bool isButtonPressed = false;

// void setup()
// {
//   pinMode(led1, OUTPUT);
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
//     digitalWrite(led1, HIGH);
//     delay(500);
//     digitalWrite(led1, LOW);
//     delay(500);
//   }
// }