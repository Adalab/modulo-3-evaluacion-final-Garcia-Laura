import '../styles/layout/CharactersItem.scss';
const CharactersItem = (props) => {
    
    return (
        <li>
            <article className='item'>
                <img src={props.obj.image} alt={props.obj.name} />
                <h2> {props.obj.name} </h2>
                <p> {props.obj.species}</p>
                
            </article>
        </li>
    )
    
};
export default CharactersItem;