import '../styles/layout/CharactersList.scss';
import CharactersItem from "./CharactersItem";

const CharactersList = (props) =>{
    const htmlCharacters = props.listCharacters.map((obj) => {
        return <CharactersItem key={obj.id} obj={obj} />
    })
    if (props.listCharacters.length === 0){
     return (
        <p> { `No hay ningún personaje que coincida con la palabra ${props.search}`} </p>
     
     )
    } else {
        return (
            
             <ul className='list'> {htmlCharacters} </ul>
        )
    }
    
}
export default CharactersList;