import React from "react"

const CharacterCard = (props) => {

    return (
        <>
            <article className="card">
                <img
                    src={props.character.image}
                    alt={"Image from " + props.character.name}
                    title={"Image from " + props.character.name}
                    className="card__image"
                />
                <h2 className="card__name">{props.character.name}</h2>
                <p className="card__species">{props.character.species}</p>
            </article>
        </>
    )
};


export default CharacterCard;