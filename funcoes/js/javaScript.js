function funcaoGeral() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    const pessoas = [];

    // forma 1 de fazer:
    //    form.onsubmit = function (evento) {
    //       evento.preventDefault();
    //     alert(1);
    // };

    function recebeForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value
        });

        resultado.innerHTML += `<p>nome = ${nome.value}</p> <br>
        <p>sobrenome = ${sobrenome.value}</p>
        <br>
        <p>idade = ${idade.value}</p>
        <br>
        <p>peso = ${peso.value}
        `
    };
    form.addEventListener('submit', recebeForm);
};
funcaoGeral();