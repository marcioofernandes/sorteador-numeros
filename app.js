
// Aqui você está criando uma função, que define as variaveis dos campos onde digita o número no site

function sortear () {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (de > ate) {
      alert ("O número digitado no campo DE é maior que o campo ATÉ");
      return;
    }

    if (quantidade > (de - ate + 1)) {
      alert ("Campo QUANTIDADE deve ser menor ao intervalo mencionado no campo DE e ATE");
      return;
        
    }

  let sorteados = [];

// Esse é um loop for, nem aprendi sobre ele nas aulas, pesquisar sobre
  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatório(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatório (de, ate);
    }

    sorteados.push(numero);
  }
//trecho do código onde aparece os numeros sorteados na tela
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
  alterarStatusBotao ();
};

function obterNumeroAleatório (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
//funcão para habilitar e desabilitar botões 
function alterarStatusBotao () {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains(`container__botao-desabilitado`)) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container_botao")
    botao.classList.add("container__botao-desabilitado");

  }
}
// ativando botão reiniciar"
function reiniciar (){
  document.getElementById("quantidade").value = ''; 
  document.getElementById("de").value = ''; 
  document.getElementById("ate").value = ''; 
  document.getElementById("resultado").innerHTML = 'Números sorteados:  nenhum até agora<'; 
  alterarStatusBotao(); 
}