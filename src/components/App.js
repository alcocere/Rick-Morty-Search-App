import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';
import getDataFromApi from "../services/getDataFromApi.js";
import CharacterList from "./Characters/CharacterList";
import CharacterDetail from "../components/./Characters/CharacterDetail";
import CharacterNoResults from './Characters/CharacterNoResults.js';
import Filters from "./Filters/Filters";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import PropTypes from 'prop-types';


const App = () => {
    const [characters, setCharacters] = useState([]);
    const [nameFilter, setNameFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('All');
    const [specieFilter, setSpecieFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortByName, setSortByName] = useState(false);


    useEffect(() => {
        getDataFromApi().then(data => setCharacters(data))
            .then(() => setIsLoading(false));
    }, []);


    //HANDLE FILTERS
    const handleFilter = data => {
        console.log(data);
        if (data.key === 'name') {
            setNameFilter(data.value);
        } else if (data.key === 'gender') {
            setGenderFilter(data.value);
        } else if (data.key === 'specie') {
            setSpecieFilter(data.value)
        } else if (data.key === 'sortByName') {
            setSortByName(data.checked);
        } else if (data.key === 'status') {
            const indexStatus = statusFilter.indexOf(data.value);
            if (indexStatus === -1) {
                const newStatusFilter = [...statusFilter, data.value];
                setStatusFilter(newStatusFilter);
            } else {
                const newStatusFilter = [...statusFilter];
                newStatusFilter.splice(indexStatus, 1);
                setStatusFilter(newStatusFilter);
            }
        }
    };

    //RESET
    const handleReset = () => {
        setNameFilter('');
        setGenderFilter('All');
        setSpecieFilter('All');
        setStatusFilter([]);
        setSortByName(false);
    }

    //FILTERS
    const filteredCharacters = characters
        .filter(character => {
            return character.name.toUpperCase().includes(nameFilter.toUpperCase());
        })
        .filter(character => {
            if (genderFilter === 'All') {
                return true;
            } else {
                return character.gender === genderFilter;
            }
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
    if (sortByName) {
        filteredCharacters.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return filteredCharacters;
        });
    };

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
                    <CharacterDetail character={foundCharacter} isLoading={isLoading} />;
                </>
            );
        } else {
            return <>
                <Header />
                <CharacterNoResults />
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
                                genderFilter={genderFilter}
                                specieFilter={specieFilter}
                                statusFilter={statusFilter}
                                sortByName={sortByName}
                                status={getStatus('status')} />
                            <CharacterList characters={filteredCharacters} filterName={nameFilter} isLoading={isLoading} />
                            {isLoading ? <Loader /> : ''}
                        </main>
                        <Footer />
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