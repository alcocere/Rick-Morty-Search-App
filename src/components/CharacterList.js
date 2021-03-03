import React from "react"
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
    const character = props.characters.map(character => {
        return (
            <li key={character.id} className="cards-container__item">
                <CharacterCard character={character} />
            </li>
        );
    }
    );
    // console.log(character);
    return (
        <section className="cards-section">
            <ul className="cards-container">{character}</ul>
        </section>
    );
};


export default CharacterList;