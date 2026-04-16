programa {
  funcao inicio() {
  inteiro preco
  real saldo
  //--------------------------------------------------------------------------------
  escreva("qual o valor do item? ")
  leia(preco)
  escreva("e qual o seu saldo? ")
  leia(saldo)
  //--------------------------------------------------------------------------------
  se(saldo > preco){
  escreva("você pode comprar esse item! ")
  }senao{
  escreva("você não possui um saldo suficiente para realizar esta compra. ")
  }
  }
}
