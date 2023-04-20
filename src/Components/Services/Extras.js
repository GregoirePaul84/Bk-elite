import React from 'react';

const extrasArray = [
    {
        title: 'Chauffeur ponctuel',
        txt: <p dangerouslySetInnerHTML={{__html: 'Nos chauffeurs expérimentés viendront vous chercher à l\'heure prévue et connaissent bien les itinéraires les plus rapides pour atteindre votre destination en temps voulu. Nous suivons également en temps réel les conditions de circulation pour éviter les retards imprévus.'}} />
    },
    {
        title: 'À toute heure',
        txt: <p dangerouslySetInnerHTML={{__html: 'Chez Bk-elite, nous comprenons que vos besoins de transport peuvent survenir à tout moment. C\'est pourquoi nous sommes disponibles pour répondre à vos besoins de transport à tout moment, en tout lieu et pour toute durée.'}} />
    },
    {
        title: 'Tarifs compétitifs',
        txt: <p dangerouslySetInnerHTML={{__html: 'Nous nous engageons à offrir des tarifs compétitifs, sans frais cachés à nos clients. Nous sommes convaincus que notre service de transport privé offre le meilleur rapport qualité-prix, avec une expérience de transport de qualité supérieure à un tarif abordable.'}} />
    },
    {
        title: 'Attente en cas de vol retardé',
        txt: <p dangerouslySetInnerHTML={{__html: 'Nous savons à quel point il peut être stressant de manquer son transport après un retard de vol imprévu. Si votre vol est retardé, notre chauffeur suivra votre horaire de vol en temps réel et vous attendra <span class=colored>sans frais supplémentaires</span>.'}} />
    },
    {
        title: 'Service personnalisé',
        txt: <p dangerouslySetInnerHTML={{__html: 'Vous êtes libre de choisir votre propre musique pour votre voyage, et notre chauffeur sera heureux de faire des pauses à votre demande, pour que vous puissiez profiter de la vue, faire une pause-café ou même faire un arrêt shopping en chemin.'}} />
    },
    {
        title: 'Boissons et collations',
        txt: <p dangerouslySetInnerHTML={{__html: 'Afin de vous aider à vous ressourcer durant votre transport, nous serons heureux de vous offrir une sélection de boissons fraîches et de snacks pour vous aider à vous détendre et à profiter de votre voyage.'}} />
    },
    {
        title: 'Décoration florale',
        txt: <p dangerouslySetInnerHTML={{__html: 'Nos chauffeurs veilleront à ce que votre véhicule de mariage soit décoré avec soin et à temps pour votre grand jour, pour que vous puissiez vous concentrer sur l\'essentiel - profiter de chaque instant de votre mariage en toute tranquillité d\'esprit.'}} />
    },
    {
        title: 'Chauffeur élégant',
        txt: <p dangerouslySetInnerHTML={{__html: 'Chez Bk-elite, nous savons que chaque détail compte lorsqu\'il s\'agit de votre mariage. Nos chauffeurs seront habillés de manière élégante, dans des tenues formelles et soigneusement choisies pour refléter l\'importance de l\'occasion.'}} />
    },
    {
        title: 'Service bagagerie',
        txt: <p dangerouslySetInnerHTML={{__html: 'Vous souhaitez réserver un véhicule pour transporter vos bagages encombrants ou couteux ? Nous proposons un <strong>service de bagagerie</strong> pour vous aider à transporter vos effets personnels. Nos chauffeurs prendront soin de vos affaires et les conduiront à votre destination en toute sérénité.'}} />
    },
    {
        title: 'Circuit touristique',
        txt: <p dangerouslySetInnerHTML={{__html: 'Nous proposons des circuits touristiques personnalisés dans les plus beaux sites de la région, tels que le Vaucluse, le Luberon, Gordes, Gard... Nos chauffeurs expérimentés vous guideront à travers les paysages époustouflants et les villages pittoresques de cette région unique.'}} />
    },
    {
        title: 'Mise à disposition',
        txt: <p dangerouslySetInnerHTML={{__html: 'Que vous ayez besoin d\'un chauffeur pour une journée entière, pour un événement spécial ou pour une période prolongée, nous avons des offres flexibles pour répondre à vos besoins. Nos chauffeurs professionnels se tiennent à votre disposition pour vous accompagner en toute sécurité et vous fournir un service haut de gamme.'}} />
    }
]

const Extras = ({index}) => {
    return (
        <div id='extras-detailed'>
            <div className="detailed-title">
                <h4>{extrasArray[index].title}</h4>
            </div>
            <div className="detailed-description">
                {extrasArray[index].txt}
            </div>
        </div>
    );
};

export default Extras;