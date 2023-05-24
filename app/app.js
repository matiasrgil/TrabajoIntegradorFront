const form = document.getElementById("form");

const name = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const cantidad = document.getElementById("cantidad");
const cuadroTotal = document.getElementById("totalCuenta");

const addTotal = document.getElementById("btn-send");
const clear = document.getElementById("btn-clear");

const p_total = document.getElementById("p-total");
const p_$ = document.getElementById("p-$");
const categoria = document.getElementById("categoria");

var validador = 0;
var cat = categoria.value;
var cant = 0;
const ticket = 200;
let desc = 0;
let total = 0;

clear.addEventListener("click", (e) => {
  e.preventDefault();
  name.value = "";
  surname.value = "";
  email.value = "";
  cantidad.value = "";
  validador = 0;
  cuadroTotal.style.background = "#cce5ff";
  cuadroTotal.style.color = "#000";
  cuadroTotal.style.justifyContent = "space-between";
  p_total.style.paddingRight = "0rem";
  p_$.style.paddingLeft = "0rem";
  p_total.innerHTML = "";
  addTotal.innerHTML = "Resumen";
});

addTotal.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    (!(name.value.trim() == "") ||
      !(surname.value.trim() == "") ||
      !(email.value.trim() == "") ||
      !(cantidad.value.trim() == "")) &&
    validador > 0
  ) {
    form.submit();
  }

  validador++;
  if (
    name.value.trim() == "" ||
    surname.value.trim() == "" ||
    email.value.trim() == "" ||
    cantidad.value.trim() == ""
  ) {
    alert("Completa todos los datos");
    validador = 0;
  } else if (!isValidEmail(email.value)) {
    alert("Ingrese un correo electronico valido");
    validador = 0;
  } else {
    cuadroTotal.style.background = "#bfdeff";
    cuadroTotal.style.color = "#3916c8";
    cuadroTotal.style.border = "1px solid #3916c8";
    cuadroTotal.style.justifyContent = "center";
    addTotal.innerHTML = "Confirme su compra";
  }

  cat = categoria.value;
  cant = cantidad.value;
  switch (cat) {
    case "Estudiante":
      desc = 0.8;
      console.log("Adentro de 0.8");
      break;
    case "Trainee":
      desc = 0.5;
      console.log("Adentro de 0.5");
      break;
    case "Junior":
      desc = 0.15;
      console.log("Adentro de 0.15");
      break;
  }

  total = (ticket - ticket * desc) * cant;

  p_total.innerHTML = total;
});

function isValidEmail(email) {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}
