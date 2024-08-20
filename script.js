const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "PERGUNTA 1",
        alternativas: [
            {
                texto: "RESPOSTA 1!",
                afirmacao: "AFIRMATIVA DA RESPOSTA 1r. "
            },
            {
                texto: "RESPOSTA 2",
                afirmacao: "AFIRMATIVA RESPOSTA 2."
            }
        ]
    },
    {
        enunciado: "PERGUNTA 2",
        alternativas: [
            {
                texto: "RESPOSTA 1",
                afirmacao: "AFIRMATIVA RESPOSTA 1"
            },
            {
                texto: "RESPOSTA 2",
                afirmacao: "AFIRMATIVA RESPOSTA 2"
            }
        ]
    },
    {
        enunciado: "PERGUNTA 3",
        alternativas: [
            {
                texto: "RESPOSTA 1",
                afirmacao: "AFIRMATIVA RESPOSTA 1"
            },
            {
                texto: "RESPOSTA 2",
                afirmacao: "AFIRMATIVA RESPOSTA 2."
            }
        ]
    },
      
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Um ano depois...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
