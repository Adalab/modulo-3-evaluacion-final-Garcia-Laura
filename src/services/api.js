const getCharacters = () =>  {
    return fetch (
        "https://rickandmortyapi.com/api/character"
    ).then ((response) => response.json())
    .then((dataApi)=> {
        const cleanData = dataApi.results.map((obj)=>{
            return{
                id: obj.id,
                image: obj.image,
                name: obj.name,
                species: obj.species,
                planet: obj.origin.name,
                episodes: obj.episode.length,
                status:obj.status
            };
        });
        return cleanData.sort(function (a, b){
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
    });

};
export default getCharacters;