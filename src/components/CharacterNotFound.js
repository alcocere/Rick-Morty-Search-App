import React from "react";
import PropTypes from "prop-types";


const CharacterNotFound = (props) => {
    return (
        <div className="notFound-container">
            <p className="notFound-container__text">Sorry, there isn't any character in this Universe with the name {props.nameFilter}</p>
            <p className="notFound-container__subtext">Wanna try again??</p>
            <img
                src="https://media.giphy.com/media/bGtMLIa5RQzVm/giphy.gif"
                alt="Not Found gif"
                className="notFound-container__img" />
        </div>
    );
};


export default CharacterNotFound;