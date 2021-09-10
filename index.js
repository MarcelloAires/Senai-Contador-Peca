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
    return console.log("Peca Adicionada");
  } else {
    return console.log("Sem Espaco");
  }
}

let checkWeight = undefined;
function getWeight() {
  // Recebe o valor do input e salva na variavel checkWeight
  checkWeight = document.getElementById("sendweight").value;
  // id returnweight recebe  o conteudo da variavel checkWeight
  document.getElementById("return").innerHTML = checkWeight;

  if (checkWeight >= 100) {
    return console.log("Peso Ok");
  } else {
    return console.log("Peso Invalido!");
  }
}

let checkName = "";
function sendName() {
  checkName = document.getElementById("sendname").value;
  document.getElementById("return").innerHTML = checkName;
  //
  const qtdLetras = 3;
  if (checkName.length > qtdLetras) {
    return console.log(`Nome da Peca ${checkName}`);
  } else {
    return console.log("Quantidade de Letras invalido");
  }
}
