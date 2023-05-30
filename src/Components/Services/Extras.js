import React from 'react';

const extrasArray = [
    {
        fr: {
            title: 'Chauffeur ponctuel',
            txt: <p dangerouslySetInnerHTML={{__html: 'Nos chauffeurs expérimentés viendront vous chercher à l\'heure prévue et connaissent bien les itinéraires les plus rapides pour atteindre votre destination en temps voulu. Nous suivons également en temps réel les conditions de circulation pour éviter les retards imprévus.'}} />
        },

        eng: {
            title: 'Punctual Drivers',
            txt: <p dangerouslySetInnerHTML={{__html: 'Our highly trained chauffeurs will pick you up at the specified time. They know the fastest route to get you to your destination on time. We are also equipped to follow live traffic and road conditions to avoid any unexpected delays..'}} />
        }
    },
    {
        fr: {
            title: 'À toute heure',
            txt: <p dangerouslySetInnerHTML={{__html: 'Chez Bk-elite, nous comprenons que vos besoins de transport peuvent survenir à tout moment. C\'est pourquoi nous sommes disponibles pour répondre à vos besoins de transport à tout moment, en tout lieu et pour toute durée.'}} />
        },

        eng: {
            title: 'Around the clock',
            txt: <p dangerouslySetInnerHTML={{__html: 'Bk-Elite is fully engaged and will meet your need for transport at any moment, any place and any duration.'}} />
        }
    },
    {
        fr: {
            title: 'Tarifs compétitifs',
            txt: <p dangerouslySetInnerHTML={{__html: 'Nous nous engageons à offrir des tarifs compétitifs, sans frais cachés à nos clients. Nous sommes convaincus que notre service de transport privé offre le meilleur rapport qualité-prix, avec une expérience de transport de qualité supérieure à un tarif abordable.'}} />
        },

        eng: {
            title: 'Competitive Rates',
            txt: <p dangerouslySetInnerHTML={{__html: 'We are committed to provide the most affordable prices to our clients without any hidden fees. Our private transport company offers the best possible value for such a high-quality service.'}} />
        }
    },
    {
        fr: {
            title: 'Attente en cas de vol retardé',
            txt: <p dangerouslySetInnerHTML={{__html: 'Nous savons à quel point il peut être stressant de manquer son transport après un retard de vol imprévu. Si votre vol est retardé, notre chauffeur suivra votre horaire de vol en temps réel et vous attendra <span class=colored>sans frais supplémentaires</span>.'}} />
        },

        eng: {
            title: 'Delayed flights',
            txt: <p dangerouslySetInnerHTML={{__html: 'We know how stressful it is to miss your transport after a delayed flight. If your flight is delayed, our driver will follow your flight in real-time and will be waiting for you when you arrive <span class=colored>without any additional fees.</span>'}} />
        }   
    },
    {
        fr: {
            title: 'Service personnalisé',
            txt: <p dangerouslySetInnerHTML={{__html: 'Vous êtes libre de choisir votre propre musique pour votre voyage, et notre chauffeur sera heureux de faire des pauses à votre demande, pour que vous puissiez profiter de la vue, faire une pause-café ou même faire un arrêt shopping en chemin.'}} />
        },

        eng: {
            title: 'Personalised service',
            txt: <p dangerouslySetInnerHTML={{__html: 'You are free to listen to your own music on our journey and our chauffeur will be happy to stop at your request so you can enjoy a site, take a coffee break or do some shopping.'}} />
        }   
    },
    {
        fr: {
            title: 'Boissons et collations',
            txt: <p dangerouslySetInnerHTML={{__html: 'Afin de vous aider à vous ressourcer durant votre transport, nous serons heureux de vous offrir une sélection de boissons fraîches et de snacks pour vous aider à vous détendre et à profiter de votre voyage.'}} />
        },

        eng: {
            title: 'Drinks and snacks',
            txt: <p dangerouslySetInnerHTML={{__html: 'Complimentary fresh drinks and snacks are available in our vehicles to help you relax and enjoy your journey.'}} />
        }  
    },
    {
        fr: {
            title: 'Décoration florale',
            txt: <p dangerouslySetInnerHTML={{__html: 'Nos chauffeurs veilleront à ce que votre véhicule de mariage soit décoré avec soin et à temps pour votre grand jour, pour que vous puissiez vous concentrer sur l\'essentiel - profiter de chaque instant de votre mariage en toute tranquillité d\'esprit.'}} />
        },

        eng: {
            title: 'Floral decoration',
            txt: <p dangerouslySetInnerHTML={{__html: 'Our chauffeurs will make sure your wedding vehicle is carefully decorated and on time for your event so you can focus on what is important: enjoying every moment of your wedding without the slightest bit of stress.'}} />
        }  
    },
    {
        fr: {
            title: 'Chauffeur élégant',
            txt: <p dangerouslySetInnerHTML={{__html: 'Chez Bk-elite, nous savons que chaque détail compte lorsqu\'il s\'agit de votre mariage. Nos chauffeurs seront habillés de manière élégante, dans des tenues formelles et soigneusement choisies pour refléter l\'importance de l\'occasion.'}} />
        },

        eng: {
            title: 'A Dapper Chauffeur',
            txt: <p dangerouslySetInnerHTML={{__html: 'We know that every detail counts on your wedding day. Our chauffeurs will be elegantly dressed in formal attire that has been carefully chosen for your important occasion.'}} />
        }
    },
    {
        fr: {
            title: 'Service bagagerie',
            txt: <p dangerouslySetInnerHTML={{__html: 'Vous souhaitez réserver un véhicule pour transporter vos bagages encombrants ou couteux ? Nous proposons un <strong>service de bagagerie</strong> pour vous aider à transporter vos effets personnels. Nos chauffeurs prendront soin de vos affaires et les conduiront à votre destination en toute sérénité.'}} />
        },

        eng: {
            title: 'Baggage Service',
            txt: <p dangerouslySetInnerHTML={{__html: 'Looking to book a vehicle to transport your expensive and bulky luggage? We provide a <strong>luggage service</strong> to help you carry your personal belongings. Our chauffeurs will take care of your luggage and will deliver them safely to your destination.'}} />
        }
    },
    {
        fr: {
            title: 'Circuit touristique',
            txt: <p dangerouslySetInnerHTML={{__html: 'Nous proposons des circuits touristiques personnalisés dans les plus beaux sites de la région, tels que le Vaucluse, le Luberon, Gordes, Gard... Nos chauffeurs expérimentés vous guideront à travers les paysages époustouflants et les villages pittoresques de cette région unique.'}} />
        },

        eng: {
            title: 'Sightseeing tours',
            txt: <p dangerouslySetInnerHTML={{__html: 'We provide personalised guided tours of the most beautiful sites of the region, such as Vaucluse, the Luberon, Gordes, the Gard, etc... Our expert chauffeurs will guide you through the amazing landscapes and the picturesque villages of this unique area.'}} />
        }
    },
    {
        fr: {
            title: 'Mise à disposition',
            txt: <p dangerouslySetInnerHTML={{__html: 'Que vous ayez besoin d\'un chauffeur pour une journée entière, pour un événement spécial ou pour une période prolongée, nous avons des offres flexibles pour répondre à vos besoins. Nos chauffeurs professionnels se tiennent à votre disposition pour vous accompagner en toute sécurité et vous fournir un service haut de gamme.'}} />
        },

        eng: {
            title: 'Driver\'s availability',
            txt: <p dangerouslySetInnerHTML={{__html: 'Whether you need a driver for an entire day, for a special event, or for a long duration, our flexible services fit any and all needs you may have. Our professional chauffeurs are happy to take care of you and to offer a high-quality service.'}} />
        }
    }
]

const Extras = ({lang, index, liNb}) => {
    return (
        <div id='extras-detailed' className={liNb}>
            <div className="detailed-title">
                <h4>{extrasArray[index][lang].title}</h4>
            </div>
            <div className="detailed-description">
                {extrasArray[index][lang].txt}
            </div>
        </div>
    );
};

export default Extras;