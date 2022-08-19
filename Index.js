const listaPecas = ["Buzina", "Vidros", "Bateria"]

console.log ( "-----------" )
console.log ( "Início do Processamento" )
console.log ( "-----------" )

let pesoPeca = 120
if (pesoPeca > 100) {console.log ("Cadastro Permitido")}
else {console.log ("Cadastro não permitido: Peso não alcançado")}

console.log ("-----------")
console.log ("fim do processamento")
console.log ("-----------")
console.log ("Início do processamento")
console.log ("-----------")

let qtdePeca = 14
if ( qtdePeca > 10) {console.log ("Cadastro não permitido: Limite da caixa ultrapassado")}
else {console.log ("Cadastro permitido")}

console.log ("-----------")
console.log ("fim do processamento")
console.log ("-----------")
console.log ("Início do processamento")
console.log ("-----------")

let nomePecas = listaPecas[1]
if ( nomePecas.length < 3 ) {console.log ("Cadastro não permitido: Nome Inválido")}
else {console.log (" Cadastro Permitido")}

console.log ("-----------")
console.log ("fim do processamento")
console.log ("-----------")

