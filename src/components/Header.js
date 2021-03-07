import React from "react"
import logo from "../images/header-rick-square.png"
import { Link } from "react-router-dom";
import "../stylesheets/layout/Header.scss";


const Header = () => {
    return (
        <header className="header">
            <div>
                <Link to="/" className="header__link">
                    <img src={logo} alt="Rick and Morty tv series logo"
                        title="Rick and Morty tv series logo"
                        className="header__image" />
                </Link>
            </div>
        </header>
    )
};

export default Header;