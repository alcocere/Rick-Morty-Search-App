import React from "react"
import "../stylesheets/layout/Footer.scss";


const Footer = () => {
    return (
        <footer className="footer">
            <small className="footer__small--first">Rick and Morty character search</small>
            <img className="footer__icon" src="https://media.giphy.com/media/8yhfcK3rAvMQ/giphy.gif" alt="footer" />
            <small className="footer__small--second">&copy; alcocere
             </small>
        </footer >
    )
};


export default Footer;