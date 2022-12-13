import '../styles/layout/CharactersList.scss';
import CharactersItem from "./CharactersItem";

const CharactersList = (props) =>{
    const htmlCharacters = props.listCharacters.map((obj) => {
        return <CharactersItem key={obj.id} obj={obj} />
    })
    return (
       
            <ul className='list'> {htmlCharacters} </ul>
     
            // if (eachCharacters.name.toLowerCase().includes(search.toLowerCase())){
            //     return true;
            //   }
            //   else {
            //     return false;
            //   }
            //   });
    );
}
export default CharactersList;