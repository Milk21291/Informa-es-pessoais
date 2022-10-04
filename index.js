const firstName = prompt('Coloque seu nome')
const lastName = prompt('Coloque seu sobrenome')
const age = prompt('Coloque sua idade')
const Weight = prompt('Coloque seu peso')
const heightInMeters = prompt('Coloque sua altura')
let imc = Weight / (heightInMeters * heightInMeters) // peso / (altura * altura)
let dataAtual = new Date();
let ano = dataAtual.getFullYear();
let birthyear = ano - age

console.log(`${firstName} ${lastName} tem ${age} anos, pesa ${Weight} kg tem ${heightInMeters} de altura, seu IMC é de ${imc} e ${firstName} ${lastName} nasceu em ${birthyear}`)