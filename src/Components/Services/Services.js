import React, { useEffect, useState } from 'react';

import airplaneImg from '../../Medias/Image/Main/airplane.png';
import distanceImg from '../../Medias/Image/Main/distance.png';
import weddingImg from '../../Medias/Image/Main/wedding.png';
import eveningImg from '../../Medias/Image/Main/evening.png';

const servicesArray = [
    {
        title : 'Transfert aéroport',
        p1 : <p dangerouslySetInnerHTML={{__html: 'Vous prenez l\'avion pour votre travail ou pour le tourisme ? </br> Nous savons que voyager peut être <b>éprouvant</b>.'}} />,
        p2 : <p dangerouslySetInnerHTML={{__html: 'Commencez votre voyage de manière <span class=colored>sereine</span> : '}} />,
        li1 : <li dangerouslySetInnerHTML={{__html: 'Notre chauffeur viendra vous chercher <span class=colored>à l\'endroit et à l\'heure indiqués.</span>'}} />,
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
    }
]

const Services = () => {

    const [servicesCtg, setServicesCtg] = useState(0);
    const [servicesSlide, setServicesSlide] = useState({from: undefined, to: 'airport'});

    function displayServices(index) {
        const slider = document.querySelector('.img-ctn .services-slider');
        const content = document.querySelector('.services-ctr .content');
        const banner = document.querySelector('.main-banner');
        const bookLink = document.querySelector('.book-link');
        const svgBook = document.querySelector('.book-svg');
        const textP = document.querySelectorAll('.services-ctr .content p');
        const list = document.querySelectorAll('.services-ctr .content ul');

        // if(index === 'noSlide') {
        //     banners.forEach((banner) => {
        //         banner.style.animation = 'displayBanner 1s ease-out 1 forwards';
        //     })
        //     textP.forEach((p) => {
        //         p.style.animation = 'opa0to1 1s ease-in-out 1 forwards 1s';
        //     })

        //     return;
        // }

        // else {
            // setValue({title: aboutArray[1].values[2].title, 
            //     description: aboutArray[1].values[2].description,
            //     increment: 1})
                
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

                default :
                    break;
            }
        // }      
    }

    useEffect(() => {
        const airport = document.getElementById('airport-nav');
        const distance = document.getElementById('distance-nav');
        const events = document.getElementById('events-nav');
        const evening = document.getElementById('evening-nav');

        if(servicesSlide.to === 'airport') {
            airport.classList.add('nav-selected');
            distance.classList.remove('nav-selected');
            events.classList.remove('nav-selected');
            evening.classList.remove('nav-selected');
        }
        if(servicesSlide.to === 'distance') {
            airport.classList.remove('nav-selected');
            distance.classList.add('nav-selected');
            events.classList.remove('nav-selected');
            evening.classList.remove('nav-selected');
        }
        if(servicesSlide.to === 'events') {
            airport.classList.remove('nav-selected');
            distance.classList.remove('nav-selected');
            events.classList.add('nav-selected');
            evening.classList.remove('nav-selected');
        }
        if(servicesSlide.to === 'evening') {
            airport.classList.remove('nav-selected');
            distance.classList.remove('nav-selected');
            events.classList.remove('nav-selected');
            evening.classList.add('nav-selected');
        }
            
        if(servicesSlide.to === 'distance')
            document.getElementById('distance-nav').classList.add('nav-selected');


        if(servicesSlide.from === 'airport' && servicesSlide.to === 'distance') {
            displayServices('slide1to2');
        }
            
        if(servicesSlide.from === 'distance' && servicesSlide.to === 'events') {
            displayServices('slide2to3');           
        }

        if(servicesSlide.from === 'events' && servicesSlide.to === 'distance') {
            displayServices('slide3to2');          
        }

        if(servicesSlide.from === 'distance' && servicesSlide.to === 'airport') {
            displayServices('slide2to1');     
        }

        if(servicesSlide.from === 'airport' && servicesSlide.to === 'events') {
            displayServices('slide1to3');     
        }

        if(servicesSlide.from === 'events' && servicesSlide.to === 'airport') {
            displayServices('slide3to1');     
        }

        if(servicesSlide.from === 'events' && servicesSlide.to === 'evening') {
            displayServices('slide3to4');     
        }

        if(servicesSlide.from === 'evening' && servicesSlide.to === 'events') {
            displayServices('slide4to3');     
        }

        if(servicesSlide.from === 'evening' && servicesSlide.to === 'airport') {
            displayServices('slide4to1');     
        }

        if(servicesSlide.from === 'airport' && servicesSlide.to === 'evening') {
            displayServices('slide1to4');     
        }

        if(servicesSlide.from === 'distance' && servicesSlide.to === 'evening') {
            displayServices('slide2to4');     
        }

        if(servicesSlide.from === 'evening' && servicesSlide.to === 'distance') {
            displayServices('slide4to2');     
        }
           
    }, [servicesSlide])

    return (
        <>
            <div className="services-nav">
                <div className="services-nav__title">
                        <h2 className='h-section'>
                            <span>S</span>ervices
                        </h2>
                    </div>
                    <ul>
                        <li id='airport-nav' onClick={(() => {setServicesCtg(0); setServicesSlide({from: servicesSlide.to, to: 'airport'})})}>Transfert aéroport</li>
                        <li id='distance-nav' onClick={(() => {setServicesCtg(1); setServicesSlide({from: servicesSlide.to, to: 'distance'})})}>Longues distances</li>
                        <li id='events-nav' onClick={(() => {setServicesCtg(2); setServicesSlide({from: servicesSlide.to, to: 'events'})})}>Événements</li>
                        <li id='evening-nav' onClick={(() => {setServicesCtg(3); setServicesSlide({from: servicesSlide.to, to: 'evening'})})}>Soirées</li>
                    </ul>
                </div>
            <div className="services-main">
                <div className="img-ctn">
                    <div className="services-slider">      
                        <img src={airplaneImg} alt="avion qui vole au dessus d'immeubles" />
                        <img src={distanceImg} alt="route qui s'étend vers le lointain"/>
                        <img src={weddingImg} alt="mariés qui tiennent un bouquet de fleurs"/>
                        <img src={eveningImg} alt="ville de Paris de nuit"/>    
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
                        <svg width="22" height="40" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.17047 6.11912C5.26324 6.5522 5.57065 6.96208 6.0377 7.3423C6.11644 8.53905 6.4492 9.52816 6.93998 10.3533C8.22356 8.51478 11.7124 7.19399 15.8269 7.19399C19.8427 7.19399 23.2625 8.45276 24.6167 10.2217C25.1388 9.11828 25.2413 8.05582 25.2423 7.41025C25.7256 7.0392 26.0524 6.63633 26.1737 6.21135C27.9314 5.70654 28.982 5.06961 28.982 4.37766C28.982 2.73651 22.3397 0.584623 15.8264 0C9.05357 0.650959 2.67126 2.73651 2.67126 4.37766C2.67126 5.02808 3.59943 5.62942 5.17047 6.11912ZM24.9403 6.11912L24.4339 7.1228C15.5168 2.6184 6.75823 7.07426 6.66978 7.11956L6.15042 6.12182C6.52794 5.92497 15.5125 1.35693 24.9403 6.11912Z" fill="#D1B000"/>
                            <path d="M19.7655 22.8704H11.8871C5.33333 22.8704 0 28.2038 0 34.7586V44.3958L0.0242694 44.5462L0.688711 44.7539C6.94374 46.7078 12.379 47.3609 16.8527 47.3609C25.5891 47.3609 30.6539 44.8687 30.9677 44.7107L31.588 44.3958H31.6532V34.7586C31.6538 28.2038 26.321 22.8704 19.7655 22.8704ZM18.1276 44.7895L15.9806 47.9321C15.9509 47.9758 15.9045 48 15.8544 48C15.8533 48 15.8517 48 15.8501 48C15.7994 48 15.7519 47.9731 15.7239 47.9294L13.73 44.7841C13.7127 44.7576 13.7047 44.7258 13.7057 44.6924L14.704 29.4296C14.7094 29.3493 14.7757 29.2873 14.8566 29.2873H16.9271C17.0075 29.2873 17.0738 29.3482 17.0808 29.4296L18.153 44.6908C18.1567 44.728 18.146 44.7603 18.1276 44.7895ZM17.1558 28.8267H14.6954L12.5559 24.4042C12.5559 23.9798 12.8989 23.6379 13.3234 23.6379H18.4609C18.8843 23.6379 19.2278 23.9798 19.2278 24.4042L17.1558 28.8267Z" fill="#D1B000"/>
                            <path d="M23.3461 10.8501C22.4314 9.65493 19.6706 8.36865 15.7724 8.36865C11.7572 8.36865 8.99803 9.70023 8.13458 10.9374L7.17836 12.3078L6.65576 11.4293C6.57648 11.9179 6.52417 12.4157 6.52417 12.9264C6.52417 15.4968 7.56667 17.8229 9.25151 19.5067C10.9326 21.1937 13.2587 22.2378 15.828 22.2378C18.7128 22.2378 21.2902 20.9219 22.9928 18.8568C24.3277 17.2464 25.1302 15.1803 25.1302 12.9259C25.1302 12.3111 25.0671 11.7119 24.9533 11.1305L24.4231 12.2534L23.3461 10.8501Z" fill="#D1B000"/>
                        </svg>
                    : null
                    }                   
                </div>
                <div className="content">
                    <div className="main-banner">
                        {servicesArray[servicesCtg].p1}
                        {servicesArray[servicesCtg].p2}
                        <ul>
                            <svg width="30" height="30" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.62727 0C0.729018 0 0 0.729018 0 1.62727V24.3586C0 25.2569 0.729018 25.9859 1.62727 25.9859H30.264L20.1668 36.197C19.5305 36.8382 19.5305 37.878 20.1668 38.5191C20.803 39.1603 21.8331 39.1603 22.4677 38.5191L35.3215 25.5205C35.9627 24.8728 35.9367 23.7777 35.2792 23.1561L22.4677 10.1997C21.8315 9.55859 20.8014 9.55859 20.1668 10.1997C19.5305 10.8409 19.5305 11.8807 20.1668 12.5219L30.2363 22.7037H3.25454V1.62727C3.25454 0.729018 2.52715 0 1.62727 0Z" fill="#D1B000"/>
                            </svg>
                           {servicesArray[servicesCtg].li1}
                           <svg width="30" height="30" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.62727 0C0.729018 0 0 0.729018 0 1.62727V24.3586C0 25.2569 0.729018 25.9859 1.62727 25.9859H30.264L20.1668 36.197C19.5305 36.8382 19.5305 37.878 20.1668 38.5191C20.803 39.1603 21.8331 39.1603 22.4677 38.5191L35.3215 25.5205C35.9627 24.8728 35.9367 23.7777 35.2792 23.1561L22.4677 10.1997C21.8315 9.55859 20.8014 9.55859 20.1668 10.1997C19.5305 10.8409 19.5305 11.8807 20.1668 12.5219L30.2363 22.7037H3.25454V1.62727C3.25454 0.729018 2.52715 0 1.62727 0Z" fill="#D1B000"/>
                            </svg>
                           {servicesArray[servicesCtg].li2}
                        </ul>
                    </div>
                    <div className="book-link">
                        <div>
                            <svg width="35" height="45" viewBox="0 0 50 57" fill="none" xmlns="http://www.w3.org/2000/svg" className='book-svg'>
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