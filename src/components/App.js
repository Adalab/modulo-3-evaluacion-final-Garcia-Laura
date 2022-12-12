// Fichero src/components/App.js
import { useEffect, useState } from "react";
import '../styles/App.scss';
import getCharacters from "../services/api";
import CharactersList from "./CharactersList";
import FiltersName from "./FiltersName";


// import {Route, Routes} from 'react-router-dom'


function App() {
  // Estados
const [allCharacter, setAllCharacters] = useState ([])
const [search, setSearch] = useState ("");

// UseEffect;
  useEffect(() => {
    getCharacters().then((cleanData) => {
      console.log(cleanData);
      setAllCharacters(cleanData);
    });
  }, []);

  // funciones Handle
  const handleSubmit = (ev) => {
    ev.preventDefault ();
  }
  const setFilterName = (value) =>{
    setSearch (value)
  }

  // Funciones de renderizado
const listCharacters = allCharacter
.filter((eachCharacters) => eachCharacters.name.toLowerCase().includes(search.toLowerCase()))


  return (
   <>
   <header>
   <h1>Rick and Morty</h1>
   </header>
   <main>
    <CharactersList listCharacters={listCharacters} />
    <FiltersName handleSubmit = {handleSubmit} search={search} setFilterName={setFilterName}/>
   </main>
   </>
  );
}

export default App;
