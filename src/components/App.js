// Fichero src/components/App.js
import { useEffect, useState } from "react";
import {Route, Routes, Link} from 'react-router-dom'
import getCharacters from "../services/api";
import CharactersList from "./CharactersList";
import FiltersName from "./FiltersName";
import Header from "./Header";
import CharactersDetails  from "./CharactersDetails";


function App() {
  // Estados
const [allCharacter, setAllCharacters] = useState ([])
const [search, setSearch] = useState ("");
// const [ error, setError] = useState ("")

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

// Funciones router
const findCharacters = (id) =>{
  return allCharacter.find((oneCharacter) =>
  oneCharacter.id === parseInt(id))};
   console.log(findCharacters(3))


  return (
   <>
  <Header/>
   <main className="main">
   
    <Routes>
      <Route path="/"
    element={
      <>
      <FiltersName handleSubmit = {handleSubmit} search={search} setFilterName={setFilterName}/>
    <CharactersList listCharacters={listCharacters} />
      </>
    }
       ></Route>
      <Route path="/characters/:id" element= {<CharactersDetails findCharacters={findCharacters}></CharactersDetails>}/>
    </Routes>
    
   </main>
   </>
  );
}

export default App;
