const listCard = document.querySelector(".list_card");
const card = document.createElement("div");
card.classList.add("card");

function mapearCards(value) {
    listCard.innerHTML = "";
    console.log(value)
  if (!value) {
    data.forEach((person) => {
      listCard.appendChild(criarCardPersonagemInner(person));
    });
  }

  if (value) {
    console.log(value)
    value.forEach((person) => {
        listCard.appendChild(criarCardPersonagemInner(person));
      });
    }
}

function gerarLista(list) {
  let arrSpan = [];
  list.forEach((item) => {
    arrSpan.push(`<span>${item}</span>`);
  });

  const format = arrSpan.join("");
  return format;
}
function gerarListaRel(list) {
  let arrSpan = [];
  list.forEach((item) => {
    arrSpan.push(`<p>${item}</p>`);
  });

  const format = arrSpan.join("");
  return format;
}

function criarCardPersonagemInner(personagem) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.addEventListener("click", () => {
    localStorage.setItem("personagem", JSON.stringify(personagem));
    window.location.href = "./person.html";
  });

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
                    >Clique no card para ver mais</a
                  >
                </div>

                <div class="container_relacionamento">
                  <h3>Relacionamentos:</h3>
                  <div class="content_relacionamento">
                    <div class="rel_amigos">
                      <span class="icon">😀</span>
                      <h4>Amigos</h4>
                    ${gerarListaRel(personagem.relacionamentos.amigos)}

                    </div>
                    <div class="rel_inimigos">
                      <span class="icon">👿</span>
                      <h4>Inimigos</h4>
                                     ${gerarListaRel(
                                       personagem.relacionamentos.inimigos
                                     )}

                    </div>
                    <div class="rel_familiares">
                      <span class="icon">👨‍👩‍👦‍👦</span>
                      <h4>Familiares</h4>
                                                        ${gerarListaRel(
                                                          personagem
                                                            .relacionamentos
                                                            .familiares
                                                        )}

                    </div>
                    <div class="rel_romanticos">
                      <span class="icon">💕</span>
                      <h4>Romântico</h4>
                                     ${gerarListaRel(
                                       personagem.relacionamentos.romanticos
                                     )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `;

  const listComp = card.querySelector(".list_comp");

  return card;
}

const searchInput = document.querySelector("input");
const searchButton = document.querySelector("#submit");

// ... (rest of your code)

searchButton.addEventListener("onsubmit", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  const filteredData = data.filter((person) => {
    return (
      person.nome.toLowerCase().includes(searchTerm) ||
      person.alias.toLowerCase().includes(searchTerm)
    );
  });

  listCard.innerHTML = "";
  mapearCards(filteredData);
});

function pesquisar(event) {
  // Obter o valor digitado
  const termoBusca = document.getElementById("campo-de-busca").value; // Substitua "campo-de-busca" pelo ID correto do seu input
  event.preventDefault(); // Impede o comportamento padrão

  const resultados = data.filter((personagem) => {
    const nomeMinusculo = personagem.nome.toLowerCase();
    const aliasMinusculo = personagem.alias.toLowerCase();
    const termoBuscaMinusculo = termoBusca.toLowerCase();
    return (
      nomeMinusculo.includes(termoBuscaMinusculo) ||
      aliasMinusculo.includes(termoBuscaMinusculo)
    );
  });

  // Realizar a busca (simplificada)
  mapearCards(resultados);
  // Mostrar os resultados (exemplo)
  const resultadoElement = document.getElementById("resultados");
  // resultadoElement.innerHTML = ""; // Limpa os resultados anteriores

  console.log(termoBusca);
}

function limpar(e) {
    e.preventDefault();
    document.getElementById("campo-de-busca").value = ""; // Substitua "campo-de-busca" pelo ID correto do seu input

    mapearCards();
}
mapearCards();
