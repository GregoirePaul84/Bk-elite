import React, { useState } from 'react';
import Company from '../Company/Company';
import Nav from './Nav';
import Welcome from './Welcome';

import french from '../../Medias/Image/Icons/france32.png';
import english from '../../Medias/Image/Icons/english32.png';

const Home = () => {

    const [isEntered, setIsEntered] = useState(false);

    return (
        <div className="page-block">
            <Welcome setIsEntered={setIsEntered} />
            <header>
                <div className="brand-logo">
                    <h1>
                        <span>B</span>k-
                        <span>E</span>lite.
                    </h1>
                </div>
                <nav>
                    <ul>
                        <li>À propos</li>
                        <li>Services</li>
                        <li>Véhicules</li>
                        <li>Réservations</li>
                    </ul>
                </nav>
                <div className="languages-ctn">
                    <img src={french} alt="drapeau français" />
                    <img src={english} alt="drapeau anglais" />
                </div>
            </header>
            <section className="company-info-ctr">
                <Company isEntered={isEntered} />
            </section>
        </div>
    );
};

export default Home;