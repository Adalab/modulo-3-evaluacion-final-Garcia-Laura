// Fichero src/components/App.js
import { useEffect, useState } from "react";
import getCharacters from "../services/api";
import CharactersList from "./CharactersList";
import FiltersName from "./FiltersName";
import Header from "./Header";


// import {Route, Routes} from 'react-router-dom'


function App() {
  // Estados
const [allCharacter, setAllCharacters] = useState ([])
const [search, setSearch] = useState ("");

// UseEffect;
  useEffect(() => {
    getCharacters().then((cleanData) => {
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
.filter((eachCharacters) => {

if (eachCharacters.name.toLowerCase().includes(search.toLowerCase())){
  return true;
}
else {
  return false;
}
});


  return (
   <>
  <Header/>
   <main className="main">
   <FiltersName handleSubmit = {handleSubmit} search={search} setFilterName={setFilterName}/>
    <CharactersList listCharacters={listCharacters} />
    
   </main>
   </>
  );
}

export default App;
