// Validação do formulario após o click no botão enviar 

function formvalidate(){

// -------------- CRIAÇÃO DAS CONST PARA CHAMADAS DO HTML
const nome = document.getElementById('nome')
const senha = document.getElementById('senha')
const cep = document.getElementById('cep')
const telefone = document.getElementById('telefone')
const numerocasa = document.getElementById('numerocasa')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

// CRIAR UMA LISTA DE EVENTOS PARA TRATAR  OS INPUTS
form.addEventListener('submit', (e) =>{

let mensagens = []

if(nome.value ==="" || nome.value == null){

  mensagens.push('Preencha seu nome corretamente')

}

if(senha.value === "" || senha.value == null){
  mensagens.push(' Senha inválida')
  senha.focus()
}

if(senha.value.length < 6 || senha.value.length > 10) {
  mensagens.push('A senha deve conter entre 6 a 10 digitos')
  senha.focus()
}

if(cep.value.length != 8){
  mensagens.push('\nCep inválido')
  cep.focus()
}

if(telefone.value.length != 11 ){
  mensagens.push('\nTelefone Inválido, Deve conter 11 digitos com o DDD')
  telefone.focus()
}

if(numerocasa.value == "" || numerocasa.value == null ){
  mensagens.push('\n Informe o Número de sua Residência ')
  numerocasa.focus()
}




if (mensagens.length > 0 ){  //LOGICA SE HOUVER ALGUM ERRO RETORNA AS MENSAGENS DE ERRO

    e.preventDefault()
    errorElement.innerText = mensagens.join(', ')
}


})
}
