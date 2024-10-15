// Seleciona os elementos necessários
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

    // Redireciona para outra página após 600ms (tempo da animação)
    setTimeout(() => {
        window.location.href = "index.html"; // Substitua pelo caminho correto
    }, 300);  // Tempo da transição CSS
});
