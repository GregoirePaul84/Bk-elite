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

    const headerRef = useRef(null);
    const companyRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const carsRef = useRef(null);
    const bookingRef = useRef(null);

    function navigate(section) {
        switch(section) {
            case 'company':
                companyRef.current.scrollIntoView(({behavior: "smooth"}));
                break;

            case 'about':
                aboutRef.current.scrollIntoView(({behavior: "smooth"}));
                break;

            case 'services':
                servicesRef.current.scrollIntoView(({behavior: "smooth"}));
                break;

            case 'cars':
                carsRef.current.scrollIntoView(({behavior: "smooth"}));
                break;

            case 'booking':
                bookingRef.current.scrollIntoView(({behavior: "smooth"}));
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        // console.log(scrollY);
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
                        
                        <li onClick={() => navigate('about')}>
                            <div className="shine"></div>
                            À propos
                        </li>
                        <li onClick={() => navigate('services')}>
                            <div className="shine"></div>
                            Services
                        </li>
                        <li onClick={() => navigate('cars')}>
                            <div className="shine"></div>
                            Véhicules
                        </li>
                        <li onClick={() => navigate('booking')}>
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
                <section className="company-info-ctr" ref={companyRef} >
                    <Company setIsLoaded={setIsLoaded} isEntered={isEntered} />
                    <div className="top-link" onClick={() => navigate('company')}>
                        <svg width="30" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0001 0L0 46.2434L20.0001 36.1916L40 46.2434L20.0001 0Z" fill="white"/>
                        </svg>
                        <p>Haut de page</p>
                    </div>
                </section>
                <div className="transition"></div>
                <section className="about-ctr" ref={aboutRef}>
                    <About scrollY={scrollY} />
                </section>
                <div className="transition inverted"></div>
                <section className="services-ctr" ref={servicesRef}>
                    <Services scrollY={scrollY} />  
                </section>
                <section className='cars-ctr' ref={carsRef}>
                    <Cars scrollY={scrollY} />
                </section>
                <section className="booking-ctr" ref={bookingRef}>
                    <Booking />
                </section>
            </main>
            

        </div>
    );
};

export default Home;