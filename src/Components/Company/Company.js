import React, { useEffect, useRef, useState } from 'react';

import city from '../../Medias/Video/night_city_short.mp4';
import bridge from '../../Medias/Image/Main/bridge.jpg';
import car from '../../Medias/Image/Main/car_above_darked.jpg';

const companyTxt = {
    fr: {
        title1: 'Votre service de transport privé',
        title2: 'Un transport en toute sécurité',
        title3: 'Des véhicules haut de gamme',
        txt1: <p dangerouslySetInnerHTML={{__html: '<strong>Votre chauffeur expérimenté</strong> à votre disposition pour vos déplacements en Provence, <span> 24h/24 et 7j/7.</span>'}} />,
        txt2: <p dangerouslySetInnerHTML={{__html: 'Voyagez avec nos chauffeurs expérimentés, ponctuels, dans le <span>plus grand confort et la plus grande sérénité</span>.'}} />,
        txt3: <p dangerouslySetInnerHTML={{__html: 'Voyagez à bord de nos véhicules spacieux et bien entretenus, afin de passer un <span>trajet sans histoire.</span>'}} />,
        booking: 'Réserver une course'
    },

    en: {
        title1: 'Your private transportation service',
        title2: 'Safety first',
        title3: 'Luxury cars',
        txt1: <p dangerouslySetInnerHTML={{__html: '<strong>Your experienced driver</strong> at your service for your travels in Provence, <span> 24 hours a day/7 days a week.</span>'}} />,
        txt2: <p dangerouslySetInnerHTML={{__html: 'Travel in peace and comfort with our <span>experienced, reliable chauffeurs.</span>'}} />,
        txt3: <p dangerouslySetInnerHTML={{__html: 'Enjoy a safe journey in one of our <span>spacious, perfectly maintained and reliable cars.</span>'}} />,
        booking: 'Book a ride'
    }
}

const Company = ({lang, scrollY, setIsLoaded, isEntered, navigate}) => {

    const [handleSlide, setHandleSlide] = useState({from: undefined, to: 1});
    const [slideActive, setSlideActive] = useState(false);
    const [slideIndex, setSlideIndex] = useState(1);
    const [companyStatus, setCompanyStatus] = useState(true);
    const [visibilityState, setVisibilityState] = useState(document.visibilityState);
    const [slideManual, setSlideManual] = useState(false);

    const sliderRef = useRef(null);
    const square1Ref = useRef(null);
    const square2Ref = useRef(null);
    const square3Ref = useRef(null);
    const videoRef = useRef(null);
    const intervalRef = useRef();
    const timeoutRef = useRef();

    function handleLoading() {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1800)
    }

    function resetSlide(slide1 , slide2) {
        console.log('slide coupé');
        clearTimeout(timeoutRef.current);
        clearInterval(intervalRef.current);
        setSlideManual(true);
        setSlideActive(false);
        setSlideIndex(slide1);
      
        timeoutRef.current = setTimeout(() => {
            console.log('slide réactivé');
            setSlideManual(false);
            setSlideActive(true);
            setSlideIndex(slide2);
            setHandleSlide({from: slide1, to: slide2});
        }, 9000)
    }
   
    useEffect(() => {
        const slider = sliderRef.current;
        const video = videoRef.current;
        const square1 = square1Ref.current;
        const square2 = square2Ref.current;
        const square3 = square3Ref.current;

        if(isEntered === false) {
            video.pause();
            video.currentTime = 0;
            return;
        }

        if(companyStatus === false) {
            console.log('reset');
            // clearTimeout(timeoutRef.current);
            video.pause();
            video.currentTime = 0;
            return;
        }
        else {
            if (handleSlide.to === 1) {
                video.play();
            }
        }

        // Slide 1 depuis slide 2
        function slide1from2() {
            video.currentTime = 0;
            video.play();
            slider.style.animation = 'slide1from2 1.5s ease-out 1 forwards';
            video.currentTime = 0;
            square1.classList.add('square-active');
            square2.classList.remove('square-active');
            square3.classList.remove('square-active');
        }

        // Slide 1 depuis slide 3
        function slide1from3() {
            video.currentTime = 0;
            video.play();
            slider.style.animation = 'slide1from3 1.5s ease-out 1 forwards';
            video.currentTime = 0;
            square1.classList.add('square-active');
            square2.classList.remove('square-active');
            square3.classList.remove('square-active');
        }

        // Slide 2 depuis slide 1
        function slide2from1() {
            video.pause();
            slider.style.animation = 'slide2from1 1.5s ease-out 1 forwards';
            square1.classList.remove('square-active');
            square2.classList.add('square-active');
            square3.classList.remove('square-active');
        }

        // Slide 2 depuis slide 3
        function slide2from3() {
            video.pause();
            slider.style.animation = 'slide2from3 1.5s ease-out 1 forwards';
            square1.classList.remove('square-active');
            square2.classList.add('square-active');
            square3.classList.remove('square-active');
        }
  
        // Slide 3 depuis slide 1
        function slide3from1() {
            video.pause();
            slider.style.animation = 'slide3from1 1.5s ease-out 1 forwards';
            square1.classList.remove('square-active');
            square2.classList.remove('square-active');
            square3.classList.add('square-active');
        }

        // Slide 3 depuis slide 2
        function slide3from2() {
            video.pause();
            slider.style.animation = 'slide3from2 1.5s ease-out 1 forwards';
            square1.classList.remove('square-active');
            square2.classList.remove('square-active');
            square3.classList.add('square-active');
        }

        if(handleSlide.from === 1 && handleSlide.to === 2)
           slide2from1();

        if(handleSlide.from === 2 && handleSlide.to === 1)
            slide1from2();
        
        if(handleSlide.from === 2 && handleSlide.to === 3)
           slide3from2();

        if(handleSlide.from === 3 && handleSlide.to === 2)
           slide2from3();

        if(handleSlide.from === 3 && handleSlide.to === 1)
           slide1from3();
           
        if(handleSlide.from === 1 && handleSlide.to === 3)
           slide3from1();

    }, [isEntered, companyStatus, handleSlide]);

    useEffect(() => {
        const h2Ctn = document.querySelectorAll('.card-title h2');

        function typeWriter(el) {
            const textArray = el.innerHTML.split('');
            el.innerHTML = '';
            textArray.forEach((letter, i) =>
                setTimeout(() => (el.innerHTML += letter), 60 * i)
            );
        }

        if(isEntered && handleSlide.from === undefined && handleSlide.to === 1) {
            setTimeout(() => {
                typeWriter(h2Ctn[0]);
                h2Ctn[0].style.visibility = 'visible';
                h2Ctn[1].style.visibility = 'hidden';
                h2Ctn[2].style.visibility = 'hidden';
            }, 1500)
        }

        if(isEntered && handleSlide.from !== undefined && handleSlide.to === 1) {

            setTimeout(() => {
                typeWriter(h2Ctn[0]);
                h2Ctn[0].style.visibility = 'visible';
                h2Ctn[1].style.visibility = 'hidden';
                h2Ctn[2].style.visibility = 'hidden';
            }, 1500) 
        }

        if(isEntered && handleSlide.to === 2) {

            setTimeout(() => {
                typeWriter(h2Ctn[1]);
                h2Ctn[0].style.visibility = 'hidden';
                h2Ctn[1].style.visibility = 'visible';
                h2Ctn[2].style.visibility = 'hidden';
            }, 1500)        
        }

        if(isEntered && handleSlide.to === 3) {

            setTimeout(() => {
                typeWriter(h2Ctn[2]);
                h2Ctn[0].style.visibility = 'hidden';
                h2Ctn[1].style.visibility = 'hidden';
                h2Ctn[2].style.visibility = 'visible';
            }, 1500)        
        }
        
        
    }, [isEntered, handleSlide]);

    useEffect(() => {

        if(isEntered) {
            setSlideActive(true);
        }

        if(isEntered && slideIndex === 1 && handleSlide.from !== undefined && slideManual === false) {
            setHandleSlide({from: 3, to: 1});
        }
        if(isEntered && slideIndex === 2 && slideManual === false) {
            setHandleSlide({from: 1, to: 2});
        }
        if(isEntered && slideIndex === 3 && slideManual === false) {
            setHandleSlide({from: 2, to: 3});
        }

    // eslint-disable-next-line
    }, [isEntered, slideIndex])

    useEffect(() => {
        // console.log('slide index', slideIndex);

        if(slideActive && companyStatus && slideManual === false) {
            intervalRef.current = setInterval(function() { 

                if (slideIndex < 3) { 
                    setSlideIndex((slideIndex) => slideIndex + 1);
                }
                else { 
                    setSlideIndex(1);
                }
            }, 7000);
        }
        else {
            clearInterval(intervalRef.current);
        }
       
        return () => clearInterval(intervalRef.current);
    }, [slideActive, companyStatus, slideIndex, slideManual]);

    useEffect(() => {
        // console.log(-scrollY);

        if(-scrollY <= -0.9 || visibilityState === 'hidden') {
            setCompanyStatus(false);
            setSlideActive(false); 
        }
        else if(isEntered) {
            setCompanyStatus(true);
            setSlideActive(true); 
        }
    
    }, [scrollY, isEntered, visibilityState]);

    function handleVisibilityChange() {
        setVisibilityState(document.visibilityState)
    }

    useEffect(() => {
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    })


    return (
        <>
       <div id="company-slider" ref={sliderRef}>
            {/* Slide 1 */}
            <div className="company-ctn">
                <div className='company-background'>
                    <video 
                        width="100%" 
                        height="100%" 
                        autoPlay 
                        muted 
                        playsInline
                        loop 
                        onLoadedData={() => {
                            handleLoading();
                        }}
                        ref={videoRef}
                        >
                        <source src={city} type="video/mp4"/>
                    </video>
                </div>
                <div className="company-foreground">
                    <div className="company-card">
                        <div className="card-title">
                            <h2>{companyTxt[lang].title1}</h2>
                        </div>
                        <div className="card-info">
                            {companyTxt[lang].txt1}
                        </div>
                        <div className="book-redirection">
                            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.1513 13.1256H5.36427C4.9066 13.1256 4.53567 12.734 4.53567 12.2508C4.53567 11.7676 4.9066 11.3759 5.36427 11.3759H11.1513C11.609 11.3759 11.9799 11.7676 11.9799 12.2508C11.9799 12.734 11.609 13.1256 11.1513 13.1256ZM8.68364 16.6821H11.9747C12.4323 16.6821 12.8033 16.2905 12.8033 15.8073C12.8033 15.3241 12.4323 14.9325 11.9747 14.9325H8.68364C8.22598 14.9325 7.85504 15.3241 7.85504 15.8073C7.85504 16.2905 8.22607 16.6821 8.68364 16.6821ZM4.47638 15.8073C4.47638 15.3241 4.10544 14.9325 3.64778 14.9325H1.67156C1.2139 14.9325 0.842963 15.3241 0.842963 15.8073C0.842963 16.2905 1.2139 16.6821 1.67156 16.6821H3.64778C4.10544 16.6821 4.47638 16.2904 4.47638 15.8073ZM15.3652 8.6944C15.3652 8.21121 14.9943 7.81958 14.5366 7.81958H0.828601C0.370937 7.81958 0 8.21121 0 8.6944C0 9.1776 0.370937 9.56923 0.828601 9.56923H14.5366C14.9942 9.56923 15.3652 9.1775 15.3652 8.6944ZM39.9946 19.5225L39.9912 20.3274C39.9889 20.8428 39.9862 21.4292 39.9862 22.144C39.9862 23.5588 38.9583 24.7752 37.5406 25.1628C37.1941 27.89 34.9758 30 32.2993 30C29.3835 30 27.0112 27.4954 27.0112 24.4168C27.0112 21.3383 29.3835 18.8336 32.2993 18.8336C34.8631 18.8336 37.0066 20.7699 37.487 23.3299C37.9885 23.0786 38.329 22.6317 38.329 22.144C38.329 21.4259 38.3316 20.8369 38.334 20.3192L38.3374 19.5144C38.3419 18.4757 38.3481 17.0532 38.3338 16.3854C38.3293 16.1732 38.3237 15.9766 38.3157 15.7933H17.8649C15.6152 15.7933 14.7876 13.6754 14.5156 12.9794C14.3411 12.5327 14.5425 12.0213 14.9655 11.8371C15.3892 11.653 15.8731 11.8655 16.0475 12.3121C16.5218 13.5259 17.0654 14.0437 17.8649 14.0437H38.0217C37.6744 13.1777 36.929 12.4805 35.2912 10.9484C34.9616 10.6402 34.5997 10.3017 34.2023 9.92509C33.9162 9.65409 33.6288 9.36413 33.3508 9.0838C32.9387 8.66816 32.5126 8.23833 32.0643 7.84184C31.6768 7.4991 31.3099 7.17299 30.961 6.86281C26.5426 2.93494 25.2091 1.74955 21.3195 1.74955H6.06416C5.11302 1.74955 4.30937 2.38973 4.30937 3.14752V5.23602C4.30937 5.71922 3.93843 6.11085 3.48077 6.11085C3.0231 6.11085 2.65217 5.71922 2.65217 5.23602V3.14762C2.65217 1.41207 4.18278 0 6.06416 0H21.3194C25.8137 0 27.5059 1.50431 32.0283 5.52443C32.3761 5.83373 32.7419 6.15887 33.1283 6.50054C33.6181 6.93377 34.0641 7.38362 34.4955 7.8187C34.7766 8.10225 35.042 8.36994 35.3089 8.62267C35.7036 8.99661 36.0628 9.33274 36.39 9.63873C39.2401 12.3048 39.9174 12.9382 39.9906 16.3457C40.0054 17.0374 39.9995 18.4154 39.9946 19.5225ZM35.9304 24.4288C35.9302 24.4172 35.9302 24.4056 35.9303 24.3941C35.9186 22.2907 34.2943 20.5834 32.2994 20.5834C30.2973 20.5834 28.6685 22.3031 28.6685 24.4169C28.6685 26.5307 30.2972 28.2504 32.2994 28.2504C34.2977 28.2504 35.9242 26.5371 35.9304 24.4288ZM10.3545 23.5419H10.3516C9.89395 23.5419 9.52449 23.9336 9.52449 24.4168C9.52449 24.9 9.8969 25.2916 10.3546 25.2916C10.8122 25.2916 11.1832 24.9 11.1832 24.4168C11.1832 23.9336 10.8121 23.5419 10.3545 23.5419ZM32.3008 23.5419H32.2976C31.8399 23.5419 31.4706 23.9336 31.4706 24.4168C31.4706 24.9 31.8432 25.2916 32.3009 25.2916C32.7585 25.2916 33.1295 24.9 33.1295 24.4168C33.1295 23.9336 32.7585 23.5419 32.3008 23.5419ZM25.2706 24.4168C25.2706 24.9 24.8996 25.2916 24.442 25.2916H15.5764C15.1775 27.956 12.987 30 10.353 30C7.67827 30 5.46103 27.8927 5.11256 25.168C4.14834 24.9119 3.34718 24.2736 2.93472 23.3992C2.74727 23.0018 2.65226 22.5795 2.65226 22.144V19.5521C2.65226 19.0689 3.0232 18.6772 3.48086 18.6772C3.93852 18.6772 4.30946 19.0689 4.30946 19.5521V22.144C4.30946 22.3063 4.34601 22.4661 4.41819 22.6191C4.56264 22.9253 4.82973 23.1765 5.16393 23.339C5.64093 20.7745 7.78636 18.8336 10.3531 18.8336C12.9871 18.8336 15.1776 20.8776 15.5765 23.5419H24.4421C24.8996 23.5419 25.2706 23.9337 25.2706 24.4168ZM13.9841 24.4168C13.9841 22.303 12.3553 20.5833 10.3531 20.5833C8.35432 20.5833 6.72759 22.2972 6.72216 24.4062C6.72216 24.4102 6.72216 24.414 6.72216 24.4179C6.72281 26.5313 8.35128 28.2504 10.3531 28.2504C12.3552 28.2504 13.9841 26.5306 13.9841 24.4168Z" fill="white"/>
                            </svg>
                            <p onClick={() => navigate('booking')}>{companyTxt[lang].booking}</p>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* Slide 2 */}
            <div className="company-ctn">
                <div className='company-background'>
                    <img src={bridge} alt="voitures roulant sur un pont la nuit" />
                </div>
                <div className="company-foreground">
                    <div className="company-card">
                        <div className="card-title">
                            <h2>{companyTxt[lang].title2}</h2>
                        </div>
                        <div className="card-info">
                            {companyTxt[lang].txt2}
                        </div>
                        <div className="book-redirection">
                            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.1513 13.1256H5.36427C4.9066 13.1256 4.53567 12.734 4.53567 12.2508C4.53567 11.7676 4.9066 11.3759 5.36427 11.3759H11.1513C11.609 11.3759 11.9799 11.7676 11.9799 12.2508C11.9799 12.734 11.609 13.1256 11.1513 13.1256ZM8.68364 16.6821H11.9747C12.4323 16.6821 12.8033 16.2905 12.8033 15.8073C12.8033 15.3241 12.4323 14.9325 11.9747 14.9325H8.68364C8.22598 14.9325 7.85504 15.3241 7.85504 15.8073C7.85504 16.2905 8.22607 16.6821 8.68364 16.6821ZM4.47638 15.8073C4.47638 15.3241 4.10544 14.9325 3.64778 14.9325H1.67156C1.2139 14.9325 0.842963 15.3241 0.842963 15.8073C0.842963 16.2905 1.2139 16.6821 1.67156 16.6821H3.64778C4.10544 16.6821 4.47638 16.2904 4.47638 15.8073ZM15.3652 8.6944C15.3652 8.21121 14.9943 7.81958 14.5366 7.81958H0.828601C0.370937 7.81958 0 8.21121 0 8.6944C0 9.1776 0.370937 9.56923 0.828601 9.56923H14.5366C14.9942 9.56923 15.3652 9.1775 15.3652 8.6944ZM39.9946 19.5225L39.9912 20.3274C39.9889 20.8428 39.9862 21.4292 39.9862 22.144C39.9862 23.5588 38.9583 24.7752 37.5406 25.1628C37.1941 27.89 34.9758 30 32.2993 30C29.3835 30 27.0112 27.4954 27.0112 24.4168C27.0112 21.3383 29.3835 18.8336 32.2993 18.8336C34.8631 18.8336 37.0066 20.7699 37.487 23.3299C37.9885 23.0786 38.329 22.6317 38.329 22.144C38.329 21.4259 38.3316 20.8369 38.334 20.3192L38.3374 19.5144C38.3419 18.4757 38.3481 17.0532 38.3338 16.3854C38.3293 16.1732 38.3237 15.9766 38.3157 15.7933H17.8649C15.6152 15.7933 14.7876 13.6754 14.5156 12.9794C14.3411 12.5327 14.5425 12.0213 14.9655 11.8371C15.3892 11.653 15.8731 11.8655 16.0475 12.3121C16.5218 13.5259 17.0654 14.0437 17.8649 14.0437H38.0217C37.6744 13.1777 36.929 12.4805 35.2912 10.9484C34.9616 10.6402 34.5997 10.3017 34.2023 9.92509C33.9162 9.65409 33.6288 9.36413 33.3508 9.0838C32.9387 8.66816 32.5126 8.23833 32.0643 7.84184C31.6768 7.4991 31.3099 7.17299 30.961 6.86281C26.5426 2.93494 25.2091 1.74955 21.3195 1.74955H6.06416C5.11302 1.74955 4.30937 2.38973 4.30937 3.14752V5.23602C4.30937 5.71922 3.93843 6.11085 3.48077 6.11085C3.0231 6.11085 2.65217 5.71922 2.65217 5.23602V3.14762C2.65217 1.41207 4.18278 0 6.06416 0H21.3194C25.8137 0 27.5059 1.50431 32.0283 5.52443C32.3761 5.83373 32.7419 6.15887 33.1283 6.50054C33.6181 6.93377 34.0641 7.38362 34.4955 7.8187C34.7766 8.10225 35.042 8.36994 35.3089 8.62267C35.7036 8.99661 36.0628 9.33274 36.39 9.63873C39.2401 12.3048 39.9174 12.9382 39.9906 16.3457C40.0054 17.0374 39.9995 18.4154 39.9946 19.5225ZM35.9304 24.4288C35.9302 24.4172 35.9302 24.4056 35.9303 24.3941C35.9186 22.2907 34.2943 20.5834 32.2994 20.5834C30.2973 20.5834 28.6685 22.3031 28.6685 24.4169C28.6685 26.5307 30.2972 28.2504 32.2994 28.2504C34.2977 28.2504 35.9242 26.5371 35.9304 24.4288ZM10.3545 23.5419H10.3516C9.89395 23.5419 9.52449 23.9336 9.52449 24.4168C9.52449 24.9 9.8969 25.2916 10.3546 25.2916C10.8122 25.2916 11.1832 24.9 11.1832 24.4168C11.1832 23.9336 10.8121 23.5419 10.3545 23.5419ZM32.3008 23.5419H32.2976C31.8399 23.5419 31.4706 23.9336 31.4706 24.4168C31.4706 24.9 31.8432 25.2916 32.3009 25.2916C32.7585 25.2916 33.1295 24.9 33.1295 24.4168C33.1295 23.9336 32.7585 23.5419 32.3008 23.5419ZM25.2706 24.4168C25.2706 24.9 24.8996 25.2916 24.442 25.2916H15.5764C15.1775 27.956 12.987 30 10.353 30C7.67827 30 5.46103 27.8927 5.11256 25.168C4.14834 24.9119 3.34718 24.2736 2.93472 23.3992C2.74727 23.0018 2.65226 22.5795 2.65226 22.144V19.5521C2.65226 19.0689 3.0232 18.6772 3.48086 18.6772C3.93852 18.6772 4.30946 19.0689 4.30946 19.5521V22.144C4.30946 22.3063 4.34601 22.4661 4.41819 22.6191C4.56264 22.9253 4.82973 23.1765 5.16393 23.339C5.64093 20.7745 7.78636 18.8336 10.3531 18.8336C12.9871 18.8336 15.1776 20.8776 15.5765 23.5419H24.4421C24.8996 23.5419 25.2706 23.9337 25.2706 24.4168ZM13.9841 24.4168C13.9841 22.303 12.3553 20.5833 10.3531 20.5833C8.35432 20.5833 6.72759 22.2972 6.72216 24.4062C6.72216 24.4102 6.72216 24.414 6.72216 24.4179C6.72281 26.5313 8.35128 28.2504 10.3531 28.2504C12.3552 28.2504 13.9841 26.5306 13.9841 24.4168Z" fill="white"/>
                            </svg>
                            <p onClick={() => navigate('booking')}>{companyTxt[lang].booking}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 3 */}
            <div className="company-ctn">
                <div className='company-background'>
                    <img src={car} alt="voiture blanche vue du dessus" />
                </div>
                <div className="company-foreground">
                    <div className="company-card">
                        <div className="card-title">
                            <h2>{companyTxt[lang].title3}</h2>
                        </div>
                        <div className="card-info">
                            {companyTxt[lang].txt3}
                        </div>
                        <div className="book-redirection">
                            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.1513 13.1256H5.36427C4.9066 13.1256 4.53567 12.734 4.53567 12.2508C4.53567 11.7676 4.9066 11.3759 5.36427 11.3759H11.1513C11.609 11.3759 11.9799 11.7676 11.9799 12.2508C11.9799 12.734 11.609 13.1256 11.1513 13.1256ZM8.68364 16.6821H11.9747C12.4323 16.6821 12.8033 16.2905 12.8033 15.8073C12.8033 15.3241 12.4323 14.9325 11.9747 14.9325H8.68364C8.22598 14.9325 7.85504 15.3241 7.85504 15.8073C7.85504 16.2905 8.22607 16.6821 8.68364 16.6821ZM4.47638 15.8073C4.47638 15.3241 4.10544 14.9325 3.64778 14.9325H1.67156C1.2139 14.9325 0.842963 15.3241 0.842963 15.8073C0.842963 16.2905 1.2139 16.6821 1.67156 16.6821H3.64778C4.10544 16.6821 4.47638 16.2904 4.47638 15.8073ZM15.3652 8.6944C15.3652 8.21121 14.9943 7.81958 14.5366 7.81958H0.828601C0.370937 7.81958 0 8.21121 0 8.6944C0 9.1776 0.370937 9.56923 0.828601 9.56923H14.5366C14.9942 9.56923 15.3652 9.1775 15.3652 8.6944ZM39.9946 19.5225L39.9912 20.3274C39.9889 20.8428 39.9862 21.4292 39.9862 22.144C39.9862 23.5588 38.9583 24.7752 37.5406 25.1628C37.1941 27.89 34.9758 30 32.2993 30C29.3835 30 27.0112 27.4954 27.0112 24.4168C27.0112 21.3383 29.3835 18.8336 32.2993 18.8336C34.8631 18.8336 37.0066 20.7699 37.487 23.3299C37.9885 23.0786 38.329 22.6317 38.329 22.144C38.329 21.4259 38.3316 20.8369 38.334 20.3192L38.3374 19.5144C38.3419 18.4757 38.3481 17.0532 38.3338 16.3854C38.3293 16.1732 38.3237 15.9766 38.3157 15.7933H17.8649C15.6152 15.7933 14.7876 13.6754 14.5156 12.9794C14.3411 12.5327 14.5425 12.0213 14.9655 11.8371C15.3892 11.653 15.8731 11.8655 16.0475 12.3121C16.5218 13.5259 17.0654 14.0437 17.8649 14.0437H38.0217C37.6744 13.1777 36.929 12.4805 35.2912 10.9484C34.9616 10.6402 34.5997 10.3017 34.2023 9.92509C33.9162 9.65409 33.6288 9.36413 33.3508 9.0838C32.9387 8.66816 32.5126 8.23833 32.0643 7.84184C31.6768 7.4991 31.3099 7.17299 30.961 6.86281C26.5426 2.93494 25.2091 1.74955 21.3195 1.74955H6.06416C5.11302 1.74955 4.30937 2.38973 4.30937 3.14752V5.23602C4.30937 5.71922 3.93843 6.11085 3.48077 6.11085C3.0231 6.11085 2.65217 5.71922 2.65217 5.23602V3.14762C2.65217 1.41207 4.18278 0 6.06416 0H21.3194C25.8137 0 27.5059 1.50431 32.0283 5.52443C32.3761 5.83373 32.7419 6.15887 33.1283 6.50054C33.6181 6.93377 34.0641 7.38362 34.4955 7.8187C34.7766 8.10225 35.042 8.36994 35.3089 8.62267C35.7036 8.99661 36.0628 9.33274 36.39 9.63873C39.2401 12.3048 39.9174 12.9382 39.9906 16.3457C40.0054 17.0374 39.9995 18.4154 39.9946 19.5225ZM35.9304 24.4288C35.9302 24.4172 35.9302 24.4056 35.9303 24.3941C35.9186 22.2907 34.2943 20.5834 32.2994 20.5834C30.2973 20.5834 28.6685 22.3031 28.6685 24.4169C28.6685 26.5307 30.2972 28.2504 32.2994 28.2504C34.2977 28.2504 35.9242 26.5371 35.9304 24.4288ZM10.3545 23.5419H10.3516C9.89395 23.5419 9.52449 23.9336 9.52449 24.4168C9.52449 24.9 9.8969 25.2916 10.3546 25.2916C10.8122 25.2916 11.1832 24.9 11.1832 24.4168C11.1832 23.9336 10.8121 23.5419 10.3545 23.5419ZM32.3008 23.5419H32.2976C31.8399 23.5419 31.4706 23.9336 31.4706 24.4168C31.4706 24.9 31.8432 25.2916 32.3009 25.2916C32.7585 25.2916 33.1295 24.9 33.1295 24.4168C33.1295 23.9336 32.7585 23.5419 32.3008 23.5419ZM25.2706 24.4168C25.2706 24.9 24.8996 25.2916 24.442 25.2916H15.5764C15.1775 27.956 12.987 30 10.353 30C7.67827 30 5.46103 27.8927 5.11256 25.168C4.14834 24.9119 3.34718 24.2736 2.93472 23.3992C2.74727 23.0018 2.65226 22.5795 2.65226 22.144V19.5521C2.65226 19.0689 3.0232 18.6772 3.48086 18.6772C3.93852 18.6772 4.30946 19.0689 4.30946 19.5521V22.144C4.30946 22.3063 4.34601 22.4661 4.41819 22.6191C4.56264 22.9253 4.82973 23.1765 5.16393 23.339C5.64093 20.7745 7.78636 18.8336 10.3531 18.8336C12.9871 18.8336 15.1776 20.8776 15.5765 23.5419H24.4421C24.8996 23.5419 25.2706 23.9337 25.2706 24.4168ZM13.9841 24.4168C13.9841 22.303 12.3553 20.5833 10.3531 20.5833C8.35432 20.5833 6.72759 22.2972 6.72216 24.4062C6.72216 24.4102 6.72216 24.414 6.72216 24.4179C6.72281 26.5313 8.35128 28.2504 10.3531 28.2504C12.3552 28.2504 13.9841 26.5306 13.9841 24.4168Z" fill="white"/>
                            </svg>
                            <p onClick={() => navigate('booking')}>{companyTxt[lang].booking}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <nav className="company-nav">
            <div className="square square-active" 
                onClick={handleSlide.to !== 1 ? () => {
                    setHandleSlide({from: handleSlide.to, to: 1});
                    resetSlide(1, 2);
                } : undefined}
                ref={square1Ref}>   
            </div>
            <div className="square" 
                onClick={handleSlide.to !== 2 ? () => {
                    setHandleSlide({from: handleSlide.to, to: 2});
                    resetSlide(2, 3);
                } : undefined}
                ref={square2Ref}>
            </div>
            <div className="square" 
                onClick={handleSlide.to !== 3 ? () => {
                    setHandleSlide({from: handleSlide.to, to: 3});
                    resetSlide(3, 1);
                } : undefined}
                ref={square3Ref}>
            </div>
        </nav>
        </>
    );
};

export default Company;