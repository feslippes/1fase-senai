programa {
  funcao inicio() {
    // informações 
  real precoporQuilo = 10
  real precoPorGrama = precoporQuilo / 1000
  real peso
  real precoTotal


  //leitura de dados
  escreva("Digite o peso (g): ")
  leia(peso)
  //processamentos
  precoTotal = peso * precoPorGrama
  //saidas
  escreva("Valor a pagar: R$" + precoTotal)
  }
}
