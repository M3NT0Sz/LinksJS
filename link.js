const inputNome = document.querySelector("input[name='nome']")
const inputLink = document.querySelector("input[name='link']")
const btnGerarLink = document.querySelector("#gerar-link")

function addLink(){
    if(inputNome.value != "" && inputLink.value != ""){
        const section = document.querySelector("section")
        const ul = document.createElement("ul")
        const li = document.createElement("li")
        const linkElemento = document.createElement("a");
        linkElemento.innerHTML = inputNome.value;
        linkElemento.href = inputLink.value;
        linkElemento.target = "_blank";
        section.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(linkElemento);
        inputNome.value = "";
        inputLink.value = "";
    }
}