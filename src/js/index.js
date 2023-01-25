/* 

OBJETIVO 1 - Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer;

    + Passo 1 - Dar um jeito de pegar o elemento que representa o botão na tela usando o JS;
    + Passo 2 - Dar um jeito de identificar quando o usuário clicar no botão;
    + Passo 3 - Dar um jeito de pegar o elemento da modal no JS;
    + Passo 4 - Abrir a modal na tela;

OBJETIVO 2 - Quando o usuário clicar no X devemos fechar a modal

    + Passo 1 - Dar um jeito de fechar o modal usando o JS
    + Passo 2 - Dar um jeito de Idenficar quando o usuário clicar no X
    + Passo 3 - Fechar a modal

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal()
{
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click",  () => {
    alternarModal();
    //video.setAttribute("src", "https://www.youtube.com/embed/Cb4WV4aXBpk");
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

