// Codigo que verifica espaco na caixa.

const requestForm = document.forms.form;
requestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkBox();
  getWeight();
  getName();
  endMsg();
});

function checkBox() {
  checkParts = document.getElementById("parts").value;
  if (checkParts > 10) {
    alert("Sem Espaco");
    return;
  } else if (checkParts == 0 || checkParts < 0) {
    alert("Quantidade Invalida!");
    return (checkParts = document.getElementById("reset")).value;
  }
}

//
let checkWeight;
function getWeight() {
  checkWeight = document.getElementById("weight").value;
  if (checkWeight < 100) {
    alert("Peso Invalido!");
    return;
  }
}
//
let checkName = "";
function getName() {
  // Fallback
  checkName = document.getElementById("name").value;
  if (checkName.length <= 3) {
    alert("Quantidade de caracteres dever ser superior 3");
    return;
  }
}

function endMsg() {
  if (checkParts < 10 && checkWeight >= 100 && checkName.length > 3) {
    alert("Peça Adicionada");

    return;
  }
}
