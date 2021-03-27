const getDataFromApi = (page) => {
    return fetch(
        'https://rickandmortyapi.com/api/character/?page=1'
    )
        .then((response) => response.json())
        .then((data) => {
            return data.results.map((character) => {
                return {
                    id: character.id,
                    name: character.name,
                    gender: character.gender,
                    species: character.species,
                    image: character.image,
                    status: character.status,
                    origin: character.origin.name,
                    episodes: character.episode,
                };
            });
        });
};

export default getDataFromApi;
