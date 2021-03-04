import React from "react"
import { Link } from "react-router-dom";
import "../stylesheets/layout/Cards.scss";

const CharacterCard = (props) => {

    return (
        <>
            <Link to={`/character/${props.character.id}`}>
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
            </Link>
        </>
    )
};


export default CharacterCard;