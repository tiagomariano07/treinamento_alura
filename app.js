let amigos = [];

function exibirAmigos(amigos) {
    const lista = document.getElementById('amigos');
    
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value; 
    if (amigo.trim() === '') {
        alert('Por favor, insira um nome de amigo.'); 
    } else if (amigos.includes(amigo)) {
        alert('Este nome já se encontra na lista, insira outro.');
    }
    else {
        amigos.push(amigo); 
        exibirAmigos(amigos); 
        document.getElementById('amigo').value = ''; 
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há amigos para sortear!');
        return; 
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
