import React, { useEffect, useRef, useState } from 'react';

import taxiImg from '../../Medias/Image/Main/taxi.jpg';
import airplaneImg from '../../Medias/Image/Main/airplane.jpg';
import distanceImg from '../../Medias/Image/Main/distance.jpg';
import weddingImg from '../../Medias/Image/Main/wedding.jpg';
import provenceImg from '../../Medias/Image/Main/pexels-claudio-vincenti-4106624.jpg';
import Extras from './Extras';

const servicesArray = [
    {
        title : 'Taxi driver',
        p1 : <p dangerouslySetInnerHTML={{__html: 'Vous avez besoin d\'un moyen de transport rapide et fiable pour vos déplacements en ville? Notre service driver vous offre une solution pratique et économique pour tous vos trajets.'}} />,
        p2 : <p dangerouslySetInnerHTML={{__html: 'Nos chauffeurs professionnels et expérimentés vous conduiront à votre destination en toute sécurité, avec des véhicules modernes et bien entretenus.'}} />,
        li1 : <li dangerouslySetInnerHTML={{__html: 'Nous vous offrons un service de <span class=colored>rafraîchissement</span> ainsi que de <span class=colored>collations</span> à bord.'}} />,
        li2 : <li dangerouslySetInnerHTML={{__html: 'Vous entamerez votre voyage de manière <span class=colored>confortable et détendue.</span>'}} />
    },
    {
        title : 'Transfert aéroport',
        p1 : <p dangerouslySetInnerHTML={{__html: 'Vous prenez l\'avion pour votre travail ou pour le tourisme ? </br> Nous savons que voyager peut être <b>éprouvant</b>.'}} />,
        p2 : <p dangerouslySetInnerHTML={{__html: 'Commencez votre voyage de manière <span class=colored>sereine</span> : '}} />,
        li1 : <li dangerouslySetInnerHTML={{__html: 'Nous vous offrons un service de <span class=colored>rafraîchissement</span> ainsi que de <span class=colored>collations</span> à bord.'}} />,
        li2 : <li dangerouslySetInnerHTML={{__html: 'Vous entamerez votre voyage de manière <span class=colored>confortable et détendue.</span>'}} />
    },
    {
        title : 'Longues distances',
        p1 : <p dangerouslySetInnerHTML={{__html: 'Vous souhaitez  entreprendre un long voyage sans stress et avec une <span class=colored>expérience de première classe ?</span>'}} />,
        p2 : <p dangerouslySetInnerHTML={{__html: 'Nous prendrons en compte tous les détails pour rendre votre transport aussi <span class=colored>confortable que possible.</span>'}} />,
        li1 : <li dangerouslySetInnerHTML={{__html: 'Nous vous offrons un service de <span class=colored>rafraîchissement</span> ainsi que de <span class=colored>collations</span> à bord.'}} />,
        li2 : <li dangerouslySetInnerHTML={{__html: 'Vous entamerez votre voyage de manière <span class=colored>confortable et détendue.</span>'}} />
    },
    {
        title : 'Événements',
        p1 : <p dangerouslySetInnerHTML={{__html: '<span class=colored>Vous préparez votre mariage</span> et vous cherchez un moyen de transport élégant et raffiné pour votre grand jour? Notre <strong>service de chauffeur privé VTC</strong> vous offre des options sur mesure pour rendre votre <span class=colored>journée inoubliable.</span>'}} />,
        p2 : <p dangerouslySetInnerHTML={{__html: 'Nous proposons des véhicules décorés selon vos goûts et vos envies, avec des <strong>chauffeurs professionnels et expérimentés</strong> pour vous conduire en toute sécurité.'}} />,
        li1 : <li dangerouslySetInnerHTML={{__html: 'Nous nous adaptons à vos envies et mettons à votre disposition des services complémentaires pour répondre à vos besoins.'}} />,
        li2 : <li dangerouslySetInnerHTML={{__html: 'Contactez-nous dès maintenant pour en savoir plus sur nos offres et réserver votre véhicule de mariage!'}} />
    },
    {
        title : 'Extras',
        // Vous voyagez avec des bagages encombrants  ou coûteux et vous cherchez un moyen de transport pratique, confortable et de confiance. Notre service de chauffeur privé VTC vous offre une solution sur mesure pour vos déplacements. Nous proposons des services de bagagiste pour vous aider à transporter vos valises et vos sacs en toute sécurité. Nos chauffeurs professionnels et expérimentés prendront soin de vos affaires et vous conduiront à votre destination en toute sérénité. Réservez dès maintenant votre trajet avec service de bagagiste et laissez-nous prendre soin de vous!
        p1 : <p dangerouslySetInnerHTML={{__html: 'Chez <strong>Bk-Elite</strong>, notre priorité est de donner la meilleure expérience possible à notre clientèle.'}} />,
        p2 : <p dangerouslySetInnerHTML={{__html: 'Vous voyagez avec des bagages encombrants ou coûteux, vous souhaitez faire confiance à notre connaissance de la région pour faire du tourisme, ou plus encore ?  Notre service de chauffeur privé VTC vous offre une solution sur mesure pour vos déplacements.'}} />,
        // li1 : <li className='extras' dangerouslySetInnerHTML={{__html: 'Service bagagerie'}} />,
        // li2 : <li className='extras' dangerouslySetInnerHTML={{__html: 'Vous avez besoin de transporter un excédent de bagages ? Nous mettons à votre disposition un van pour transporter tout objets volumineux.'}} />
    }
];

const services = ['taxi', 'airport', 'distance', 'events', 'extras'];

const Services = ({scrollY, navigate}) => {

    const [selectedService, setSelectedService] = useState('taxi');
    const [servicesCtg, setServicesCtg] = useState(0);
    const [servicesSlide, setServicesSlide] = useState({from: undefined, to: 'taxi'});
    const [isHover, setIsHover] = useState(undefined);
    const [extraShown, setExtraShown] = useState({type: null, isShown: false});

    const sliderRef = useRef(null);
    const contentRef = useRef(null);
    const bannerRef = useRef(null);
    const bookLinkRef = useRef(null);
    const svgBookRef = useRef(null);
    const textPRef = useRef([]);
    const listRef = useRef([]);

    function displayServices(index) {
        const slider = sliderRef.current;
        const content = contentRef.current;
        const banner = bannerRef.current;
        const bookLink = bookLinkRef.current;
        const svgBook = svgBookRef.current;
        const textP = textPRef.current;
        const list = listRef.current;

        if(index === 'noSlide') {

            banner.style.animation = 'bannerY 1s ease-out 1 forwards';
            // bookLink.style.animation = 'displayBanner 1s ease-out 1 forwards';
            bookLink.style.transition = '1s';
            bookLink.style.transform = 'scaleX(1)';

            textP.forEach((p) => {
                p.style.animation = 'opa0to1 1s ease-in-out 1 forwards 1s';
            })

            svgBook.style.animation = 'opa0to1 1s ease-in-out 1 forwards 1s';

            list.forEach((p) => {
                p.style.animation = 'opa0to1 1s ease-in-out 1 forwards 1s';
            })

            return;
        }

        else {
                
            banner.style.animationName = 'none';
            banner.style.animationPlayState = 'paused';
            bookLink.style.animationName = 'none';
            bookLink.style.animationPlayState = 'paused';
            svgBook.style.animationName = 'none';
            svgBook.style.animationPlayState = 'paused';

            textP.forEach((p) => {
                p.style.animationName = 'none';
                p.style.animationPlayState = 'paused';
            })
            list.forEach((ul) => {
                ul.style.animationName = 'none';
                ul.style.animationPlayState = 'paused';
            })
            
            void content.offsetWidth;
            
            banner.style.animationName = 'resetBannerY';
            banner.style.animationDuration = '2s';
            banner.style.animationPlayState = 'running';
            bookLink.style.animationName = 'displayBanner2';
            bookLink.style.animationDuration = '2s';
            bookLink.style.animationPlayState = 'running';

            svgBook.style.animation = '2s ease-in-out 1 normal forwards running opa0to1 1.75s';

            textP.forEach((p) => {
                p.style.animation = '2s ease-in-out 1 normal forwards running opa0to1 1.75s';
            })
            list.forEach((ul) => {
                ul.style.animation = '2s ease-in-out 1 normal forwards running opa0to1 1.75s';
            })

            switch(index) {
                case 'slide1to2':
                    slider.style.animation = 'vertical1to2 1s ease-in-out forwards';
                    break;
                
                case 'slide2to1':
                    slider.style.animation = 'vertical2to1 1s ease-in-out forwards';
                    break;

                case 'slide2to3':
                    slider.style.animation = 'vertical2to3 1s ease-in-out forwards';
                    break;

                case 'slide3to2':
                    slider.style.animation = 'vertical3to2 1s ease-in-out forwards';
                    break;
                
                case 'slide1to3':
                    slider.style.animation = 'vertical1to3 1s ease-in-out forwards';
                    break;

                case 'slide3to1':
                    slider.style.animation = 'vertical3to1 1s ease-in-out forwards';
                    break;

                case 'slide3to4':
                    slider.style.animation = 'vertical3to4 1s ease-in-out forwards';
                    break;

                case 'slide4to3':
                    slider.style.animation = 'vertical4to3 1s ease-in-out forwards';
                    break;

                case 'slide1to4':
                    slider.style.animation = 'vertical1to4 1s ease-in-out forwards';
                    break;

                case 'slide4to1':
                    slider.style.animation = 'vertical4to1 1s ease-in-out forwards';
                    break;

                case 'slide2to4':
                    slider.style.animation = 'vertical2to4 1s ease-in-out forwards';
                    break;

                case 'slide4to2':
                    slider.style.animation = 'vertical4to2 1s ease-in-out forwards';
                    break;

                case 'slide4to5':
                    slider.style.animation = 'vertical4to5 1s ease-in-out forwards';
                    break;

                case 'slide5to4':
                    slider.style.animation = 'vertical5to4 1s ease-in-out forwards';
                    break;
                
                case 'slide5to3':
                    slider.style.animation = 'vertical5to3 1s ease-in-out forwards';
                    break;

                case 'slide3to5':
                    slider.style.animation = 'vertical3to5 1s ease-in-out forwards';
                    break;

                case 'slide5to2':
                    slider.style.animation = 'vertical5to2 1s ease-in-out forwards';
                    break;

                case 'slide2to5':
                    slider.style.animation = 'vertical2to5 1s ease-in-out forwards';
                    break;

                case 'slide1to5':
                    slider.style.animation = 'vertical1to5 1s ease-in-out forwards';
                    break;

                case 'slide5to1':
                    slider.style.animation = 'vertical5to1 1s ease-in-out forwards';
                    break;

                default :
                    break;
            }
        }      
    }

    useEffect(() => {

        // Sélectionne le service choisi et ajoute la classe 'nav-selected'
        services.forEach((service) => {
            const nav = document.querySelector(`.${service}-nav`);

            if (nav) {
                if (service === selectedService) {
                    nav.classList.add('nav-selected');
                } 
                else {
                    nav.classList.remove('nav-selected');
                }
            }
        });

        // Trouve les index du slide précédent et du slide suivant dans le tableau services
        switch (`${services.indexOf(servicesSlide.from)}-${services.indexOf(servicesSlide.to)}`) {
            case '0-1':
                displayServices('slide1to2');
                setSelectedService('airport');
                break;

            case '1-2':
                displayServices('slide2to3');
                setSelectedService('distance');
                break;
            case '2-1':
                displayServices('slide3to2');
                setSelectedService('airport');
                break;

            case '1-0':
                displayServices('slide2to1');
                setSelectedService('taxi');
                break;

            case '0-2':
                displayServices('slide1to3');
                setSelectedService('distance');
                break;
            case '2-0':
                displayServices('slide3to1');
                setSelectedService('taxi');
                break;

            case '2-3':
                displayServices('slide3to4');
                setSelectedService('events');
                break;

            case '3-2':
                displayServices('slide4to3');
                setSelectedService('distance');
                break;

            case '3-0':
                displayServices('slide4to1');
                setSelectedService('taxi');
                break;

            case '0-3':
                displayServices('slide1to4');
                setSelectedService('events');
                break;

            case '1-3':
                displayServices('slide2to4');
                setSelectedService('events');
                break;

            case '3-1':
                displayServices('slide4to2');
                setSelectedService('airport');
                break;

            case '3-4':
                displayServices('slide4to5');
                setSelectedService('extras');
                break;

            case '4-3':
                displayServices('slide5to4');
                setSelectedService('events');
                break;

            case '4-2':
                displayServices('slide5to3');
                setSelectedService('distance');
                break;

            case '2-4':
                displayServices('slide3to5');
                setSelectedService('extras');
                break;

            case '4-1':
                displayServices('slide5to2');
                setSelectedService('airport');
                break;

            case '1-4':
                displayServices('slide2to5');
                setSelectedService('extras');
                break;

            case '4-0':
                displayServices('slide5to1');
                setSelectedService('taxi');
                break;

            case '0-4':
                displayServices('slide1to5');
                setSelectedService('extras');
                break;

            default:
                break;
        }
                    
    }, [servicesSlide, selectedService])

    useEffect(() => {
        console.log('==== SURVOL ====');
        console.log(isHover);
        const bookLink = bookLinkRef.current;
        const content = contentRef.current;
        
        if(isHover === undefined) {
            return;
        }
        else if(isHover) {
            bookLink.style.animationName = 'none';
            bookLink.style.animationPlayState = 'paused';
            bookLink.style.transform = 'scale(1)';
            bookLink.style.transition = '300ms';

            void content.offsetWidth;

            bookLink.style.transform = 'scale(1.03)';
        }
        else {
            bookLink.style.transform = 'scale(1)';
            bookLink.style.transition = '300ms';
        }
    }, [isHover])

    useEffect(() => {
        textPRef.current = Array.from(document.querySelectorAll('.services-ctr .content p'));
        listRef.current = Array.from(document.querySelectorAll('.services-ctr .content ul'));
    }, [])

    useEffect(() => {
    
        if(scrollY >= 1180 && servicesSlide.from === undefined) {
            displayServices('noSlide');
        }

    }, [scrollY])

    return (
        <>
            <div className="services-nav">
                <div className="services-nav__title">
                        <h2 className='h-section'>
                            <span>S</span>ervices
                        </h2>
                    </div>
                    <ul>
                        <li className='taxi-nav' 
                            onClick={(() => {setServicesCtg(0); setServicesSlide({from: servicesSlide.to, to: 'taxi'})})}>
                            Taxi driver
                        </li>
                        <li className='airport-nav' 
                            onClick={(() => {setServicesCtg(1); setServicesSlide({from: servicesSlide.to, to: 'airport'})})}>
                            Transfert aéroport
                        </li>
                        <li className='distance-nav' 
                            onClick={(() => {setServicesCtg(2); setServicesSlide({from: servicesSlide.to, to: 'distance'})})}>
                            Longues distances
                        </li>
                        <li className='events-nav' 
                            onClick={(() => {setServicesCtg(3); setServicesSlide({from: servicesSlide.to, to: 'events'})})}>
                            Événements
                        </li>
                        <li className='extras-nav' 
                            onClick={(() => {setServicesCtg(4); setServicesSlide({from: servicesSlide.to, to: 'extras'})})}>
                            Extras
                        </li>
                    </ul>
                </div>
            <div className="services-main">
                <div className="img-ctn">
                    <div className="services-slider" ref={sliderRef}>      
                        <img src={taxiImg} alt="chauffeur qui ouvre la portière"/>  
                        <img src={airplaneImg} alt="avion qui vole au dessus d'immeubles" />
                        <img src={distanceImg} alt="route qui s'étend vers le lointain"/>
                        <img src={weddingImg} alt="mariés qui tiennent un bouquet de fleurs"/>
                        <img src={provenceImg} alt="mariés qui tiennent un bouquet de fleurs"/>
                        
                    </div>
                </div>   
                <div className="content-title">
                    <h3>{servicesArray[servicesCtg].title}</h3>
                    {(servicesCtg === 0) ?               
                        <svg width="57" height="25" viewBox="0 0 57 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.937 13.5278H26.608L25.2592 9.89551L23.937 13.5278Z" fill="#D1B000"/>
                            <path d="M55.9273 20.8022L50.8181 2.35291C50.4331 0.962529 49.1677 0 47.7252 0H8.35536C6.91264 0 5.64721 0.962662 5.26225 2.35291L0.116471 20.9337C-0.151134 21.9 0.048138 22.9356 0.655146 23.7336C1.26215 24.5315 2.2071 25 3.20945 25H52.8707C52.8715 25 52.8722 25 52.873 25C54.6454 25 56.0824 23.563 56.0824 21.7905C56.0824 21.4457 56.028 21.1135 55.9273 20.8022ZM17.8269 9.09659V17.0781C17.8269 17.4828 17.4988 17.8108 17.0943 17.8108H16.3087C15.9041 17.8108 15.5761 17.4828 15.5761 17.0781V9.09659H13.1965C12.7918 9.09659 12.4639 8.76864 12.4639 8.36397V7.92174C12.4639 7.51706 12.7918 7.18912 13.1965 7.18912H20.1994C20.6039 7.18912 20.932 7.51706 20.932 7.92174V8.36397C20.932 8.76864 20.6039 9.09659 20.1994 9.09659H17.8269ZM30.2252 17.4888C30.0892 17.6902 29.8617 17.8108 29.6185 17.8108H28.7564C28.4532 17.8108 28.1813 17.624 28.0725 17.3409L27.3372 15.4283H23.2372L22.5467 17.3284C22.4415 17.618 22.1664 17.8109 21.8582 17.8109H21.0524C20.8105 17.8109 20.5842 17.6915 20.4477 17.4917C20.3112 17.2922 20.282 17.0378 20.3698 16.8124L23.936 7.656C24.0458 7.37454 24.3167 7.18925 24.6187 7.18925H25.9519C26.2514 7.18925 26.5208 7.37147 26.6321 7.6496L30.2982 16.806C30.3889 17.0315 30.3615 17.2873 30.2252 17.4888ZM39.8149 17.4242C39.6873 17.6621 39.4394 17.8106 39.1692 17.8106H38.2214C37.9718 17.8106 37.7394 17.6835 37.6047 17.4733L35.5319 14.24L33.4521 17.4743C33.3173 17.6839 33.0852 17.8106 32.836 17.8106H31.892C31.6228 17.8106 31.3754 17.6632 31.2473 17.4263C31.1194 17.1896 31.1317 16.9018 31.2789 16.6765L34.1646 12.2707L31.6059 8.31988C31.4597 8.09463 31.4488 7.80745 31.5771 7.57168C31.7052 7.33578 31.9521 7.18899 32.2207 7.18899H33.1019C33.3544 7.18899 33.5894 7.31926 33.7234 7.53358L35.5743 10.4986L37.3837 7.53931C37.5168 7.32165 37.7536 7.18885 38.0086 7.18885H38.8716C39.1396 7.18885 39.3857 7.33498 39.5143 7.56981C39.6427 7.80478 39.6331 8.09104 39.4887 8.31642L36.9062 12.3486L39.779 16.6723C39.929 16.8975 39.9425 17.1863 39.8149 17.4242ZM43.6188 17.0781C43.6188 17.4828 43.2907 17.8108 42.8862 17.8108H42.1004C41.6959 17.8108 41.3678 17.4828 41.3678 17.0781V7.92174C41.3678 7.51706 41.6959 7.18912 42.1004 7.18912H42.8862C43.2907 7.18912 43.6188 7.51706 43.6188 7.92174V17.0781Z" fill="#D1B000"/>
                        </svg>  
                    : (servicesCtg === 1) ?
                        <svg width="30" height="40" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.4078 5.85708L11.922 0.308228C10.8522 -0.1624 9.66703 -0.0940827 8.64844 0.513178L5.70797 2.25146C4.99687 2.67655 4.94562 3.85311 5.61187 4.3617L15.0227 11.535L8.7125 15.3531L4.98406 13.3871C4.42672 13.0911 3.77969 13.1063 3.23516 13.4327L1.17234 14.6548C0.576562 15.0115 0.416406 15.93 0.852031 16.5297L5.535 23.0046C5.92578 23.5436 6.49594 23.8548 7.09172 23.8548H15.9131C16.2334 23.8548 16.5473 23.7637 16.8292 23.5967L34.3119 13.2429C37.2908 11.4742 39.597 8.43794 40.7694 4.74123C41.378 2.82836 40.18 0.778855 38.4503 0.778855H34.7731C33.4791 0.778855 32.1978 1.14321 31.0447 1.84156L24.4078 5.85708ZM0 33.571C0 34.9145 0.916094 36 2.05 36H38.95C40.0839 36 41 34.9145 41 33.571C41 32.2274 40.0839 31.1419 38.95 31.1419H2.05C0.916094 31.1419 0 32.2274 0 33.571Z" fill="#D1B000"/>
                        </svg>  
                    : (servicesCtg === 2) ?
                        <svg width="50" height="36" viewBox="0 0 50 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0139 0L0 35.2853H6.07228L14.785 0H12.0139Z" fill="#D1B000"/>
                            <path d="M37.9859 0H35.2148L43.9275 35.2853H49.9998L37.9859 0Z" fill="#D1B000"/>
                            <path d="M17.1551 0L8.46094 35.2853H21.3263L21.6805 30.0925H28.32L28.6742 35.2853H41.5396L32.8457 0H17.1551ZM23.8562 0.404536H26.1444L26.5069 5.35262H23.4935L23.8562 0.404536ZM23.1311 10.3006H26.8696L27.2322 15.2486H22.7682L23.1311 10.3006ZM22.0433 25.1444L22.4058 20.1966H27.5948L27.9576 25.1444H22.0433Z" fill="#D1B000"/>
                        </svg>                                      
                    : (servicesCtg === 3) ?
                        <svg width="40" height="40" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.6068 17.3758C44.1609 16.4942 42.5495 16.006 40.9267 15.8825C39.2761 21.1617 34.589 25.9338 30.4002 29.1358C30.6472 30.6972 31.0566 32.2214 31.5446 33.5819L26.6008 40.2018V31.3043H28.1707L27.9623 30.8687L26.6401 28.1051C32.0933 24.3874 38.2939 18.0541 38.2939 12.0326C38.2939 5.38715 32.3316 0 24.9768 0C17.622 0 11.6596 5.38715 11.6596 12.0326C11.6596 18.0541 17.8602 24.3875 23.3134 28.1051L21.9912 30.8687L21.7828 31.3043H23.3527V40.2019L18.4089 33.582C18.8968 32.2214 19.3061 30.6973 19.5533 29.1359C15.3646 25.9339 10.6773 21.1618 9.02677 15.8826C7.40406 16.006 5.79257 16.4943 4.34674 17.3759C-0.168205 20.1286 -1.35851 25.6671 1.68808 29.7466C4.35962 33.3238 10.7298 34.9067 15.7166 35.2236L23.0176 45H26.9359L34.237 35.2236C39.2237 34.9067 45.5939 33.3237 48.2654 29.7466C51.312 25.667 50.1216 20.1284 45.6068 17.3758ZM24.9766 5.86935C21.2156 5.86935 18.1556 8.63416 18.1556 12.0324H14.9075C14.9075 7.0159 19.4245 2.93459 24.9766 2.93459V5.86935Z" fill="#D1B000"/>
                        </svg>                    
                    :
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 0C8.95373 0 0 8.95373 0 20C0 31.0463 8.95373 40 20 40C31.045 40 40 31.0463 40 20C40 8.95373 31.045 0 20 0ZM20 35C11.7288 35 5 28.2712 5 20C5 11.7288 11.7288 5 20 5C28.2712 5 35 11.7288 35 20C35 28.2712 28.2712 35 20 35ZM27.525 17.5H22.5V12.475C22.5 11.1075 21.3912 10 20.025 10H19.975C18.6075 10 17.5 11.1075 17.5 12.475V17.5H12.475C11.1075 17.5 10 18.6088 10 19.975V20.025C10 21.3925 11.1075 22.5001 12.475 22.5001H17.5V27.5251C17.5 28.8926 18.6075 30.0001 19.975 30.0001H20.025C21.3925 30.0001 22.5 28.8926 22.5 27.5251V22.5H27.525C28.8926 22.5 30 21.3925 30 20.025V19.975C30 18.6088 28.8912 17.5 27.525 17.5Z" fill="#D1B000"/>
                        </svg>

                    }                   
                </div>
                <div className="content" ref={contentRef}>
                    <div className="main-banner" ref={bannerRef}>
                        {servicesArray[servicesCtg].p1}
                        {servicesArray[servicesCtg].p2}
                        <ul className={(servicesCtg === 4) ? "extras" : null}>
                            {(servicesCtg !== 4) ? 
                                <>
                                    <svg width="30" height="30" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.62727 0C0.729018 0 0 0.729018 0 1.62727V24.3586C0 25.2569 0.729018 25.9859 1.62727 25.9859H30.264L20.1668 36.197C19.5305 36.8382 19.5305 37.878 20.1668 38.5191C20.803 39.1603 21.8331 39.1603 22.4677 38.5191L35.3215 25.5205C35.9627 24.8728 35.9367 23.7777 35.2792 23.1561L22.4677 10.1997C21.8315 9.55859 20.8014 9.55859 20.1668 10.1997C19.5305 10.8409 19.5305 11.8807 20.1668 12.5219L30.2363 22.7037H3.25454V1.62727C3.25454 0.729018 2.52715 0 1.62727 0Z" fill="#D1B000"/>
                                    </svg>
                                    {servicesArray[servicesCtg].li1}
                                    <svg width="30" height="30" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.62727 0C0.729018 0 0 0.729018 0 1.62727V24.3586C0 25.2569 0.729018 25.9859 1.62727 25.9859H30.264L20.1668 36.197C19.5305 36.8382 19.5305 37.878 20.1668 38.5191C20.803 39.1603 21.8331 39.1603 22.4677 38.5191L35.3215 25.5205C35.9627 24.8728 35.9367 23.7777 35.2792 23.1561L22.4677 10.1997C21.8315 9.55859 20.8014 9.55859 20.1668 10.1997C19.5305 10.8409 19.5305 11.8807 20.1668 12.5219L30.2363 22.7037H3.25454V1.62727C3.25454 0.729018 2.52715 0 1.62727 0Z" fill="#D1B000"/>
                                    </svg>
                                    {servicesArray[servicesCtg].li2}
                                </>
                                :
                                <>
                                    <li onClick={() => setExtraShown({type: 'luggage', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'luggage') ? 'extend' : null}>

                                        {(extraShown.isShown && extraShown.type === 'luggage') ? 
                                            <Extras index={0}/>
                                            : null
                                        }
                                        <svg width="40" height="40" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M35.7851 25.7636L38.4261 10.2352C38.6547 8.88856 38.4778 7.57669 37.9402 6.60823C37.4126 5.66443 36.6013 5.14237 35.6627 5.14237H30.8852L31.3555 2.38187C31.4582 1.76952 31.3738 1.16196 31.1173 0.70096C30.8682 0.259597 30.4775 0 30.0509 0H23.5594C22.7589 0 21.9856 0.876739 21.7977 1.99655L21.264 5.14237H16.2005C14.3233 5.14237 12.5018 7.21052 12.0526 9.84601L9.41093 25.3749C9.17892 26.7385 9.35233 28.0255 9.89755 29.0045C10.4268 29.9478 11.2334 30.4708 12.1747 30.4708H31.6391C33.5144 30.4708 35.3371 28.4055 35.7851 25.7636ZM22.941 2.38379C23.0043 2.00661 23.3004 1.66798 23.5592 1.66798H30.0507C30.0896 1.66798 30.1602 1.67517 30.1915 1.73408C30.2215 1.78844 30.2261 1.88423 30.2092 1.99847L29.6741 5.14237H22.4722L22.941 2.38379ZM10.8219 27.9756C10.5039 27.4045 10.4083 26.6197 10.5537 25.7636L13.195 10.2352C13.5108 8.37392 14.887 6.80556 16.1991 6.80556H35.6611C36.2329 6.80556 36.7134 7.103 37.0143 7.63656C37.3321 8.2082 37.4283 8.99034 37.2825 9.84601L34.6415 25.3749C34.3265 27.2359 32.9473 28.8078 31.6364 28.8078H12.1737C11.6033 28.8095 11.1227 28.514 10.8219 27.9756Z" fill="#D1B000"/>
                                            <path d="M39.5509 11.8683C39.2159 11.7527 38.9124 12.0343 38.8409 12.4778L36.2013 28.0091C35.8848 29.867 34.507 31.438 33.1988 31.438H13.7331C13.4083 31.438 13.144 31.813 13.144 32.2718C13.144 32.7266 13.4085 33.098 13.7331 33.098H33.1963C35.0735 33.098 36.8941 31.0308 37.3421 28.3944L39.9831 12.8626C40.0606 12.4234 39.8653 11.972 39.5509 11.8683Z" fill="#D1B000"/>
                                            <path d="M0.589038 11.9753H3.68301C4.00777 11.9753 4.27222 11.606 4.27222 11.1467C4.27222 10.6876 4.00777 10.3181 3.68301 10.3181H0.589038C0.264116 10.3179 0 10.6874 0 11.1465C0 11.6058 0.264116 11.9753 0.589038 11.9753Z" fill="#D1B000"/>
                                            <path d="M6.77763 17.7534H3.68332C3.35772 17.7534 3.09326 18.1277 3.09326 18.5827C3.09326 19.0416 3.35772 19.4149 3.68332 19.4149H6.77763C7.1034 19.4149 7.36718 19.0416 7.36718 18.5827C7.36718 18.128 7.1034 17.7534 6.77763 17.7534Z" fill="#D1B000"/>
                                            <path d="M3.68301 21.2131H0.589038C0.264116 21.2131 0 21.5836 0 22.0422C0 22.502 0.264116 22.8706 0.589038 22.8706H3.68301C4.00777 22.8706 4.27222 22.502 4.27222 22.0422C4.27222 21.5834 4.00777 21.2131 3.68301 21.2131Z" fill="#D1B000"/>
                                            <path d="M6.627 8.52411H9.72165C10.0473 8.52411 10.3107 8.15267 10.3107 7.69742C10.3107 7.2381 10.0473 6.86475 9.72165 6.86475H6.627C6.30156 6.86475 6.03711 7.2381 6.03711 7.69742C6.03711 8.151 6.30156 8.52411 6.627 8.52411Z" fill="#D1B000"/>
                                            <path d="M9.84443 13.7751H3.68332C3.35772 13.7751 3.09326 14.148 3.09326 14.6057C3.09326 15.0621 3.35772 15.4362 3.68332 15.4362H9.84426C10.1683 15.4362 10.4342 15.0621 10.4342 14.6057C10.4342 14.1492 10.1683 13.7751 9.84443 13.7751Z" fill="#D1B000"/>
                                        </svg>

                                        Service <br />
                                        bagagerie
                                    </li>
                                    <li onClick={() => setExtraShown({type: 'tourism', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'tourism') ? 'extend' : null} >
                                        {(extraShown.isShown && extraShown.type === 'tourism') ? 
                                            <Extras index={1}/>
                                            : null
                                        }
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.1511 26.3294C13.1511 24.2607 11.4678 22.5774 9.39903 22.5774C7.33026 22.5774 5.64697 24.2607 5.64697 26.3294C5.64697 28.3982 7.33026 30.0815 9.39903 30.0815C11.4678 30.0815 13.1511 28.3991 13.1511 26.3294ZM9.39903 29.1331C7.85353 29.1331 6.59714 27.8758 6.59714 26.3294C6.59714 24.7849 7.85443 23.5276 9.39903 23.5276C10.9436 23.5276 12.2009 24.7849 12.2009 26.3294C12.2018 27.8758 10.9445 29.1331 9.39903 29.1331Z" fill="#D1B000"/>
                                            <path d="M33.4713 0C29.8714 0 26.9435 2.92797 26.9435 6.52782C26.9435 8.45428 27.9657 10.3096 29.1644 11.8317L22.5159 19.814C21.9855 20.322 21.5477 21.3352 21.4631 22.0656L19.814 33.0237H16.2016C16.3691 32.7814 16.5393 32.5445 16.696 32.2923C17.8056 30.51 18.6045 28.4772 18.6045 26.3121C18.6045 21.1839 14.4318 17.0094 9.30268 17.0094C4.17355 17.0094 0 21.1839 0 26.3121C0 30.6685 3.65118 34.779 6.18738 37.1117C6.71155 37.5944 7.18889 38.0051 7.57616 38.3212C8.12014 38.7661 8.49031 39.0372 8.55785 39.0877C8.77941 39.248 9.0415 39.3281 9.30268 39.3281C9.39635 39.3281 21.4631 39.3281 21.4631 39.3281C23.0644 39.3281 24.1317 37.6178 24.3172 36.0255L26.0978 23.4895C26.0978 23.4895 35.9273 13.9788 36.0921 13.7788C37.6025 11.937 40 9.51883 40 6.52692C39.9982 2.92797 37.0702 0 33.4713 0ZM2.547 26.3121C2.547 22.5871 5.57765 19.5573 9.30268 19.5573C13.0277 19.5573 16.0575 22.588 16.0575 26.3121C16.0575 30.845 11.2075 35.0123 9.3252 36.4578C7.44557 34.9348 2.547 30.5541 2.547 26.3121ZM33.4839 13.6293C31.8024 12.2775 28.7447 9.25675 28.7447 6.52602C28.7447 3.91957 30.8648 1.79947 33.4713 1.79947C36.0777 1.79947 38.1969 3.91957 38.1969 6.52602C38.1969 9.69986 34.8015 12.617 33.4839 13.6293Z" fill="#D1B000"/>
                                            <path d="M33.5388 3.78174C32.0114 3.78174 30.7676 5.02462 30.7676 6.553C30.7676 8.08138 32.0114 9.32426 33.5388 9.32426C35.0663 9.32426 36.3101 8.08138 36.3101 6.553C36.3101 5.02462 35.0672 3.78174 33.5388 3.78174ZM33.5388 8.37499C32.5346 8.37499 31.7178 7.55721 31.7178 6.553C31.7178 5.54879 32.5346 4.73101 33.5388 4.73101C34.5421 4.73101 35.3599 5.54879 35.3599 6.553C35.3608 7.55811 34.543 8.37499 33.5388 8.37499Z" fill="#D1B000"/>
                                        </svg>

                                        Circuit <br />
                                        touristique
                                    </li>
                                    <li onClick={() => setExtraShown({type: 'provision', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'provision') ? 'extend' : null}>
                                        {(extraShown.isShown && extraShown.type === 'provision') ? 
                                            <Extras index={2}/>
                                            : null
                                        }
                                        <svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.52377 5.35436C2.60494 5.73331 2.87393 6.09196 3.28261 6.42466C3.35151 7.47184 3.64268 8.33734 4.07213 9.05937C5.19529 7.45061 8.24811 6.29489 11.8484 6.29489C15.3622 6.29489 18.3547 7.39634 19.5396 8.94422C19.9965 7.97868 20.0861 7.04901 20.0871 6.48412C20.5099 6.15945 20.7959 5.80693 20.9021 5.43506C22.44 4.99334 23.3593 4.43601 23.3593 3.83054C23.3593 2.3945 17.5472 0.511557 11.8479 0C5.92157 0.569603 0.336914 2.3945 0.336914 3.83054C0.336914 4.39967 1.14908 4.92586 2.52377 5.35436ZM19.8228 5.35436L19.3797 6.23259C11.577 2.29115 3.91309 6.19012 3.8357 6.22976L3.38124 5.35672C3.71158 5.18447 11.5732 1.18734 19.8228 5.35436Z" fill="#D1B000"/>
                                            <path d="M15.2952 20.0107H8.40149C2.66677 20.0107 0 24.2643 0 30L0.000240207 38.5L9.71556e-05 39L0.000143051 39.1903C5.47342 40.9001 8.83188 41.4404 12.7464 41.4404C20.391 41.4404 23.7254 39.3286 24.0001 39.1903V38.5V30C24.0006 24.2643 21.0314 20.0107 15.2952 20.0107ZM13.862 39.1903L12 41L10.014 39.1856C9.99893 39.1625 9.99185 39.1347 9.9928 39.1054L10.8663 25.7502C10.871 25.6799 10.9291 25.6256 10.9999 25.6256H12.8115C12.8819 25.6256 12.9399 25.6789 12.946 25.7502L13.8842 39.104C13.8875 39.1365 13.8781 39.1649 13.862 39.1903ZM13.0116 25.2226H10.8588L8.98667 21.3529C8.98667 20.9815 9.28681 20.6823 9.65821 20.6823H14.1537C14.5241 20.6823 14.8247 20.9815 14.8247 21.3529L13.0116 25.2226Z" fill="#D1B000"/>
                                            <path d="M18.4304 9.49453C17.6301 8.44876 15.2143 7.32324 11.8033 7.32324C8.2899 7.32324 5.87558 8.4884 5.12004 9.57098L4.28333 10.7701L3.99947 10C3.9301 10.4276 3.99989 11.0531 3.99989 11.5C3.99989 13.7492 4.62311 15.5959 6.09738 17.0692C7.56834 18.5454 9.60371 19.459 11.8519 19.459C14.3762 19.459 16.6315 18.3076 18.1213 16.5006C19.2893 15.0914 19.5 13.4726 19.5 11.5C19.5 10.962 19.5996 10.0087 19.5 9.5L19.3728 10.7225L18.4304 9.49453Z" fill="#D1B000"/>
                                        </svg>

                                        Mise à <br />
                                        disposition
                                    </li>
                                </>
                            }                    
                        </ul>
                    </div>
                    <div 
                        className="book-link" 
                        ref={bookLinkRef} 
                        onMouseEnter={() => setIsHover(true)} 
                        onMouseLeave={() => setIsHover(false)}
                        onClick={() => {navigate('booking')}}>
                        <div>
                            <svg width="35" height="45" viewBox="0 0 50 57" fill="none" xmlns="http://www.w3.org/2000/svg" className='book-svg' ref={svgBookRef}>
                                <path d="M42.6474 9.09521C40.3565 6.56384 37.6879 4.57601 34.7155 3.18689C31.6363 1.74768 28.3675 1.01807 24.9999 1.01807C21.6322 1.01807 18.3634 1.74777 15.2842 3.18689C12.3119 4.57601 9.64317 6.56393 7.35234 9.09521C5.06144 11.6266 3.26253 14.5753 2.00528 17.8597C0.702785 21.262 0.0424805 24.874 0.0424805 28.5951C0.0424805 32.3163 0.70287 35.9281 2.00528 39.3306C3.26244 42.6149 5.06152 45.5637 7.35234 48.0952C9.64325 50.6264 12.3119 52.6144 15.2842 54.0034C18.3635 55.4425 21.6323 56.1721 24.9999 56.1721C28.3675 56.1721 31.6363 55.4425 34.7155 54.0034C37.6878 52.6144 40.3566 50.6264 42.6475 48.0952C44.9384 45.5637 46.7374 42.615 47.9945 39.3306C49.2969 35.9283 49.9573 32.3161 49.9573 28.5951C49.9573 24.8741 49.2969 21.2621 47.9945 17.8597C46.7374 14.5753 44.9384 11.6265 42.6474 9.09521ZM24.9999 52.1462C13.2285 52.1462 3.68589 41.6021 3.68589 28.595C3.68589 15.588 13.2285 5.0439 24.9999 5.0439C36.7713 5.0439 46.3139 15.5881 46.3139 28.5951C46.3139 41.6021 36.7713 52.1462 24.9999 52.1462Z" fill="white"/>
                                <path d="M25 56.2189C21.6264 56.2189 18.352 55.488 15.2677 54.0465C12.2906 52.6551 9.61736 50.664 7.32237 48.1281C5.02763 45.5924 3.22549 42.6385 1.9662 39.3486C0.661495 35.9405 0 32.3224 0 28.595C0 24.8673 0.661495 21.2493 1.9662 17.8412C3.22557 14.5511 5.02763 11.5973 7.32237 9.06181C9.6171 6.52621 12.2903 4.535 15.2677 3.14343C18.3524 1.70188 21.6267 0.970947 25 0.970947C28.3735 0.970947 31.6479 1.70188 34.7322 3.14343C37.7097 4.535 40.3828 6.52621 42.6776 9.06181C44.9724 11.5974 46.7746 14.5512 48.0339 17.8412C49.3385 21.2495 50 24.8676 50 28.595C50 32.3224 49.3385 35.9405 48.0339 39.3487C46.7745 42.6386 44.9725 45.5924 42.6777 48.1282C40.3828 50.6639 37.7096 52.6551 34.7322 54.0466C31.6478 55.488 28.3734 56.2189 25 56.2189ZM25 1.06492C21.6381 1.06492 18.3748 1.79331 15.3008 3.22998C12.3335 4.61675 9.66941 6.60129 7.38249 9.12825C5.09558 11.6552 3.29965 14.5989 2.04453 17.8778C0.744245 21.2742 0.0850469 24.8799 0.0850469 28.595C0.0850469 32.3098 0.744245 35.9156 2.04453 39.3122C3.29956 42.5908 5.0955 45.5346 7.38249 48.0617C9.66975 50.5889 12.3338 52.5733 15.3009 53.9598C18.3746 55.3965 21.6379 56.1249 25 56.1249C28.362 56.1249 31.6252 55.3965 34.699 53.9599C37.6662 52.5733 40.3303 50.5888 42.6174 48.0617C44.9044 45.5345 46.7004 42.5907 47.9554 39.3122C49.2556 35.9154 49.9149 32.3096 49.9149 28.595C49.9149 24.8804 49.2556 21.2745 47.9554 17.8779C46.7004 14.599 44.9044 11.6553 42.6173 9.12834C40.3303 6.60129 37.6662 4.61685 34.699 3.23008C31.6251 1.79331 28.3619 1.06492 25 1.06492ZM25 52.193C19.2954 52.193 13.9323 49.7384 9.89861 45.2813C5.86483 40.8243 3.64341 34.8982 3.64341 28.595C3.64341 22.2917 5.86492 16.3656 9.89861 11.9086C13.9323 7.45147 19.2954 4.99678 25 4.99678C30.7045 4.99678 36.0675 7.45147 40.1012 11.9086C44.1349 16.3656 46.3564 22.2917 46.3564 28.595C46.3564 34.8983 44.135 40.8243 40.1012 45.2814C36.0676 49.7384 30.7045 52.193 25 52.193ZM25 5.09076C19.3181 5.09076 13.9764 7.53567 9.95874 11.975C5.94112 16.4144 3.72846 22.3168 3.72846 28.595C3.72846 34.8732 5.94112 40.7756 9.95874 45.2149C13.9764 49.6542 19.3181 52.0992 25 52.0992C30.6818 52.0992 36.0235 49.6542 40.0411 45.2149C44.0587 40.7756 46.2714 34.8732 46.2714 28.595C46.2714 22.3168 44.0587 16.4144 40.0411 11.975C36.0235 7.53558 30.6818 5.09076 25 5.09076Z" fill="white"/>
                                <path d="M30.825 16.4559C29.9453 15.6686 28.8423 15.2351 27.719 15.2351C26.4482 15.2351 25.2382 15.7669 24.3122 16.7326C23.8323 17.233 23.4542 17.8238 23.1884 18.4887C22.9095 19.1864 22.768 19.931 22.768 20.7016V21.2363H13.0894C10.4867 21.2363 8.36926 23.5759 8.36926 26.4518V30.7469C8.36926 33.6229 10.4867 35.9624 13.0894 35.9624H22.768V36.5904C22.768 37.3614 22.9096 38.1061 23.1888 38.8041C23.4547 39.4691 23.8331 40.0599 24.3133 40.5604C25.2392 41.5253 26.4488 42.0568 27.7192 42.0568C28.8525 42.0568 29.9632 41.6163 30.8465 40.8168L39.9308 32.5924C39.9807 32.5473 40.0294 32.5008 40.077 32.4528C41.0552 31.4668 41.6163 30.0623 41.6163 28.5995C41.6163 27.1365 41.0552 25.7321 40.077 24.7462C40.0245 24.6932 39.9704 24.6419 39.9151 24.5923L30.825 16.4559ZM37.6217 29.4782L28.5374 37.7024C28.2872 37.929 28 38.0307 27.7192 38.0307C27.0468 38.0307 26.4114 37.4461 26.4114 36.5903V33.1261C26.4114 32.4691 25.9294 31.9364 25.3348 31.9364H13.0894C12.4947 31.9364 12.0126 31.4038 12.0126 30.7467V26.4518C12.0126 25.7948 12.4946 25.262 13.0894 25.262H25.3348C25.9294 25.262 26.4115 24.7294 26.4115 24.0723V20.7015C26.4115 19.8459 27.0464 19.2609 27.7191 19.2609C27.9976 19.2609 28.2826 19.3613 28.5318 19.5842L37.6219 27.7203C38.0898 28.1921 38.0898 29.0063 37.6217 29.4782Z" fill="white"/>
                                <path d="M27.7193 42.1037C26.4381 42.1037 25.2181 41.5677 24.2841 40.5945C23.7997 40.0893 23.4181 39.4934 23.1499 38.8229C22.8684 38.1188 22.7256 37.3677 22.7256 36.5901V36.0092H13.0894C10.4632 36.0092 8.32678 33.6485 8.32678 30.7467V26.4516C8.32678 23.5498 10.4633 21.1891 13.0894 21.1891H22.7256V20.7013C22.7256 19.9242 22.8683 19.1733 23.1496 18.4695C23.4177 17.799 23.7991 17.203 24.2832 16.6982C25.2171 15.7244 26.4373 15.188 27.7191 15.188C28.8521 15.188 29.9647 15.6252 30.8518 16.4193L39.9419 24.5556C39.9986 24.6064 40.0537 24.6588 40.1058 24.7114C41.0928 25.7061 41.659 27.1233 41.659 28.5995C41.659 30.0755 41.0929 31.4925 40.1058 32.4874C40.0578 32.5361 40.0084 32.5831 39.9578 32.6288L30.8736 40.8532C29.9824 41.6595 28.8622 42.1037 27.7193 42.1037ZM13.0894 21.2831C10.5101 21.2831 8.41183 23.6017 8.41183 26.4517V30.7468C8.41183 33.5967 10.5102 35.9153 13.0894 35.9153H22.8106V36.5902C22.8106 37.3545 22.9509 38.093 23.2278 38.7849C23.4913 39.4438 23.8663 40.0297 24.3425 40.526C25.2606 41.4828 26.4598 42.0096 27.7193 42.0096C28.8426 42.0096 29.9437 41.573 30.8196 40.7802L39.9038 32.5558C39.9532 32.5112 40.0013 32.4653 40.0484 32.4178C41.0178 31.4408 41.5738 30.0488 41.5738 28.5992C41.5738 27.1494 41.0179 25.7576 40.0484 24.7805C39.9975 24.7291 39.9436 24.6779 39.8883 24.6283L30.7982 16.4922C29.9261 15.7116 28.8326 15.2818 27.719 15.2818C26.4591 15.2818 25.2595 15.809 24.3415 16.7664C23.8658 17.2626 23.4909 17.8482 23.2274 18.5072C22.9508 19.1991 22.8106 19.9371 22.8106 20.7011V21.2828H13.0894V21.2831ZM27.7193 38.0777C26.8852 38.0777 26.369 37.3056 26.369 36.5902V33.1261C26.369 32.496 25.905 31.9834 25.3348 31.9834H13.0894C12.4722 31.9834 11.9701 31.4286 11.9701 30.7467V26.4518C11.9701 25.7698 12.4722 25.215 13.0894 25.215H25.3349C25.9051 25.215 26.3691 24.7024 26.3691 24.0723V20.7014C26.3691 19.9861 26.8852 19.2139 27.7192 19.2139C28.0243 19.2139 28.3146 19.3293 28.5585 19.5476L37.6487 27.6837C37.8824 27.9193 38.0154 28.2523 38.0154 28.5992C38.0154 28.946 37.8824 29.2791 37.6504 29.5129L28.5643 37.7387C28.3195 37.9605 28.0273 38.0777 27.7193 38.0777ZM13.0894 25.309C12.5191 25.309 12.0552 25.8216 12.0552 26.4518V30.7467C12.0552 31.3768 12.5191 31.8894 13.0894 31.8894H25.3348C25.952 31.8894 26.454 32.4441 26.454 33.1261V36.5902C26.454 37.4509 27.1108 37.9837 27.7193 37.9837C28.0075 37.9837 28.281 37.8738 28.5104 37.666L37.5949 29.4417C37.8074 29.2274 37.9303 28.9196 37.9303 28.5991C37.9303 28.2785 37.8075 27.9709 37.5932 27.7548L28.505 19.6206C28.2764 19.416 28.0046 19.3078 27.7192 19.3078C27.1108 19.3078 26.4541 19.8405 26.4541 20.7013V24.0722C26.4541 24.754 25.9521 25.3089 25.3349 25.3089H13.0894V25.309Z" fill="white"/>
                            </svg>
                        </div>
                        <div>
                            <p>Réservez votre voyage</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;