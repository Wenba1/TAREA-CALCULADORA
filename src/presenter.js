import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const sumarForm = document.querySelector("#sumar-form");
// Eliminado: const form = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-div");

// Añadir eventos a los botones y manejar las operaciones en el mismo form
sumarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  
  if (event.submitter.id === "sumar-button") {
    div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  } else if (event.submitter.id === "multiplicar-button") {
    div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
  }
});
