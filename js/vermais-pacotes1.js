function verMaispacotes1(){
    let verCards = document.getElementsByClassName("card-pacote-vermais1");
    console.log(verCards)
    for (i = 0; i < verCards.length; i++) {
        verCards[i].style.display = "block";
    }
}