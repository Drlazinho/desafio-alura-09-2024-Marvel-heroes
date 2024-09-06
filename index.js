console.log(data)

const listCard = document.querySelector('.list_card')
const card = document.createElement('div')
card.classList.add('card');

function mapearCards() {
    data.forEach((person) => {
        listCard.appendChild(criarCardPersonagem(person)) 

     

        console.log(person.nome)
    })
}


function criarCardPersonagem(personagem) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.addEventListener('click', () => {
        localStorage.setItem('personagem', JSON.stringify(personagem));
        window.location.href = './person.html';
    })

    // Criar a seção da imagem
    const boxImg = document.createElement('div');
    boxImg.classList.add('box_img');
    const img = document.createElement('img');

    img.src = `./assets/${personagem.nome.toLowerCase().replace(/\s+/g, '-')}.jpg`; // Adaptar o caminho da imagem
    console.log(img.src)

    img.alt = personagem.nome;
    img.classList.add('img');
    boxImg.appendChild(img);

    // Criar a seção de dados
    const data = document.createElement('div');
    data.classList.add('data');

    // Criar os elementos de dados
    const criarElemento = (label, valor) => {
        const elemento = document.createElement('h3');
        elemento.innerHTML = `${label}: <span>${valor}</span>`;
        return elemento;
    };

    data.appendChild(criarElemento('Nome', personagem.nome));
    data.appendChild(criarElemento('Alias', personagem.alias));
    // ... adicionar outros elementos de dados

    // Criar a seção de poderes
    const boxSkill = document.createElement('div');
    boxSkill.classList.add('box_skill');
    const listaPoderes = document.createElement('div');
    listaPoderes.classList.add('list_skill');
    personagem.poderes.forEach(poder => {
        const span = document.createElement('span');
        span.textContent = poder;
        listaPoderes.appendChild(span);
    });
    boxSkill.appendChild(criarElemento('Poderes'));
    boxSkill.appendChild(listaPoderes);
    data.appendChild(boxSkill);

    // Criar a seção de relacionamentos
    const containerRelacionamento = document.createElement('div');
    containerRelacionamento.classList.add('container_relacionamento');
    // ... criar elementos para cada tipo de relacionamento
    data.appendChild(containerRelacionamento);

    card.appendChild(boxImg);
    card.appendChild(data);

    return card;
}

// Função para renderizar todos os personagens
function renderizarPersonagens(personagens) {
    const container = document.getElementById('container-personagens');
    personagens.forEach(personagem => {
        container.appendChild(criarCardPersonagem(personagem));
    });
}

mapearCards()