import React, { useEffect, useRef, useState } from 'react';

import airplaneImg from '../../Medias/Image/Main/airplane.png';
import distanceImg from '../../Medias/Image/Main/distance.png';
import weddingImg from '../../Medias/Image/Main/wedding.png';
import eveningImg from '../../Medias/Image/Main/evening.png';
import extrasImg from '../../Medias/Image/Main/collaborators.png';

const servicesArray = [
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
        p1 : <p dangerouslySetInnerHTML={{__html: 'Vous souhaitez  entreprendre un long voyage sans stress et avec une <span class=colored>expérience de première classe ?</span>'}} />,
        p2 : <p dangerouslySetInnerHTML={{__html: 'Nous prendrons en compte tous les détails pour rendre votre transport aussi <span class=colored>confortable que possible.</span>'}} />,
        li1 : <li dangerouslySetInnerHTML={{__html: 'Nous vous offrons un service de <span class=colored>rafraîchissement</span> ainsi que de <span class=colored>collations</span> à bord.'}} />,
        li2 : <li dangerouslySetInnerHTML={{__html: 'Vous entamerez votre voyage de manière <span class=colored>confortable et détendue.</span>'}} />
    },
    {
        title : 'Soirées',
        p1 : <p dangerouslySetInnerHTML={{__html: 'Vous souhaitez  entreprendre un long voyage sans stress et avec une <span class=colored>expérience de première classe ?</span>'}} />,
        p2 : <p dangerouslySetInnerHTML={{__html: 'Nous prendrons en compte tous les détails pour rendre votre transport aussi <span class=colored>confortable que possible.</span>'}} />,
        li1 : <li dangerouslySetInnerHTML={{__html: 'Nous vous offrons un service de <span class=colored>rafraîchissement</span> ainsi que de <span class=colored>collations</span> à bord.'}} />,
        li2 : <li dangerouslySetInnerHTML={{__html: 'Vous entamerez votre voyage de manière <span class=colored>confortable et détendue.</span>'}} />
    },
    {
        title : 'Extras',
        p1 : <p dangerouslySetInnerHTML={{__html: 'Chez <strong>Bk-Elite</strong>, notre priorité est de donner la meilleure expérience possible à notre clientèle.'}} />,
        p2 : <p dangerouslySetInnerHTML={{__html: 'Nous vous proposons de quoi aggrémenter votre voyage et des services personnalisés :'}} />,
        li1 : <li dangerouslySetInnerHTML={{__html: 'Des collations et des rafraîchissements sont à votre disposition gratuitement durant votre voyage.'}} />,
        li2 : <li dangerouslySetInnerHTML={{__html: 'Vous avez besoin de transporter un excédent de bagages ? Nous mettons à votre disposition un van pour transporter tout objets volumineux.'}} />
    }
];

const services = ['airport', 'distance', 'events', 'evening', 'extras'];

const Services = ({scrollY}) => {

    const [selectedService, setSelectedService] = useState('airport');
    const [servicesCtg, setServicesCtg] = useState(0);
    const [servicesSlide, setServicesSlide] = useState({from: undefined, to: 'airport'});
    const [isHover, setIsHover] = useState(undefined);

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
            bookLink.style.animation = 'displayBanner 1s ease-out 1 forwards';

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
                setSelectedService('distance');
                break;

            case '1-2':
                displayServices('slide2to3');
                setSelectedService('events');
                break;
            case '2-1':
                displayServices('slide3to2');
                setSelectedService('distance');
                break;

            case '1-0':
                displayServices('slide2to1');
                setSelectedService('airport');
                break;

            case '0-2':
                displayServices('slide1to3');
                setSelectedService('events');
                break;
            case '2-0':
                displayServices('slide3to1');
                setSelectedService('airport');
                break;

            case '2-3':
                displayServices('slide3to4');
                setSelectedService('evening');
                break;

            case '3-2':
                displayServices('slide4to3');
                setSelectedService('events');
                break;

            case '3-0':
                displayServices('slide4to1');
                setSelectedService('airport');
                break;

            case '0-3':
                displayServices('slide1to4');
                setSelectedService('evening');
                break;

            case '1-3':
                displayServices('slide2to4');
                setSelectedService('evening');
                break;

            case '3-1':
                displayServices('slide4to2');
                setSelectedService('distance');
                break;

            case '3-4':
                displayServices('slide4to5');
                setSelectedService('extras');
                break;

            case '4-3':
                displayServices('slide5to4');
                setSelectedService('evening');
                break;

            case '4-2':
                displayServices('slide5to3');
                setSelectedService('events');
                break;

            case '2-4':
                displayServices('slide3to5');
                setSelectedService('extras');
                break;

            case '4-1':
                displayServices('slide5to2');
                setSelectedService('distance');
                break;

            case '1-4':
                displayServices('slide2to5');
                setSelectedService('extras');
                break;

            case '4-0':
                displayServices('slide5to1');
                setSelectedService('airport');
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

            void content.offsetWidth;

            bookLink.style.transform = 'scale(1.03)';
        }
        else {
            bookLink.style.transform = 'scale(1)';
        }
    }, [isHover])

    useEffect(() => {
        textPRef.current = Array.from(document.querySelectorAll('.services-ctr .content p'));
        listRef.current = Array.from(document.querySelectorAll('.services-ctr .content ul'));
    }, [])

    useEffect(() => {
    
        console.log(scrollY);
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
                        <li className='airport-nav' 
                            onClick={(() => {setServicesCtg(0); setServicesSlide({from: servicesSlide.to, to: 'airport'})})}>
                            Transfert aéroport
                        </li>
                        <li className='distance-nav' 
                            onClick={(() => {setServicesCtg(1); setServicesSlide({from: servicesSlide.to, to: 'distance'})})}>
                            Longues distances</li>
                        <li className='events-nav' 
                            onClick={(() => {setServicesCtg(2); setServicesSlide({from: servicesSlide.to, to: 'events'})})}>
                            Événements
                        </li>
                        <li className='evening-nav' 
                            onClick={(() => {setServicesCtg(3); setServicesSlide({from: servicesSlide.to, to: 'evening'})})}>
                            Soirées
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
                        <img src={airplaneImg} alt="avion qui vole au dessus d'immeubles" />
                        <img src={distanceImg} alt="route qui s'étend vers le lointain"/>
                        <img src={weddingImg} alt="mariés qui tiennent un bouquet de fleurs"/>
                        <img src={eveningImg} alt="ville de Paris de nuit"/>    
                        <img src={extrasImg} alt="chauffeur qui ouvre la portière"/>  
                    </div>
                </div>   
                <div className="content-title">
                    <h3>{servicesArray[servicesCtg].title}</h3>
                    {(servicesCtg === 0) ? 
                        <svg width="22" height="40" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.4078 5.85708L11.922 0.308228C10.8522 -0.1624 9.66703 -0.0940827 8.64844 0.513178L5.70797 2.25146C4.99687 2.67655 4.94562 3.85311 5.61187 4.3617L15.0227 11.535L8.7125 15.3531L4.98406 13.3871C4.42672 13.0911 3.77969 13.1063 3.23516 13.4327L1.17234 14.6548C0.576562 15.0115 0.416406 15.93 0.852031 16.5297L5.535 23.0046C5.92578 23.5436 6.49594 23.8548 7.09172 23.8548H15.9131C16.2334 23.8548 16.5473 23.7637 16.8292 23.5967L34.3119 13.2429C37.2908 11.4742 39.597 8.43794 40.7694 4.74123C41.378 2.82836 40.18 0.778855 38.4503 0.778855H34.7731C33.4791 0.778855 32.1978 1.14321 31.0447 1.84156L24.4078 5.85708ZM0 33.571C0 34.9145 0.916094 36 2.05 36H38.95C40.0839 36 41 34.9145 41 33.571C41 32.2274 40.0839 31.1419 38.95 31.1419H2.05C0.916094 31.1419 0 32.2274 0 33.571Z" fill="#D1B000"/>
                        </svg>                
                    : (servicesCtg === 1) ?
                        <svg width="22" height="40" viewBox="0 0 35 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3075 0L17.3663 7.9225L11.4254 0H0L17.3663 23.1557L34.7329 0H23.3075Z" fill="#D1B000"/>
                            <path d="M17.3663 23.1556C10.5039 23.1556 4.94296 28.7163 4.94296 35.5787C4.94296 42.439 10.5039 48 17.3663 48C24.2266 48 29.7894 42.439 29.7894 35.5787C29.7894 28.7163 24.2269 23.1556 17.3663 23.1556ZM21.8455 42.4768L17.3666 40.1206L12.8877 42.4768L13.7418 37.4838L10.1152 33.9507L15.1253 33.2207L17.3666 28.6811L19.6088 33.2207L24.6198 33.9507L20.9941 37.4838L21.8455 42.4768Z" fill="#D1B000"/>
                        </svg>
                    : (servicesCtg === 2) ?
                        <svg width="40" height="40" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.6068 17.3758C44.1609 16.4942 42.5495 16.006 40.9267 15.8825C39.2761 21.1617 34.589 25.9338 30.4002 29.1358C30.6472 30.6972 31.0566 32.2214 31.5446 33.5819L26.6008 40.2018V31.3043H28.1707L27.9623 30.8687L26.6401 28.1051C32.0933 24.3874 38.2939 18.0541 38.2939 12.0326C38.2939 5.38715 32.3316 0 24.9768 0C17.622 0 11.6596 5.38715 11.6596 12.0326C11.6596 18.0541 17.8602 24.3875 23.3134 28.1051L21.9912 30.8687L21.7828 31.3043H23.3527V40.2019L18.4089 33.582C18.8968 32.2214 19.3061 30.6973 19.5533 29.1359C15.3646 25.9339 10.6773 21.1618 9.02677 15.8826C7.40406 16.006 5.79257 16.4943 4.34674 17.3759C-0.168205 20.1286 -1.35851 25.6671 1.68808 29.7466C4.35962 33.3238 10.7298 34.9067 15.7166 35.2236L23.0176 45H26.9359L34.237 35.2236C39.2237 34.9067 45.5939 33.3237 48.2654 29.7466C51.312 25.667 50.1216 20.1284 45.6068 17.3758ZM24.9766 5.86935C21.2156 5.86935 18.1556 8.63416 18.1556 12.0324H14.9075C14.9075 7.0159 19.4245 2.93459 24.9766 2.93459V5.86935Z" fill="#D1B000"/>
                        </svg>                    
                    : null
                    }                   
                </div>
                <div className="content" ref={contentRef}>
                    <div className="main-banner" ref={bannerRef}>
                        {servicesArray[servicesCtg].p1}
                        {servicesArray[servicesCtg].p2}
                        <ul>
                            {(servicesCtg === 4) ? 
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.7806 7.19385C29.4705 6.88381 29.4067 6.69022 29.31 6.39726C29.1888 6.02985 29.0379 5.57258 28.4761 5.01076C27.9143 4.44895 27.4571 4.29804 27.0896 4.17687C26.7966 4.08027 26.603 4.01639 26.2929 3.70635C25.9829 3.39638 25.9192 3.20279 25.8226 2.9099C25.7014 2.5425 25.5506 2.08523 24.9888 1.52348C24.427 0.961667 23.9698 0.810915 23.6023 0.689745C23.3095 0.593138 23.1159 0.529333 22.806 0.219367C22.6097 0.0230835 22.3209 -0.0485103 22.0557 0.0332684C21.7904 0.115047 21.5922 0.336943 21.5406 0.609689L20.4584 6.32918L20.2523 6.12294C19.524 5.39472 18.5559 4.99369 17.526 4.99369C16.4962 4.99369 15.528 5.39472 14.7999 6.12294L14.2546 6.6682C14.2458 6.67667 14.2371 6.68535 14.2286 6.69419L9.69612 11.2267C9.68751 11.2349 9.67905 11.2434 9.67089 11.2519L6.12289 14.7999C5.39467 15.5281 4.99364 16.4963 4.99364 17.5261C4.99364 18.556 5.39467 19.5242 6.12289 20.2524L6.32913 20.4586L0.609658 21.5407C0.336913 21.5923 0.115093 21.7905 0.0333145 22.0558C-0.0485388 22.321 0.0230547 22.6098 0.219338 22.8061C0.529377 23.1161 0.593182 23.3096 0.689788 23.6025C0.810958 23.9699 0.961709 24.4271 1.52345 24.9889C2.08526 25.5506 2.54246 25.7015 2.90986 25.8226C3.20283 25.9192 3.39634 25.9831 3.70638 26.2931C4.01649 26.6031 4.0803 26.7967 4.1769 27.0897C4.29815 27.4571 4.44898 27.9143 5.01079 28.4762C5.57268 29.0381 6.02987 29.1889 6.39735 29.3101C6.69032 29.4067 6.8839 29.4705 7.19394 29.7807C7.33653 29.9232 7.52787 30 7.72356 30C7.79725 30 7.87169 29.9891 7.94418 29.9667C8.20943 29.8848 8.40766 29.663 8.45926 29.3903L9.5414 23.6708L9.74757 23.877C10.4759 24.6052 11.4439 25.0063 12.4738 25.0063C13.5037 25.0063 14.4718 24.6052 15.2 23.877L15.7453 23.3317C15.7541 23.3233 15.7628 23.3146 15.7712 23.3058L20.3038 18.7733C20.3124 18.765 20.3208 18.7566 20.329 18.748L23.877 15.2001C24.6053 14.4719 25.0063 13.5036 25.0063 12.4738C25.0063 11.4439 24.6053 10.4758 23.877 9.74756L23.6708 9.54139L29.3903 8.45932C29.6631 8.40772 29.8849 8.20949 29.9667 7.94424C30.0485 7.6789 29.9769 7.39013 29.7806 7.19385ZM6.86646 27.8877C6.57349 27.7911 6.3799 27.7272 6.06987 27.4171C5.75975 27.107 5.69595 26.9135 5.59934 26.6205C5.47809 26.2531 5.32727 25.7958 4.76545 25.234C4.20364 24.6722 3.74644 24.5214 3.37897 24.4002C3.086 24.3036 2.89249 24.2397 2.58252 23.9298C2.27256 23.6198 2.20876 23.4263 2.11215 23.1334C2.07822 23.0305 2.0419 22.9204 1.99495 22.803L7.611 21.7404L8.25946 22.389L7.19694 28.005C7.07959 27.9579 6.9695 27.9216 6.86646 27.8877ZM9.60663 21.6178C9.60102 21.612 9.59525 21.6063 9.58941 21.6006L8.39838 20.4095C8.39344 20.4044 8.38834 20.3994 8.38325 20.3944L7.18219 19.1932C6.7369 18.7479 6.49156 18.1559 6.49156 17.5261C6.49156 16.8963 6.73682 16.3042 7.18219 15.8589L9.97898 13.0621L13.8154 21.4911L14.3323 22.6267L14.141 22.8179C13.6957 23.2631 13.1036 23.5084 12.4739 23.5084C12.293 23.5084 12.1153 23.4875 11.9432 23.4481C11.5162 23.3503 11.1241 23.1352 10.8067 22.8179L9.60663 21.6178ZM20.4106 8.39934L21.6016 9.59045C21.6066 9.59554 21.6117 9.60055 21.6168 9.60557L22.3873 10.3761L22.8178 10.8066C23.2631 11.2519 23.5084 11.844 23.5084 12.4738C23.5084 13.1036 23.2632 13.6956 22.8178 14.1409L20.021 16.9377L19.415 15.6063L15.6678 7.37321L15.8591 7.18202C16.3044 6.73673 16.8964 6.49147 17.5262 6.49147C18.1559 6.49147 18.748 6.73673 19.1934 7.18202L20.3934 8.38204C20.399 8.38788 20.4048 8.39364 20.4106 8.39934ZM18.8903 18.0685L15.463 21.4958L14.9436 20.3545L11.1097 11.9313L14.537 8.50411L18.3301 16.8378L18.8903 18.0685ZM22.3889 8.25952L22.1035 7.97404L21.7405 7.61098L22.803 1.99491C22.9204 2.04186 23.0304 2.07819 23.1334 2.11211C23.4263 2.20872 23.6198 2.27252 23.9298 2.58249C24.2398 2.89253 24.3036 3.08604 24.4002 3.37893C24.5214 3.74634 24.6722 4.20353 25.2339 4.76535C25.7958 5.32717 26.253 5.47799 26.6205 5.59916C26.9135 5.69577 27.1071 5.75965 27.4171 6.06977C27.4295 6.08212 27.4408 6.09411 27.4525 6.10609C27.7317 6.39516 27.7949 6.58508 27.8877 6.86636C27.9217 6.96933 27.958 7.07942 28.005 7.19684L22.3889 8.25952Z" fill="#D1B000"/>
                                </svg>
                                :
                                <svg width="30" height="30" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.62727 0C0.729018 0 0 0.729018 0 1.62727V24.3586C0 25.2569 0.729018 25.9859 1.62727 25.9859H30.264L20.1668 36.197C19.5305 36.8382 19.5305 37.878 20.1668 38.5191C20.803 39.1603 21.8331 39.1603 22.4677 38.5191L35.3215 25.5205C35.9627 24.8728 35.9367 23.7777 35.2792 23.1561L22.4677 10.1997C21.8315 9.55859 20.8014 9.55859 20.1668 10.1997C19.5305 10.8409 19.5305 11.8807 20.1668 12.5219L30.2363 22.7037H3.25454V1.62727C3.25454 0.729018 2.52715 0 1.62727 0Z" fill="#D1B000"/>
                                </svg>
                            }                    
                           {servicesArray[servicesCtg].li1}
                           {(servicesCtg === 4) ? 
                                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.8387 18.5058L28.8194 7.35184C28.9909 6.38459 28.8581 5.44228 28.455 4.74664C28.0593 4.06872 27.4508 3.69372 26.7468 3.69372H23.1637L23.5165 1.71088C23.5935 1.27104 23.5302 0.834628 23.3379 0.503495C23.151 0.186467 22.858 0 22.538 0H17.6694C17.0691 0 16.4891 0.629755 16.3482 1.43411L15.9479 3.69372H12.1503C10.7425 3.69372 9.37636 5.17926 9.03943 7.07231L7.0582 18.2266C6.88419 19.2061 7.01425 20.1305 7.42316 20.8337C7.82009 21.5113 8.42505 21.8869 9.13102 21.8869H23.7292C25.1357 21.8869 26.5026 20.4035 26.8387 18.5058ZM17.2056 1.71226C17.2531 1.44133 17.4752 1.1981 17.6693 1.1981H22.5379C22.567 1.1981 22.62 1.20326 22.6435 1.24558C22.666 1.28462 22.6695 1.35343 22.6567 1.43548L22.2555 3.69372H16.854L17.2056 1.71226ZM8.11639 20.0947C7.87792 19.6844 7.80621 19.1207 7.91525 18.5058L9.89623 7.35184C10.133 6.01492 11.1652 4.88838 12.1493 4.88838H26.7457C27.1745 4.88838 27.5348 5.10203 27.7606 5.48528C27.9989 5.89589 28.071 6.4577 27.9617 7.07231L25.981 18.2266C25.7447 19.5633 24.7103 20.6925 23.7272 20.6925H9.13026C8.70249 20.6937 8.34199 20.4814 8.11639 20.0947Z" fill="#D1B000"/>
                                    <path d="M29.6629 8.5248C29.4116 8.44172 29.184 8.64401 29.1304 8.96259L27.1507 20.1186C26.9134 21.4531 25.88 22.5815 24.8989 22.5815H10.2997C10.0561 22.5815 9.85791 22.8509 9.85791 23.1805C9.85791 23.5072 10.0563 23.774 10.2997 23.774H24.897C26.3048 23.774 27.6703 22.2891 28.0063 20.3954L29.987 9.23902C30.0451 8.92354 29.8986 8.59929 29.6629 8.5248Z" fill="#D1B000"/>
                                    <path d="M0.441774 8.60174H2.76224C3.0058 8.60174 3.20414 8.33649 3.20414 8.00656C3.20414 7.6768 3.0058 7.41138 2.76224 7.41138H0.441774C0.198085 7.41121 0 7.67663 0 8.00638C0 8.33631 0.198085 8.60174 0.441774 8.60174Z" fill="#D1B000"/>
                                    <path d="M5.08308 12.7522H2.76236C2.51816 12.7522 2.31982 13.0211 2.31982 13.3479C2.31982 13.6775 2.51816 13.9457 2.76236 13.9457H5.08308C5.32741 13.9457 5.52524 13.6775 5.52524 13.3479C5.52524 13.0212 5.32741 12.7522 5.08308 12.7522Z" fill="#D1B000"/>
                                    <path d="M2.76224 15.2371H0.441774C0.198085 15.2371 0 15.5032 0 15.8326C0 16.1629 0.198085 16.4276 0.441774 16.4276H2.76224C3.0058 16.4276 3.20414 16.1629 3.20414 15.8326C3.20414 15.503 3.0058 15.2371 2.76224 15.2371Z" fill="#D1B000"/>
                                    <path d="M4.97024 6.12257H7.29121C7.53541 6.12257 7.73299 5.85577 7.73299 5.52877C7.73299 5.19884 7.53541 4.93066 7.29121 4.93066H4.97024C4.72617 4.93066 4.52783 5.19884 4.52783 5.52877C4.52783 5.85457 4.72617 6.12257 4.97024 6.12257Z" fill="#D1B000"/>
                                    <path d="M7.38316 9.89453H2.76236C2.51816 9.89453 2.31982 10.1624 2.31982 10.4911C2.31982 10.819 2.51816 11.0876 2.76236 11.0876H7.38303C7.62608 11.0876 7.82544 10.819 7.82544 10.4911C7.82544 10.1632 7.62608 9.89453 7.38316 9.89453Z" fill="#D1B000"/>
                                </svg>                                
                                :
                                <svg width="30" height="30" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.62727 0C0.729018 0 0 0.729018 0 1.62727V24.3586C0 25.2569 0.729018 25.9859 1.62727 25.9859H30.264L20.1668 36.197C19.5305 36.8382 19.5305 37.878 20.1668 38.5191C20.803 39.1603 21.8331 39.1603 22.4677 38.5191L35.3215 25.5205C35.9627 24.8728 35.9367 23.7777 35.2792 23.1561L22.4677 10.1997C21.8315 9.55859 20.8014 9.55859 20.1668 10.1997C19.5305 10.8409 19.5305 11.8807 20.1668 12.5219L30.2363 22.7037H3.25454V1.62727C3.25454 0.729018 2.52715 0 1.62727 0Z" fill="#D1B000"/>
                                </svg>
                            }           
                           {servicesArray[servicesCtg].li2}
                        </ul>
                    </div>
                    <div className="book-link" ref={bookLinkRef} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
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