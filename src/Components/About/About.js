import React, { useEffect, useRef, useState } from 'react';

import companyImg from '../../Medias/Image/Main/office.jpg';
import valuesImg from '../../Medias/Image/Main/values.jpg';
import driverImg from '../../Medias/Image/Main/kamel.jpg';

const aboutArray = [
    {
        title : 'La société',
        p1 : <p dangerouslySetInnerHTML={{__html: 'La société <span class=colored>Bk-Elite</span> est un prestataire de <strong>service de transport privé</strong>, basée en région <strong>Provence-Alpes-Côte d\'Azur</strong>.'}} />,
        p2 : 'Nous proposons nos services hauts-de-gamme à une clientèle exigeante, soucieuse du confort et de l\'excellence.',
        p3 : <p dangerouslySetInnerHTML={{__html: 'Société spécialisée dans le transport de personnes, nous vous proposons de nombreuses prestations, du <strong>service de taxi</strong> classique à la <strong>location de chauffeurs</strong> pour vos événements exceptionnels.'}} />
    },
    {
        title : 'Nos valeurs',
        p1 : <p dangerouslySetInnerHTML={{__html: 'Chez <span class=colored>Bk-Elite</span>, nous attachons une grande importance à nos valeurs.'}} />,
        p2 : 'Nous croyons que ces valeurs sont non seulement essentielles pour assurer la satisfaction de nos clients, mais aussi pour garantir l\'excellence de notre service.',
        p3 : null,
        values : [
            {title :'Élégance',
            description :  'L\'élégance de nos chauffeurs est un facteur clé pour garantir une expérience de transport haut de gamme et inoubliable pour nos clients, car nous croyons que chaque détail compte pour offrir le meilleur service possible.'},
            {title :'Fiabilité',
            description :  'Respectueux des règles de circulation et professionnels, nos chauffeurs sauront vous garantir une expérience de voyage agréable et sereine.'},
            {title :'Ponctualité',
            description :  'la ponctualité est essentielle pour répondre aux attentes de nos clients. Nous comprenons que chaque minute compte pour nos clients occupés, et c\'est pourquoi nous nous engageons à arriver à l\'heure convenue.'},
            {title :'Discrétion',
            description :  'Nos chauffeurs sont formés pour respecter la vie privée de nos clients et garantir leur confort et leur sécurité tout au long de leur voyage.'},
            {title :'Courtoisie',
            description :  'Nous croyons que chaque client mérite un service personnalisé et professionnel, et nos chauffeurs sont formés pour fournir un service courtois, amical et respectueux pour garantir une expérience de transport de haute qualité.'},
            ]
    },
    {
        title : 'Votre chauffeur',
        p1 : <p dangerouslySetInnerHTML={{__html: '<span class=colored>Bk-elite</span> est fier de compter parmi son équipe des <b>professionnels hautement qualifiés</b> et expérimentés dans leur domaine.'}} />,
        p2 : 'Nos chauffeurs sont sélectionnés avec soin pour leur connaissance approfondie de la conduite, leur parfaite connaissance des routes et leur capacité à fournir un service exceptionnel.',
        p3 : <p dangerouslySetInnerHTML={{__html: 'Être accompagné par l\'un de nos chauffeurs, c\'est avoir la garantie d\'un <b>service haut-de-gamme</b>, d\'un transport en toute sécurité, ainsi que d\'une expérience de voyage confortable et personnalisée. Nos chauffeurs sont des <b>professionnels de confiance</b>, formés pour répondre à vos besoins et rendre votre voyage mémorable.'}} />
    }
]

const About = ({scrollY}) => {

    const [aboutCtg, setAboutCtg] = useState(0);
    const [aboutSlide, setAboutSlide] = useState({from: undefined, to: 'company'});
    const [value, setValue] = useState( {title: aboutArray[1].values[2].title, 
                                        description: aboutArray[1].values[2].description,
                                        increment: 1} );

    function displayAbout(index) {
        const slider = document.querySelector('.img-ctn .about-slider');
        const content = document.querySelector('.about-ctr .about-content');
        const banners = document.querySelectorAll('.left-banner, .right-banner');
        const textP = document.querySelectorAll('.about-ctr .about-content p');
        const list = document.querySelectorAll('.about-ctr .about-content ul');

        if(index === 'noSlide') {
            banners.forEach((banner) => {
                banner.style.animation = 'displayBanner 1s ease-out 1 forwards';
            })
            textP.forEach((p) => {
                p.style.animation = 'opa0to1 1s ease-in-out 1 forwards 1s';
            })

            return;
        }

        else {
            setValue({title: aboutArray[1].values[2].title, 
                description: aboutArray[1].values[2].description,
                increment: 1})
                
            banners.forEach((banner) => {
                banner.style.animationName = 'none';
                banner.style.animationPlayState = 'paused';
            })
            textP.forEach((p) => {
                p.style.animationName = 'none';
                p.style.animationPlayState = 'paused';
            })
            list.forEach((ul) => {
                ul.style.animationName = 'none';
                ul.style.animationPlayState = 'paused';
            })
            
            void content.offsetWidth;
            
            banners.forEach((banner) => {
                banner.style.animationName = 'displayBanner2';
                banner.style.animationDuration = '2s';
                banner.style.animationPlayState = 'running';
            })
            textP.forEach((p) => {
                p.style.animation = '2s ease-in-out 1 normal forwards running opa0to1 1.75s';
            })
            list.forEach((ul) => {
                ul.style.animation = '2s ease-in-out 1 normal forwards running opa0to1 1.75s';
            })

            switch(index) {
                case 'slide1to2':
                    slider.style.animationName = 'horizontal1to2';
                    slider.style.animationPlayState = 'running';
                    break;
                
                case 'slide2to1':
                    slider.style.animationName = 'horizontal2to1';
                    slider.style.animationPlayState = 'running';
                    break;

                case 'slide2to3':
                    slider.style.animationName = 'horizontal2to3';
                    slider.style.animationPlayState = 'running';
                    break;

                case 'slide3to2':
                    slider.style.animationName = 'horizontal3to2';
                    slider.style.animationPlayState = 'running';
                    break;
                
                case 'slide1to3':
                    slider.style.animationName = 'horizontal1to3';
                    slider.style.animationPlayState = 'running';
                    break;

                case 'slide3to1':
                    slider.style.animationName = 'horizontal3to1';
                    slider.style.animationPlayState = 'running';
                    break;
                default :
                    break;
            }
        }      
    }

    useEffect(() => {
        const valueP = document.querySelector('.value-type');

        if(value.increment > 1) {
            valueP.style.animationName = 'none';
            valueP.style.animationPlayState = 'pause';

            void valueP.offsetWidth;

            valueP.style.animation = 'leftAppears 1s ease-out 1 forwards';
        }
    }, [value])

    useEffect(() => {
        const company = document.getElementById('company-nav');
        const values = document.getElementById('values-nav');
        const driver = document.getElementById('driver-nav');

        if(aboutSlide.to === 'company') {
            company.classList.add('nav-selected');
            values.classList.remove('nav-selected');
            driver.classList.remove('nav-selected');
        }
        if(aboutSlide.to === 'values') {
            company.classList.remove('nav-selected');
            values.classList.add('nav-selected');
            driver.classList.remove('nav-selected');
        }
        if(aboutSlide.to === 'driver') {
            company.classList.remove('nav-selected');
            values.classList.remove('nav-selected');
            driver.classList.add('nav-selected');
        }
            
        if(aboutSlide.to === 'values')
            document.getElementById('values-nav').classList.add('nav-selected');


        if(aboutSlide.from === 'company' && aboutSlide.to === 'values') {
            displayAbout('slide1to2');
        }
            
        if(aboutSlide.from === 'values' && aboutSlide.to === 'driver') {
            displayAbout('slide2to3');           
        }

        if(aboutSlide.from === 'driver' && aboutSlide.to === 'values') {
            displayAbout('slide3to2');          
        }

        if(aboutSlide.from === 'values' && aboutSlide.to === 'company') {
            displayAbout('slide2to1');     
        }

        if(aboutSlide.from === 'company' && aboutSlide.to === 'driver') {
            displayAbout('slide1to3');     
        }

        if(aboutSlide.from === 'driver' && aboutSlide.to === 'company') {
            displayAbout('slide3to1');     
        }
           
    }, [aboutSlide])


    useEffect(() => {
    
        if(-scrollY <= -0.7 && aboutSlide.from === undefined) {
            displayAbout('noSlide');
        }

    }, [scrollY])

    return (
        <>
            <div className="about-main">
                <div className="img-ctn">
                    <div className="about-slider">      
                        <img src={companyImg} alt="bureaux de la société" />
                        <img src={valuesImg} alt="route de nuit et voitures qui défilent" /> 
                        <img src={driverImg} alt="chauffeur en costume devant la ville de Gordes" />        
                    </div>
                </div>       
                <div className="content-title">
                    <h3>{aboutArray[aboutCtg].title}</h3>
                    {(aboutCtg === 0) ? 
                        <svg width="22" height="40" viewBox="0 0 41 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.125 0C2.29557 0 0 2.01562 0 4.5V43.5C0 45.9844 2.29557 48 5.125 48H15.375V40.5C15.375 38.0156 17.6706 36 20.5 36C23.3294 36 25.625 38.0156 25.625 40.5V48H35.875C38.7044 48 41 45.9844 41 43.5V4.5C41 2.01562 38.7044 0 35.875 0H5.125ZM6.83333 22.5C6.83333 21.675 7.60208 21 8.54167 21H11.9583C12.8979 21 13.6667 21.675 13.6667 22.5V25.5C13.6667 26.325 12.8979 27 11.9583 27H8.54167C7.60208 27 6.83333 26.325 6.83333 25.5V22.5ZM18.7917 21H22.2083C23.1479 21 23.9167 21.675 23.9167 22.5V25.5C23.9167 26.325 23.1479 27 22.2083 27H18.7917C17.8521 27 17.0833 26.325 17.0833 25.5V22.5C17.0833 21.675 17.8521 21 18.7917 21ZM27.3333 22.5C27.3333 21.675 28.1021 21 29.0417 21H32.4583C33.3979 21 34.1667 21.675 34.1667 22.5V25.5C34.1667 26.325 33.3979 27 32.4583 27H29.0417C28.1021 27 27.3333 26.325 27.3333 25.5V22.5ZM8.54167 9H11.9583C12.8979 9 13.6667 9.675 13.6667 10.5V13.5C13.6667 14.325 12.8979 15 11.9583 15H8.54167C7.60208 15 6.83333 14.325 6.83333 13.5V10.5C6.83333 9.675 7.60208 9 8.54167 9ZM17.0833 10.5C17.0833 9.675 17.8521 9 18.7917 9H22.2083C23.1479 9 23.9167 9.675 23.9167 10.5V13.5C23.9167 14.325 23.1479 15 22.2083 15H18.7917C17.8521 15 17.0833 14.325 17.0833 13.5V10.5ZM29.0417 9H32.4583C33.3979 9 34.1667 9.675 34.1667 10.5V13.5C34.1667 14.325 33.3979 15 32.4583 15H29.0417C28.1021 15 27.3333 14.325 27.3333 13.5V10.5C27.3333 9.675 28.1021 9 29.0417 9Z" fill="#D1B000"/>
                        </svg>
                    : (aboutCtg === 1) ?
                        <svg width="22" height="40" viewBox="0 0 35 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3075 0L17.3663 7.9225L11.4254 0H0L17.3663 23.1557L34.7329 0H23.3075Z" fill="#D1B000"/>
                            <path d="M17.3663 23.1556C10.5039 23.1556 4.94296 28.7163 4.94296 35.5787C4.94296 42.439 10.5039 48 17.3663 48C24.2266 48 29.7894 42.439 29.7894 35.5787C29.7894 28.7163 24.2269 23.1556 17.3663 23.1556ZM21.8455 42.4768L17.3666 40.1206L12.8877 42.4768L13.7418 37.4838L10.1152 33.9507L15.1253 33.2207L17.3666 28.6811L19.6088 33.2207L24.6198 33.9507L20.9941 37.4838L21.8455 42.4768Z" fill="#D1B000"/>
                        </svg>
                    : (aboutCtg === 2) ?
                        <svg width="22" height="40" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.52377 5.35436C2.60494 5.73331 2.87393 6.09196 3.28261 6.42466C3.35151 7.47184 3.64268 8.33734 4.07213 9.05937C5.19529 7.45061 8.24811 6.29489 11.8484 6.29489C15.3622 6.29489 18.3547 7.39634 19.5396 8.94422C19.9965 7.97868 20.0861 7.04901 20.0871 6.48412C20.5099 6.15945 20.7959 5.80693 20.9021 5.43506C22.44 4.99334 23.3593 4.43601 23.3593 3.83054C23.3593 2.3945 17.5472 0.511557 11.8479 0C5.92157 0.569603 0.336914 2.3945 0.336914 3.83054C0.336914 4.39967 1.14908 4.92586 2.52377 5.35436ZM19.8228 5.35436L19.3797 6.23259C11.577 2.29115 3.91309 6.19012 3.8357 6.22976L3.38124 5.35672C3.71158 5.18447 11.5732 1.18734 19.8228 5.35436Z" fill="#D1B000"/>
                            <path d="M15.2952 20.0107H8.40149C2.66677 20.0107 0 24.2643 0 30L0.000240207 38.5L9.71556e-05 39L0.000143051 39.1903C5.47342 40.9001 8.83188 41.4404 12.7464 41.4404C20.391 41.4404 23.7254 39.3286 24.0001 39.1903V38.5V30C24.0006 24.2643 21.0314 20.0107 15.2952 20.0107ZM13.862 39.1903L12 41L10.014 39.1856C9.99893 39.1625 9.99185 39.1347 9.9928 39.1054L10.8663 25.7502C10.871 25.6799 10.9291 25.6256 10.9999 25.6256H12.8115C12.8819 25.6256 12.9399 25.6789 12.946 25.7502L13.8842 39.104C13.8875 39.1365 13.8781 39.1649 13.862 39.1903ZM13.0116 25.2226H10.8588L8.98667 21.3529C8.98667 20.9815 9.28681 20.6823 9.65821 20.6823H14.1537C14.5241 20.6823 14.8247 20.9815 14.8247 21.3529L13.0116 25.2226Z" fill="#D1B000"/>
                            <path d="M18.4304 9.49453C17.6301 8.44876 15.2143 7.32324 11.8033 7.32324C8.2899 7.32324 5.87558 8.4884 5.12004 9.57098L4.28333 10.7701L3.99947 10C3.9301 10.4276 3.99989 11.0531 3.99989 11.5C3.99989 13.7492 4.62311 15.5959 6.09738 17.0692C7.56834 18.5454 9.60371 19.459 11.8519 19.459C14.3762 19.459 16.6315 18.3076 18.1213 16.5006C19.2893 15.0914 19.5 13.4726 19.5 11.5C19.5 10.962 19.5996 10.0087 19.5 9.5L19.3728 10.7225L18.4304 9.49453Z" fill="#D1B000"/>
                        </svg>
                    
                    : null
                    }                   
                </div>
                <div className="about-content">
                    <div className="banner left-banner">
                        {aboutArray[aboutCtg].p1}
                        <p>
                            {aboutArray[aboutCtg].p2}
                        </p>
                    </div>
                    <div className="banner right-banner">
                        {(aboutCtg === 0 || aboutCtg === 2) ?
                            <>
                                {aboutArray[aboutCtg].p3}
                            </>
                            :
                            <>
                                <ul>
                                    {aboutArray[1].values.map
                                        ((elt) => 
                                            <li key={elt.title} onClick={() => 
                                                setValue(
                                                    { title: elt.title, description: elt.description, increment: value.increment + 1 }
                                                )}
                                                className={(elt.title === value.title) ? 'selected' : null}
                                            >{elt.title}</li>
                                        )}
                                </ul>
                                <p className='value-type'>
                                    <b>{value.title} : </b>
                                    {value.description}
                                </p>
                            </>
                        }
                        
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
                    <li id='company-nav' onClick={(() => {setAboutCtg(0); setAboutSlide({from: aboutSlide.to, to: 'company'})})}>La société</li>
                    <li id='values-nav' onClick={(() => {setAboutCtg(1); setAboutSlide({from: aboutSlide.to, to: 'values'})})}>Nos valeurs</li>
                    <li id='driver-nav' onClick={(() => {setAboutCtg(2); setAboutSlide({from: aboutSlide.to, to: 'driver'})})}>Votre chauffeur</li>
                </ul>
            </div>
        </>
    );
};

export default About;