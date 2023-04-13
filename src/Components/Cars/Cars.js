import React, { useEffect, useState } from 'react';

import teslaImg from '../../Medias/Image/Main/teslamodel3.png';
import vanImg from '../../Medias/Image/Main/mercedes.png';

const carsArray = [
    {
        type: 'Berlines',
        title: 'Tesla model 3',
        features: [
            {
                class: 'available-seats',
                txt: "Jusqu'à 5 personnes"
            },
            {
                class: 'food',
                txt: "Collations"
            },
            {
                class: 'drinks',
                txt: "Rafraîchissements"
            },
            {
                class: 'video',
                txt: "Tablette Ipad"
            },
            {
                class: 'magazines',
                txt: "Magazines"
            }
        ]
    }
    ,
    {
        type: 'Vans',
        title: 'Mercedes class V',
        features: [
            {
                class: 'available-seats',
                txt: "Jusqu'à 6 personnes"
            },
            {
                class: 'food',
                txt: "Collations"
            },
            {
                class: 'drinks',
                txt: "Rafraîchissements"
            },
            {
                class: 'video',
                txt: "Tablette Ipad"
            },
            {
                class: 'magazines',
                txt: "Magazines"
            }
        ]
    }
]

const Cars = () => {

    const [carsCtg, setCarsCtg] = useState(0);
    const [carsSlide, setCarsSlide] = useState({from: undefined, to: 'sedan'});

    function displayCars(index) {
        const slider = document.querySelector('.img-ctn .cars-slider');
        const content = document.querySelector('.cars-ctr .content');
        // const banners = document.querySelectorAll('.left-banner, .right-banner');
        // const textP = document.querySelectorAll('.about-ctr .content p');
        // const list = document.querySelectorAll('.about-ctr .content ul');

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
                
            // banners.forEach((banner) => {
            //     banner.style.animationName = 'none';
            //     banner.style.animationPlayState = 'paused';
            // })
            // textP.forEach((p) => {
            //     p.style.animationName = 'none';
            //     p.style.animationPlayState = 'paused';
            // })
            // list.forEach((ul) => {
            //     ul.style.animationName = 'none';
            //     ul.style.animationPlayState = 'paused';
            // })
            
            // void content.offsetWidth;
            
            // banners.forEach((banner) => {
            //     banner.style.animationName = 'displayBanner2';
            //     banner.style.animationDuration = '2s';
            //     banner.style.animationPlayState = 'running';
            // })
            // textP.forEach((p) => {
            //     p.style.animation = '2s ease-in-out 1 normal forwards running opa0to1 1.75s';
            // })
            // list.forEach((ul) => {
            //     ul.style.animation = '2s ease-in-out 1 normal forwards running opa0to1 1.75s';
            // })

            switch(index) {
                case 'slide1to2':
                    slider.style.animationName = 'horizontal1to2';
                    slider.style.animationPlayState = 'running';
                    break;
                
                case 'slide2to1':
                    slider.style.animationName = 'horizontal2to1';
                    slider.style.animationPlayState = 'running';
                    break;

                default :
                    break;
            }
        // }      
    }

    useEffect(() => {
        const sedan = document.getElementById('sedan-nav');
        const van = document.getElementById('van-nav');

        if(carsSlide.to === 'sedan') {
            sedan.classList.add('nav-selected');
            van.classList.remove('nav-selected');
        }
        if(carsSlide.to === 'van') {
            sedan.classList.remove('nav-selected');
            van.classList.add('nav-selected');
        }

            
        if(carsSlide.to === 'van')
            document.getElementById('van-nav').classList.add('nav-selected');


        if(carsSlide.from === 'sedan' && carsSlide.to === 'van') {
            displayCars('slide1to2');
        }

        if(carsSlide.from === 'van' && carsSlide.to === 'sedan') {
            displayCars('slide2to1');     
        }
           
    }, [carsSlide])


    return (
        <>
            <div className="cars-main">
                <div className="img-ctn">
                    <div className="cars-slider">      
                        <img src={teslaImg} alt="berline tesla model 3" />
                        <img src={vanImg} alt="van mercedes class V" /> 
                    </div>
                </div>       
                <div className="content-title">
                    <div className='car-type'>
                        <h3>{carsArray[carsCtg].type}</h3>
                        {(carsCtg === 0) ?
                            <svg width="40" height="22" viewBox="0 0 84 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.68243 27.4495C3.36486 27.9618 5.55192 28.0909 5.55192 28.0909H6.12839C5.61894 26.9479 5.32728 25.6604 5.32728 24.2932C5.32728 19.6548 8.62894 15.8812 12.6886 15.8812C16.7474 15.8812 20.0493 19.6548 20.0493 24.2932C20.0493 25.6529 19.7587 26.9357 19.2556 28.0743L58.8539 27.741C58.4371 26.6862 58.1992 25.5223 58.1992 24.2932C58.1992 19.6548 61.5012 15.8812 65.56 15.8812C69.6189 15.8812 72.9205 19.6548 72.9205 24.2932C72.9205 25.252 72.7733 26.1696 72.5131 27.0306C76.1935 26.4193 81.3053 25.5058 82.5105 24.9665C84.4468 24.1026 83.9409 17.0831 83.9409 17.0831C83.9409 17.0831 82.3424 16.652 82.3424 14.8725C82.3424 13.0925 82.3424 10.0656 82.3424 10.0656C82.3424 10.0656 80.9123 10.0656 81.7101 9.15145C82.5082 8.23734 80.4049 8.33511 80.4049 8.33511C80.4049 8.33511 75.9897 9.82535 73.3386 7.80568C70.689 5.78601 60.7625 2.13278 60.7625 2.13278V0.957299C59.0379 0.55174 57.3976 1.26654 57.3976 1.26654C50.5417 0.544776 44.0651 1.26654 40.2375 1.60393C36.4091 1.94044 27.2408 8.2855 25.9368 9.19902C24.6323 10.1131 22.2638 10.4021 17.3295 10.4021C12.3938 10.4021 10.5434 12.1325 10.5434 12.1325C0.448783 14.7599 1.56998 17.58 0.841724 18.8614C0.111688 20.143 0 26.296 0 26.296C2.0741 26.4881 1.68243 27.4495 1.68243 27.4495Z" fill="#D1B000"/>
                                <path d="M12.6885 17.4197C9.36656 17.4197 6.6731 20.4976 6.6731 24.2933C6.6731 25.698 7.04573 27.002 7.67854 28.091C8.75634 29.9433 10.5951 31.1672 12.6883 31.1672C14.7822 31.1672 16.6222 29.9415 17.6988 28.0878C18.3303 27.0005 18.7032 25.698 18.7032 24.295C18.7019 20.4976 16.01 17.4197 12.6885 17.4197Z" fill="#D1B000"/>
                                <path d="M65.5584 17.4197C62.2367 17.4197 59.5422 20.4976 59.5422 24.2933C59.5422 25.5509 59.8605 26.7136 60.3756 27.7275C61.4178 29.7736 63.3356 31.166 65.5584 31.166C67.9387 31.166 69.9734 29.5737 70.9499 27.2845C71.3363 26.3756 71.5744 25.3704 71.5744 24.2921C71.5744 20.4976 68.8796 17.4197 65.5584 17.4197Z" fill="#D1B000"/>
                            </svg> 
                            :
                            <svg width="40" height="22" viewBox="0 0 78 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 25.4129V28.1934C0 29.3901 1.06053 30.3596 2.36843 30.3596H8.4924C8.6936 33.964 11.9524 36.8301 15.9427 36.8301C19.933 36.8301 23.1919 33.964 23.3928 30.3596H55.1509C55.3522 33.964 58.6108 36.8301 62.601 36.8301C66.5916 36.8301 69.8502 33.964 70.0511 30.3596H75.6316C76.9398 30.3596 78 29.3898 78 28.1934V25.4129C78 24.3293 77.1294 23.4345 75.9938 23.2743C75.4862 20.5793 74.4133 17.1516 72.173 15.9238C68.2726 13.7861 61.2779 12.0242 61.2779 12.0242C61.2779 12.0242 48.0621 0 37.7993 0H11.1147C0.53563 0 1.59343 10.3559 1.59343 10.3559V16.2312H5.34523C5.62838 16.2312 5.85803 16.4412 5.85803 16.7V18.95C5.85803 19.2089 5.62838 19.4188 5.34523 19.4188H1.5936V23.3675C0.666472 23.6614 0 24.4648 0 25.4129ZM59.8777 30.0058C59.8777 28.6322 61.0992 27.5146 62.601 27.5146C64.1026 27.5146 65.3244 28.6322 65.3244 30.0058C65.3244 31.3794 64.1026 32.4968 62.601 32.4968C61.0992 32.4969 59.8777 31.3796 59.8777 30.0058ZM28.1531 4.0079H35.5734C40.2266 4.0079 45.738 7.32606 49.5419 10.1095C50.1295 10.5393 50.3559 11.2618 50.1067 11.9113C49.8576 12.5603 49.1874 12.9943 48.4357 12.9943C48.4349 12.9943 48.4349 12.9943 48.4344 12.9943L28.1528 12.9796L28.1531 4.0079ZM13.2194 30.0058C13.2194 28.6322 14.4411 27.5146 15.9428 27.5146C17.4444 27.5146 18.6661 28.6322 18.6661 30.0058C18.6661 31.3794 17.4444 32.4968 15.9428 32.4968C14.4411 32.4969 13.2194 31.3796 13.2194 30.0058ZM10.4324 5.83762C11.651 4.62332 13.3972 4.00775 15.6226 4.00775H23.4158V12.976L10.2535 12.9665C9.29142 12.9659 8.50552 12.262 8.48456 11.3816C8.45969 10.3235 8.59888 7.66376 10.4324 5.83762Z" fill="#D1B000"/>
                            </svg>
                        }
                    </div>
                    <div className='cars-question'>
                        <h4>Vous cherchez un moyen de transport confortable et élégant pour vos déplacements?</h4>                             
                    </div>
                </div>
                <div className="cars-static-message">
                    <p>Notre <strong>service de chauffeur privé VTC</strong> vous offre une sélection de véhicules haut-de-gamme pour répondre à tous vos besoins. Nous proposons des modèles tels que la <span className="colored">Tesla Model 3</span>, la <span className="colored">Mercedes Classe V</span> et la <span className="colored">Berline Classe E</span>, tous équipés pour votre confort et votre sécurité. Nos chauffeurs professionnels et expérimentés vous conduiront à votre destination en toute sérénité, pour une expérience de voyage inoubliable.</p>
                </div>
                <div className="content">
                   <div className="car-name-banner">
                        <h4>{carsArray[carsCtg].title}</h4>
                   </div>
                   <div className="car-info-banner">
                        <ul>
                            {carsArray[carsCtg].features.map((li) => {
                                return(
                                    <li key={li.txt}>
                                        <span className={li.class}></span>
                                        {li.txt}
                                    </li>
                                )
                            })}
                        </ul>
                   </div>
                </div>
            </div>
            <div className="cars-nav">
                <div className="cars-nav__title">
                    <h2 className='h-section'>
                        <span>V</span>
                        éhicules
                    </h2>
                </div>
                <ul>
                    <li id='sedan-nav'  onClick={(() => {setCarsCtg(0); setCarsSlide({from: carsSlide.to, to: 'sedan'})})}>Berlines</li>
                    <li id='van-nav' onClick={(() => {setCarsCtg(1); setCarsSlide({from: carsSlide.to, to: 'van'})})}>Vans</li>
                </ul>
            </div>
        </>
    );
};

export default Cars;