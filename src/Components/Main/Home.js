import React, { useEffect, useRef, useState } from 'react';
import Company from '../Company/Company';
import Welcome from './Welcome';

import french from '../../Medias/Image/Icons/france32.png';
import english from '../../Medias/Image/Icons/english32.png';
import About from '../About/About';
import Services from '../Services/Services';
import Cars from '../Cars/Cars';
import Booking from '../Booking/Booking';

const Home = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [isEntered, setIsEntered] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const headerRef = useRef(null)

    useEffect(() => {
        console.log('=== LOADING ===');
        console.log(isLoaded);
    }, [isLoaded])

    useEffect(() => {
        console.log(scrollY);
        const header = headerRef.current;

        if (header !== null && scrollY > 0) {
            header.style.backgroundColor = '#040613';
        }
        else {
            header.style.backgroundColor = 'transparent';
        }

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
            <Welcome isLoaded={isLoaded} setIsEntered={setIsEntered} />
            <header ref={headerRef}>
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
                    <Company setIsLoaded={setIsLoaded} isEntered={isEntered} />
                </section>
                <div className="transition"></div>
                <section className="about-ctr">
                    <About scrollY={scrollY} />
                </section>
                <div className="transition inverted"></div>
                <section className="services-ctr">
                    <Services scrollY={scrollY} />  
                </section>
                <section className='cars-ctr'>
                    <Cars scrollY={scrollY} />
                </section>
                <section className="booking-ctr">
                    <Booking />
                </section>
            </main>
            

        </div>
    );
};

export default Home;