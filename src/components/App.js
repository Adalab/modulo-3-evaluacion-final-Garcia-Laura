// Fichero src/components/App.js
import { useEffect, useState } from "react";
import {Route, Routes} from 'react-router-dom'
import getCharacters from "../services/api";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import Header from "./Header";
import Footer from "./Footer";
import CharactersDetails  from "./CharactersDetails";
import '../styles/layout/Main.scss';


function App() {
  // Estados
const [allCharacter, setAllCharacters] = useState ([])
const [search, setSearch] = useState ("");
const [status, setStatus] = useState ("")

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
  const setFilterStatus = (value) =>{
    setStatus(value);
  }

  // Funciones de renderizado
const listCharacters = allCharacter
.filter((eachCharacters) => 
 (eachCharacters.name.toLowerCase().includes(search.toLowerCase()))
)
.filter((eachCharacters) =>
(eachCharacters.status).toLowerCase().includes(status.toLowerCase()))



// Funciones router
const findCharacters = (id) =>{
  return allCharacter.find((oneCharacter) =>
  oneCharacter.id === parseInt(id))};
   


  return (
   <>
  <Header/>
   <main className="main">
   
    <Routes>
      <Route path="/"
    element={
      <>
      <Filters handleSubmit = {handleSubmit} 
      search={search} setFilterName={setFilterName} 
      status={status}
      setFilterStatus={setFilterStatus}></Filters>
    <CharactersList listCharacters={listCharacters}  search={search} />
      </>
    }
       ></Route>
      <Route path="/characters/:id" element= {<CharactersDetails findCharacters={findCharacters}></CharactersDetails>}/>
    </Routes>
    
   </main>
   <Footer/>
   </>
  );
}

export default App;
