import React from "react"
import CharacterCard from "./CharacterCard";
import CharacterNotFound from "./CharacterNotFound";
import PropTypes from "prop-types";

const CharacterList = props => {
    const character = props.characters.map(character => {
        return (
            <li key={character.id} className="cards-container__item">
                <CharacterCard character={character} />
            </li>
        );
    });
    const notFound = () => {
        if (character.length === 0) {
            return <CharacterNotFound nameFilter={props.nameFilter} />
        }
    };

    return (
        <section className="cards-section">
            <ul className="cards-container">{character}</ul>
            {notFound()}
        </section>
    );
};


export default CharacterList;

CharacterList.propTypes = {
    character: PropTypes.array,
    id: PropTypes.number,
    nameFilter: PropTypes.string,
};