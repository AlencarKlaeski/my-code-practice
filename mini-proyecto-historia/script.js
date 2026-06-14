const button = document.getElementById('start');
const showUser = document.getElementById('showUser');

button.addEventListener('click', () =>{
    const sustantivo = prompt('Pon aqui un sustantivo');
    const adjetivo = prompt('Pon aqui un adjetivo')

    if(!sustantivo || !adjetivo){
        showUser.textContent = 'Una vez me encontre con alguien desobediente';
    } else{

    const historia = `Una vez me econtre con un ${sustantivo} ${adjetivo}`;

    showUser.textContent = historia;
    }
})