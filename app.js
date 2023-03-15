const lista = document.querySelector("header");
const botao = document.querySelector("button");
const titulo = document.querySelector("title");

lista.setAttribute("class", "class-pao-de-queijo");

lista.innerHTML = "<ul><li>Pão de queijo</li></ul>"

function mudarTexto(){
    if(lista.innerHTML === "<ul><li>Pão de queijo</li></ul>"){
        lista.innerHTML = "<ul><li>Pão de batata</li></ul>"
        titulo.innerHTML = "Pão de batata"
        botao.innerHTML = "Pão de batata"
    }else{
        lista.innerHTML = "<ul><li>Pão de queijo</li></ul>"
        titulo.innerHTML = "Pão de queijo"
        botao.innerHTML = "Pão de queijo"
    }
}

const novoElemento = document.createElement("main");
const bodyElemento = document.querySelector("body");

bodyElemento.appendChild(novoElemento);

console.log(lista);