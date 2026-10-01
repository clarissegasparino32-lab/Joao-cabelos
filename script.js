// Menu mobile
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuButton.classList.toggle("active");
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuButton?.classList.remove("active");
    });
});

// Modal de serviços
const serviceButtons = document.querySelectorAll("[data-service]");
const modal = document.querySelector(".service-modal");
const modalTitle = document.querySelector(".modal-title");
const modalText = document.querySelector(".modal-text");
const modalClose = document.querySelector(".modal-close");

const services = {
    corte: {
        title: "Corte de cabelo",
        text: "Atendimento personalizado para encontrar um corte que combine com o seu estilo."
    },

    escova: {
        title: "Escova",
        text: "Finalização dos cabelos para deixar o visual mais alinhado e preparado para a ocasião."
    },

    coloracao: {
        title: "Coloração",
        text: "Serviço de coloração realizado de acordo com o resultado desejado."
    },

    hidratacao: {
        title: "Hidratação",
        text: "Cuidados para ajudar a manter os cabelos hidratados, macios e com aparência saudável."
    }
};

serviceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const serviceName = button.dataset.service;
        const service = services[serviceName];

        if (!service || !modal) return;

        if (modalTitle) {
            modalTitle.textContent = service.title;
        }

        if (modalText) {
            modalText.textContent = service.text;
        }

        modal.classList.add("show");
        document.body.classList.add("modal-open");
    });
});

// Fechar modal
function closeModal() {
    if (!modal) return;

    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
}

modalClose?.addEventListener("click", closeModal);

// Fechar clicando fora do modal
modal?.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Fechar com a tecla ESC
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Botões de demonstração
const demoButtons = document.querySelectorAll("[data-demo]");

demoButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert(
            "Esta é uma demonstração. Os botões de contato podem ser configurados com o WhatsApp e outras informações reais do salão."
        );
    });
});

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
