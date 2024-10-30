// Seleciona as abas
const tabs = document.querySelectorAll('.nav-link');

// Adiciona evento de clique às abas
tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
        // Seleciona a seção de conteúdo correspondente
        const tabContent = document.querySelector(`#${event.target.getAttribute('data-bs-target')}`);

        // Exibe a seção de conteúdo
        tabContent.classList.add('show');
        tabContent.classList.add('active');
    });
});

// Adiciona efeito de fade-in ao carregar a página
window.onload = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        element.classList.add('show');
    });
};