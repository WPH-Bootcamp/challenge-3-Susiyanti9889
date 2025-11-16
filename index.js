// code here, goodluck!!
"use strict";

//2. BASIC ARITHMETIC OPERATION
//Versi a,b = a + b
{
  let a = "a";
  let b = "b";
  function add(a, b) {
    return "a + b";
  }
  console.log(add(a, b));
}

//versi a + b = pakai angka
  let a = 1;
  let b = 2;
  function add(a, b) {
    return a + b;
  }
  console.log(add(a, b));

//Versi a,b = a - b
{
  let a = "a";
  let b = "b";
  function subtract(a, b) {
    return "a - b";
  }
  console.log(subtract(a, b));
}

//versi a - b = pakai angka
  function subtract(a, b) {
    return a - b;
  }
  console.log(subtract(a, b));

//Versi a,b = a * b
{
  let a = "a";
  let b = "b";
  function multiply(a, b) {
    return "a * b";
  }
  console.log(multiply(a, b));
}

//versi a * b = pakai angka
  function multiply(a, b) {
    return a * b;
  }
  console.log(multiply(a, b));

//divide(a, b): Returns a / b
//Handle division by zero: if b is 0, return a specific string like "Error: Division by zero!".
//a dan b nya dideklar terpisah
{
  let a = 1;
  let b = 0;
  function division(a, b)
  {if (b === 0)
  {return "Error: Division by Zero!";}
  else
  {return a/b;}
  }
  console.log(division(a,b));
}

//versi a / b = pakai angka yang dideklar pertama kali di fungsi add
  function division(a, b)
  {if (b === 0)
  {return "Error: Division by Zero!";}
  else
  {return a/b;}
  }
  console.log(division(a,b));

//versi a % b = pakai angka
  function modulo(a, b) {
    return a % b;
  }
  console.log(modulo(a, b));

//versi a ** b = pakai angka
  function power(a, b) {
    return a ** b;
  }
  console.log(power(a, b));


//3. MAIN CALCULATOR LOGIC (SWITCH & IF/ELSE)
{const prompt = require("prompt-sync")();

// Fungsi validasi angka
function getValidNumberInput(message) {
  while (true) {
    let input = prompt(message);

    if (!isNaN(input) && input.trim() !== "") {
      return Number(input);
    }

    console.log("Input bukan angka! Silakan masukkan angka yang benar.");
  }
}

// Fungsi validasi operator
function getValidOperatorInput() {
  const operators = ["+", "-", "*", "/", "%"];

  while (true) {
    let input = prompt("Masukkan operator (+, -, *, /, %): ");

    if (operators.includes(input)) {
      return input;
    }

    console.log("Operator tidak valid! Silakan ulangi.");
  }
}

// Fungsi operasi
function tambah(a, b) { return a + b; }
function kurang(a, b) { return a - b; }
function kali(a, b)   { return a * b; }
function bagi(a, b)   { return a / b; }
function modulo(a, b) { return a % b; }


console.log("=== Kalkulator Sederhana ===");

while (true) {
  const num1 = getValidNumberInput("Masukkan angka pertama: ");
  const num2 = getValidNumberInput("Masukkan angka kedua: ");
  const operator = getValidOperatorInput();

  let result;

  // Switch Logic
  switch (operator) {
    case "+":
      result = tambah(num1, num2);
      break;
    case "-":
      result = kurang(num1, num2);
      break;
    case "*":
      result = kali(num1, num2);
      break;
    case "/":
      if (num2 === 0) {
        console.log("Tidak bisa membagi dengan nol!");
        continue;
      }
      result = bagi(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    default:
      console.log("Operator tidak dikenal.");
      continue;
  }

  console.log(`Hasil: ${num1} ${operator} ${num2} = ${result}\n`);

  // Tanya apakah ingin lanjut
  let again = prompt("Hitung lagi? (y/n): ").toLowerCase();
  if (again !== "y") {
    console.log("Kalkulator berhenti. Terima kasih!");
    break;
  }
}
}


//4. DATA TYPE ANALYSIS & CONDITIONAL OUTPUT

if (add(a,b)>1) {
  console.log("Positif");
} else if (add(a,b)<1) {
  console.log(
    "Negatif" );
} else if (add(a,b)= 0)
  console.log("Nol");

if (subtract(a,b)>1) {
  console.log("Positif");
} else if (subtract(a,b)<1) {
  console.log(
    "Negatif" );
} else if (subtract(a,b)= 0)
  console.log("Nol");

  if (multiply(a,b)>1) {
  console.log("Positif");
} else if (multiply(a,b)<1) {
  console.log(
    "Negatif" );
} else if (multiply(a,b)= 0)
  console.log("Nol");

  if (division(a,b)>1) {
  console.log("Positif");
} else if (division(a,b)<1) {
  console.log(
    "Negatif" );
} else if (division(a,b)= 0)
  console.log("Nol");
  
  if (Number.isInteger(modulo(a,b>1))) {
  console.log("Positif");
} else if (Number.isInteger(modulo(a,b<1))) {
  console.log(
    "Negatif" );
} else if (Number.isInteger(modulo(a,b===0)))
  console.log("Nol");

if (Number.isInteger(power(a,b>1))) {
  console.log("Positif");
} else if (Number.isInteger(power(a,b<1))) {
  console.log(
    "Negatif" );
} else if (Number.isInteger(power(a,b===0)))
  console.log("Nol");

const resultArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "lima", "enam", "tujuh"];
const bukanAngka = [];
const angkaGenap = resultArray.filter(item => {
  if (typeof item !== "number") {
    bukanAngka.push(item);       // jika bukan angka
    return false;
  } else {
    return item % 2 === 0;       // angka genap
  }
});
const angkaGanjil = resultArray.filter(item => {
  if (typeof item !== "number") {
    return false;                // jangan masuk ke angka ganjil
  } else {
    return item % 2 !== 0;       // angka ganjil
  }
});

console.log("Angka Genap:", angkaGenap);
console.log("Angka Ganjil:", angkaGanjil);
console.log("Error: Division by zero!", bukanAngka);

let notNumber = null;
console.log(notNumber ?? "Result is undefined or null!");
console.log(notNumber || "Something went wrong!")

let angka1=100
let angka2=89
if (angka1> 0 && angka1% 2 === 0) {
  console.log("Positive and Even");
} else {
  console.log("Not Positive dan Even");
}
if (angka2> 0 && angka2% 2 === 0) {
  console.log("Positive and Even");
} else {
  console.log("Not Positive dan Even");
}
