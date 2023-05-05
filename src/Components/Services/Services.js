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
    },
    {
        title : 'Transfert aéroport',
        p1 : <p dangerouslySetInnerHTML={{__html: 'Vous prenez l\'avion pour les affaires ou pour le tourisme ? Nous savons que voyager peut être <b>éprouvant</b>.'}} />,
        p2 : <p dangerouslySetInnerHTML={{__html: 'Nos chauffeurs vous accueillent dès votre arrivée à l\'aéroport et vous accompagnent jusqu\'à votre destination finale en toute sécurité et confort. Nous vous garantissons un trajet agréable et relaxant, pour que vous puissiez vous détendre et vous concentrer sur vos affaires ou votre voyage.'}} />,
    },
    {
        title : 'Longues distances',
        p1 : <p dangerouslySetInnerHTML={{__html: 'Vous souhaitez  entreprendre un long voyage sans stress et avec une <span class=colored>expérience de première classe ?</span>'}} />,
        p2 : <p dangerouslySetInnerHTML={{__html: ' Que vous ayez besoin d\'un transport pour une réunion d\'affaires dans une autre ville ou d\'un voyage de plusieurs heures pour vous rendre à une destination spéciale, nos chauffeurs expérimentés sont à votre disposition pour vous accompagner tout au long de votre trajet.'}} />,
    },
    {
        title : 'Événements',
        p1 : <p dangerouslySetInnerHTML={{__html: '<span class=colored>Vous préparez votre mariage</span> et vous cherchez un moyen de transport élégant et raffiné pour votre grand jour? Notre <strong>service de chauffeur privé VTC</strong> vous offre des options sur mesure pour rendre votre <span class=colored>journée inoubliable.</span>'}} />,
        p2 : <p dangerouslySetInnerHTML={{__html: 'Nous proposons des véhicules décorés selon vos goûts et vos envies, avec des <strong>chauffeurs professionnels et expérimentés</strong> pour vous conduire en toute sécurité.'}} />,
    },
    {
        title : 'Extras',
        p1 : <p dangerouslySetInnerHTML={{__html: 'Chez <strong>Bk-Elite</strong>, notre priorité est de donner la meilleure expérience possible à notre clientèle.'}} />,
        p2 : <p dangerouslySetInnerHTML={{__html: 'Vous voyagez avec des bagages encombrants ou coûteux, vous souhaitez faire confiance à notre connaissance de la région pour faire du tourisme, ou plus encore ?  Notre service de chauffeur privé VTC vous offre une solution sur mesure pour vos déplacements.'}} />,
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
        textPRef.current = Array.from(document.querySelectorAll('.services-ctr .services-content p'));
        listRef.current = Array.from(document.querySelectorAll('.services-ctr .services-content ul'));
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
                <div className="services-content" ref={contentRef}>
                    <div className="main-banner" ref={bannerRef}>
                        {servicesArray[servicesCtg].p1}
                        {servicesArray[servicesCtg].p2}
                        <ul className="extras">
                            {(servicesCtg === 0) ? 
                                <>
                                    <li onClick={() => setExtraShown({type: 'ponctual', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'ponctual') ? 'extend' : null}>

                                        {(extraShown.isShown && extraShown.type === 'ponctual') ? 
                                            <Extras index={0} liNb={"li1"} />
                                            : null
                                        }
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.9999 30C6.729 30 0 23.271 0 15.0001C0 6.72914 6.729 0 14.9999 0C23.271 0 30 6.729 30 14.9999C30 23.2709 23.271 30 14.9999 30ZM14.9999 0.876266C7.21211 0.876266 0.876266 7.21211 0.876266 15.0001C0.876266 22.788 7.21211 29.1237 14.9999 29.1237C22.7877 29.1237 29.1237 22.7879 29.1237 15.0001C29.1237 7.21226 22.7877 0.876266 14.9999 0.876266ZM14.9999 27.5538C8.07786 27.5538 2.44624 21.9221 2.44624 15.0001C2.44624 8.07801 8.07786 2.44624 14.9999 2.44624C21.922 2.44624 27.5536 8.07786 27.5536 14.9999C27.5536 21.922 21.922 27.5538 14.9999 27.5538ZM14.9999 3.32251C8.56098 3.32251 3.32251 8.56098 3.32251 14.9999C3.32251 21.4389 8.56098 26.6773 14.9999 26.6773C21.4389 26.6773 26.6773 21.4389 26.6773 14.9999C26.6773 8.56098 21.4389 3.32251 14.9999 3.32251ZM14.9999 25.8802C14.7579 25.8802 14.5618 25.6841 14.5618 25.4421V24.4684C14.5618 24.2264 14.7579 24.0303 14.9999 24.0303C15.2419 24.0303 15.4381 24.2264 15.4381 24.4684V25.4421C15.4381 25.6841 15.2419 25.8802 14.9999 25.8802ZM14.9999 16.8256C13.9932 16.8256 13.1744 16.0068 13.1744 15.0001C13.1744 14.3719 13.4932 13.8168 13.9776 13.4882V5.18151C13.9776 4.61778 14.4362 4.1592 14.9999 4.1592C15.5635 4.1592 16.0222 4.61778 16.0222 5.18151V13.4882C16.2147 13.6189 16.3811 13.7851 16.5118 13.9778H20.9301C21.4936 13.9778 21.9524 14.4363 21.9524 15.0001C21.9524 15.5638 21.4936 16.0224 20.9301 16.0224H16.5118C16.1832 16.5067 15.6281 16.8256 14.9999 16.8256ZM14.9999 14.0508C14.4765 14.0508 14.0506 14.4766 14.0506 15.0001C14.0506 15.5235 14.4765 15.9494 14.9999 15.9494C15.5234 15.9494 15.9492 15.5235 15.9492 15.0001C15.9492 14.4766 15.5234 14.0508 14.9999 14.0508ZM16.8255 15.1461H20.9299C21.0105 15.1461 21.076 15.0805 21.076 15.0001C21.076 14.9196 21.0105 14.854 20.9299 14.854H16.8255V15.1461ZM14.8539 13.1745H15.146V5.18151C15.146 5.10104 15.0805 5.03546 14.9999 5.03546C14.9195 5.03546 14.8539 5.10104 14.8539 5.18151V13.1745ZM25.4449 15.5526H24.4712C24.2292 15.5526 24.0331 15.3564 24.0331 15.1144C24.0331 14.8724 24.2292 14.6763 24.4712 14.6763H25.4449C25.6869 14.6763 25.883 14.8724 25.883 15.1144C25.883 15.3564 25.6869 15.5526 25.4449 15.5526ZM5.80191 15.5526H4.82823C4.58623 15.5526 4.39009 15.3564 4.39009 15.1144C4.39009 14.8724 4.58623 14.6763 4.82823 14.6763H5.80191C6.0439 14.6763 6.24004 14.8724 6.24004 15.1144C6.24004 15.3564 6.04376 15.5526 5.80191 15.5526Z" fill="#D1B000"/>
                                        </svg>


                                        Chauffeur <br />
                                        ponctuel
                                    </li>
                                    <li onClick={() => setExtraShown({type: 'allDay', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'allDay') ? 'extend' : null} >
                                        {(extraShown.isShown && extraShown.type === 'allDay') ? 
                                            <Extras index={1} liNb={"li2"}/>
                                            : null
                                        }
                                        <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5355 20.8269C10.5355 17.8254 14.4278 17.3452 14.4278 15.6917C14.4278 14.9651 13.8655 14.5308 13.1619 14.5308C12.1891 14.5308 11.6611 15.516 11.6611 15.516L10.5356 14.7657C10.5356 14.7657 11.2974 13.1007 13.2908 13.1007C14.7562 13.1007 15.9992 13.9914 15.9992 15.5628C15.9992 18.2359 12.2711 18.6932 12.2358 20.2646H16.1281V21.5658H10.6062C10.5708 21.2966 10.5355 21.0618 10.5355 20.8269ZM16.9758 18.4937L20.5636 13.241H22.3574V18.1653H23.4362V19.4207H22.3574V21.5659H20.8681V19.4207H16.9758V18.4937ZM20.8681 18.1653V15.5867C20.8681 15.1762 20.9272 14.7189 20.9272 14.7189H20.9033C20.9033 14.7189 20.7162 15.1638 20.4928 15.4807L18.5701 18.1424V18.1653H20.8681ZM28.2109 17.724L27.9212 18.7617C26.2746 24.6603 20.2659 28.3825 14.3221 26.9072C8.61307 25.4903 5.06497 19.9584 5.91813 14.3224L7.63835 14.8026C8.03707 14.9139 8.40684 14.5518 8.30382 14.1508L6.43308 6.86626C6.33012 6.46529 5.83173 6.32616 5.53592 6.61581L0.161866 11.8779C-0.133949 12.1675 -0.00527469 12.6688 0.393552 12.7801L2.26596 13.3028C0.868633 20.9266 5.57193 28.5197 13.247 30.5183C21.2167 32.5937 29.3456 27.6606 31.56 19.7284L31.837 18.7363C31.9168 18.4502 31.7497 18.1536 31.4636 18.0737L28.8735 17.3506C28.5875 17.2707 28.2908 17.438 28.2109 17.724ZM31.2715 13.1849L28.5553 13.5378C28.2608 13.576 28.0531 13.8458 28.0913 14.1404L28.1983 14.9642C28.2366 15.2587 28.5064 15.4665 28.8009 15.4282L31.5171 15.0753C31.8116 15.037 32.0193 14.7672 31.9811 14.4727L31.874 13.6489C31.8358 13.3544 31.566 13.1466 31.2715 13.1849ZM29.1805 8.05234L26.7944 9.39704C26.5356 9.54286 26.4441 9.87081 26.5899 10.1296L26.9977 10.8533C27.1435 11.1121 27.4715 11.2037 27.7303 11.0578L30.1164 9.71313C30.3751 9.56732 30.4667 9.23936 30.3209 8.98055L29.9131 8.25685C29.7673 7.99809 29.4393 7.90652 29.1805 8.05234ZM25.3192 4.07682L23.6105 6.21745C23.4251 6.44955 23.4632 6.78802 23.6953 6.97324L24.3446 7.49149C24.5767 7.67682 24.9151 7.63882 25.1003 7.40667L26.8091 5.26603C26.9944 5.03388 26.9563 4.69547 26.7242 4.51019L26.075 3.99194C25.8429 3.80672 25.5045 3.84466 25.3192 4.07682ZM20.2497 1.83725L19.4673 4.46211C19.3824 4.74674 19.5445 5.04632 19.829 5.13114L20.6252 5.36842C20.9098 5.4533 21.2093 5.29128 21.2942 5.0067L22.0766 2.38184C22.1614 2.09721 21.9995 1.79769 21.7148 1.71281L20.9188 1.47553C20.6341 1.39065 20.3345 1.55262 20.2497 1.83725ZM14.7105 1.65981L14.9683 4.38664C14.9962 4.68235 15.2587 4.8994 15.5543 4.87144L16.3813 4.7932C16.677 4.76524 16.8941 4.50287 16.8661 4.20716L16.6083 1.48034C16.5803 1.18463 16.3179 0.967628 16.0222 0.99559L15.1952 1.07378C14.8995 1.10174 14.6825 1.3641 14.7105 1.65981ZM9.50809 3.57038L10.7686 6.00202C10.9053 6.26569 11.2299 6.36865 11.4937 6.23193L12.2312 5.84967C12.4948 5.71294 12.5978 5.38838 12.4611 5.12466L11.2005 2.69302C11.0638 2.42935 10.7392 2.32639 10.4755 2.46311L9.738 2.84542C9.47433 2.98204 9.37142 3.30665 9.50809 3.57038Z" fill="#D1B000"/>
                                        </svg>

                                        À toute <br />
                                        heure
                                    </li>
                                    <li onClick={() => setExtraShown({type: 'prices', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'prices') ? 'extend' : null}>
                                        {(extraShown.isShown && extraShown.type === 'prices') ? 
                                            <Extras index={2} liNb={"li3"}/>
                                            : null
                                        }
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.68846 0C3.88957 0 0 2.16692 0 4.83997C0 7.51297 3.88957 9.68047 8.68846 9.68047C9.52655 9.68047 10.3367 9.6141 11.1034 9.49086C11.0944 9.38552 11.0898 9.27954 11.0898 9.17273C11.0898 6.67017 13.5621 4.58075 17.145 3.72555C16.2415 1.58976 12.7983 0 8.68846 0Z" fill="#D1B000"/>
                                            <path d="M0.241275 8.66528C0.0851964 9.02881 0 9.40725 0 9.79725C0 12.4705 3.88957 14.6373 8.68846 14.6373C9.52645 14.6373 10.3367 14.571 11.1033 14.4477C11.0944 14.3426 11.0899 14.2368 11.0899 14.1302C11.0899 13.6117 11.1991 13.0954 11.4144 12.5946L11.6318 12.0888C10.7126 12.2734 9.72185 12.3741 8.68846 12.3741C4.58957 12.3741 1.15608 10.7925 0.241275 8.66528Z" fill="#D1B000"/>
                                            <path d="M0.241275 13.7764C0.0851964 14.1396 0 14.518 0 14.908C0 17.5811 3.88957 19.7486 8.68846 19.7486C9.52645 19.7486 10.3367 19.6822 11.1033 19.559C11.0944 19.4536 11.0899 19.3477 11.0899 19.2408C11.0899 18.7226 11.1991 18.2061 11.4144 17.7053L11.6318 17.1996C10.7126 17.384 9.72185 17.4849 8.68846 17.4849C4.58957 17.4849 1.15608 15.9031 0.241275 13.7764Z" fill="#D1B000"/>
                                            <path d="M0.241275 18.8875C0.0851964 19.2508 0 19.6293 0 20.0188C0 22.6925 3.88957 24.8594 8.68846 24.8594C9.52655 24.8594 10.3367 24.7931 11.1034 24.6697C11.0946 24.5646 11.0898 24.4587 11.0898 24.3521C11.0898 23.8338 11.199 23.3167 11.4143 22.8163L11.6316 22.3104C10.7124 22.4949 9.7217 22.5956 8.68831 22.5956C4.58957 22.5956 1.15608 21.0145 0.241275 18.8875Z" fill="#D1B000"/>
                                            <path d="M12.6235 9.59861C12.6235 12.2716 16.5129 14.4389 21.3115 14.4389C26.1104 14.4389 30 12.2716 30 9.59861C30 6.92556 26.1104 4.75854 21.3115 4.75854C16.5129 4.75854 12.6235 6.92551 12.6235 9.59861Z" fill="#D1B000"/>
                                            <path d="M21.3116 17.1329C17.213 17.1329 13.7798 15.5511 12.8642 13.4241C12.7084 13.7874 12.6235 14.1658 12.6235 14.5559C12.6235 17.2289 16.513 19.3965 21.3116 19.3965C26.1105 19.3965 30.0001 17.2289 30.0001 14.5559C30.0001 14.1658 29.9152 13.7874 29.7586 13.4241C28.8437 15.5511 25.4102 17.1329 21.3116 17.1329Z" fill="#D1B000"/>
                                            <path d="M21.3116 22.2437C17.213 22.2437 13.7798 20.662 12.8642 18.5349C12.7084 18.8982 12.6235 19.2768 12.6235 19.6667C12.6235 22.3399 16.513 24.5075 21.3116 24.5075C26.1105 24.5075 30.0001 22.3399 30.0001 19.6667C30.0001 19.2769 29.9152 18.8983 29.7586 18.5349C28.8437 20.662 25.4102 22.2437 21.3116 22.2437Z" fill="#D1B000"/>
                                            <path d="M21.3116 27.3544C17.213 27.3544 13.7798 25.7732 12.8642 23.646C12.7084 24.0093 12.6235 24.3879 12.6235 24.7779C12.6235 27.451 16.513 29.618 21.3116 29.618C26.1105 29.618 30.0001 27.451 30.0001 24.7779C30.0001 24.3879 29.9152 24.0093 29.7586 23.646C28.8437 25.7732 25.4102 27.3544 21.3116 27.3544Z" fill="#D1B000"/>
                                        </svg>

                                        Tarifs <br />
                                        compétitifs
                                    </li>
                                </>
                                : (servicesCtg === 1) ?
                                <>
                                    <li onClick={() => setExtraShown({type: 'ponctual', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'ponctual') ? 'extend' : null}>

                                        {(extraShown.isShown && extraShown.type === 'ponctual') ? 
                                            <Extras index={0}/>
                                            : null
                                        }
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.9999 30C6.729 30 0 23.271 0 15.0001C0 6.72914 6.729 0 14.9999 0C23.271 0 30 6.729 30 14.9999C30 23.2709 23.271 30 14.9999 30ZM14.9999 0.876266C7.21211 0.876266 0.876266 7.21211 0.876266 15.0001C0.876266 22.788 7.21211 29.1237 14.9999 29.1237C22.7877 29.1237 29.1237 22.7879 29.1237 15.0001C29.1237 7.21226 22.7877 0.876266 14.9999 0.876266ZM14.9999 27.5538C8.07786 27.5538 2.44624 21.9221 2.44624 15.0001C2.44624 8.07801 8.07786 2.44624 14.9999 2.44624C21.922 2.44624 27.5536 8.07786 27.5536 14.9999C27.5536 21.922 21.922 27.5538 14.9999 27.5538ZM14.9999 3.32251C8.56098 3.32251 3.32251 8.56098 3.32251 14.9999C3.32251 21.4389 8.56098 26.6773 14.9999 26.6773C21.4389 26.6773 26.6773 21.4389 26.6773 14.9999C26.6773 8.56098 21.4389 3.32251 14.9999 3.32251ZM14.9999 25.8802C14.7579 25.8802 14.5618 25.6841 14.5618 25.4421V24.4684C14.5618 24.2264 14.7579 24.0303 14.9999 24.0303C15.2419 24.0303 15.4381 24.2264 15.4381 24.4684V25.4421C15.4381 25.6841 15.2419 25.8802 14.9999 25.8802ZM14.9999 16.8256C13.9932 16.8256 13.1744 16.0068 13.1744 15.0001C13.1744 14.3719 13.4932 13.8168 13.9776 13.4882V5.18151C13.9776 4.61778 14.4362 4.1592 14.9999 4.1592C15.5635 4.1592 16.0222 4.61778 16.0222 5.18151V13.4882C16.2147 13.6189 16.3811 13.7851 16.5118 13.9778H20.9301C21.4936 13.9778 21.9524 14.4363 21.9524 15.0001C21.9524 15.5638 21.4936 16.0224 20.9301 16.0224H16.5118C16.1832 16.5067 15.6281 16.8256 14.9999 16.8256ZM14.9999 14.0508C14.4765 14.0508 14.0506 14.4766 14.0506 15.0001C14.0506 15.5235 14.4765 15.9494 14.9999 15.9494C15.5234 15.9494 15.9492 15.5235 15.9492 15.0001C15.9492 14.4766 15.5234 14.0508 14.9999 14.0508ZM16.8255 15.1461H20.9299C21.0105 15.1461 21.076 15.0805 21.076 15.0001C21.076 14.9196 21.0105 14.854 20.9299 14.854H16.8255V15.1461ZM14.8539 13.1745H15.146V5.18151C15.146 5.10104 15.0805 5.03546 14.9999 5.03546C14.9195 5.03546 14.8539 5.10104 14.8539 5.18151V13.1745ZM25.4449 15.5526H24.4712C24.2292 15.5526 24.0331 15.3564 24.0331 15.1144C24.0331 14.8724 24.2292 14.6763 24.4712 14.6763H25.4449C25.6869 14.6763 25.883 14.8724 25.883 15.1144C25.883 15.3564 25.6869 15.5526 25.4449 15.5526ZM5.80191 15.5526H4.82823C4.58623 15.5526 4.39009 15.3564 4.39009 15.1144C4.39009 14.8724 4.58623 14.6763 4.82823 14.6763H5.80191C6.0439 14.6763 6.24004 14.8724 6.24004 15.1144C6.24004 15.3564 6.04376 15.5526 5.80191 15.5526Z" fill="#D1B000"/>
                                        </svg>


                                        Chauffeur <br />
                                        ponctuel
                                    </li>
                                    <li onClick={() => setExtraShown({type: 'delay', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'delay') ? 'extend' : null} >
                                        {(extraShown.isShown && extraShown.type === 'delay') ? 
                                            <Extras index={3}/>
                                            : null
                                        }
                                        <svg width="22" height="32" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8313 7.64808V5.01847H19.4581C20.4606 5.01847 21.2762 4.20291 21.2762 3.20042V1.81805C21.2761 0.815558 20.4606 0 19.4581 0H1.81818C0.815682 0 0.000124931 0.815558 0.000124931 1.81805V3.20048C0.000124931 4.20291 0.815682 5.01853 1.81818 5.01853H2.44505V7.63408C2.44499 7.63883 2.4443 7.64339 2.4443 7.64814C2.4443 9.91513 3.34954 12.0239 4.98935 13.582C5.07791 13.6674 5.17003 13.7514 5.27078 13.8384C5.37128 13.9252 5.46547 14.0033 5.55503 14.0739C5.60028 14.11 5.64628 14.1461 5.69303 14.1809C5.73809 14.2156 5.78384 14.2494 5.83028 14.2826C5.87803 14.3179 5.92646 14.3524 5.97128 14.3829C6.01815 14.4155 6.06596 14.4482 6.11365 14.4799C6.11571 14.4814 6.11778 14.4827 6.11984 14.484L6.14784 14.5023C6.18284 14.5251 6.21828 14.5482 6.25721 14.573C6.25759 14.5733 6.25778 14.5735 6.25815 14.5737C6.25865 14.574 6.25921 14.5743 6.25984 14.5747C6.26015 14.5748 6.26034 14.575 6.26065 14.5752C6.26259 14.5764 6.26465 14.5775 6.26659 14.5787C6.94083 15.0073 7.66764 15.3293 8.43283 15.5432V16.462C4.92953 17.4383 2.44449 20.6644 2.44449 24.3527C2.44449 24.3544 2.44467 24.356 2.44467 24.3577V26.9819H1.81805C0.81562 26.9819 0 27.7975 0 28.8V30.1819C0 31.1844 0.815557 32 1.81805 32H19.4579C20.4604 32 21.276 31.1844 21.276 30.1819V28.8C21.276 27.7975 20.4604 26.9819 19.4579 26.9819H18.8313V24.3577C18.8313 24.356 18.8315 24.3544 18.8315 24.3527C18.8315 20.6644 16.3463 17.4382 12.8429 16.4619V15.5382C16.3462 14.5617 18.8313 11.3359 18.8313 7.64808ZM1.81818 3.56404C1.61768 3.56404 1.45455 3.40092 1.45455 3.20042V1.81805C1.45455 1.61755 1.61768 1.45443 1.81818 1.45443H19.4581C19.6586 1.45443 19.8218 1.61755 19.8218 1.81805V3.20048C19.8218 3.40098 19.6586 3.5641 19.4581 3.5641H18.1041H3.17229L1.81818 3.56404ZM3.89885 7.65933C3.89891 7.65558 3.89941 7.65183 3.89941 7.64808V5.01847H17.3768V7.64808C17.3768 7.84008 17.3682 8.03039 17.3521 8.21895H3.92266C3.90729 8.03395 3.89916 7.84733 3.89885 7.65933ZM18.1037 28.4363C18.1045 28.4363 18.1051 28.4362 18.1058 28.4362H19.4579C19.6584 28.4362 19.8216 28.5993 19.8216 28.7998V30.1818C19.8216 30.3823 19.6584 30.5454 19.4579 30.5454H1.81811C1.61762 30.5454 1.45449 30.3823 1.45449 30.1818V28.7998C1.45449 28.5993 1.61762 28.4362 1.81811 28.4362H3.17198H18.1013C18.102 28.4362 18.1028 28.4363 18.1037 28.4363ZM6.17428 26.9818L10.1721 24.9247C10.4639 24.7747 10.8121 24.7747 11.1037 24.9247L15.1016 26.9818H6.17428ZM17.377 24.349C17.377 24.3502 17.3768 24.3512 17.3768 24.3524V26.5169L11.7692 23.6315C11.0609 23.2669 10.2151 23.2669 9.50669 23.6315L3.89916 26.5169V24.3524C3.89916 24.3512 3.89904 24.3502 3.89904 24.349C3.90079 21.151 6.17246 18.3747 9.3022 17.7466C9.37513 17.7321 9.44419 17.7069 9.50763 17.6724C9.52288 17.6641 9.53744 17.6547 9.55201 17.6455C9.55701 17.6423 9.56232 17.6396 9.56719 17.6362C9.58382 17.625 9.59976 17.6127 9.61532 17.6002C9.61788 17.5981 9.62057 17.5965 9.62313 17.5943C9.63776 17.5823 9.65151 17.5693 9.66507 17.5562C9.66826 17.5531 9.67182 17.5503 9.67501 17.547C9.68669 17.5353 9.6975 17.5228 9.70832 17.5104C9.71288 17.5051 9.71782 17.5003 9.72219 17.4948C9.73107 17.484 9.73907 17.4725 9.74738 17.4612C9.753 17.4536 9.75894 17.4462 9.76426 17.4383C9.77101 17.4281 9.777 17.4175 9.78325 17.407C9.78907 17.3974 9.79526 17.388 9.80057 17.3781C9.80669 17.3669 9.81175 17.3551 9.81719 17.3435C9.82169 17.334 9.82663 17.3248 9.83069 17.3151C9.83882 17.2957 9.84588 17.2759 9.85238 17.2558C9.85301 17.2536 9.854 17.2516 9.85463 17.2495C9.8765 17.1794 9.88769 17.1054 9.88725 17.0295V15.813C10.1402 15.8365 10.3949 15.8487 10.6501 15.8487C10.8967 15.8487 11.1433 15.8371 11.3884 15.8151V17.0332C11.3884 17.0333 11.3884 17.0335 11.3884 17.0335C11.3884 17.0832 11.3934 17.1322 11.4032 17.1797C11.4037 17.182 11.4045 17.1842 11.405 17.1867C11.4094 17.2072 11.4145 17.2276 11.4207 17.2477C11.4267 17.2673 11.4339 17.2863 11.4415 17.3051C11.4426 17.3078 11.4434 17.3107 11.4446 17.3135C11.4524 17.3321 11.4613 17.3503 11.4706 17.3682C11.4721 17.371 11.4732 17.374 11.4747 17.3767C11.4831 17.3922 11.4924 17.407 11.5017 17.4218C11.5049 17.4268 11.5077 17.4321 11.5111 17.4371C11.5189 17.4487 11.5276 17.4597 11.536 17.4709C11.5417 17.4785 11.5471 17.4865 11.5532 17.4939C11.5597 17.5018 11.5669 17.5091 11.5737 17.5168C11.5826 17.5268 11.5912 17.5369 11.6006 17.5463C11.6054 17.5511 11.6107 17.5555 11.6156 17.5601C11.6276 17.5716 11.6397 17.5831 11.6526 17.5938C11.6559 17.5966 11.6596 17.599 11.6629 17.6017C11.6777 17.6136 11.6928 17.6252 11.7086 17.6359C11.7126 17.6385 11.7167 17.6407 11.7207 17.6433C11.7362 17.6535 11.7519 17.6634 11.7684 17.6723C11.8312 17.7065 11.8999 17.7316 11.9723 17.7461C11.9724 17.7461 11.9725 17.7461 11.9726 17.7461C15.103 18.3741 17.3753 21.1506 17.377 24.349ZM11.9735 14.2535C11.9361 14.2609 11.9001 14.2717 11.865 14.2847C11.0489 14.4332 10.1906 14.4292 9.3817 14.2744C9.37788 14.2732 9.37413 14.2719 9.37032 14.2709C9.34826 14.2642 9.32588 14.2584 9.30301 14.2538C8.49908 14.0925 7.73746 13.7874 7.03927 13.3467C7.00677 13.3259 6.97427 13.3048 6.94208 13.2837L6.91671 13.2672C6.87808 13.2414 6.8394 13.215 6.79677 13.1854C6.76077 13.1607 6.72534 13.1356 6.69059 13.1098C6.68696 13.107 6.68321 13.1044 6.67952 13.1017C6.64434 13.0767 6.60971 13.051 6.57571 13.0247C6.57134 13.0214 6.56696 13.0181 6.56265 13.0149C6.52884 12.99 6.49577 12.9638 6.45934 12.9348C6.38346 12.875 6.30596 12.8107 6.22196 12.7381C6.14121 12.6684 6.06828 12.602 5.99515 12.5314C5.15003 11.7284 4.54235 10.7497 4.20541 9.67344H17.0639C16.339 11.9619 14.418 13.7628 11.9735 14.2535Z" fill="#D1B000"/>
                                        </svg>


                                        Attente en cas <br />
                                        de vol retardé
                                    </li>
                                    <li onClick={() => setExtraShown({type: 'prices', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'prices') ? 'extend' : null}>
                                        {(extraShown.isShown && extraShown.type === 'prices') ? 
                                            <Extras index={2}/>
                                            : null
                                        }
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.68846 0C3.88957 0 0 2.16692 0 4.83997C0 7.51297 3.88957 9.68047 8.68846 9.68047C9.52655 9.68047 10.3367 9.6141 11.1034 9.49086C11.0944 9.38552 11.0898 9.27954 11.0898 9.17273C11.0898 6.67017 13.5621 4.58075 17.145 3.72555C16.2415 1.58976 12.7983 0 8.68846 0Z" fill="#D1B000"/>
                                            <path d="M0.241275 8.66528C0.0851964 9.02881 0 9.40725 0 9.79725C0 12.4705 3.88957 14.6373 8.68846 14.6373C9.52645 14.6373 10.3367 14.571 11.1033 14.4477C11.0944 14.3426 11.0899 14.2368 11.0899 14.1302C11.0899 13.6117 11.1991 13.0954 11.4144 12.5946L11.6318 12.0888C10.7126 12.2734 9.72185 12.3741 8.68846 12.3741C4.58957 12.3741 1.15608 10.7925 0.241275 8.66528Z" fill="#D1B000"/>
                                            <path d="M0.241275 13.7764C0.0851964 14.1396 0 14.518 0 14.908C0 17.5811 3.88957 19.7486 8.68846 19.7486C9.52645 19.7486 10.3367 19.6822 11.1033 19.559C11.0944 19.4536 11.0899 19.3477 11.0899 19.2408C11.0899 18.7226 11.1991 18.2061 11.4144 17.7053L11.6318 17.1996C10.7126 17.384 9.72185 17.4849 8.68846 17.4849C4.58957 17.4849 1.15608 15.9031 0.241275 13.7764Z" fill="#D1B000"/>
                                            <path d="M0.241275 18.8875C0.0851964 19.2508 0 19.6293 0 20.0188C0 22.6925 3.88957 24.8594 8.68846 24.8594C9.52655 24.8594 10.3367 24.7931 11.1034 24.6697C11.0946 24.5646 11.0898 24.4587 11.0898 24.3521C11.0898 23.8338 11.199 23.3167 11.4143 22.8163L11.6316 22.3104C10.7124 22.4949 9.7217 22.5956 8.68831 22.5956C4.58957 22.5956 1.15608 21.0145 0.241275 18.8875Z" fill="#D1B000"/>
                                            <path d="M12.6235 9.59861C12.6235 12.2716 16.5129 14.4389 21.3115 14.4389C26.1104 14.4389 30 12.2716 30 9.59861C30 6.92556 26.1104 4.75854 21.3115 4.75854C16.5129 4.75854 12.6235 6.92551 12.6235 9.59861Z" fill="#D1B000"/>
                                            <path d="M21.3116 17.1329C17.213 17.1329 13.7798 15.5511 12.8642 13.4241C12.7084 13.7874 12.6235 14.1658 12.6235 14.5559C12.6235 17.2289 16.513 19.3965 21.3116 19.3965C26.1105 19.3965 30.0001 17.2289 30.0001 14.5559C30.0001 14.1658 29.9152 13.7874 29.7586 13.4241C28.8437 15.5511 25.4102 17.1329 21.3116 17.1329Z" fill="#D1B000"/>
                                            <path d="M21.3116 22.2437C17.213 22.2437 13.7798 20.662 12.8642 18.5349C12.7084 18.8982 12.6235 19.2768 12.6235 19.6667C12.6235 22.3399 16.513 24.5075 21.3116 24.5075C26.1105 24.5075 30.0001 22.3399 30.0001 19.6667C30.0001 19.2769 29.9152 18.8983 29.7586 18.5349C28.8437 20.662 25.4102 22.2437 21.3116 22.2437Z" fill="#D1B000"/>
                                            <path d="M21.3116 27.3544C17.213 27.3544 13.7798 25.7732 12.8642 23.646C12.7084 24.0093 12.6235 24.3879 12.6235 24.7779C12.6235 27.451 16.513 29.618 21.3116 29.618C26.1105 29.618 30.0001 27.451 30.0001 24.7779C30.0001 24.3879 29.9152 24.0093 29.7586 23.646C28.8437 25.7732 25.4102 27.3544 21.3116 27.3544Z" fill="#D1B000"/>
                                        </svg>

                                        Tarifs <br />
                                        compétitifs
                                    </li>
                                </>
                                : (servicesCtg === 2) ?
                                <>
                                    <li onClick={() => setExtraShown({type: 'music', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'music') ? 'extend' : null}>

                                        {(extraShown.isShown && extraShown.type === 'music') ? 
                                            <Extras index={4}/>
                                            : null
                                        }
                                        <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.1976 0.850765C27.1957 0.738033 27.1716 0.623732 27.1228 0.514138C26.9281 0.0770134 26.416 -0.119483 25.9786 0.075131L8.7954 7.7282C8.47713 7.86996 8.28722 8.18002 8.28235 8.50682C8.28162 8.559 8.28147 22.7197 8.28147 22.7197C7.58714 22.2395 6.7382 21.9797 5.82703 21.9797C4.37443 21.9797 2.8948 22.6262 1.76758 23.7533C-0.338405 25.8595 -0.599947 29.0249 1.18468 30.8095C1.95247 31.5773 3.01673 32 4.18149 32C5.63415 32 7.11367 31.3536 8.24089 30.2265C9.23859 29.2289 9.85956 27.9636 9.98954 26.6638C10.0098 26.4614 10.0182 26.2623 10.0146 26.0661C10.015 26.054 10.0146 16.1751 10.0146 16.1751L25.4648 9.3097V19.6043C24.7705 19.1241 23.9217 18.8643 23.0105 18.8643C21.5579 18.8643 20.0782 19.5108 18.9509 20.638C16.8448 22.7442 16.5833 25.9096 18.3681 27.6942C19.1358 28.462 20.2 28.8847 21.3648 28.8847C22.8174 28.8847 24.297 28.2383 25.4242 27.1112C26.6001 25.9352 27.2069 24.4291 27.1978 23.0175C27.2015 22.9836 27.1986 0.905667 27.1976 0.850765ZM8.26505 26.4913C8.1748 27.3942 7.73098 28.2855 7.01543 29.0011C6.21077 29.8057 5.17783 30.267 4.18139 30.267C3.68492 30.267 2.97443 30.1486 2.40999 29.5841C1.30113 28.4752 1.56262 26.4091 2.99299 24.9788C3.7976 24.1742 4.83054 23.7127 5.82698 23.7127C6.32356 23.7127 7.03394 23.8313 7.59843 24.3957C8.11211 24.9093 8.34892 25.6535 8.26505 26.4913ZM10.0145 14.2786V9.08235L25.4647 2.2012V7.41333M24.1986 25.8858C23.394 26.6903 22.3612 27.1516 21.3646 27.1516C20.8682 27.1516 20.1577 27.033 19.5932 26.4687C18.4843 25.3598 18.7459 23.2938 20.1762 21.8634C20.9809 21.0587 22.0138 20.5973 23.0103 20.5973C23.5069 20.5973 24.2171 20.7158 24.7816 21.2803C25.8907 22.3891 25.6291 24.4551 24.1986 25.8858Z" fill="#D1B000"/>
                                        </svg>

                                        Service <br />
                                        personnalisé
                                    </li>
                                    <li onClick={() => setExtraShown({type: 'drinks', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'drinks') ? 'extend' : null} >
                                        {(extraShown.isShown && extraShown.type === 'drinks') ? 
                                            <Extras index={5}/>
                                            : null
                                        }
                                        <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.4124 0.34437C12.8976 -0.11479 12.0959 -0.11479 11.5811 0.34437C11.1118 0.766798 0 10.7459 0 17.4496C0 24.3676 5.6048 30 12.5 30C19.3887 30 25 24.3676 25 17.4496C25 10.7459 13.8882 0.766798 13.4124 0.34437ZM12.5 27.5022C7.07769 27.5022 2.66554 22.9902 2.66554 17.4496C2.66554 13.1947 9.0915 6.23387 12.5 3.00138C15.9085 6.23387 22.3345 13.1947 22.3345 17.4496C22.3345 22.9902 17.9223 27.5022 12.5 27.5022Z" fill="#D1B000"/>
                                            <path d="M7.42958 17.186C7.44262 16.5003 6.8691 15.931 6.13266 15.9126C6.11962 15.9126 6.10659 15.9126 6.10007 15.9126C5.38318 15.9126 4.79011 16.4513 4.77056 17.1309C4.76404 17.2717 4.67932 20.6695 7.54037 23.4857C8.17906 24.1163 9.16316 23.7673 9.42385 23.5408C9.95826 23.0694 9.98433 22.2796 9.4825 21.7715C7.42306 19.7206 7.42958 17.2411 7.42958 17.186Z" fill="#D1B000"/>
                                        </svg>

                                        Boissons et <br />
                                        collations
                                    </li>
                                    <li onClick={() => setExtraShown({type: 'prices', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'prices') ? 'extend' : null}>
                                        {(extraShown.isShown && extraShown.type === 'prices') ? 
                                            <Extras index={2}/>
                                            : null
                                        }
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.68846 0C3.88957 0 0 2.16692 0 4.83997C0 7.51297 3.88957 9.68047 8.68846 9.68047C9.52655 9.68047 10.3367 9.6141 11.1034 9.49086C11.0944 9.38552 11.0898 9.27954 11.0898 9.17273C11.0898 6.67017 13.5621 4.58075 17.145 3.72555C16.2415 1.58976 12.7983 0 8.68846 0Z" fill="#D1B000"/>
                                            <path d="M0.241275 8.66528C0.0851964 9.02881 0 9.40725 0 9.79725C0 12.4705 3.88957 14.6373 8.68846 14.6373C9.52645 14.6373 10.3367 14.571 11.1033 14.4477C11.0944 14.3426 11.0899 14.2368 11.0899 14.1302C11.0899 13.6117 11.1991 13.0954 11.4144 12.5946L11.6318 12.0888C10.7126 12.2734 9.72185 12.3741 8.68846 12.3741C4.58957 12.3741 1.15608 10.7925 0.241275 8.66528Z" fill="#D1B000"/>
                                            <path d="M0.241275 13.7764C0.0851964 14.1396 0 14.518 0 14.908C0 17.5811 3.88957 19.7486 8.68846 19.7486C9.52645 19.7486 10.3367 19.6822 11.1033 19.559C11.0944 19.4536 11.0899 19.3477 11.0899 19.2408C11.0899 18.7226 11.1991 18.2061 11.4144 17.7053L11.6318 17.1996C10.7126 17.384 9.72185 17.4849 8.68846 17.4849C4.58957 17.4849 1.15608 15.9031 0.241275 13.7764Z" fill="#D1B000"/>
                                            <path d="M0.241275 18.8875C0.0851964 19.2508 0 19.6293 0 20.0188C0 22.6925 3.88957 24.8594 8.68846 24.8594C9.52655 24.8594 10.3367 24.7931 11.1034 24.6697C11.0946 24.5646 11.0898 24.4587 11.0898 24.3521C11.0898 23.8338 11.199 23.3167 11.4143 22.8163L11.6316 22.3104C10.7124 22.4949 9.7217 22.5956 8.68831 22.5956C4.58957 22.5956 1.15608 21.0145 0.241275 18.8875Z" fill="#D1B000"/>
                                            <path d="M12.6235 9.59861C12.6235 12.2716 16.5129 14.4389 21.3115 14.4389C26.1104 14.4389 30 12.2716 30 9.59861C30 6.92556 26.1104 4.75854 21.3115 4.75854C16.5129 4.75854 12.6235 6.92551 12.6235 9.59861Z" fill="#D1B000"/>
                                            <path d="M21.3116 17.1329C17.213 17.1329 13.7798 15.5511 12.8642 13.4241C12.7084 13.7874 12.6235 14.1658 12.6235 14.5559C12.6235 17.2289 16.513 19.3965 21.3116 19.3965C26.1105 19.3965 30.0001 17.2289 30.0001 14.5559C30.0001 14.1658 29.9152 13.7874 29.7586 13.4241C28.8437 15.5511 25.4102 17.1329 21.3116 17.1329Z" fill="#D1B000"/>
                                            <path d="M21.3116 22.2437C17.213 22.2437 13.7798 20.662 12.8642 18.5349C12.7084 18.8982 12.6235 19.2768 12.6235 19.6667C12.6235 22.3399 16.513 24.5075 21.3116 24.5075C26.1105 24.5075 30.0001 22.3399 30.0001 19.6667C30.0001 19.2769 29.9152 18.8983 29.7586 18.5349C28.8437 20.662 25.4102 22.2437 21.3116 22.2437Z" fill="#D1B000"/>
                                            <path d="M21.3116 27.3544C17.213 27.3544 13.7798 25.7732 12.8642 23.646C12.7084 24.0093 12.6235 24.3879 12.6235 24.7779C12.6235 27.451 16.513 29.618 21.3116 29.618C26.1105 29.618 30.0001 27.451 30.0001 24.7779C30.0001 24.3879 29.9152 24.0093 29.7586 23.646C28.8437 25.7732 25.4102 27.3544 21.3116 27.3544Z" fill="#D1B000"/>
                                        </svg>

                                        Tarifs <br />
                                        compétitifs
                                    </li>
                                </>
                                : (servicesCtg === 3) ?
                                <>
                                    <li onClick={() => setExtraShown({type: 'flowers', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'flowers') ? 'extend' : null}>

                                        {(extraShown.isShown && extraShown.type === 'flowers') ? 
                                            <Extras index={6}/>
                                            : null
                                        }
                                        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.8599 12.0049L27.6479 11.7979C27.5399 13.3449 26.8809 14.8229 25.7209 15.9549L24.9719 16.6839L25.1489 17.7149C25.4439 19.4339 25.0299 21.1339 24.0669 22.5029L24.4679 22.4449C26.7729 22.1099 28.6889 20.4949 29.4079 18.2789C30.1279 16.0629 29.5279 13.6309 27.8599 12.0049Z" fill="#D1B000"/>
                                            <path d="M4.56485 17.7149L4.74185 16.6849L3.99285 15.9559C2.83085 14.8239 2.17285 13.3429 2.06585 11.7939L1.84885 12.0059C0.179846 13.6309 -0.420154 16.0629 0.299846 18.2789C1.01885 20.4949 2.93485 22.1099 5.23985 22.4449L5.64685 22.5039C4.68385 21.1349 4.26985 19.4339 4.56485 17.7149Z" fill="#D1B000"/>
                                            <path d="M15.7809 24.52L14.8559 24.033L13.9309 24.52C13.0079 25.005 11.9699 25.261 10.9279 25.261C10.3169 25.261 9.72195 25.163 9.14795 24.999L9.36695 25.442C10.3979 27.53 12.5249 28.853 14.8549 28.853C17.1849 28.853 19.3129 27.53 20.3429 25.442L20.561 25.001C19.988 25.165 19.3949 25.262 18.7859 25.262C17.7429 25.262 16.7039 25.005 15.7809 24.52Z" fill="#D1B000"/>
                                            <path d="M3.45178 7.32285C4.45378 6.05585 5.90078 5.18685 7.57078 4.94385L8.60478 4.79385L9.06678 3.85685C9.77878 2.41385 10.9698 1.33485 12.3928 0.749852L12.3038 0.702852C10.2408 -0.381148 7.74278 -0.200148 5.85778 1.16885C3.97378 2.53885 3.02978 4.85885 3.42378 7.15485L3.45178 7.32285Z" fill="#D1B000"/>
                                            <path d="M20.6449 3.85685L21.1079 4.79385L22.1429 4.94385C23.8089 5.18585 25.2539 6.05285 26.2569 7.31785L26.2849 7.15485C26.6779 4.85885 25.7339 2.53785 23.8499 1.16885C21.9649 -0.200148 19.4659 -0.381148 17.4039 0.702852L17.3159 0.748852C18.7399 1.33385 19.9319 2.41285 20.6449 3.85685Z" fill="#D1B000"/>
                                            <path d="M22.9109 16.5038C22.8549 16.1798 22.9629 15.8488 23.1979 15.6198L24.3229 14.5228C25.5369 13.3388 25.9739 11.5688 25.4499 9.95581C24.9259 8.34281 23.5319 7.16681 21.8529 6.92281L20.2969 6.69681C19.9719 6.64981 19.6909 6.44481 19.5449 6.15081L18.8499 4.74081C18.0989 3.21981 16.5499 2.25781 14.8539 2.25781C13.1579 2.25781 11.6089 3.22081 10.8589 4.74181L10.1639 6.15081C10.0199 6.44581 9.73887 6.64981 9.41387 6.69781L7.85787 6.92281C6.17987 7.16781 4.78587 8.34281 4.26187 9.95581C3.73787 11.5688 4.17487 13.3398 5.38887 14.5228L6.51387 15.6198C6.74887 15.8488 6.85687 16.1798 6.80087 16.5038L6.53587 18.0528C6.24887 19.7248 6.93587 21.4138 8.30787 22.4108C9.08387 22.9748 10.0029 23.2618 10.9269 23.2618C11.6359 23.2618 12.3479 23.0928 12.9999 22.7498L14.3909 22.0178C14.5369 21.9408 14.6959 21.9028 14.8559 21.9028C15.0159 21.9028 15.1749 21.9408 15.3209 22.0178L16.7129 22.7498C17.3649 23.0928 18.0759 23.2618 18.7849 23.2618C19.7089 23.2618 20.6279 22.9748 21.4049 22.4108C22.7769 21.4138 23.4639 19.7248 23.1779 18.0538L22.9109 16.5038ZM20.8029 14.1198H16.7209L20.2559 16.1608C20.4949 16.2988 20.5769 16.6048 20.4389 16.8438C20.3459 17.0048 20.1779 17.0938 20.0049 17.0938C19.9199 17.0938 19.8339 17.0728 19.7549 17.0268L16.2179 14.9848L18.2599 18.5218C18.3979 18.7608 18.3159 19.0668 18.0769 19.2048C17.9979 19.2498 17.9119 19.2718 17.8269 19.2718C17.6539 19.2718 17.4859 19.1828 17.3929 19.0218L15.3519 15.4858V19.5688C15.3519 19.8448 15.1279 20.0688 14.8519 20.0688C14.5759 20.0688 14.3519 19.8448 14.3519 19.5688V15.4858L12.3119 19.0198C12.2189 19.1798 12.0509 19.2698 11.8779 19.2698C11.7929 19.2698 11.7069 19.2478 11.6289 19.2028C11.3899 19.0648 11.3079 18.7588 11.4459 18.5198L13.4859 14.9868L9.95287 17.0268C9.87387 17.0718 9.78787 17.0938 9.70287 17.0938C9.52987 17.0938 9.36187 17.0048 9.26887 16.8438C9.13087 16.6048 9.21287 16.2988 9.45187 16.1608L12.9849 14.1208H8.90487C8.62887 14.1208 8.40487 13.8968 8.40487 13.6208C8.40487 13.3448 8.62887 13.1208 8.90487 13.1208H12.9859L9.45187 11.0808C9.21287 10.9428 9.13087 10.6368 9.26887 10.3978C9.40687 10.1578 9.71287 10.0758 9.95187 10.2148L13.4849 12.2548L11.4449 8.72181C11.3069 8.48281 11.3889 8.17681 11.6279 8.03881C11.8649 7.89981 12.1719 7.98181 12.3109 8.22181L14.3509 11.7558V7.67281C14.3509 7.39681 14.5749 7.17281 14.8509 7.17281C15.1269 7.17281 15.3509 7.39681 15.3509 7.67281V11.7528L17.3919 8.21781C17.5299 7.97781 17.8349 7.89581 18.0749 8.03481C18.3139 8.17281 18.3959 8.47881 18.2579 8.71781L16.2199 12.2528L19.7549 10.2118C19.9919 10.0738 20.2989 10.1548 20.4379 10.3948C20.5759 10.6338 20.4939 10.9398 20.2549 11.0778L16.7189 13.1198H20.8029C21.0789 13.1198 21.3029 13.3438 21.3029 13.6198C21.3029 13.8958 21.0789 14.1198 20.8029 14.1198Z" fill="#D1B000"/>
                                        </svg>

                                        Décoration <br />
                                        florale
                                    </li>
                                    <li onClick={() => setExtraShown({type: 'elegance', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'elegance') ? 'extend' : null} >
                                        {(extraShown.isShown && extraShown.type === 'elegance') ? 
                                            <Extras index={7}/>
                                            : null
                                        }
                                        <svg width="21" height="32" viewBox="0 0 21 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.64223 16.5116L0.00917728 20.0449C-0.0250224 20.2397 0.0373839 20.439 0.179329 20.5776C0.321014 20.7165 0.521326 20.7757 0.716232 20.7374L4.23613 20.0312C4.35489 20.0074 4.46231 19.9487 4.54686 19.8634L5.97146 18.4095L7.17268 9.69751L0.805152 16.1989C0.719489 16.2842 0.663141 16.3938 0.64223 16.5116Z" fill="#D1B000"/>
                                            <path d="M18.0666 5.98706H9.84033L7.28127 24.546C7.24356 24.818 7.32805 25.0933 7.51272 25.2977L13.2589 31.6914C13.4363 31.8875 13.6886 32 13.9535 32C14.2183 32 14.4706 31.8874 14.6481 31.6914L20.3951 25.2977C20.5798 25.0933 20.6631 24.818 20.6257 24.546L18.0666 5.98706Z" fill="#D1B000"/>
                                            <path d="M9.69423 3.85134L9.79878 4.28409H18.1081L18.2124 3.85134L18.5649 2.40271C18.7048 1.82294 18.5713 1.2108 18.2031 0.742362C17.8349 0.273142 17.2707 0 16.6743 0H11.2327C10.636 0 10.0718 0.273142 9.70387 0.742362C9.33569 1.2108 9.20214 1.82294 9.34181 2.40271L9.69423 3.85134Z" fill="#D1B000"/>
                                        </svg>

                                        Chauffeur <br />
                                        élégant
                                    </li>
                                    <li onClick={() => setExtraShown({type: 'prices', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'prices') ? 'extend' : null}>
                                        {(extraShown.isShown && extraShown.type === 'prices') ? 
                                            <Extras index={2}/>
                                            : null
                                        }
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.68846 0C3.88957 0 0 2.16692 0 4.83997C0 7.51297 3.88957 9.68047 8.68846 9.68047C9.52655 9.68047 10.3367 9.6141 11.1034 9.49086C11.0944 9.38552 11.0898 9.27954 11.0898 9.17273C11.0898 6.67017 13.5621 4.58075 17.145 3.72555C16.2415 1.58976 12.7983 0 8.68846 0Z" fill="#D1B000"/>
                                            <path d="M0.241275 8.66528C0.0851964 9.02881 0 9.40725 0 9.79725C0 12.4705 3.88957 14.6373 8.68846 14.6373C9.52645 14.6373 10.3367 14.571 11.1033 14.4477C11.0944 14.3426 11.0899 14.2368 11.0899 14.1302C11.0899 13.6117 11.1991 13.0954 11.4144 12.5946L11.6318 12.0888C10.7126 12.2734 9.72185 12.3741 8.68846 12.3741C4.58957 12.3741 1.15608 10.7925 0.241275 8.66528Z" fill="#D1B000"/>
                                            <path d="M0.241275 13.7764C0.0851964 14.1396 0 14.518 0 14.908C0 17.5811 3.88957 19.7486 8.68846 19.7486C9.52645 19.7486 10.3367 19.6822 11.1033 19.559C11.0944 19.4536 11.0899 19.3477 11.0899 19.2408C11.0899 18.7226 11.1991 18.2061 11.4144 17.7053L11.6318 17.1996C10.7126 17.384 9.72185 17.4849 8.68846 17.4849C4.58957 17.4849 1.15608 15.9031 0.241275 13.7764Z" fill="#D1B000"/>
                                            <path d="M0.241275 18.8875C0.0851964 19.2508 0 19.6293 0 20.0188C0 22.6925 3.88957 24.8594 8.68846 24.8594C9.52655 24.8594 10.3367 24.7931 11.1034 24.6697C11.0946 24.5646 11.0898 24.4587 11.0898 24.3521C11.0898 23.8338 11.199 23.3167 11.4143 22.8163L11.6316 22.3104C10.7124 22.4949 9.7217 22.5956 8.68831 22.5956C4.58957 22.5956 1.15608 21.0145 0.241275 18.8875Z" fill="#D1B000"/>
                                            <path d="M12.6235 9.59861C12.6235 12.2716 16.5129 14.4389 21.3115 14.4389C26.1104 14.4389 30 12.2716 30 9.59861C30 6.92556 26.1104 4.75854 21.3115 4.75854C16.5129 4.75854 12.6235 6.92551 12.6235 9.59861Z" fill="#D1B000"/>
                                            <path d="M21.3116 17.1329C17.213 17.1329 13.7798 15.5511 12.8642 13.4241C12.7084 13.7874 12.6235 14.1658 12.6235 14.5559C12.6235 17.2289 16.513 19.3965 21.3116 19.3965C26.1105 19.3965 30.0001 17.2289 30.0001 14.5559C30.0001 14.1658 29.9152 13.7874 29.7586 13.4241C28.8437 15.5511 25.4102 17.1329 21.3116 17.1329Z" fill="#D1B000"/>
                                            <path d="M21.3116 22.2437C17.213 22.2437 13.7798 20.662 12.8642 18.5349C12.7084 18.8982 12.6235 19.2768 12.6235 19.6667C12.6235 22.3399 16.513 24.5075 21.3116 24.5075C26.1105 24.5075 30.0001 22.3399 30.0001 19.6667C30.0001 19.2769 29.9152 18.8983 29.7586 18.5349C28.8437 20.662 25.4102 22.2437 21.3116 22.2437Z" fill="#D1B000"/>
                                            <path d="M21.3116 27.3544C17.213 27.3544 13.7798 25.7732 12.8642 23.646C12.7084 24.0093 12.6235 24.3879 12.6235 24.7779C12.6235 27.451 16.513 29.618 21.3116 29.618C26.1105 29.618 30.0001 27.451 30.0001 24.7779C30.0001 24.3879 29.9152 24.0093 29.7586 23.646C28.8437 25.7732 25.4102 27.3544 21.3116 27.3544Z" fill="#D1B000"/>
                                        </svg>

                                        Tarifs <br />
                                        compétitifs
                                    </li>
                                </>
                                : (servicesCtg === 4) ?
                                <>
                                    <li onClick={() => setExtraShown({type: 'luggage', isShown: !extraShown.isShown})} 
                                        className={(extraShown.isShown && extraShown.type === 'luggage') ? 'extend' : null}>

                                        {(extraShown.isShown && extraShown.type === 'luggage') ? 
                                            <Extras index={8}/>
                                            : null
                                        }
                                        <svg width="30" height="30" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                            <Extras index={9}/>
                                            : null
                                        }
                                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                            <Extras index={10}/>
                                            : null
                                        }
                                        <svg width="24" height="30" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.52377 5.35436C2.60494 5.73331 2.87393 6.09196 3.28261 6.42466C3.35151 7.47184 3.64268 8.33734 4.07213 9.05937C5.19529 7.45061 8.24811 6.29489 11.8484 6.29489C15.3622 6.29489 18.3547 7.39634 19.5396 8.94422C19.9965 7.97868 20.0861 7.04901 20.0871 6.48412C20.5099 6.15945 20.7959 5.80693 20.9021 5.43506C22.44 4.99334 23.3593 4.43601 23.3593 3.83054C23.3593 2.3945 17.5472 0.511557 11.8479 0C5.92157 0.569603 0.336914 2.3945 0.336914 3.83054C0.336914 4.39967 1.14908 4.92586 2.52377 5.35436ZM19.8228 5.35436L19.3797 6.23259C11.577 2.29115 3.91309 6.19012 3.8357 6.22976L3.38124 5.35672C3.71158 5.18447 11.5732 1.18734 19.8228 5.35436Z" fill="#D1B000"/>
                                            <path d="M15.2952 20.0107H8.40149C2.66677 20.0107 0 24.2643 0 30L0.000240207 38.5L9.71556e-05 39L0.000143051 39.1903C5.47342 40.9001 8.83188 41.4404 12.7464 41.4404C20.391 41.4404 23.7254 39.3286 24.0001 39.1903V38.5V30C24.0006 24.2643 21.0314 20.0107 15.2952 20.0107ZM13.862 39.1903L12 41L10.014 39.1856C9.99893 39.1625 9.99185 39.1347 9.9928 39.1054L10.8663 25.7502C10.871 25.6799 10.9291 25.6256 10.9999 25.6256H12.8115C12.8819 25.6256 12.9399 25.6789 12.946 25.7502L13.8842 39.104C13.8875 39.1365 13.8781 39.1649 13.862 39.1903ZM13.0116 25.2226H10.8588L8.98667 21.3529C8.98667 20.9815 9.28681 20.6823 9.65821 20.6823H14.1537C14.5241 20.6823 14.8247 20.9815 14.8247 21.3529L13.0116 25.2226Z" fill="#D1B000"/>
                                            <path d="M18.4304 9.49453C17.6301 8.44876 15.2143 7.32324 11.8033 7.32324C8.2899 7.32324 5.87558 8.4884 5.12004 9.57098L4.28333 10.7701L3.99947 10C3.9301 10.4276 3.99989 11.0531 3.99989 11.5C3.99989 13.7492 4.62311 15.5959 6.09738 17.0692C7.56834 18.5454 9.60371 19.459 11.8519 19.459C14.3762 19.459 16.6315 18.3076 18.1213 16.5006C19.2893 15.0914 19.5 13.4726 19.5 11.5C19.5 10.962 19.5996 10.0087 19.5 9.5L19.3728 10.7225L18.4304 9.49453Z" fill="#D1B000"/>
                                        </svg>

                                        Mise à <br />
                                        disposition
                                    </li>
                                </>
                                : null
                            }                    
                        </ul>
                    </div>
                    <div 
                        className="book-link" 
                        id='book-link'
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