# 🎲 Dice Roller in C

This is a simple C program that simulates rolling a dice. When you run the program, it randomly generates and displays a number between **1 and 6**, just like a real dice.

---

## 🧠 How It Works

- The program uses `rand()` to generate a random number.
- It seeds the random number generator with the current time using `srand(time(0))` so that you get a different result each time you run the program.
- It then prints the result of the dice roll to the screen.

---

## 🛠️ Requirements

- C Compiler (e.g., `gcc`)
- A terminal or command-line interface

---

## ▶️ How to Run

1. **Compile the code:**

   ```bash
   gcc dice.c -o dice
