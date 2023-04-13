import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

const Booking = () => {

    const schema = yup
        .object({
            lastName: yup
            .string()
            .max(50)
            .required("Merci de rentrer votre nom"),

            firstName: yup
            .string()
            .max(50)
            .required("Merci de rentrer votre prénom"),

            phone: yup
            .number()
            .typeError("Merci de rentrer un numéro de téléphone valide")
            .max(10)
            .required("Merci de rentrer votre numéro de téléphone"),

            city: yup
            .string()
            .max(50),

            postalCode: yup
            .number()
            .max(50),

            message: yup
            .string()
        })

    const {register, formState:{errors}, handleSubmit} = useForm({resolver: yupResolver(schema)})

    const onSubmit = () => {
        alert('formulaire envoyé')
    }

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-subtitle'>
                        <h4>À propos de vous</h4>
                    </div>
                    <div className='input-container basic-info'>
                        <p className='error'>{errors.lastName && errors.lastName.message}</p>
                        <label htmlFor="lastName">Nom : *</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="user_lastName" 
                            placeholder='Votre nom'
                            {...register('lastName')} />
                    </div>
                    <div className='input-container basic-info'>
                        <p className='error'>{errors.firstName && errors.firstName.message}</p>
                        <label htmlFor="firstName">Prénom : *</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="user_firstName"
                            placeholder='Votre prénom'
                            {...register('firstName')}  />
                    </div>
                    <div className='input-container basic-info'>
                        <p className='error'>{errors.phone && errors.phone.message}</p>
                        <label htmlFor="phone">Téléphone : *</label>
                        <input 
                            type="text" 
                            id="phone" 
                            name="user_phone"
                            placeholder='Fixe ou mobile'
                            {...register('phone')}  />
                    </div>
                    <div className='input-container basic-info'>
                        <p className='error'></p>
                        <label htmlFor="postalCode">Code postal :</label>
                        <input 
                            type="text" 
                            id="postalCode" 
                            name="user_postalCode" 
                            placeholder='Votre code postal'
                            {...register('postalCode')} />
                    </div>
                    <div className='input-container basic-info'>
                        <p className='error'></p>
                        <label htmlFor="city">Ville :</label>
                        <input 
                            type="text" 
                            id="city" 
                            name="user_city" 
                            placeholder='Votre ville'
                            {...register('city')} />
                    </div>
                    <div className='form-subtitle'>
                        <h4>Date du transport souhaité</h4>
                    </div>
                    <div className='input-container'>
                        <input 
                            type="date" 
                            id="date" 
                            {...register('date')} />
                    </div>
                    <div className='form-subtitle'>
                        <h4>Véhicule souhaité</h4>
                    </div>
                    <div className='input-container row'>
                        <label htmlFor="sedan">Berline</label>
                        <input 
                            type="checkbox" 
                            id="sedan" 
                            name="car_sedan" 
                            {...register('sedan')} />
                    </div>
                    <div className='input-container row'>
                        <label htmlFor="van">Van</label>
                        <input 
                            type="checkbox" 
                            id="van" 
                            name="car_van"
                            {...register('van')}  />
                    </div>
                    <div className='form-subtitle'>
                        <h4>Informations complémentaires</h4>
                    </div>
                    <div className='message-container'>
                        <label htmlFor="message">Message :</label>
                        <textarea 
                            id="message" 
                            name="user_message"
                            placeholder="Vous souhaitez un devis gratuit ou voulez nous poser une question particulière ? N'hésitez pas à nous faire parvenir toute demande."
                            {...register('message')} >
                        </textarea>
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