import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi.js";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import Header from "./Header";
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail.js';


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
                return character.species === specieFilter;
            }
        });

    // console.log('name', nameFilter);
    // console.log('specie', specieFilter);


    // Render character detail 
    const renderCharacterDetail = (props) => {
        const foundCharacter = characters.find((character) => {
            return character.id === parseInt(props.match.params.id);
        });
        if (foundCharacter !== undefined) {
            return (
                <CharacterDetail character={foundCharacter} />
            )
        }
    };

    return (
        <>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <main className="main">
                            <Filters handleFilter={handleFilter} />
                            <CharacterList characters={filteredCharacters} />
                        </main>
                    </Route>
                    <Route path="/character/:id" render={renderCharacterDetail} />
                </Switch>
            </div>
        </>
    );
};

export default App;
