const main = document.createElement("main");
const article = document.createElement("article");
const p = document.createElement("p");
const section = document.createElement("section");
const div = document.createElement("div");
const p2 = document.createElement("p");
const footer = document.createElement("footer");
const ul = document.createElement("ul");
const li = document.createElement("li");
const img = document.createElement("img");
const botao = document.createElement("button");
const a = document.createElement("a");
const input = document.createElement("input");
const botao2 = document.createElement("button");
const bodyElemento = document.querySelector("body");

p.innerHTML = "TEXTO PRINCIPAL"
p2.innerHTML = "TEXTO SECUNDARIO"
li.innerHTML = "Link Rodapé"
botao.innerHTML = "Voltar Principal"
botao2.innerHTML = "Sumir imagem"

function sumirImagem(){
    if(botao2.innerHTML === "Sumir imagem"){
        img.setAttribute("style", "display:none");
        botao2.innerHTML = "Aparecer imagem";
    }else{
        img.setAttribute("style", "display:; width:500px; height:300px;");
        botao2.innerHTML = "Sumir imagem";
    }
}

botao2.setAttribute("onclick", "sumirImagem()")

bodyElemento.setAttribute("style", "margin-left:20px;")
a.setAttribute("href","index.html")

img.setAttribute("src", "logo.jpg")
img.setAttribute("style", "width:500px; height:300px;")

bodyElemento.appendChild(main);
main.appendChild(article);
article.appendChild(p);
main.appendChild(section);
section.appendChild(div);
div.appendChild(p2);
bodyElemento.appendChild(footer);
footer.appendChild(ul);
ul.appendChild(li);
footer.appendChild(img);
bodyElemento.appendChild(a);
bodyElemento.appendChild(botao2);
a.appendChild(botao);
