import React from "react";
import "../../stylesheets/layout/NotFound.scss";
import PropTypes from "prop-types";



const CharacterNotFound = (props) => {
    return (
        <div className="notFound-container">
            <p className="notFound-container__text"> Sorry, there is no character that matches the name</p>
            <span className="notFound-container__text--search">
                {props.nameFilter}
            </span>
            <p className="notFound-container__subtext">Try again</p>
            <img
                src="https://media.giphy.com/media/l3vR4MzqOUKFXBcoo/giphy.gif"
                alt="Not Found gif"
                className="notFound-container__img" />
        </div>
    );
};


export default CharacterNotFound;

CharacterNotFound.propTypes = {
    nameFilter: PropTypes.string,
};
