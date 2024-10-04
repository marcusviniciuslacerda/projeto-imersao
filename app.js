// Simulação de uma lista de atletas
const atletas = [
    { nome: "Ana Silva", esporte: "Natação", descricao: "Atleta olímpica de natação." },
    { nome: "Bruno Souza", esporte: "Vôlei", descricao: "Capitão da equipe de vôlei brasileira." },
    { nome: "Carla Menezes", esporte: "Ginástica", descricao: "Especialista em ginástica artística." },
    { nome: "Daniel Oliveira", esporte: "Atletismo", descricao: "Corredor de maratonas e campeonatos internacionais." }
];

 Função que pesquisa atletas pelo nome
function pesquisarAtleta() {
    const input = document.querySelector('input');
    const resultadosContainer = document.querySelector('.resultados-pesquisa');
    const query = input.value.toLowerCase();

    // Limpa os resultados anteriores
    resultadosContainer.innerHTML = '';

    // Filtra os atletas que correspondem à pesquisa
    const resultados = atletas.filter(atleta => 
        atleta.nome.toLowerCase().includes(query)
    );

    if (resultados.length === 0) {
        resultadosContainer.innerHTML = '<p>Nenhum atleta encontrado.</p>';
        return;
    }

    // Exibe os resultados
    resultados.forEach(atleta => {
        const itemResultado = document.createElement('div');
        itemResultado.classList.add('item-resultado');

        itemResultado.innerHTML = `
            <h2>${atleta.nome}</h2>
            <p>${atleta.esporte}</p>
            <p class="descricao-meta">${atleta.descricao}</p>
        `;

        resultadosContainer.appendChild(itemResultado);
    });
}

// Adiciona um evento ao botão de pesquisa
const botaoPesquisar = document.querySelector('button');
botaoPesquisar.addEventListener('click', pesquisarAtleta);*/

