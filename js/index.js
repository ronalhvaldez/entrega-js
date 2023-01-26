let nombre = prompt("hi! whats your name?");
let edad = Number(prompt("how old are you?"));

do {
  if (isNaN(edad)) {
    alert("Error, please enter a valid data");
    edad = Number(prompt("how old are you again?"));
  } else if (edad < 18) {
    alert("you are underage, you can't be here");
    edad = Number(prompt("how old are you again?"));
  } else {
    console.log("welcome");
  }
} while (edad < 18 || isNaN(edad));

alert("hi,  " + nombre + "! welcome to lofi!");
