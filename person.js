const header =document.querySelector('.header')

function getInfoPerson(person) {
    const personagemString = localStorage.getItem('personagem');
    const personagem = JSON.parse(personagemString);
    console.log(personagem);
    const span = document.createElement('span')

    span.textContent = personagem.nome

    header.appendChild(span)



    const body = document.querySelector('body')


    // background-repeat: no-repeat;
    // background-position: center;
    // background-size: cover;
  

    const bg = document.body.style.backgroundImage = `url(${personagem.bg})`;
    document.body.style.backgroundRepeat = `no-repeat`;
    document.body.style.backgroundPosition = `center`;
    document.body.style.backgroundSize = 'cover';
    console.log(bg)

}


getInfoPerson()