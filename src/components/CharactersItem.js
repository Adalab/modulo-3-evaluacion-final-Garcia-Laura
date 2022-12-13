import '../styles/layout/CharactersItem.scss';
import { Link } from 'react-router-dom';
const CharactersItem = (props) => {
    
    
    return (
        <Link to={`/characters/${props.obj.id}`} >
        <li>
            <article className='item'>
                <img src={props.obj.image} alt={props.obj.name} />
                <h2> {props.obj.name} </h2>
                <p> {props.obj.species}</p>
                
            </article>
        </li>
        </Link>
    )
    
};
export default CharactersItem;