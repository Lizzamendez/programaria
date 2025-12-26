document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const numero = document.getElementById("numero").value.trim();

  if(nome !== "" && email !== "" && numero !== ""){
    alert("Prontinho, você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome, email e telefone!")
  }
}
  
