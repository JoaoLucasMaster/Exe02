function contar(){
    let inicio = document.getElementById('text')
    let fim = document.getElementById('textfim')
    let passo = document.getElementById('textpasso')
    if(inicio.nodeValue==0 || fim.nodeValue.length == 0 || passo.nodeValue.length == 0){
        window.alert('[ERROR] faltam para completar a operação!')
    }
    else{
        alert('Tudo certo!')
    }
}