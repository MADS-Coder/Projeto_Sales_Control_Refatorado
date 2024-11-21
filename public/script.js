// Função para abrir uma modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Função para fechar todas as modais
function closeModal(event, cancel = false) {
    if (
        event.target.classList.contains('modal') || 
        event.target.classList.contains('close') || 
        cancel
    ) {
        event.target.closest('.modal').style.display = 'none';
    }
}

document.getElementById('botao-cancelar').addEventListener('click', function (event) {
    closeModal(event, true);
});
document.getElementById('botao-fechar').addEventListener('click', function (event) {
    closeModal(event, true);
});



// Adiciona os eventos de clique nos links do menu
document.addEventListener('DOMContentLoaded', () => {
    // Abertura das modais
    document.getElementById('model-cadastro').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('myModal'); // Modal de cadastro
    });

    document.getElementById('botao-adicionar').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('myModal'); // Modal de cadastro
    });

    document.getElementById('botao-adicionar').addEventListener('click', function (event) {
        closeModal(event, true);
    });
    

    document.getElementById('model-consultar').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('listModal'); // Modal de consulta de produtos
    });

    document.getElementById('model-realizar-vendas').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('salesModal'); // Modal de vendas
    });

    // Fechamento das modais ao clicar no botão "fechar" ou fora do modal
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
        modal.addEventListener('click', closeModal);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const pagamentoRadios = document.getElementsByName("pagamento");
    const cartaoContainer = document.getElementById("cartao-container");
    const parcelamentoContainer = document.getElementById("parcelamento-container");

    pagamentoRadios.forEach((radio) => {
        radio.addEventListener("change", function () {
            if (this.value === "credito") {
                cartaoContainer.style.display = "block";
                parcelamentoContainer.style.display = "block";
            } else if (this.value === "debito") {
                cartaoContainer.style.display = "block";
                parcelamentoContainer.style.display = "none";
            } else {
                cartaoContainer.style.display = "none";
                parcelamentoContainer.style.display = "none";
            }
        });
    });
});

