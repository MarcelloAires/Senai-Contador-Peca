// Codigo que verifica espaco na caixa.

const requestForm = document.forms.form;
requestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeight();
  sendName();
  checkBox();
});

let getQtd = [];
function checkBox() {
  getQtd = document.getElementById("sendqtd").value;
  document.getElementById("return").innerHTML = getQtd;

  if (getQtd < 10) {
    getQtd = getQtd.push;
    console.log(1)
  } else {
    console.log(2);
  }
}

let checkWeight = undefined;
function getWeight() {
  // Recebe o valor do input e salva na variavel checkWeight
  checkWeight = document.getElementById("sendweight").value;
  // id returnweight recebe  o conteudo da variavel checkWeight
  document.getElementById("return").innerHTML = checkWeight;

  if (checkWeight >= 100) {
    console.log(1/1);
  } else {
    console.log(2/2);
  }
}

let checkName = "";
function sendName() {
  checkName = document.getElementById("sendname").value;
  document.getElementById("return").innerHTML = checkName;
  //
  const qtdLetras = 3;
  if (checkName.length > qtdLetras) {
    console.log(1/3
  } else {
  }
}
