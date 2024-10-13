const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(listaSelecaoPokedevs);

listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        esconderCartaoPokedev();

        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);

        desativarPokedevDaListagem();

        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
    });
});

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoListagem.classList.add("ativo");
}

function desativarPokedevDaListagem() {
    const pokedevAtivoListagem = document.querySelector(".ativo");
    pokedevAtivoListagem.classList.remove("ativo");
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;

    const cartaoPokedevParaAbrir = document.getElementById(idCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}