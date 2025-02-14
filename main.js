    const form = document.querySelector("#form");
    const ota = document.querySelector("#pokemom__wrapper");
    const inp = document.querySelector("#input");



    function renderForm(poki) {
    ota.innerHTML = "";
    poki.map((objektlar) => {
        const li = document.createElement("li");

        
        li.innerHTML = `
        <img src="${objektlar.img}">
        <h2 >${objektlar.name}</h2>
        <span>${objektlar.id}</span>
        <span>${objektlar.weight}</span>
        <span>${objektlar.height}</span>
        <p>${objektlar.spawn_time}</p>
        <div>${objektlar.type}</div>
        `;

        li.className = "poki1";
        ota.append(li);
    });
    }
    renderForm(pokemons);

    form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputQimat = inp.value;

    const filtirLangan = pokemons.filter((malumotlar) => {
        return malumotlar.name.toLowerCase().includes(inputQimat.toLowerCase());
    });
    renderForm(filtirLangan);
    });

  
    