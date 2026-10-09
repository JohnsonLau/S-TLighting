import React from "react";
import "./Home.css";

const Home = () => (
    <section className="homeBackground" aria-labelledby="home-brand">
        <div className="homeContent">
            <h1 className="homeBrand" id="home-brand">
                <span className="homeBrandS">S</span>&amp;<span className="homeBrandT">T</span> Lighting
            </h1>
            <p className="homeEyebrow">
                <span className="homeEyebrowDot" aria-hidden="true" />
                Commercial lighting for better business
            </p>
            <h2 className="homeTitle">
                Better light.
                <br />
                <span>Brighter possibilities.</span>
            </h2>
            <p className="homeDescription">
                Thoughtful lighting solutions for commercial and industrial spaces,
                backed by local expertise you can count on.
            </p>
            <a className="homeCta" href="#Products">
                Explore our line cards
                <span aria-hidden="true">&rarr;</span>
            </a>
            <p className="homeLocation">Proudly serving Vancouver and the Lower Mainland</p>
        </div>
        <div className="homeTrustCard">
            <span className="homeTrustMark" aria-hidden="true">S&amp;T</span>
            <p>
                <strong>A brighter future ahead.</strong>
                <span>Local lighting expertise since 2010</span>
            </p>
        </div>
    </section>
);

export default Home;
