import React from 'react';

const PlaceSection = () => {
    return (
        <>
            <div className="section-gap-place">
                <div className="place-wrapper-header">
                    <p className="place-title">Tempat Resepsi</p>
                    <div className="place-border-address">
                        <h3 className="place-address-title">Masjid Bani Umar</h3>
                        <p type="text" disabled id="place-address" className="place-address" >Jalan Graha Bintaro Kav. GK 4 No. 2-4, Parigi Baru, Pondok Aren, South Tangerang City, Banten 15226</p>
                    </div>
                </div>
                <div style={{ width: "100%" }}>
                    <iframe title="wedding-route" width="100%" height="600" frameBorder={0} scrolling={"no"} marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-6.270600,%20106.689304+(Masjid%20Bani%20Umar)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                <a className="maps-button" href="https://goo.gl/maps/uQ2PEJQ7khdQvT5NA">Buka Maps</a>
            </div>
        </>
    )
}

export default PlaceSection