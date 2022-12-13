import { useParams } from "react-router-dom";

const CharactersDetails = (props) => {
    const params = useParams ();
    console.log(params.id)
    const characterFound = props.findCharacters (params.id);
    console.log(characterFound)
    return (
        <>
        <h2> Detalles del personaje</h2>
        <article>
        <img src={characterFound.image} alt={characterFound.image} />
                <h3> {characterFound.name} </h3>
                <dl>
                    <dt> Status</dt>
                    <dd> {characterFound.status}</dd>
                    <dt> Origin </dt>
                    <dd> {characterFound.planet}</dd>
                    <dt> species </dt>
                    <dd> {characterFound.species}</dd>
                    <dt> episodes</dt>
                    <dd> {characterFound.episodes} </dd>


                </dl>
        </article>

        </>
    )

}
export default CharactersDetails;