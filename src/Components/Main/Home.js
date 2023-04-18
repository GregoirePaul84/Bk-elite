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
    const [width, setWidth] = useState(window.innerWidth);
    const [menuIsShown, setMenuIsShown] = useState(false);

    const headerRef = useRef(null);
    const navRef = useRef(null);
    const topLinkRef = useRef(null);
    const companyRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const carsRef = useRef(null);
    const bookingRef = useRef(null);

    // Navigation lors du clic sur la barre de nav
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
        const header = headerRef.current;
        console.log(header);
        if(isEntered) {
            setTimeout(() => {
                header.style.position = 'fixed';
            }, 2500)
        }
        
    }, [isEntered])

    // Apparition du menu hamburger tablette & mobile
    useEffect(() => {
        const nav = navRef.current;

        if(menuIsShown || width > 1024) {
            nav.style.visibility = 'visible';
        }
        else {
            nav.style.visibility = 'hidden';
        }
    }, [width, menuIsShown])


    useEffect(() => {
        // console.log(scrollY);
        const header = headerRef.current;
        const topLink = topLinkRef.current;

        if (header !== null && topLink !== null & scrollY > 0) {
            header.style.backgroundColor = '#040613';
            topLink.style.display = 'flex';
        }
        else {
            header.style.backgroundColor = 'transparent';
            topLink.style.display = 'none';
        }

    }, [scrollY])

    // Détection du scroll de l'écran
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

    // Détection du resize de l'écran
    const handleWidth = () => {    
        setWidth(window.innerWidth);
    }

    useEffect(() => {

        window.addEventListener('resize', handleWidth, {
        });
    
        return () => {
            window.removeEventListener('resize', handleWidth);
        };
    });

    return (
        <div className="page-block">
            <Welcome isLoaded={isLoaded} setIsEntered={setIsEntered} />
            <header ref={headerRef}>
                <div className="brand-logo" onClick={() => navigate('company')}>
                    <h1>
                        <span>B</span>k-
                        <span>E</span>lite.
                    </h1>
                </div>
                <nav ref={navRef}>
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
                    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='hamburger-menu' onClick={() => setMenuIsShown(!menuIsShown)}>
                        <path d="M28.8 9.59998H3.2C1.44 9.59998 0 11.04 0 12.8C0 14.56 1.44 16 3.2 16H28.8C30.56 16 32 14.56 32 12.8C32 11.04 30.56 9.59998 28.8 9.59998Z" fill="white"/>
                        <path d="M3.2 6.4H22.4C24.16 6.4 25.6 4.96 25.6 3.2C25.6 1.44 24.16 0 22.4 0H3.2C1.44 0 0 1.44 0 3.2C0 4.96 1.44 6.4 3.2 6.4Z" fill="white"/>
                        <path d="M22.4 19.2H3.2C1.44 19.2 0 20.64 0 22.4C0 24.16 1.44 25.6 3.2 25.6H22.4C24.16 25.6 25.6 24.16 25.6 22.4C25.6 20.64 24.16 19.2 22.4 19.2Z" fill="white"/>
                    </svg>
                    <img src={french} alt="drapeau français" />
                    <img src={english} alt="drapeau anglais" />
                </div>
            </header>
            <main>  
                <section className="company-info-ctr" ref={companyRef} >
                    <Company setIsLoaded={setIsLoaded} isEntered={isEntered} navigate={navigate}/>
                    <div className="top-link" onClick={() => navigate('company')} ref={topLinkRef}>
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
                    <Services scrollY={scrollY} navigate={navigate}/>  
                </section>
                <section className='cars-ctr' ref={carsRef}>
                    <Cars scrollY={scrollY} />
                </section>
                <section className="booking-ctr" ref={bookingRef}>
                    <Booking />
                </section>
            </main>
            <footer>
                <div className="footer-column">
                    <div className="footer-title">
                        <h4 className='h-section'>
                            <span>B</span>k-
                            <span>E</span>lite.
                        </h4>
                    </div>
                    <div className="footer-content">
                        <p>Bk-elite est une société de taxi / chauffeur VTC spécialisé dans le transport de personnes à Avignon, Marseille, et dans tout le sud-est de la France.</p>
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-title">
                            <h4>
                                Zone d'intervention
                            </h4>
                        </div>
                        <div className="footer-content">
                            <p>Votre chauffeur vous accompagne dans vos déplacements dans toute la France et en Europe.</p>
                        </div>
                    </div>
                <div className="footer-column">
                    <div className="footer-title">
                        <h4>
                            Contact
                        </h4>
                    </div>
                    <ul className="footer-content">
                        <li>
                            <svg width="25" height="25" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.3723 30.2198C38.0766 27.7325 36.1531 25.7429 33.6578 24.3074C32.6952 23.7509 31.7863 23.4802 30.8792 23.4802C30.5263 23.4802 30.1723 23.5228 29.8248 23.6062C28.6728 23.8854 27.5664 24.4243 26.4424 25.2541C26.0875 25.516 25.6534 25.6486 25.1519 25.6486C24.5415 25.6486 23.8804 25.4391 23.4277 25.1019C20.1417 22.6522 17.3533 19.864 14.9042 16.5784C14.4226 15.9318 14.0409 14.5261 14.7513 13.5633C15.5813 12.4391 16.1204 11.3325 16.3998 10.1788C16.6992 8.93544 16.4697 7.68244 15.6998 6.35044C14.2626 3.85211 12.2728 1.92878 9.78628 0.633333C8.9805 0.213333 8.15595 0 7.33562 0C5.96373 0 4.67973 0.595888 3.62306 1.72211C2.65173 2.75578 1.79295 3.85033 0.802067 5.17566C-0.104933 6.38999 -0.0301548 7.79077 0.0359563 9.02666L0.0376229 9.05299C0.148956 10.6205 0.734511 12.4757 1.82762 14.7224C3.67684 18.5254 6.3034 22.1365 9.85662 25.7618C10.5865 26.5071 13.4974 29.4181 14.2432 30.148C17.8692 33.7023 21.4803 36.3286 25.2826 38.1776C27.5299 39.2709 29.3845 39.8562 30.9525 39.9677L30.9788 39.9694C31.3014 39.9866 31.6462 40.0027 31.9817 40.0027H31.9818C32.8097 40.0027 33.8815 39.9119 34.8297 39.203C36.1554 38.2123 37.2501 37.3534 38.2824 36.3832C40.0923 34.6853 40.4995 32.381 39.3723 30.2198Z" fill="#D1B000"/>
                            </svg>
                            06.58.22.86.36
                        </li>
                        <li>
                            <svg width="25" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35 1.21669V0H0V1.21669L17.5 9.88898L35 1.21669Z" fill="#D1B000"/>
                                <path d="M17.5 12.952L0 4.27979V24.2097H35V4.27979L17.5 12.952Z" fill="#D1B000"/>
                            </svg>
                            bk-elite@contact
                        </li>
                        <li>
                            <svg width="25" height="25" viewBox="0 0 35 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35 17.5301C35 7.84868 27.1631 0 17.5011 0C7.83901 0 0 7.84868 0 17.5301C0 21.3524 1.72422 24.5881 3.29696 27.7701C6.03637 33.3112 11.0844 42.0365 13.7422 46.7591C14.4222 47.9676 15.9853 48.8947 17.7256 48.885C19.4659 48.8754 21.0075 47.9719 21.6736 46.7623C24.2744 42.043 28.7165 34.4629 31.746 27.711C33.1898 24.4957 35 21.3277 35 17.5301ZM17.5 11.7934C20.668 11.7934 23.2366 14.362 23.2366 17.5301C23.2366 20.6971 20.668 23.2657 17.5 23.2657C14.332 23.2657 11.7634 20.6971 11.7634 17.5301C11.7644 14.362 14.332 11.7934 17.5 11.7934Z" fill="#D1B000"/>
                            </svg>

                        </li>
                    </ul>
                </div>
                <div className="legal-notice">
                    <p>© 2023, Bk-elite</p>
                    <p>
                        <span>Mentions légales </span> 
                        | 
                        <span> Conditions générales de vente</span></p>
                    <p>Site développé par 
                        <a href=""> Grégoire Paulet</a>
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Home;