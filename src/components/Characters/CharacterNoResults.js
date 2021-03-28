import React from "react";
import "../../stylesheets/layout/NotFound.scss";
import { Link } from "react-router-dom";

const CharacterNoResults = (props) => {
    return (
        <div className="notFound-container">
            <p className="notFound-container__text"> Oooops 😵 sorry, there is no character in this universe that matches with your search! 🛸 </p>
            <Link to="/" className="header__link"> Try again </Link>
            <img
                src="https://media.giphy.com/media/l3vR4MzqOUKFXBcoo/giphy.gif"
                alt="Not Found gif"
                className="notFound-container__img" />
        </div>
    )
}
export default CharacterNoResults;