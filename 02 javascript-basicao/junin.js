//infos
let salario, dias, salarioDiario
//entradas
salario = Number(prompt("Salario: "))
dias = Number(prompt("Dias trabalhados: "))
//processamentos
salarioDiario = salario/dias
//saidas
alert("salario diario: R$" + salarioDiario.toFixed(2) )
