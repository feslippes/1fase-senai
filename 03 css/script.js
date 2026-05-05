function adivinharNumero(){
  let numero = Math
}



let resposta = document.getElementById('resultado')

function verificarIdade(){
  //infos
  let idade
  //entradas
  idade = Number(prompt("Digite sua idade:"))
  //processamentos
  //saidas
  if(idade >= 18){
    resposta.innerHTML = "voce é maior de idade"
  }else{
    resposta.innerHTML = "voce é menor de idade"
  }
}

function recrutarMarujos(){
//infos
let idade
let saberNada, temRecomendacao
//entradas
idade = (prompt("qual a sua idade?:"))
saberNadar = (prompt("voçê sabe nadar?:"))
//saidas
if (saberNadar === "sim" && idade > 16) {
    console.log("Aprovado para o navio!");
    
} else if (saberNadar === "não" && temRecomendacao === true && idade >= 14) {
    console.log("Aprovado sob recomendação. Monitorar nas primeiras viagens.");
    
} else {
    console.log("Reprovado. Volte quando estiver mais preparado para o mar.");
}



}
//==========================================================================================================================
function verificarProvisoes(){

//infos
let marujos, comida
let comidaPorMarujo
//entradas
marujos = Number(prompt("Quantidade de marujos:"))
comida = Number(prompt("quilos de comida:"))
//processamentos
comidaPorMarujo = comida/marujos
//saidas
if(marujos >= 10 && comidaPorMarujo >= 1.5){
document.getElementById('resultado').innerHTML = "provisões suficientes. Rumo ao horizonte!"
}else{
    document.getElementById('resultado').innerHTML = "Algo esta errado, posseidom não quer ninguem no mar hoje."
}


}

//=========================================================================================================================
function calcularVariaveis(){

}
//=========================================================================================================================
function calcularChances(){

}
//=========================================================================================================================
function calcularPrecoBrique(){
    //INFORMAÇÔES
    let precoCompra, precoVenda
    //LEITURAS
    precoCompra = Number(prompt("preço de compra:"))
    //PROCESSAMENTOS
    precoVenda = precoCompra * 3
    //SAIDAS
    console.log("preço para venda: R$" + precoVenda.toFixed(2));
    alert("preço para venda: R$" + precoVenda.toFixed(2));

    document.getElementById("resultado").innerHTML = "preço para venda: R$"
     + precoVenda.toFixed(2);

} 
//==========================================================================================================================