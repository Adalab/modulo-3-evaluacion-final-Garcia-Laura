// Fichero src/components/App.js
import { useEffect, useState } from "react";
import '../styles/App.scss';
import getCharacters from "../services/api";
import CharactersList from "./CharactersList";


// import {Route, Routes} from 'react-router-dom'


function App() {
  // Estados
const [allCharacter, setAllCharacters] = useState ([])
  // UseEffect;
  useEffect(() => {
    getCharacters().then((cleanData) => {
      console.log(cleanData);
      setAllCharacters(cleanData);
    });
  }, []);

  // funciones Handle

  // Funciones de renderizado
  return (
   <>
   <header>
   <h1>Rick and Morty</h1>
   </header>
   <main>
    <CharactersList listCharacters={allCharacter} />
   </main>
   </>
  );
}

export default App;
