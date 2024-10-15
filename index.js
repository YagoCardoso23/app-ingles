const palavras = {
    "dream": "sonho",
    "evening": "noite",
    "condition": "condição",
    "feed": "alimentar",
    "tool": "ferramenta",
    "total": "total",
    "basic": "básico",
    "smell": "cheiro",
    "valley": "vale",
    "nor": "nem",
    "double": "dobro",
    "seat": "assento",
    "arrive": "chegar",
    "master": "mestre",
    "track": "trilha",
    "parent": "pais",
    "shore": "praia",
    "division": "divisão",
    "sheet": "folha, lençol",
    "enemy": "inimigo",
    "reply": "resposta",
    "drink": "bebida",
    "occur": "ocorrer",
    "support": "apoiar",
    "speech": "discurso",
    "nature": "natureza",
    "range": "alcance, pastagem",
    "steam": "vapor",
    "motion": "movimento",
    "path": "caminho",
    "liquid": "líquido",
    "log": "lenha, diário",
    "meant": "significado",
    "quotient": "quociente",
    "teeth": "dentes",
    "shell": "concha",
    "neck": "pescoço",
    "dessert": "sobremesa",
};

let palavras_lista = [];
let indice_palavra = 0;
let acertos = 0;
let erros = 0;
const total_palavras = 10; // Ajuste para 10 palavras por rodada

function jogar() {
    document.getElementById("feedback").textContent = "";
    document.getElementById("resultado-final").textContent = "";

    // Embaralha as palavras e seleciona as primeiras N (nesse caso 10)
    palavras_lista = Object.entries(palavras).sort(() => Math.random() - 0.5).slice(0, total_palavras);

    indice_palavra = 0;
    acertos = 0;
    erros = 0;

    document.getElementById("botao-comecar").style.display = "none";
    document.getElementById("resposta").style.display = "inline-block";
    document.getElementById("botao-enviar").style.display = "inline-block";

    mostrarProximaPergunta();
}

function mostrarProximaPergunta() {
    if (indice_palavra < palavras_lista.length) {
        const [palavra_en] = palavras_lista[indice_palavra];
        document.getElementById("pergunta").textContent = `Qual é a tradução de '${palavra_en}' em português?`;
        document.getElementById("resposta").value = "";
        document.getElementById("feedback").textContent = "";
    } else {
        finalizarJogo();
    }
}

function verificarResposta() {
    const resposta = document.getElementById("resposta").value.trim().toLowerCase();
    const [palavra_en, palavra_pt] = palavras_lista[indice_palavra];
    const traducoes_aceitas = palavra_pt.split(",").map(traducao => traducao.trim().toLowerCase());

    if (traducoes_aceitas.includes(resposta)) {
        document.getElementById("feedback").textContent = "Correto! 🎉";
        acertos++;
    } else {
        document.getElementById("feedback").textContent = `Incorreto! A tradução correta é '${palavra_pt}'.`;
        erros++;
    }

    indice_palavra++;
    setTimeout(mostrarProximaPergunta, 2000);
}
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const aboutBtn = document.getElementById('about');

// Evento de clique para o botão "Sign Up"
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
    container.classList.remove('active-about');
});

// Evento de clique para o botão "Sign In"
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
    container.classList.remove('active-about');
});

// Evento de clique para o botão "About Us" com navegação após a transição
aboutBtn.addEventListener('click', () => {
    container.classList.add('active-about');
    container.classList.remove('active');

    // Redireciona para outra   página após 600ms (tempo da animação)
    setTimeout(() => {
        window.location.href = "pag01.html"; // Substitua pelo caminho correto
    }, 450);  // Tempo da transição CSS
});
