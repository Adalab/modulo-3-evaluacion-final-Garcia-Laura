const CharactersItem = (props) => {
    return (
        <li>
            <article>
                <img src={props.obj.image} alt={props.obj.name} />
                <h2> {props.obj.name} </h2>
                <p> {props.obj.especies}</p>
                
            </article>
        </li>
    )
};
export default CharactersItem;