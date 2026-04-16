programa {
  funcao inicio() {
    real salario = 1000
    inteiro dias
    real salarioDiario

    escreva("Digite o seu salário: ")
    leia(salario)
    escreva("quantos dias trabalhou no mes: ")
    leia(dias)
    salarioDiario = salario / dias
    escreva("\nPor dia voce recebe R$" + salarioDiario)
    salario = salario * 2
    escreva("\nTestando: " + salario) 
    

  }
}
