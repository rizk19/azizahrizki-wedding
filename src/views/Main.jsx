import React from "react";
import './index.scss';
import { AboutSection, TimeSection, PlaceSection } from "./index";

function Main() {
    return (
        <>
            <div style={{}}>
                <header className="header" id="home" />
                <div className="header-text-box">
                    <h1 className="title-header">Rizki & Azizah</h1>
                    <h4 className="side-title-header">Wedding</h4>
                    <h4 className="side-title-header">24 - 10 - 2020</h4>
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <AboutSection />
            </div>
            <TimeSection />
            <PlaceSection />
        </>
    );
}

export default Main;