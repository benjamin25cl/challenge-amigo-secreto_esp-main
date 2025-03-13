// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

let amigos = [];

function agregarAmigo() {
    if (amigo.value === '') {
        alert('Por favor, inserte un nombre');
        return;
    }
    amigos.push(amigo.value);
    amigo.value = '';
    mostrarAmigos();
    console.log(amigos);
}

function mostrarAmigos() {
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo) => {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, inserte al menos un amigo');
        return;
    }
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    listaAmigos.innerHTML = '';
    resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
}
