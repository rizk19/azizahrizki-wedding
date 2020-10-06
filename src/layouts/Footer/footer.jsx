import React from "react";
import './footer.scss';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="img-footer"></div>
            <div className="footer-entity">
                <p className="footer-title">&copy;{' '}<a className="footer-link" href="https://github.com/rizk19"><strong>Rizki Ahmad Faris</strong></a> .2020</p>
                <p className="footer-title"><a className="footer-link" href="https://github.com/rizk19">rizk19.github.io</a></p>
                <caption className="footer-caption" >Created with love. By designers and developers who
        love to work together.</caption>
            </div>
        </footer>
    )
}

export default Footer