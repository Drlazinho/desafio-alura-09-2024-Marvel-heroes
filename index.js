console.log(data);

const listCard = document.querySelector(".list_card");
const card = document.createElement("div");
card.classList.add("card");

function mapearCards() {
  data.forEach((person) => {
    listCard.appendChild(criarCardPersonagemInner(person));

    console.log(person.nome);
  });
}

function criarCardPersonagem(personagem) {
  const card = document.createElement("div");
  card.classList.add("card");

  // card.addEventListener('click', () => {
  //     localStorage.setItem('personagem', JSON.stringify(personagem));
  //     window.location.href = './person.html';
  // })

  // Criar a seção da imagem
  const boxImg = document.createElement("div");
  boxImg.classList.add("box_img");
  const img = document.createElement("img");

  img.src = `./assets/${personagem.nome
    .toLowerCase()
    .replace(/\s+/g, "-")}.jpg`; // Adaptar o caminho da imagem
  console.log(img.src);

  img.alt = personagem.nome;
  img.classList.add("img");
  boxImg.appendChild(img);

  // Criar a seção de dados
  const data = document.createElement("div");
  data.classList.add("data");

  //Header da Data
  const header_name = document.createElement("div");
  header_name.classList.add("header_name");
  const nome = document.createElement("h3");
  const nome2 = document.createElement("h3");
  nome.textContent = personagem.nome;
  nome.textContent = personagem.alias;

  header_name.appendChild();

  // Criar os elementos de dados
  const criarElemento = (label, valor) => {
    const elemento = document.createElement("h3");
    elemento.innerHTML = `${label}: <span>${valor}</span>`;
    return elemento;
  };

  data.appendChild(criarElemento("Nome", personagem.nome));
  data.appendChild(criarElemento("Alias", personagem.alias));
  // ... adicionar outros elementos de dados

  // Criar a seção de poderes
  const boxSkill = document.createElement("div");
  boxSkill.classList.add("box_skill");
  const listaPoderes = document.createElement("div");
  listaPoderes.classList.add("list_skill");
  personagem.poderes.forEach((poder) => {
    const span = document.createElement("span");
    span.textContent = poder;
    listaPoderes.appendChild(span);
  });
  boxSkill.appendChild(criarElemento("Poderes"));
  boxSkill.appendChild(listaPoderes);
  data.appendChild(boxSkill);

  // Criar a seção de relacionamentos
  const containerRelacionamento = document.createElement("div");
  containerRelacionamento.classList.add("container_relacionamento");
  // ... criar elementos para cada tipo de relacionamento
  data.appendChild(containerRelacionamento);

  card.appendChild(boxImg);
  card.appendChild(data);

  return card;
}

function gerarLista(list) {
    const fragment = document.createDocumentFragment();
    let arrSpan = []
    list.forEach((item) => {
        arrSpan.push(`<span>${item}</span>`)
    })

    const format = arrSpan.join('')
    return format
    console.log(format)
  }

function criarCardPersonagemInner(personagem) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
            <div class="box_img">
              <img class="img" src="./assets/${personagem.nome
                .toLowerCase()
                .replace(/\s+/g, "-")}.jpg" alt="" />
            </div>
             <div class="data">
              <div class="header_name">
                <h3>${personagem.alias}</h3>
                <h3>(${personagem.nome})</h3>
              </div>
              <div class="main_data">
                <div class="container_info">
                  <div class="box_comp">
                    <h3>Afiliação:</h3>
                    <div class="list_comp">
                        ${gerarLista(personagem.afiliacoes)}
                    </div>
                  </div>

                  <div class="box_skill">
                    <h3>Poderes:</h3>
                    <div class="list_skill">
                        ${gerarLista(personagem.poderes)}
                    </div>
                  </div>

                  <div class="box_freak">
                    <h3>Fraquezas:</h3>
                    <div class="list_freak">
                        ${gerarLista(personagem.fraquezas)}
                    </div>
                  </div>
                  <a id="btn-abrir-modal" target="_parent" onclick=""
                    >Ver mais...</a
                  >
                </div>

                <div class="container_relacionamento">
                  <h3>Relacionamentos:</h3>
                  <div class="content_relacionamento">
                    <div class="rel_amigos">
                      <span class="icon">😀</span>
                      <h4>Amigos</h4>
                      <p>Cap</p>
                      <p>Thor</p>
                    </div>
                    <div class="rel_inimigos">
                      <span class="icon">👿</span>
                      <h4>Inimigos</h4>
                      <p>Dinamo Escarlate</p>
                      <p>Chic Negro</p>
                    </div>
                    <div class="rel_familiares">
                      <span class="icon">👨‍👩‍👦‍👦</span>
                      <h4>Familiares</h4>
                      <p>Stark</p>
                    </div>
                    <div class="rel_romanticos">
                      <span class="icon">💕</span>
                      <h4>Romântico</h4>
                      <p>Pepper</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `;


    const listComp = card.querySelector('.list_comp');

  return card;
}

// Função para renderizar todos os personagens
function renderizarPersonagens(personagens) {
  const container = document.getElementById("container-personagens");
  personagens.forEach((personagem) => {
    container.appendChild(criarCardPersonagem(personagem));
  });
}

mapearCards();
