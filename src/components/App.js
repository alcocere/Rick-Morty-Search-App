import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi.js";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
// import { Link, Route, Switch } from 'react-router-dom';


const App = () => {
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        getDataFromApi().then(data => setCharacters(data));
    }, []);

    //event handlers
    const handleFilter = data => {
        console.log("manejando los filtros", data);
    };

    return (
        <>
            <div className="App">
                <Filters handleFilter={handleFilter} />
                <CharacterList characters={characters} />
            </div>
        </>
    );
}

export default App;
