function verMais(){
    let mostrarCards = document.getElementsByClassName("cards-adicionais");
    let botao = document.getElementsByClassName("btn-secao");
    console.log(mostrarCards)
    for (i = 0; i < mostrarCards.length; i++) {
        mostrarCards[i].style.display = "block";
        botao[0].style.display = "none";
    }
}


function changeModeWhite(){
    const getBody = document.querySelector('body')
    getBody.classList.remove('altera');

    const getHeaderdesk = document.querySelector('header')
    getHeaderdesk.classList.remove('darkheader');

    const getHeadermob = document.getElementById('header-mobile')
    getHeadermob.classList.remove('darkheader');

    const getFooter = document.querySelector('footer')
    getFooter.classList.remove('darkheader');

    const getFooterp = document.getElementById('brancop')
    getFooterp.classList.remove('whitep');

    const getLogFund = document.getElementById('noite')
    if (getLogFund) {
        getLogFund.classList.remove('fundoLog');
    }

    const getSubti = document.getElementById('subt')
    if (getSubti) {
        getSubti.classList.remove('subs');
    }

    // const getLogFund = document.getElementById('noite')
    // getLogFund.classList.remove('fundoLog');

    // const getSubti = document.getElementById('subt')
    // getSubti.classList.remove('subs');


    // const getSubtitulo = document.getElementById('subt')
    // getSubtitulo.classList.remove('subs');

    

    setarModo('claro')
}

function changeModeDark(){
    const getBody = document.querySelector('body')
    getBody.classList.add('altera');

    const getHeaderdesk = document.querySelector('header')
    getHeaderdesk.classList.add('darkheader');

    const getHeadermob = document.getElementById('header-mobile')
    getHeadermob.classList.add('darkheader');

    const getFooter = document.querySelector('footer')
    getFooter.classList.add('darkheader');

    const getFooterp = document.getElementById('brancop')
    getFooterp.classList.add('whitep');

    //imagem

    const getLogFund = document.getElementById('noite')
    if (getLogFund) {
        getLogFund.classList.add('fundoLog');
    }

    const getSubti = document.getElementById('subt')
    if (getSubti) {
        getSubti.classList.add('subs');
    }

    // const getLogFund = document.getElementById('noite')
    // getLogFund.classList.add('fundoLog');

    //texto sobre nos branco
    // const getSubti = document.getElementById('subt')
    // getSubti.classList.add('subs');


    // const getSubtitulo = document.getElementById('subt')
    // getSubtitulo.classList.add('subs');

    setarModo('escuro')
}

function checarModo(){
    var modo = sessionStorage.getItem('modoSelecionado')
    console.log(modo);

    if(modo == 'claro'){
        changeModeWhite()
    } else {
        changeModeDark()
    }
}

function setarModo(cor) {
    // Armazenando a cor escolhida no sessionStorage
    sessionStorage.setItem('modoSelecionado', cor);
    
    // Alterando a cor de fundo do body imediatamente
    document.body.style.backgroundColor = cor;
}