cep.onkeyup = () => {
    if(cep.value.length == 8){
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(response => response.json())
    .then(resposta2 => {
        if(resposta2.erro){
            alert('CEP não encontrado')
        }else{
          rua.value = resposta2.logradouro
          bairro.value = resposta2.bairro
          cidade.value = resposta2.localidade
          estado.value = resposta2.uf
        
        }
        
    })
    }
}