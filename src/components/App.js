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
    const [specieFilter, setSpecieFilter] = useState('All');


    useEffect(() => {
        getDataFromApi().then(data => setCharacters(data));
    }, []);

    //EVENT HANDLERS
    const handleFilter = data => {
        if (data.key === 'name') {
            setNameFilter(data.value);
        } else if (data.key === 'specie') {
            setSpecieFilter(data.value)
        }
    };

    //FILTERS
    const filteredCharacters = characters
        .filter(character => {
            return character.name.toUpperCase().includes(nameFilter.toUpperCase());
        })
        .filter(character => {
            if (specieFilter === 'All') {
                return true;
            } else {
                return character.species === specieFilter;
            }
        });



    //RENDER CHARACTER DETAIL
    const renderCharacterDetail = (props) => {
        const foundCharacter = characters.find((character) => {
            return character.id === parseInt(props.match.params.id);
        });
        if (foundCharacter !== undefined) {
            return (
                <>
                    <Header />
                    <CharacterDetail character={foundCharacter} />
                </>

            );
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
