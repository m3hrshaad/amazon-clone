import React from 'react';
import "../StyleComponents/home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home-image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="" />
                
                <div className="home_row">
                    <Product
                        id="12345213"
                        title="Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black"
                        price={150.00}
                        image='https://images-na.ssl-images-amazon.com/images/I/91K9SyGiyzL._AC_SL1500_.jpg'
                        rating={4}
                    />

                    <Product
                        id="12213211"
                        title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory..."
                        price={14.60}
                        image='https://images-na.ssl-images-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg'
                        rating={5}
                    />
                </div>

                <div className="home_row">
                    <Product
                        id="12783211"
                        title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB"
                        price={443.63}
                        image='https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg'
                        rating={3}
                    />

                    <Product
                        id="12218632"
                        title="Samsung Galaxy Tab A7 10.4 Wi-Fi 32GB Silver (SM-T500NZSAXAR)"
                        price={199.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71MvL2kCFCL._AC_SL1500_.jpg'
                        rating={4}
                    />
                    <Product
                        id="12827129"
                        title="Sony Playstation 4 Slim Video Game Console 500GB Jet Black PS4"
                        price={499.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/517K0j5HfvL._AC_SL1500_.jpg'
                        rating={5}
                    />
                </div>

                <div className="home_row">
                    <Product
                        id="89460211"
                        title="Razer Raptor 27 Gaming Monitor & Huntsman Elite Gaming Keyboard: Fastest Keyboard Switches Ever - Clicky Optical Switches - Chroma RGB Lighting - Magnetic Plush Wrist Rest - Classic Black"
                        price={799.94}
                        image='https://images-na.ssl-images-amazon.com/images/I/51xm9B0B54L._AC_SL1001_.jpg'
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
