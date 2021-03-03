import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi.js";
// import { Link, Route, Switch } from 'react-router-dom';


const App = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        getDataFromApi().then(data => setCharacters(data));
    }, []);
    console.log(characters);

    return (
        <>
            <div className="App">
                Hola Mundo
            </div>
        </>
    );
}

export default App;
