import '../styles/layout/CharactersItem.scss';
import { Link } from 'react-router-dom';
const CharactersItem = (props) => {
    
    
    return (
        <Link to={`/characters/${props.obj.id}`} className="link" >
        <li className="list">
            <article className='item'>
                <img className="img" src={props.obj.image} alt={props.obj.name} />
                <h2 className="obj"> {props.obj.name} </h2>
                <p className="obj"> {props.obj.species}</p>
                
            </article>
        </li>
        </Link>
    )
    
};
export default CharactersItem;