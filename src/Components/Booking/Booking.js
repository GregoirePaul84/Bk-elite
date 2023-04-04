import React from 'react';

const Booking = () => {
    return (
        <>
            <div className="booking-nav">
                <div className="booking-nav__title">
                        <h2 className='h-section'>
                            <span>R</span>eservations
                        </h2>
                    </div>
                </div>
            <div className="booking-main">
                <div className="static-info">
                    <h3>Vous souhaitez réserver une course ou demander un devis? </h3>
                    <p>Appellez nous au <b>06.58.22.86.36</b> ou réservez directement en ligne !</p>
                    <p>Notre chauffeur prendra contact avec vous dans les plus brefs délais afin de répondre au mieux à vos attentes.</p>
                </div>
                <form>
                    <div className='form-subtitle'>
                        <h4>À propos de vous</h4>
                    </div>
                    <div className='input-container basic-info'>
                        <label htmlFor="lastName">Nom :</label>
                        <input type="text" id="lastName" name="user_lastName" />
                    </div>
                    <div className='input-container basic-info'>
                        <label htmlFor="firstName">Prénom :</label>
                        <input type="text" id="firstName" name="user_firstName" />
                    </div>
                    <div className='input-container basic-info'>
                        <label htmlFor="phone">Téléphone :</label>
                        <input type="text" id="phone" name="user_phone" />
                    </div>
                    <div className='input-container basic-info'>
                        <label htmlFor="postalCode">Code postal :</label>
                        <input type="text" id="postalCode" name="user_postalCode" />
                    </div>
                    <div className='input-container basic-info'>
                        <label htmlFor="city">Ville :</label>
                        <input type="text" id="city" name="user_city" />
                    </div>
                    <div className='form-subtitle'>
                        <h4>Date du transport souhaité</h4>
                    </div>
                    <div className='input-container'>
                        <input type="date" id="date" />
                    </div>
                    <div className='form-subtitle'>
                        <h4>Véhicule souhaité</h4>
                    </div>
                    <div className='input-container row'>
                        <label htmlFor="sedan">Berline</label>
                        <input type="checkbox" id="sedan" name="car_sedan" />
                    </div>
                    <div className='input-container row'>
                        <label htmlFor="van">Van</label>
                        <input type="checkbox" id="van" name="car_van" />
                    </div>
                    <div className='form-subtitle'>
                        <h4>Informations complémentaires</h4>
                    </div>
                    <div className='message-container'>
                        <label htmlFor="msg">Message :</label>
                        <textarea id="msg" name="user_message"></textarea>
                    </div>
                    <div className="btn-container">
                        <button>Envoyer !</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Booking;