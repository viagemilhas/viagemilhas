let lista_voos = [
    { 
        cidade: 'Salvador', 
        img_fundo: "img/imgsalvador_fundo.png",
        voos: [ 
            {
                data: "28/11/2023",
                horario:"23:30",
                preco:"305,00"
            },
            {
                data: "30/11/2023",
                horario:"17:00",
                preco:"545,25"
            },
            {
                data: "07/12/2023",
                horario:"13:30",
                preco:"738,00"
            }
        ]
    },
    { 
        cidade: 'Recife', 
        img_fundo: "img/imgrecife_fundo.png",
        voos: [ 
            {
                data: "28/11/2023",
                horario:"23:30",
                preco:"300,00"
            },
            {
                data: "29/11/2023",
                horario:"17:40",
                preco:"500,00"
            },
            {
                data: "02/12/2023",
                horario:"15:30",
                preco:"370,00"
            }
        ]
    },
    { 
        cidade: 'Blumenau', 
        img_fundo: "img/imgblumenau_fundo.png",
        voos: [ 
            {
                data: "28/11/2023",
                horario:"17:40",
                preco:"197,55"
            },
            {
                data: "28/11/2023",
                horario:"23:30",
                preco:"650,00"
            },
            {
                data: "29/12/2023",
                horario:"15:30",
                preco:"370,00"
            }
        ]
    },
    { 
        cidade: 'Rio de Janeiro', 
        img_fundo: "img/imgrj_fundo.png",
        voos: [ 
            {
                data: "28/11/2023",
                horario:"22:00",
                preco:"220,00"
            },
            {
                data: "29/11/2023",
                horario:"14:30",
                preco:"570,10"
            },
            {
                data: "02/12/2023",
                horario:"15:30",
                preco:"450,00"
            }
        ]
    },
    { 
        cidade: 'São Paulo', 
        img_fundo: "img/imgsp_fundo.png",
        voos: [ 
            {
                data: "29/11/2023",
                horario:"23:30",
                preco:"500,00"
            },
            {
                data: "06/11/2023",
                horario:"17:40",
                preco:"535,00"
            },
            {
                data: "09/12/2023",
                horario:"15:30",
                preco:"570,00"
            }
        ]
    },
    { 
        cidade: 'Vitória', 
        img_fundo: "img/imgvitoria_fundo.png",
        voos: [ 
            {
                data: "30/11/2023",
                horario:"23:30",
                preco:"333,00"
            },
            {
                data: "02/11/2023",
                horario:"15:30",
                preco:"857,00"
            },
            {
                data: "02/12/2023",
                horario:"17:40",
                preco:"470,00"
            }
        ]
    },
    { 
        cidade: 'Brasília', 
        img_fundo: "img/imgbrasiia_fundo.png",
        voos: [ 
            {
                data: "06/11/2023",
                horario:"23:30",
                preco:"480,00"
            },
            {
                data: "08/11/2023",
                horario:"17:40",
                preco:"752,99"
            },
            {
                data: "10/12/2023",
                horario:"15:30",
                preco:"389,00"
            }
        ]
    },
    { 
        cidade: 'Belo Horizonte', 
        img_fundo: "img/imgbelohorizonte_fundo.png",
        voos: [ 
            {
                data: "29/11/2023",
                horario:"23:30",
                preco:"496,10"
            },
            {
                data: "30/11/2023",
                horario:"17:40",
                preco:"285,15"
            },
            {
                data: "04/12/2023",
                horario:"15:30",
                preco:"170,99"
            }
        ]
    },
    { 
        cidade: 'Maceió', 
        img_fundo: "img/imgmaceio_fundo.png",
        voos: [ 
            {
                data: "29/11/2023",
                horario:"23:30",
                preco:"300,30"
            },
            {
                data: "01/11/2023",
                horario:"17:40",
                preco:"512,00"
            },
            {
                data: "03/12/2023",
                horario:"15:30",
                preco:"370,50"
            }
        ]
    },
];

let cidade;

function getCidade(){
    let cidadeSelecionada;
    cidadeSelecionada = window.sessionStorage.getItem("cidade");

    // achar no array o objeto da cidade selecionada
    cidade = lista_voos.find((destino) => destino.cidade == cidadeSelecionada);

    document.getElementById("nomeCidade").innerHTML = cidade.cidade.toUpperCase();

    // pegar imagem de fundo da cidade selecionada
    let imgFundo = document.getElementsByClassName("container-voos");
    imgFundo[0].style.backgroundImage = 'url('+ cidade.img_fundo +')';
    imgFundo[0].style.backgroundSize = 'cover';

    // criar cards com info dinamica da cidade selecionada
    let containerCards = document.getElementById("lista-cards");
    let cards = "";
    for(let i = 0; i < cidade.voos.length; i++){
        cards += `<div class="card-voos">
            <div class="card-column">
                <p class="informacoes-voos">Partida: São Paulo</p>
                <p class="informacoes-voos">Destino: ${cidade.cidade}</p>
            </div>
            <div class="card-column">
                <p class="informacoes-voos">Data: ${cidade.voos[i].data}</p>
                <p class="informacoes-voos">Horário: ${cidade.voos[i].horario}</p>
                <p class="informacoes-voos-preco">R$ ${cidade.voos[i].preco}</p>
            </div>
            <button class="btn-card-voos" onclick="confirmarVoo()">COMPRAR</button>
        </div>`
    }
    // inserir cards dinamicos no html da tela voos
    containerCards.innerHTML = cards

}

function confirmarVoo(){
    window.location.href = "confirmacao.html";
}


// `<div class="card-voos">
//     <div>
//         <p class="informacoes-voos">Partida: São Paulo</p>
//         <p class="informacoes-voos">Destino: ${cidade.cidade}</p>
//     </div>
//     <div>
//         <p class="informacoes-voos">Data: ${cidade.voos[i].data}</p>
//         <p class="informacoes-voos">Horário: ${cidade.voos[i].horario}</p>
//         <p class="informacoes-voos-preco">R$ ${cidade.voos[i].preco}</p>
//     </div>

//     <button class="btn-card-voos" onclick="confirmarVoo()">COMPRAR</button>
// </div>`
