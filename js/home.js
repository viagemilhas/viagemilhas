function verMais(){
    let mostrarCards = document.getElementsByClassName("cards-adicionais");
    console.log(mostrarCards)
    for (i = 0; i < mostrarCards.length; i++) {
        mostrarCards[i].style.display = "block";
    }
}
