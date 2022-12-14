import '../styles/layout/CharactersDetails.scss';
import { Link, useParams } from "react-router-dom";
// comprar chractersfoun y si es igual me lo devuelves y sino error.

const CharactersDetails = (props) => {
    const params = useParams ();
    console.log(params.id)
    const characterFound = props.findCharacters (params.id);
    console.log(characterFound)

    if (characterFound !== undefined){
       return ( 
    <>
                 <Link className="link" to="/"> Volver al inicio </Link>
                 <div className="container">
                <h2 className="title"> Detalles del personaje {characterFound.name}</h2>
                <article className="cont">
                <img src={characterFound.image} className="img" alt={characterFound.image} />
                        <h3 className="dat"> {characterFound.name} </h3>
                        <dl>
                            <dt className="bold"> Status</dt>
                            <dd className="dat"> {characterFound.status}</dd>
                            <dt className="bold"> Origin </dt>
                            <dd className="dat"> {characterFound.planet}</dd>
                            <dt className="bold"> species </dt>
                            <dd className="dat"> {characterFound.species}</dd>
                            <dt className="bold"> episodes</dt>
                            <dd className="dat"> {characterFound.episodes} </dd>
                        </dl>
                </article>
                </div>
               
                </>
       )
    } else {
        
            return (
                <>
                <p className="error"> Personaje no encontrado </p>
                <Link to="/" className="link" > Volver al inicio </Link>
            
              </>
            )
            
    }
   

}
export default CharactersDetails;