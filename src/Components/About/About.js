import React, { useEffect, useState } from 'react';

import companyImg from '../../Medias/Image/Main/office3.png';
import valuesImg from '../../Medias/Image/Main/values1.png';

const infoArray = [
    {
        title : 'La société',
        p1 : 'La société Bk-Elite est un prestataire de service de transport privé, basée en région Provence-Alpes-Côte d\'Azur.',
        p2 : 'Nous proposons nos services hauts-de-gamme à une clientèle exigeante, soucieuse du confort et de l\'excellence.'
    },
    {
        title : 'Les valeurs',
        p1 : 'Nos valeurs sont',
        p2 : 'blablabla'
    },
    {
        title : 'Nos collaborateurs',
        p1 : 'Nos collaborateurs sont',
        p2 : 'blablabla'
    }
]

const About = ({scrollY}) => {

    const [aboutCtg, setAboutCtg] = useState(0);



    useEffect(() => {
        const bannerLeft = document.querySelector('.left-banner');
        const p1 = document.querySelector('.left-banner p');
        const bannerRight = document.querySelector('.right-banner');
        const p2 = document.querySelector('.right-banner p');

        if(scrollY >= 580) {
            bannerLeft.style.animation = 'displayBanner 1s ease-out 1 forwards';
            p1.style.animation = 'opa0to1 1s ease-in-out 1 forwards 1s';
        }
        if(scrollY >= 740) {
            bannerRight.style.animation = 'displayBanner 1s ease-out 1 forwards';
            p2.style.animation = 'opa0to1 1s ease-in-out 1 forwards 1s';
        }

    }, [scrollY])

    return (
        <>
            <div className="about-main">
                <div className="about-slider">
                    {(aboutCtg === 0) ?
                        <img src={companyImg} alt="" />
                    : 
                        <img src={valuesImg} alt="" />
                    }
                </div>
                <div className="content-title">
                    <h3>{infoArray[aboutCtg].title}</h3>
                    {(aboutCtg === 0) ? 
                        <svg width="27" height="48" viewBox="0 0 41 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.125 0C2.29557 0 0 2.01562 0 4.5V43.5C0 45.9844 2.29557 48 5.125 48H15.375V40.5C15.375 38.0156 17.6706 36 20.5 36C23.3294 36 25.625 38.0156 25.625 40.5V48H35.875C38.7044 48 41 45.9844 41 43.5V4.5C41 2.01562 38.7044 0 35.875 0H5.125ZM6.83333 22.5C6.83333 21.675 7.60208 21 8.54167 21H11.9583C12.8979 21 13.6667 21.675 13.6667 22.5V25.5C13.6667 26.325 12.8979 27 11.9583 27H8.54167C7.60208 27 6.83333 26.325 6.83333 25.5V22.5ZM18.7917 21H22.2083C23.1479 21 23.9167 21.675 23.9167 22.5V25.5C23.9167 26.325 23.1479 27 22.2083 27H18.7917C17.8521 27 17.0833 26.325 17.0833 25.5V22.5C17.0833 21.675 17.8521 21 18.7917 21ZM27.3333 22.5C27.3333 21.675 28.1021 21 29.0417 21H32.4583C33.3979 21 34.1667 21.675 34.1667 22.5V25.5C34.1667 26.325 33.3979 27 32.4583 27H29.0417C28.1021 27 27.3333 26.325 27.3333 25.5V22.5ZM8.54167 9H11.9583C12.8979 9 13.6667 9.675 13.6667 10.5V13.5C13.6667 14.325 12.8979 15 11.9583 15H8.54167C7.60208 15 6.83333 14.325 6.83333 13.5V10.5C6.83333 9.675 7.60208 9 8.54167 9ZM17.0833 10.5C17.0833 9.675 17.8521 9 18.7917 9H22.2083C23.1479 9 23.9167 9.675 23.9167 10.5V13.5C23.9167 14.325 23.1479 15 22.2083 15H18.7917C17.8521 15 17.0833 14.325 17.0833 13.5V10.5ZM29.0417 9H32.4583C33.3979 9 34.1667 9.675 34.1667 10.5V13.5C34.1667 14.325 33.3979 15 32.4583 15H29.0417C28.1021 15 27.3333 14.325 27.3333 13.5V10.5C27.3333 9.675 28.1021 9 29.0417 9Z" fill="#D1B000"/>
                        </svg>
                    : (aboutCtg === 1) ?
                        <svg width="27" height="48" viewBox="0 0 35 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3075 0L17.3663 7.9225L11.4254 0H0L17.3663 23.1557L34.7329 0H23.3075Z" fill="#D1B000"/>
                            <path d="M17.3663 23.1556C10.5039 23.1556 4.94296 28.7163 4.94296 35.5787C4.94296 42.439 10.5039 48 17.3663 48C24.2266 48 29.7894 42.439 29.7894 35.5787C29.7894 28.7163 24.2269 23.1556 17.3663 23.1556ZM21.8455 42.4768L17.3666 40.1206L12.8877 42.4768L13.7418 37.4838L10.1152 33.9507L15.1253 33.2207L17.3666 28.6811L19.6088 33.2207L24.6198 33.9507L20.9941 37.4838L21.8455 42.4768Z" fill="#D1B000"/>
                        </svg>
                    : (aboutCtg === 2) ?
                        <svg width="27" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.17047 6.11912C5.26324 6.5522 5.57065 6.96208 6.0377 7.3423C6.11644 8.53905 6.4492 9.52816 6.93998 10.3533C8.22356 8.51478 11.7124 7.19399 15.8269 7.19399C19.8427 7.19399 23.2625 8.45276 24.6167 10.2217C25.1388 9.11828 25.2413 8.05582 25.2423 7.41025C25.7256 7.0392 26.0524 6.63633 26.1737 6.21135C27.9314 5.70654 28.982 5.06961 28.982 4.37766C28.982 2.73651 22.3397 0.584623 15.8264 0C9.05357 0.650959 2.67126 2.73651 2.67126 4.37766C2.67126 5.02808 3.59943 5.62942 5.17047 6.11912ZM24.9403 6.11912L24.4339 7.1228C15.5168 2.6184 6.75823 7.07426 6.66978 7.11956L6.15042 6.12182C6.52794 5.92497 15.5125 1.35693 24.9403 6.11912Z" fill="#D1B000"/>
                            <path d="M19.7655 22.8704H11.8871C5.33333 22.8704 0 28.2038 0 34.7586V44.3958L0.0242694 44.5462L0.688711 44.7539C6.94374 46.7078 12.379 47.3609 16.8527 47.3609C25.5891 47.3609 30.6539 44.8687 30.9677 44.7107L31.588 44.3958H31.6532V34.7586C31.6538 28.2038 26.321 22.8704 19.7655 22.8704ZM18.1276 44.7895L15.9806 47.9321C15.9509 47.9758 15.9045 48 15.8544 48C15.8533 48 15.8517 48 15.8501 48C15.7994 48 15.7519 47.9731 15.7239 47.9294L13.73 44.7841C13.7127 44.7576 13.7047 44.7258 13.7057 44.6924L14.704 29.4296C14.7094 29.3493 14.7757 29.2873 14.8566 29.2873H16.9271C17.0075 29.2873 17.0738 29.3482 17.0808 29.4296L18.153 44.6908C18.1567 44.728 18.146 44.7603 18.1276 44.7895ZM17.1558 28.8267H14.6954L12.5559 24.4042C12.5559 23.9798 12.8989 23.6379 13.3234 23.6379H18.4609C18.8843 23.6379 19.2278 23.9798 19.2278 24.4042L17.1558 28.8267Z" fill="#D1B000"/>
                            <path d="M23.3461 10.8501C22.4314 9.65493 19.6706 8.36865 15.7724 8.36865C11.7572 8.36865 8.99803 9.70023 8.13458 10.9374L7.17836 12.3078L6.65576 11.4293C6.57648 11.9179 6.52417 12.4157 6.52417 12.9264C6.52417 15.4968 7.56667 17.8229 9.25151 19.5067C10.9326 21.1937 13.2587 22.2378 15.828 22.2378C18.7128 22.2378 21.2902 20.9219 22.9928 18.8568C24.3277 17.2464 25.1302 15.1803 25.1302 12.9259C25.1302 12.3111 25.0671 11.7119 24.9533 11.1305L24.4231 12.2534L23.3461 10.8501Z" fill="#D1B000"/>
                        </svg>
                    : null
                    }                   
                </div>
                <div className="content">
                    <div className="left-banner">
                        <p>
                            {infoArray[aboutCtg].p1}
                        </p>
                    </div>
                    <div className="right-banner">
                        <p>
                            {infoArray[aboutCtg].p2}
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-nav">
                <div className="about-nav__title">
                    <h2 className='h-section'>
                        <span>À </span>
                        propos
                    </h2>
                </div>
                <ul>
                    <li onClick={(() => setAboutCtg(0))}>La société</li>
                    <li onClick={(() => setAboutCtg(1))}>Nos valeurs</li>
                    <li onClick={(() => setAboutCtg(2))}>Nos collaborateurs</li>
                </ul>
            </div>
        </>
    );
};

export default About;