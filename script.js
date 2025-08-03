document.addEventListener("DOMContentLoaded", () => {
    const empreendimentosData = [
        {
            name: "Sensia Aurora",
            status: "Em Construção",
            location: "Aurora, Londrina | PR",
            features: [
                "Apartamentos de 56,06m² a 57,67m²",
                "Valorização projetada: 8% a.a.",
                "Yield projetado: 14% a.a.",
                "Entrega: Dezembro 2026"
            ],
            investment: "R$ 443.990",
            image: "assets/sensia-aurora.jpg", // Placeholder, will need to find/generate image
            book: "#" // Placeholder for book link
        },
        {
            name: "La Roche",
            status: "Lançamento",
            location: "Zona Leste, Londrina | PR",
            features: [
                "2 quartos",
                "Apartamentos modernos",
                "Área de lazer completa",
                "Região em desenvolvimento",
                "Apartamentos de 44m² a 52m²",
                "Valorização projetada: 15% a.a."
            ],
            investment: "Consulte valores",
            image: "assets/la-roche.jpg", // Placeholder
            book: "#" // Placeholder for book link
        },
        {
            name: "Lake Dali",
            status: "Lançamento",
            location: "Cidade Industrial II, Londrina | PR",
            features: [
                "Apartamentos com 1 e 2 quartos",
                "Área de lazer completa",
                "Guarita, piscina, salão de festas",
                "Próximo à UEL",
                "Apartamentos de 44m² a 52m²",
                "Valorização projetada: 15% a.a."
            ],
            investment: "Consulte valores",
            image: "assets/lake-dali.jpg", // Placeholder
            book: "#" // Placeholder for book link
        },
        {
            name: "Lancelot",
            status: "Lançamento",
            location: "Zona Norte, Londrina | PR",
            features: [
                "2 quartos (opções de sacada)",
                "Apartamentos modernos",
                "Área de lazer completa",
                "Localização privilegiada",
                "Apartamentos de 44m² a 52m²",
                "Valorização projetada: 15% a.a."
            ],
            investment: "Consulte valores",
            image: "assets/lancelot.jpg", // Placeholder
            book: "#" // Placeholder for book link
        },
        {
            name: "Leon",
            status: "Lançamento",
            location: "Maringá | PR",
            features: [
                "2 quartos",
                "Apartamentos modernos",
                "Área de lazer completa",
                "Região em desenvolvimento",
                "Apartamentos de 44m² a 52m²",
                "Valorização projetada: 15% a.a."
            ],
            investment: "Consulte valores",
            image: "assets/leon.jpg", // Placeholder
            book: "#" // Placeholder for book link
        },
        {
            name: "Loretto",
            status: "Lançamento",
            location: "Zona Leste, Londrina | PR",
            features: [
                "2 quartos",
                "Apartamentos modernos",
                "Área de lazer completa",
                "Região em desenvolvimento",
                "Apartamentos de 44m² a 52m²",
                "Valorização projetada: 15% a.a."
            ],
            investment: "Consulte valores",
            image: "assets/loretto.jpg", // Placeholder
            book: "#" // Placeholder for book link
        },
        {
            name: "Le Challet",
            status: "Lançamento",
            location: "Jardim Pinheiros, Londrina | PR",
            features: [
                "2 dormitórios com opção de suíte",
                "Sacada com churrasqueira",
                "Lazer completo e equipado",
                "Energia solar nas áreas de convivência",
                "Apartamentos de 44m² a 52m²",
                "Valorização projetada: 15% a.a."
            ],
            investment: "Consulte valores",
            image: "assets/le-challet.jpg", // Placeholder
            book: "#" // Placeholder for book link
        },
        {
            name: "Le Monde",
            status: "Lançamento",
            location: "Zona Leste, Londrina | PR",
            features: [
                "Apartamentos de 47m² a 50m²",
                "2 quartos",
                "Lazer completo",
                "Região em desenvolvimento",
                "Apartamentos de 44m² a 52m²",
                "Valorização projetada: 15% a.a."
            ],
            investment: "Consulte valores",
            image: "assets/le-monde.jpg", // Placeholder
            book: "#" // Placeholder for book link
        },
        {
            name: "Lake Portinari",
            status: "100% Vendido",
            location: "Zona Leste, Londrina | PR",
            features: [
                "2 quartos",
                "Apartamentos modernos",
                "Área de lazer completa",
                "Região em desenvolvimento",
                "Apartamentos de 44m² a 52m²",
                "Valorização projetada: 15% a.a."
            ],
            investment: "Consulte valores",
            image: "assets/lake-portinari.jpg", // Placeholder
            book: "#" // Placeholder for book link
        },
        {
            name: "Lake Picasso",
            status: "100% Vendido",
            location: "Zona Leste, Londrina | PR",
            features: [
                "2 quartos",
                "Apartamentos modernos",
                "Área de lazer completa",
                "Região em desenvolvimento",
                "Apartamentos de 44m² a 52m²",
                "Valorização projetada: 15% a.a."
            ],
            investment: "Consulte valores",
            image: "assets/lake-picasso.jpg", // Placeholder
            book: "#" // Placeholder for book link
        },
        {
            name: "Lake Da Vinci",
            status: "100% Vendido",
            location: "Zona Leste, Londrina | PR",
            features: [
                "2 quartos",
                "Apartamentos modernos",
                "Área de lazer completa",
                "Região em desenvolvimento",
                "Apartamentos de 44m² a 52m²",
                "Valorização projetada: 15% a.a."
            ],
            investment: "Consulte valores",
            image: "assets/lake-da-vinci.jpg", // Placeholder
            book: "#" // Placeholder for book link
        },
        {
            name: "Lake Van Gogh",
            status: "100% Vendido",
            location: "Zona Leste, Londrina | PR",
            features: [
                "2 quartos",
                "Apartamentos modernos",
                "Área de lazer completa",
                "Região em desenvolvimento",
                "Apartamentos de 44m² a 52m²",
                "Valorização projetada: 15% a.a."
            ],
            investment: "Consulte valores",
            image: "assets/lake-van-gogh.jpg", // Placeholder
            book: "#" // Placeholder for book link
        },
        {
            name: "Lituania",
            status: "100% Vendido",
            location: "Zona Leste, Londrina | PR",
            features: [
                "2 quartos",
                "Apartamentos modernos",
                "Área de lazer completa",
                "Região em desenvolvimento",
                "Apartamentos de 44m² a 52m²",
                "Valorização projetada: 15% a.a."
            ],
            investment: "Consulte valores",
            image: "assets/lituania.jpg", // Placeholder
            book: "#" // Placeholder for book link
        },
        {
            name: "Residencial Martini Maringá",
            status: "Lançamento",
            location: "Maringá | PR",
            features: [
                "2 quartos",
                "Apartamentos modernos",
                "Área de lazer completa",
                "Região em desenvolvimento",
                "Apartamentos de 44m² a 52m²",
                "Valorização projetada: 15% a.a."
            ],
            investment: "Consulte valores",
            image: "assets/residencial-martini.jpg", // Placeholder
            book: "#" // Placeholder for book link
        },
        {
            name: "Sensia Jardim Maringá",
            status: "Lançamento",
            location: "Maringá | PR",
            features: [
                "2 quartos com suíte",
                "Varanda gourmet",
                "Lazer completo",
                "Localização excelente",
                "Apartamentos de 44m² a 52m²",
                "Valorização projetada: 15% a.a."
            ],
            investment: "Consulte valores",
            image: "assets/sensia-jardim.jpg", // Placeholder
            book: "#" // Placeholder for book link
        }
    ];

    const cardsContainer = document.querySelector(".cards");

    // Função para criar o card de um empreendimento
    function createEmpreendimentoCard(empreendimento) {
        const card = document.createElement("div");
        card.classList.add("card");

        let statusClass = "";
        if (empreendimento.status === "Em Construção") {
            statusClass = "em-construcao";
        } else if (empreendimento.status === "Lançamento") {
            statusClass = "lancamento";
        } else if (empreendimento.status === "100% Vendido") {
            statusClass = "vendido";
        }

        const featuresList = empreendimento.features.map(feature => `<li>${feature}</li>`).join("");

        card.innerHTML = `
            <img src="${empreendimento.image}" alt="${empreendimento.name}" class="card-image">
            <div class="card-content">
                <div class="card-header">
                    <div>
                        <h3 class="card-title">${empreendimento.name}</h3>
                        <p class="card-location">${empreendimento.location}</p>
                    </div>
                    <span class="status-badge ${statusClass}">${empreendimento.status}</span>
                </div>
                <ul class="card-features">
                    ${featuresList}
                </ul>
                <p class="card-price">Valor do Investimento: ${empreendimento.investment}</p>
                <div class="card-actions">
                    <a href="${empreendimento.book}" target="_blank" class="btn btn-primary">Ver Projeto</a>
                    <a href="#" class="btn btn-secondary">Falar com Especialista</a>
                </div>
            </div>
        `;
        return card;
    }

    // Função para renderizar os empreendimentos
    function renderEmpreendimentos() {
        cardsContainer.innerHTML = ""; // Limpa os cards existentes

        // Ordenar os empreendimentos conforme a sequência desejada
        const orderedEmpreendimentos = [
            "Sensia Aurora",
            "La Roche",
            "Lake Dali",
            "Lancelot",
            "Leon",
            "Loretto",
            "Le Challet",
            "Le Monde",
            "Lake Portinari",
            "Lake Picasso",
            "Lake Da Vinci",
            "Lake Van Gogh",
            "Lituania",
            "Residencial Martini Maringá",
            "Sensia Jardim Maringá"
        ].map(name => empreendimentosData.find(emp => emp.name === name));

        orderedEmpreendimentos.forEach(empreendimento => {
            if (empreendimento) {
                cardsContainer.appendChild(createEmpreendimentoCard(empreendimento));
            }
        });
    }

    renderEmpreendimentos();
});

