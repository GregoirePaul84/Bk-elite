import React from 'react';

const extrasArray = [
    {
        title: 'Service bagagerie',
        txt: <p dangerouslySetInnerHTML={{__html: 'Nous proposons un <strong>service de bagagerie</strong> pour vous aider à transporter vos valises et vos sacs en toute sécurité. Nos chauffeurs professionnels et expérimentés prendront soin de vos affaires et les conduiront à votre destination en toute sérénité. '}} />
    },
    {
        title: 'Circuit touristique',
        txt: <p dangerouslySetInnerHTML={{__html: 'Nous proposons des circuits touristiques personnalisés dans les plus beaux sites de la région, tels que le Vaucluse, le Luberon, Gordes, Gard... Nos chauffeurs professionnels et expérimentés vous guideront à travers les paysages époustouflants et les villages pittoresques de cette région unique.'}} />
    },
    {
        title: 'Mise à disposition',
        txt: <p dangerouslySetInnerHTML={{__html: 'Que vous ayez besoin d\'un chauffeur pour une journée entière, pour un événement spécial ou pour une période prolongée, nous avons des offres flexibles pour répondre à vos besoins. Nos chauffeurs professionnels et expérimentés se tiennent à votre disposition pour vous accompagner en toute sécurité et vous fournir un service haut de gamme.'}} />
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