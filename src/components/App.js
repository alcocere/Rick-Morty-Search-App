import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi.js.js";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import Header from "./Header";
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail.js';
import PropTypes from 'prop-types';



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

    //RESET
    const handleReset = () => {
        console.log('cliclic');
        setCharacters(characters);
        setNameFilter('');
        setSpecieFilter('All');

    }

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
                    {/* <Header /> */}
                    <CharacterDetail character={foundCharacter} />
                </>

            );
        } else {

            return <>
                <Header />
                <p> Oooops 😵 sorry, there is no character in this universe that matches with your search! 🛸 </p>
                <img
                    src="https://media.giphy.com/media/l3vR4MzqOUKFXBcoo/giphy.gif"
                    alt="Not Found gif"
                    className="notFound-container__img" />
            </>
        }
    };

    return (
        <>
            <div className="App">
                <Switch>
                    <Route exact path="/" >
                        <Header />
                        <main className="main">
                            <Filters handleFilter={handleFilter}
                                handleReset={handleReset}
                                nameFilter={nameFilter}
                                specieFilter={specieFilter} />
                            <CharacterList characters={filteredCharacters} filterName={nameFilter} />
                        </main>
                    </Route>
                    <Route path="/character/:id" render={renderCharacterDetail} />
                </Switch>
            </div>
        </>
    );
};

export default App;

App.propTypes = {
    characters: PropTypes.array,
    nameFilter: PropTypes.string,
    specieFilter: PropTypes.string,
    handleFilter: PropTypes.func,
}