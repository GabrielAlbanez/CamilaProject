// Seleciona os elementos
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const modal = document.getElementById('modal');
const fade = document.getElementById('fade');

// Função para abrir o modal
function openModal() {
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    fade.style.visibility = 'visible';
    fade.style.opacity = '1';
}

// Função para fechar o modal
function closeModal() {
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
    fade.style.visibility = 'hidden';
    fade.style.opacity = '0';
}

// Adiciona os eventos de clique
openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
fade.addEventListener('click', closeModal); // Fecha o modal ao clicar fora
