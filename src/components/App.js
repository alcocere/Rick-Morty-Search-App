import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi.js";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import Header from "./Header";
// import { Link, Route, Switch } from 'react-router-dom';


const App = () => {
    const [characters, setCharacters] = useState([]);
    const [nameFilter, setNameFilter] = useState('');
    const [specieFilter, setSpecieFilter] = useState('all');


    useEffect(() => {
        getDataFromApi().then(data => setCharacters(data));
    }, []);

    //event handlers
    const handleFilter = data => {
        // console.log("manejando los filtros", data);
        if (data.key === 'name') {
            setNameFilter(data.value);
        } else if (data.key === 'specie') {
            setSpecieFilter(data.value)
        }
    };

    const filteredCharacters = characters
        .filter(character => {
            return character.name.toUpperCase().includes(nameFilter.toUpperCase());
        })
        .filter(character => {
            // console.log(character.species, specieFilter);
            if (specieFilter === 'all') {
                return true;
            } else {
                return character.species.toUpperCase === specieFilter;
            }
        });

    // console.log('name', nameFilter);
    // console.log('specie', specieFilter);

    return (
        <>
            <div className="App">
                <Header />
                <main className="main">
                    <Filters handleFilter={handleFilter} />
                    <CharacterList characters={filteredCharacters} />
                </main>
            </div>
        </>
    );
}

export default App;
