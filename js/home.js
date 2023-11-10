function verMais(){
    let mostrarCards = document.getElementsByClassName("cards-adicionais");
    let botao = document.getElementsByClassName("btn-secao");
    console.log(mostrarCards)
    for (i = 0; i < mostrarCards.length; i++) {
        mostrarCards[i].style.display = "block";
        botao[0].style.display = "none";
    }
}
