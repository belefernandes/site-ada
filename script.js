 // if= SE  else=SE NÃO ou caso não
// else if= SE NÃO SE  
// os campos estão preenchidos?       se sim, envia o formulário 
//se não, mostra a mensagem de erro.
// e = && se o 1 for preenchido e o 2 tb, ai sim, envia o formulário

// igual == 
// diferente !=
// string é "texto"
//função bloco de códico que quer q aconteça quando algo acontecer


document.getElementById("botao").addEventListener("click", validaFormulario)

function validaFormulario(){

    if(document.getElementById("nome").value != "" &&            document.getElementById("email").value !=  "" &&
    document.getElementById("telefone").value != ""){
      
  alert("Pronto! Agora você vai receber as novidades por email !") 
  }
  else{
    alert("Por favor, preencha os campos nome e email!")
  }
}