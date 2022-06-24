//5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
//“Pessoa” é a mais nova.

let ademar = 70
let adriana = 40
let julia = 22

if(ademar < adriana && ademar < julia){
    console.log('ademar é o mais novo')
}else if (adriana < ademar && adriana < julia){
    console.log('adriana é a mais nova')
}else{
    console.log('julia é a mais nova')
}