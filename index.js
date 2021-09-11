// Codigo que verifica espaco na caixa.

const requestForm = document.forms.form;
requestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkBox();
  getWeight();
  getName();
  fim();
});

function checkBox() {
  checkParts = document.getElementById("parts").value;
  if (checkParts > 10) {
    alert("Sem Espaco");
    return;
  }
}

//
let checkWeight = undefined;
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
  checkName = document.getElementById("name").value;
  if (checkName.length <= 3) {
    alert("Quantidade de caracteres dever ser superior 3");
    return;
  }
}

function fim() {
  if (checkParts < 10 && checkWeight >= 100 && checkName > 3) {
    alert("Peça Adicionada");
    
    return console.log(listParts);
  }
}
