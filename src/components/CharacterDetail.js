import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/layout/CardDetail.scss";

const CharacterDetail = (props) => {
    console.log(props);
    return (
        <>
            <main className="main-detail">
                <article className='card-detail'>
                    <Link to='/' title='Back to List' className='modal__close-text'>
                        {" "}
					Back to List <span className='modal__close icon fas fa-times'></span>
                    </Link>
                    <div>
                        <img
                            src={props.character.image}
                            alt={"Image from " + props.character.name}
                            title={"Image from " + props.character.name}
                            className='card-detail__img'
                        />
                    </div>
                    <h2 className='card-detail__name'>{props.character.name}</h2>
                    <ul>
                        <li className='card-detail__info'>
                            <strong>Status:</strong>{" "}
                            <span className='card-detail__info2'>
                                {" "}
                                {props.character.status}
                            </span>
                        </li>
                        <li className='card-detail__info'>
                            <strong>Species:</strong>{" "}
                            <span className='card-detail__info2'>
                                {props.character.species}{" "}
                            </span>
                        </li>
                        <li className='card-detail__info'>
                            <strong>Origin:</strong>{" "}
                            <span className='card-detail__info2'>
                                {" "}
                                {props.character.origin}
                            </span>
                        </li>
                        <li className='card-detail__info'>
                            <strong>Episodes:</strong>{" "}
                            <span className='card-detail__info2'>
                                {props.character.episodes.length}
                            </span>
                        </li>
                    </ul>
                </article>
            </main>
        </>
    );
};

export default CharacterDetail;
