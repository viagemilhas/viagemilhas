// Esta funcão redireciona todos os cards da página pacotes para a página de confirmação, quando
// o usuario clica em qualquer card

function redirecionamento(){
    window.location.href = "confirmacao.html";
}

function verMaispacotes1() {
    let verCards = document.getElementsByClassName("card-pacote-vermais1");
    let botao = document.getElementsByClassName("btn-secao");
    
    for (let i = 0; i < verCards.length; i++) {
        if (verCards[i].style.display === "none" || verCards[i].style.display === "") {
            // Se estiver oculto, exibe
            verCards[i].style.display = "block";
            // botao[0].setAttribute('disabled', '')
            botao[0].style.display = "none";
        }
    }
}

function verMaispacotes2(){
    let verCards2 = document.getElementsByClassName("card-pacote-vermais2");
    let botao = document.getElementsByClassName("btn-secao");

    console.log(verCards2)
    for (i = 0; i < verCards2.length; i++) {
        verCards2[i].style.display = "block";
        botao[1].style.display = "none";
    }
}