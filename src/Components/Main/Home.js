import React, { useEffect, useRef, useState } from 'react';
import Company from '../Company/Company';
import Welcome from './Welcome';

import french from '../../Medias/Image/Icons/france32.png';
import english from '../../Medias/Image/Icons/english32.png';
import About from '../About/About';
import Services from '../Services/Services';
import Cars from '../Cars/Cars';
import Booking from '../Booking/Booking';
import { Link } from 'react-router-dom';

const homeTxt = {
    fr: {
        nav1: 'À propos',
        nav2: 'Services',
        nav3: 'Véhicules',
        nav4: 'Réservations',
        topPage: 'Haut de page',
        footerTitle2: 'Zone d\'intervention',
        footerP1: 'Bk-elite est une société de VTC/Taxi spécialisée dans le transport de personnes, opérant principalement en région PACA et Languedoc-Roussillon.',
        footerP2: 'Votre chauffeur vous accompagne dans vos déplacements dans toute la France et en Europe.',
        legal: 'Mentions légales',
        cgv: 'Conditions générales de vente',
        devBy: 'Développé par',
    },

    en: {
        nav1: 'About',
        nav2: 'Services',
        nav3: 'Vehicles',
        nav4: 'Booking',
        topPage: 'Scroll to top',
        footerTitle2: 'Intervention Zone',
        footerP1: 'Bk-elite is a taxi/VTC company specialized in passenger transportation in Avignon, Marseille, and throughout the southeastern region of France.',
        footerP2: 'Our driver accompanies you during your trips throughout France and Europe.',
        legal: 'Legal Notice',
        cgv: 'Terms of Sales',
        devBy: 'Developed by'
    }
}

const Home = () => {

    const [lang, setLang] = useState('fr');
    const [isLoaded, setIsLoaded] = useState(false);
    const [isEntered, setIsEntered] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
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

    function handleLanguageChange(newLang) {

        if(newLang === lang) return;

        document.documentElement.lang = newLang;
        localStorage.setItem('lang', newLang);
        window.location.reload();
    };

    useEffect(() => {
        const storedLang = localStorage.getItem('lang');
        if (storedLang) {
          setLang(storedLang);
          document.documentElement.lang = storedLang;
        } else {
          // Langue par défaut si aucune langue n'est enregistrée
          setLang('fr');
          document.documentElement.lang = 'fr';
        }
    }, []);

    useEffect(() => {
        const header = headerRef.current;

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
        setScrollY(window.scrollY / window.innerHeight);
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
            <Welcome lang={lang} isLoaded={isLoaded} setIsEntered={setIsEntered} setShowVideo={setShowVideo} />
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
                            {homeTxt[lang].nav1}
                        </li>
                        <li onClick={() => navigate('services')}>
                            <div className="shine"></div>
                            {homeTxt[lang].nav2}
                        </li>
                        <li onClick={() => navigate('cars')}>
                            <div className="shine"></div>
                            {homeTxt[lang].nav3}
                        </li>
                        <li onClick={() => navigate('booking')}>
                            <div className="shine"></div>
                            {homeTxt[lang].nav4}
                        </li>
                    </ul>
                </nav>
                <div className="right-ctn">
                    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='hamburger-menu' onClick={() => setMenuIsShown(!menuIsShown)}>
                        <path d="M28.8 9.59998H3.2C1.44 9.59998 0 11.04 0 12.8C0 14.56 1.44 16 3.2 16H28.8C30.56 16 32 14.56 32 12.8C32 11.04 30.56 9.59998 28.8 9.59998Z" fill="white"/>
                        <path d="M3.2 6.4H22.4C24.16 6.4 25.6 4.96 25.6 3.2C25.6 1.44 24.16 0 22.4 0H3.2C1.44 0 0 1.44 0 3.2C0 4.96 1.44 6.4 3.2 6.4Z" fill="white"/>
                        <path d="M22.4 19.2H3.2C1.44 19.2 0 20.64 0 22.4C0 24.16 1.44 25.6 3.2 25.6H22.4C24.16 25.6 25.6 24.16 25.6 22.4C25.6 20.64 24.16 19.2 22.4 19.2Z" fill="white"/>
                    </svg>
                    <div className="languages-ctn">
                        <img src={french} alt="drapeau français" onClick={() => handleLanguageChange('fr')}/>
                        <img src={english} alt="drapeau anglais" onClick={() => handleLanguageChange('en')}/>
                    </div>
                </div>
            </header>
            <main>  
                <section className="company-info-ctr" ref={companyRef} >
                    <Company lang={lang} scrollY={scrollY} setIsLoaded={setIsLoaded} isEntered={isEntered} showVideo={showVideo} navigate={navigate}/>
                    <div className="top-link" onClick={() => navigate('company')} ref={topLinkRef}>
                        <svg width="30" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0001 0L0 46.2434L20.0001 36.1916L40 46.2434L20.0001 0Z" fill="white"/>
                        </svg>
                        <p>{homeTxt[lang].topPage}</p>
                    </div>
                </section>
                <div className="transition"></div>
                <section className="about-ctr" ref={aboutRef}>
                    <About lang={lang} scrollY={scrollY} width={width}/>
                </section>
                <div className="transition inverted"></div>
                <section className="services-ctr" ref={servicesRef}>
                    <Services lang={lang} scrollY={scrollY} navigate={navigate}/>  
                </section>
                <section className='cars-ctr' ref={carsRef}>
                    <Cars lang={lang} scrollY={scrollY} />
                </section>
                <section className="booking-ctr" ref={bookingRef}>
                    <Booking lang={lang} />
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
                        <p>{homeTxt[lang].footerP1}</p>
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-title">
                            <h4>
                                {homeTxt[lang].footerTitle2}
                            </h4>
                        </div>
                        <div className="footer-content">
                            <p>{homeTxt[lang].footerP2}</p>
                        </div>
                    </div>
                <div className="footer-column">
                    <div className="footer-title">
                        <h4>
                            Contact
                        </h4>
                    </div>
                    <ul className="footer-content contact">
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
                            bk-elite-e-transport@bk-elite.fr
                        </li>
                        <li>
                            <svg width="25" height="25" viewBox="0 0 35 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35 17.5301C35 7.84868 27.1631 0 17.5011 0C7.83901 0 0 7.84868 0 17.5301C0 21.3524 1.72422 24.5881 3.29696 27.7701C6.03637 33.3112 11.0844 42.0365 13.7422 46.7591C14.4222 47.9676 15.9853 48.8947 17.7256 48.885C19.4659 48.8754 21.0075 47.9719 21.6736 46.7623C24.2744 42.043 28.7165 34.4629 31.746 27.711C33.1898 24.4957 35 21.3277 35 17.5301ZM17.5 11.7934C20.668 11.7934 23.2366 14.362 23.2366 17.5301C23.2366 20.6971 20.668 23.2657 17.5 23.2657C14.332 23.2657 11.7634 20.6971 11.7634 17.5301C11.7644 14.362 14.332 11.7934 17.5 11.7934Z" fill="#D1B000"/>
                            </svg>
                            08 avenue Albert Camus <br />
                            30150 Roquemaure
                        </li>
                        <li className='network'>
                            <a href="https://www.facebook.com/profile.php?id=100090684500539" 
                               aria-label="Facebook" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                <svg width="25" height="25" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1457 32.4749L15.2995 22.136L11.1418 22.1119L11.2586 17.1111H15.3463V13.4961C15.3463 12.9894 15.4062 12.4719 15.49 11.9733C15.565 11.5273 15.6722 11.0864 15.8216 10.6607C15.9563 10.277 16.1255 9.90575 16.3342 9.55895C16.5297 9.23408 16.7597 8.93138 17.0214 8.66062C17.2794 8.39371 17.5675 8.15849 17.877 7.95822C18.1975 7.75072 18.54 7.58069 18.8943 7.44416C19.4772 7.21955 20.0952 7.07591 20.7139 7.00964C21.3538 6.94095 22.0002 6.97614 22.642 6.99024C22.9073 6.99602 23.1725 7.00193 23.4377 7.00542C23.9306 7.01193 24.4234 7.01795 24.9164 7.0235C24.9353 7.02374 24.9543 7.02398 24.9733 7.02422L24.853 11.6524C24.853 11.6524 24.2807 11.6283 22.2719 11.6524C20.2982 11.6765 20.2748 13.1948 20.2748 13.2671L20.2515 17.1111L24.853 17.1954L24.1873 22.1119H20.2748L20.2484 32.4749H28.5319C30.1553 32.4749 31.475 31.1132 31.475 29.4383V3.03661C31.475 1.36166 30.1553 0 28.5319 0H2.94312C1.31973 0 0 1.36166 0 3.03661V29.4383C0 31.1132 1.31973 32.4749 2.94312 32.4749H15.1457Z" fill="#D1B000"/>
                                </svg>
                            </a>
                            <a href="https://instagram.com/bk_elite_e_transport?igshid=MzNlNGNkZWQ4Mg==" 
                               aria-label="Instagram" 
                               target="_blank"
                               rel="noopener noreferrer">
                                <svg width="27" height="27" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.3844 8.35673C29.3845 8.75727 29.2624 9.14884 29.0336 9.48192C28.8047 9.815 28.4794 10.0746 28.0988 10.2279C27.7182 10.3813 27.2994 10.4214 26.8953 10.3433C26.4912 10.2651 26.1201 10.0723 25.8287 9.78904C25.5374 9.50582 25.339 9.14495 25.2587 8.7521C25.1783 8.35925 25.2196 7.95205 25.3773 7.58201C25.535 7.21197 25.802 6.89571 26.1446 6.67323C26.4872 6.45075 26.89 6.33205 27.302 6.33213C27.8542 6.33224 28.3838 6.54558 28.7743 6.92524C29.1649 7.3049 29.3843 7.8198 29.3844 8.35673ZM36 17.5001L35.9996 17.5256L35.8813 24.8678C35.8506 27.5151 34.7552 30.0456 32.8297 31.9176C30.9041 33.7897 28.3014 34.8546 25.5784 34.8845L18 35.0002L17.9738 34.9997L10.4219 34.8851C7.69892 34.8552 5.09611 33.7903 3.17049 31.9182C1.24487 30.0462 0.149412 27.5157 0.118543 24.8683L0 17.5001L0.00051433 17.4746L0.118457 10.1322C0.149413 7.48489 1.2449 4.95447 3.1705 3.08243C5.0961 1.2104 7.69886 0.145465 10.4218 0.115501L18 0L18.0262 0.000500047L25.5781 0.115167C28.301 0.145134 30.9037 1.21009 32.8292 3.08213C34.7547 4.95418 35.8501 7.4846 35.8809 10.1319L36 17.5001ZM32.6475 17.5001L32.5298 10.1834C32.5089 8.3837 31.7642 6.66345 30.4552 5.39078C29.1462 4.11811 27.3768 3.39413 25.5257 3.37377L18 3.25952L10.4743 3.37377C8.62317 3.39417 6.8538 4.11816 5.54477 5.39081C4.23575 6.66347 3.49106 8.3837 3.47006 10.1834L3.35254 17.5001L3.47006 24.8168C3.49099 26.6166 4.23566 28.3368 5.5447 29.6095C6.85374 30.8822 8.62315 31.6061 10.4743 31.6265L18 31.7407L25.5257 31.6265C27.3768 31.6062 29.1463 30.8822 30.4553 29.6095C31.7643 28.3369 32.5089 26.6166 32.5298 24.8168L32.6475 17.5001ZM27.2434 17.5001C27.2434 19.2776 26.7013 21.0151 25.6856 22.4929C24.6699 23.9708 23.2263 25.1227 21.5372 25.8029C19.8482 26.4831 17.9896 26.661 16.1966 26.3143C14.4035 25.9675 12.7565 25.1116 11.4637 23.8547C10.171 22.5979 9.29065 20.9966 8.934 19.2533C8.57735 17.51 8.76041 15.7031 9.46004 14.061C10.1597 12.4188 11.3445 11.0153 12.8646 10.0278C14.3847 9.04035 16.1718 8.51329 18 8.51331C20.4507 8.516 22.8002 9.46369 24.5331 11.1485C26.2659 12.8332 27.2407 15.1175 27.2434 17.5001ZM23.8914 17.5001C23.8914 16.3673 23.5459 15.2598 22.8985 14.3179C22.2511 13.3759 21.331 12.6418 20.2545 12.2083C19.1779 11.7747 17.9934 11.6613 16.8505 11.8823C15.7077 12.1033 14.6579 12.6489 13.834 13.4499C13.01 14.251 12.4489 15.2716 12.2216 16.3827C11.9943 17.4938 12.111 18.6455 12.5569 19.6921C13.0028 20.7388 13.758 21.6333 14.7268 22.2627C15.6957 22.8921 16.8348 23.228 18 23.228C19.5619 23.2262 21.0594 22.6222 22.1638 21.5484C23.2683 20.4746 23.8895 19.0187 23.8913 17.5001H23.8914Z" fill="#D1B000"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="legal-notice">
                    <p>© 2023, Bk-elite</p>
                    <p>
                        <Link to="/bk-elite/mentions-legales" target="_blank">
                            <span>{homeTxt[lang].legal} </span> 
                        </Link>
                        | 
                        <Link to="/bk-elite/cgv" target="_blank">
                            <span to="/cgv"> {homeTxt[lang].cgv}</span>
                        </Link>
                    </p>   
                    <p>{homeTxt[lang].devBy} 
                        <a href="mailto:gregoirepaulet84@gmail.com"> Grégoire Paulet</a>
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Home;