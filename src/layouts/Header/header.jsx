import React, { useState } from "react";
import useDocumentScrollThrottled from './header-hider';
import './header.scss';

function Header() {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowHeader, setShouldShowHeader] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowHeader(currentScrollTop === 0);

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const showStyle = shouldShowHeader ? ' navigation-at-top' : '';
    const hiddenStyle = shouldHideHeader ? 'navigation-hidden' : '';

    return (
        <header>
            <ul className={`navigation${showStyle} ${hiddenStyle}`}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About Us</a>
                </li>
                <li>
                    <a href="#times">Time & Place</a>
                </li>
            </ul>
        </header>
    );
}

export default Header;
