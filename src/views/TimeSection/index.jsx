import React, { useState } from 'react';

const TimeSection = () => {

    const [countdownDate] = useState(new Date('10/24/2020').getTime());
    const [times, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    React.useEffect(() => {
        setInterval(() => setNewTime(), 1000);
        // eslint-disable-next-line
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate = countdownDate - currentTime;

            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            setTime({ days: days, hours: hours, minutes, seconds });
        }
    }
    return (
        <div className="section-gap-time">
            <div className="texture-bg">
                <h3 className="section-title" id="times">Sabtu, 24 Oktober 2020</h3>
                <ul className="times-container">
                    <li className="times-item">
                        <div className="times-frame"></div>
                        <p className="times-number">{times.days}</p>
                        <p className="times-title">Hari</p>
                    </li>
                    <li className="times-item">
                        <div className="times-frame"></div>
                        <p className="times-number">{times.hours}</p>
                        <p className="times-title">Jam</p>
                    </li>
                    <li className="times-item">
                        <div className="times-frame"></div>
                        <p className="times-number">{times.minutes}</p>
                        <p className="times-title">Menit</p>
                    </li>
                    <li className="times-item">
                        <div className="times-frame"></div>
                        <p className="times-number">{times.seconds}</p>
                        <p className="times-title">Detik</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TimeSection