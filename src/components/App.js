import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi.js.js";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import Header from "./Header";
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail.js';
import PropTypes from 'prop-types';
import localStorage from './../services/localStorage';



const App = () => {
    const [characters, setCharacters] = useState([]);
    const [nameFilter, setNameFilter] = useState(localStorage.get('nameFilter', ''));
    const [specieFilter, setSpecieFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState([]);



    useEffect(() => {
        getDataFromApi().then(data => setCharacters(data));
    }, []);


    useEffect(() => {
        localStorage.set('nameFilter', nameFilter);
    }, [nameFilter]);

    //EVENT HANDLERS
    const handleFilter = data => {
        console.log(data);
        if (data.key === 'name') {
            setNameFilter(data.value);
        } else if (data.key === 'specie') {
            setSpecieFilter(data.value)
        } else if (data.key === 'status') {
            if (data.checked === true) {
                const newStatusFilter = [...statusFilter];
                newStatusFilter.push(data.value);
                setStatusFilter(newStatusFilter);
            } else {
                const newStatusFilter = statusFilter.filter(character => character !== data.value);
                setStatusFilter(newStatusFilter);
            }
        }
    };

    //RESET
    const handleReset = () => {
        setCharacters(characters);
        setNameFilter('');
        setSpecieFilter('All');
        setStatusFilter([]);
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
        })
        .filter(character => {
            if (statusFilter.length === 0) {
                return true;
            } else {
                return statusFilter.includes(character.status);
            }
        });


    // const getStatus = () => {
    //     return characters.map(character => character.status);
    // }
    const getStatus = (key) => {
        return [...new Set(characters.map((character) => character[key]))];
    }


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
                                // nameFilter={nameFilter}
                                // specieFilter={specieFilter}
                                inputValue={nameFilter}
                                species={getStatus('species')}
                                status={getStatus('status')} />
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