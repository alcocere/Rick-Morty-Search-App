import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/layout/CardDetail.scss";
import PropTypes from "prop-types";
import Loader from "../Loader";
import Footer from "../Footer";

const CharacterDetail = (props) => {
    if (props.isLoading && props.character === undefined) {
        return <Loader />
    }
    console.log(props);
    return (
        <>
            <main>
                <article className='card-detail'>
                    <Link to='/' title='Back to List' className='card-detail__modalText'>
                        {" "}
					Back to List <span className='card-detail__modalClose icon fas fa-times'></span>
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
                                {props.character.status}  <i className={`fas fa-circle ${props.character.status === 'Dead' ? 'dead' : props.character.status === 'Alive' ? 'alive' : ''}`} />
                            </span>
                        </li>
                        <li className='card-detail__info'>
                            <strong>Species:</strong>{" "}
                            <span className='card-detail__info2'>
                                {props.character.species}{" "} {props.character.species === 'Human' ? '' : props.character.species === 'Alien' ? '' : ''}
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
            <Footer />
        </>
    );
};

export default CharacterDetail;
CharacterDetail.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    origin: PropTypes.string,
    episode: PropTypes.number,
};