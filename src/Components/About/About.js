import React from 'react';

const About = () => {
    return (
        <>
            <div className="about-main">
                <div className="content-title">
                    <h3>La société</h3>
                    <svg width="27" height="48" viewBox="0 0 41 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.125 0C2.29557 0 0 2.01562 0 4.5V43.5C0 45.9844 2.29557 48 5.125 48H15.375V40.5C15.375 38.0156 17.6706 36 20.5 36C23.3294 36 25.625 38.0156 25.625 40.5V48H35.875C38.7044 48 41 45.9844 41 43.5V4.5C41 2.01562 38.7044 0 35.875 0H5.125ZM6.83333 22.5C6.83333 21.675 7.60208 21 8.54167 21H11.9583C12.8979 21 13.6667 21.675 13.6667 22.5V25.5C13.6667 26.325 12.8979 27 11.9583 27H8.54167C7.60208 27 6.83333 26.325 6.83333 25.5V22.5ZM18.7917 21H22.2083C23.1479 21 23.9167 21.675 23.9167 22.5V25.5C23.9167 26.325 23.1479 27 22.2083 27H18.7917C17.8521 27 17.0833 26.325 17.0833 25.5V22.5C17.0833 21.675 17.8521 21 18.7917 21ZM27.3333 22.5C27.3333 21.675 28.1021 21 29.0417 21H32.4583C33.3979 21 34.1667 21.675 34.1667 22.5V25.5C34.1667 26.325 33.3979 27 32.4583 27H29.0417C28.1021 27 27.3333 26.325 27.3333 25.5V22.5ZM8.54167 9H11.9583C12.8979 9 13.6667 9.675 13.6667 10.5V13.5C13.6667 14.325 12.8979 15 11.9583 15H8.54167C7.60208 15 6.83333 14.325 6.83333 13.5V10.5C6.83333 9.675 7.60208 9 8.54167 9ZM17.0833 10.5C17.0833 9.675 17.8521 9 18.7917 9H22.2083C23.1479 9 23.9167 9.675 23.9167 10.5V13.5C23.9167 14.325 23.1479 15 22.2083 15H18.7917C17.8521 15 17.0833 14.325 17.0833 13.5V10.5ZM29.0417 9H32.4583C33.3979 9 34.1667 9.675 34.1667 10.5V13.5C34.1667 14.325 33.3979 15 32.4583 15H29.0417C28.1021 15 27.3333 14.325 27.3333 13.5V10.5C27.3333 9.675 28.1021 9 29.0417 9Z" fill="#D1B000"/>
                    </svg>



                </div>
                <div className="content">
                    <div className="left-banner">
                        <p>
                            La société <strong>Bk-Elite</strong> est un prestataire de service de transport privé, basée en région Provence-Alpes-Côte d'Azur. 
                        </p>
                    </div>
                    <div className="right-banner">
                        <p>
                            Nous proposons nos services hauts-de-gamme à une clientèle exigeante, soucieuse du confort et de l'excellence.
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
                    <li>La société</li>
                    <li>Nos valeurs</li>
                    <li>Nos collaborateurs</li>
                </ul>
            </div>
        </>
    );
};

export default About;