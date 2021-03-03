import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
    console.log(props);
    return (
        <main>
            <article>
                <div>
                    <img
                        src={props.character.image}
                        alt={"Image from " + props.character.name}
                        title={"Image from " + props.character.name}
                    />
                </div>
                <h2>{props.character.name}</h2>
                <p><strong>Status:</strong>{props.character.status}</p>
                <p><strong>Species:</strong>{props.character.species}</p>
                <p><strong>Origin:</strong>{props.character.origin.name}</p>
                <p><strong>Episodes:</strong>{props.character.episode}</p>
            </article>
        </main>
    )
};

export default CharacterDetail;