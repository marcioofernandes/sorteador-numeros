
// Aqui você está criando uma função, que define as variaveis dos campos onde digita o número no site

function sortear () {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

  let sorteados = [];

// Esse é um loop for, nem aprendi sobre ele nas aulas, pesquisar sobre
  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatório(de, ate);
    sorteados.push(numero);
  }

};

function obterNumeroAleatório (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

