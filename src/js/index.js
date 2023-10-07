const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem');



botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const persona = desselecionarPersonagem();
        desselecionarBotao();
        botao.classList.add('selecionado');



        persona.classList.remove('selecionado');
        personagens[indice].classList.add('selecionado');

     })
})



function desselecionarPersonagem() {
    return document.querySelector(".personagem.selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove('selecionado');
}

