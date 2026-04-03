programa {
  funcao inicio() {
    
  //criar variaveis
  inteiro clt, estagiarios, pj, total
  //ler valores de entrada
  escreva("quantidade de CLTs: ")
  leia(clt)

  escreva("quantidade de estagiarios: ")
  leia(estagiarios)

  escreva("quantidade de PJs: ")
  leia(pj)
  //processar / calcular
  total = clt + estagiarios + pj
  //mostrar os resultados
  escreva("----------\n")
  escreva("Total de devs: " + total)

  }
}
