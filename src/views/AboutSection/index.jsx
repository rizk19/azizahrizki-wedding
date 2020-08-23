import React from "react";

function AboutSection() {
    return (
        <div className="wrapper">
            <div className="main-title">
                <h1>We're Getting Married</h1>
            </div>
            <div className="main" id="about">
                <ul className="flex-container">
                    <li className="flex-item left-box">
                        <div className="flex-item-1"></div>
                        <div className="flex-item-wrapperbox-left">
                            <div className="flex-item-textbox-left">
                                <div className="flex-item-avatar-left"></div>
                                <p className="flex-item-name">Sri Hardiana Azizah</p>
                                <p className="flex-item-subname">Putri dari Bapak Harun dan Ibu Sri Retno</p>
                            </div>
                        </div>
                    </li>
                    <li className="flex-item right-box">
                        <div className="flex-item-2"></div>
                        <div className="flex-item-wrapperbox-right">
                            <div className="flex-item-textbox-right">
                                <div className="flex-item-avatar-right"></div>
                                <p className="flex-item-name">Rizki Ahmad Faris</p>
                                <p className="flex-item-subname">Putra dari Bapak Deni Sobari dan Ibu Siti Nurbayani K.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AboutSection;