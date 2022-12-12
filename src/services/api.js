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
                species: obj.species
            };
        });
        return cleanData;
    });

};
export default getCharacters;