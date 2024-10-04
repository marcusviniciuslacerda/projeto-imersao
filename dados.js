resultados.forEach(atleta => {
    const itemResultado = document.createElement('div');
    itemResultado.classList.add('item-resultado');

    itemResultado.innerHTML = `
        <img src="${atleta.imagem}" alt="${atleta.nome}" class="imagem-atleta">
        <h2>${atleta.nome}</h2>
        <p>${atleta.esporte}</p>
        <p class="descricao-meta">${atleta.descricao}</p>
    `;

    resultadosContainer.appendChild(itemResultado);
});
