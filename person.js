const header =document.querySelector('.header')

function getInfoPerson(person) {
    const personagemString = localStorage.getItem('personagem');
    const personagem = JSON.parse(personagemString);

    //Nome
    const headerPerson = document.querySelector('.header_person');
    const nomePerson1 = document.createElement('h1');
    const nomePerson2 = document.createElement('h2');
    nomePerson1.textContent = personagem.alias;
    nomePerson2.textContent = personagem.nome;
    headerPerson.appendChild(nomePerson1)
    headerPerson.appendChild(nomePerson2)

    // Descrição da Bio
    const biografia = document.querySelector('.biografia')
    const descricaoBio = document.createElement('p')
    descricaoBio.textContent = personagem.biografia
    biografia.appendChild(descricaoBio)

    // const body = document.querySelector('body')


    // background-repeat: no-repeat;
    // background-position: center;
    // background-size: cover;
  

    const bg = document.body.style.backgroundImage = `url(${personagem.bg})`;
    document.body.style.backgroundRepeat = `no-repeat`;
    document.body.style.backgroundPosition = `center`;
    document.body.style.backgroundSize = 'cover';
    console.log(bg)

}

function voltar() {
    window.location.href = './index.html';

}

getInfoPerson()