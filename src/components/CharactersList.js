import CharactersItem from "./CharactersItem";

const CharactersList = (props) =>{
    const htmlCharacters = props.listCharacters.map((obj) => {
        return <CharactersItem key={obj.id} obj={obj} />
    })
    return (
        
            <ul> {htmlCharacters} </ul>
       
    );
}
export default CharactersList;