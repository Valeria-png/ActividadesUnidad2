document.getElementById('searchBtn').addEventListener('click', async function(event) {
  event.preventDefault();
  const buscar = document.getElementById('searchBar').value.toLowerCase();
  await buscarPoke(buscar);
});

async function buscarPoke(buscar) {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    const pokemons = data.results;
    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.includes(buscar));
    getAllPoke(filteredPokemons);
  } catch (error) {
    console.error(error);
  }
}

async function getAllPoke(pokemons) {
  const AreaDetrabajo = document.getElementById('pokemonArea');
  AreaDetrabajo.innerHTML = '';

  for (const pokemon of pokemons) {
    try {
      const response = await fetch(pokemon.url);
      const individualPokeData = await response.json();
      const poketcard = document.createElement('div');
      poketcard.className = 'col-md-4 mb-4';
      poketcard.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${individualPokeData.sprites.front_default}" class="card-img-top" alt="${individualPokeData.name}">
          <div class="card-body">
            <p class="card-text">Número: ${individualPokeData.id}</p>
            <p class="card-text">Especie: ${individualPokeData.name}</p>
            <p class="card-text">XP Base: ${individualPokeData.base_experience}</p>
            <p class="card-text">Altura: ${individualPokeData.height}</p>
            <p class="card-text">Peso: ${individualPokeData.weight}</p>
          </div>
        </div>
      `;
      AreaDetrabajo.appendChild(poketcard);
    } catch (error) {
      console.error(error);
    }
  }
}


