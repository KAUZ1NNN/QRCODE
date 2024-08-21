function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao-caindo');
    coracao.innerText = '❤️';
    coracao.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
    coracao.style.animationDuration = Math.random() * 3 + 5 + 's'; // Duração aleatória para cair
    document.querySelector('.chuva-de-coracoes').appendChild(coracao);

    // Remover o coração após a animação
    setTimeout(() => {
        coracao.remove();
    }, 8000);
}

// Criar vários corações ao carregar a página
setInterval(criarCoracao, 300);



const imagens = ['imagem1.jpg', 'imagem2.jpg', 'imagem3.jpg', 'imagem4.jpg']; // Substitua pelos caminhos das suas imagens
let indiceAtual = 0;

function trocarImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    document.getElementById('imagem').src = imagens[indiceAtual];
}

setInterval(trocarImagem, 5000); // Troca a imagem a cada 5 segundos


function atualizarContador() {
    const dataAlvo = new Date('2024-02-08T00:00:00'); // Substitua por sua data específica
    const agora = new Date();

    let anos = agora.getFullYear() - dataAlvo.getFullYear();
    let meses = agora.getMonth() - dataAlvo.getMonth();
    let dias = agora.getDate() - dataAlvo.getDate();
    let horas = agora.getHours() - dataAlvo.getHours();
    let minutos = agora.getMinutes() - dataAlvo.getMinutes();
    let segundos = agora.getSeconds() - dataAlvo.getSeconds();

    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }

    if (minutos < 0) {
        minutos += 60;
        horas--;
    }

    if (horas < 0) {
        horas += 24;
        dias--;
    }

    if (dias < 0) {
        const ultimoDiaDoMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoDiaDoMesAnterior;
        meses--;
    }

    if (meses < 0) {
        meses += 12;
        anos--;
    }

    document.getElementById('contador').innerText = 
        `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
