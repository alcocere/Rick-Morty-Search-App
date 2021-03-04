import React from "react";
import "../stylesheets/layout/NotFound.scss";


const CharacterNotFound = (props) => {

    return (
        <div className="notFound-container">
            <p className="notFound-container__text">  Sorry, there is no character that matches that name!</p>
            <p className="notFound-container__subtext">Wanna try again? </p>
            <img
                src="https://media.giphy.com/media/l3vR4MzqOUKFXBcoo/giphy.gif"
                alt="Not Found gif"
                className="notFound-container__img" />
        </div>
    );
};


export default CharacterNotFound;