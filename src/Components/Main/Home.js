import React, { useEffect, useState } from 'react';
import Company from '../Company/Company';
import Welcome from './Welcome';

import french from '../../Medias/Image/Icons/france32.png';
import english from '../../Medias/Image/Icons/english32.png';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {

    const [isEntered, setIsEntered] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        console.log(scrollY);
    }, [scrollY])

    const handleScroll = () => {    
        setScrollY(window.scrollY);
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll, {
        });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

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
                        
                        <li>
                            <div className="shine"></div>
                            À propos
                        </li>
                        <li>
                            <div className="shine"></div>
                            Services
                        </li>
                        <li>
                            <div className="shine"></div>
                            Véhicules
                        </li>
                        <li>
                            <div className="shine"></div>
                            Réservations
                        </li>
                    </ul>
                </nav>
                <div className="languages-ctn">
                    <img src={french} alt="drapeau français" />
                    <img src={english} alt="drapeau anglais" />
                </div>
            </header>
            <main>  
                <section className="company-info-ctr">
                    <Company isEntered={isEntered} />
                </section>
                <div className="transition"></div>
                <section className="about-ctr">
                    <About scrollY={scrollY} />
                </section>
                <div className="transition inverted"></div>
                <section className="services-ctr">
                    <Services />  
                </section>
            </main>
            

        </div>
    );
};

export default Home;