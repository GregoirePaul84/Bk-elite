import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';

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
            .required("Merci de rentrer votre numéro de téléphone"),
        })

        .required();

    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data, r) => {
        console.log('yes');
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const serviceId = process.env.REACT_APP_SERVICE_ID;
        sendFeedback(serviceId, templateId, {
            lastName: data.lastName,
            firstName: data.firstName,
            phone: data.phone,
            postalCode: data.postalCode,
            city: data.city,
            date: data.date,
            sedan: data.sedan,
            van: data.van,
            message: data.message,
            reply_to: r.target.reset()
        })
        console.log(data);
    }

    const sendFeedback = (serviceId, templateId, variables) => {
        if (window.confirm('Êtes-vous sûr(e) de vouloir envoyer le message ?')) {
            emailjs
                .send(serviceId, templateId, variables, process.env.REACT_APP_EMAILJS_KEY)
                .then((res) => {
                    alert('Merci pour votre message, nous reviendrons vers vous au plus vite !')
                })
                .catch((err) => {
                    alert('Erreur dans l\'envoi du formulaire')
                })
        }
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
                <div className="form-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-subtitle'>
                            <h4>À propos de vous</h4>
                            <p className='colored'>* : Informations obligatoires</p>
                        </div>
                        <div className='input-container basic-info'>
                            <p className='error'>{errors.lastName && errors.lastName.message}</p>
                            <label htmlFor="lastName">Nom : <span className='colored'>*</span></label>
                            <input 
                                type="text" 
                                id="lastName" 
                                name="lastName" 
                                placeholder='Votre nom'
                                {...register('lastName')} />
                        </div>
                        <div className='input-container basic-info'>
                            <p className='error'>{errors.firstName && errors.firstName.message}</p>
                            <label htmlFor="firstName">Prénom : <span className='colored'>*</span></label>
                            <input 
                                type="text" 
                                id="firstName" 
                                name="firstName"
                                placeholder='Votre prénom'
                                {...register('firstName')}  />
                        </div>
                        <div className='input-container basic-info'>
                            <p className='error'>{errors.phone && errors.phone.message}</p>
                            <label htmlFor="phone">Téléphone : <span className='colored'>*</span></label>
                            <input 
                                type="text" 
                                id="phone" 
                                name="phone"
                                placeholder='Fixe ou mobile'
                                {...register('phone')}  />
                        </div>
                        <div className='input-container basic-info'>
                            <p className='error'></p>
                            <label htmlFor="postalCode">Code postal :</label>
                            <input 
                                type="text" 
                                id="postalCode" 
                                name="postalCode" 
                                placeholder='Votre code postal'
                                {...register('postalCode')} />
                        </div>
                        <div className='input-container basic-info'>
                            <p className='error'></p>
                            <label htmlFor="city">Ville :</label>
                            <input 
                                type="text" 
                                id="city" 
                                name="city" 
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
                                name="sedan" 
                                {...register('sedan')} />
                        </div>
                        <div className='input-container row'>
                            <label htmlFor="van">Van</label>
                            <input 
                                type="checkbox" 
                                id="van" 
                                name="van"
                                {...register('van')}  />
                        </div>
                        <div className='form-subtitle'>
                            <h4>Informations complémentaires</h4>
                        </div>
                        <div className='message-container'>
                            <label htmlFor="message">Message :</label>
                            <textarea 
                                id="message" 
                                name="message"
                                placeholder="Vous souhaitez un devis gratuit ou voulez nous poser une question particulière ? N'hésitez pas à nous faire parvenir toute demande."
                                {...register('message')} >
                            </textarea>
                        </div>
                        <div className="btn-container">
                            <input type="submit" value="Envoyer !" />
                        </div>
                    </form>
                </div>
                
            </div>
        </>
    );
};

export default Booking;