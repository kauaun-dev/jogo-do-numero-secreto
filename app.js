let listas = [];
let numemroLimite = 10;
let numerosecreto = gerarNumeroAleatorio()
let tentativas = 1


function exibirTextonaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemIicial(){
    
exibirTextonaTela('h1', 'jogo do numero secreto');
exibirTextonaTela('p', 'escolha um numero entre 1 e 10');

}

exibirMensagemIicial();

exibirTextonaTela('h1', 'jogo do numero secreto');
exibirTextonaTela('p', 'escolha um numero entre 1 e 10');


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numerosecreto) {
        exibirTextonaTela('h1', 'acertou')
        let palavraTentativa = tentativas > 1? 'tentativas':'tentativa';
        let mensagemTentativas = `vc descobriu em ${tentativas} ${palavraTentativa}`;
        exibirTextonaTela('p',mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numerosecreto) {
            exibirTextonaTela('p', 'o numemro secreto e menor');
        } else {
            exibirTextonaTela('p', 'numero secreto e maior');
        }
        tentativas++;
        limparcampo();
    }

}

function gerarNumeroAleatorio() {
    let numemroEscolhido = parseInt(Math.random() * numemroLimite + 1);
    let elementosNaLista = listas.length;

    if(listas == numemroLimite){
        listas = []
    }

    if (listas.includes(numemroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listas.push(numemroEscolhido)
        return numemroEscolhido;
    }
}

function limparcampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numerosecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMensagemIicial()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

