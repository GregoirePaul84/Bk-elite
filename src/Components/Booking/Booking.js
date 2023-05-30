import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';

const bookingTxt = {
    fr: {
        mainTitle: <h2 className='h-section' dangerouslySetInnerHTML={{__html: '<span class=colored>R</span>éservations'}} />,
        h3: 'Vous souhaitez réserver une course ou demander un devis ?',
        p1: <p dangerouslySetInnerHTML={{__html: 'Appellez nous au <b>06.58.22.86.36</b> ou réservez directement en ligne !'}} />,
        p2: 'Notre chauffeur prendra contact avec vous dans les plus brefs délais afin de répondre au mieux à vos attentes.',
        title1: 'À propos de vous', 
        title2: 'Date du transport souhaité',
        title3: 'Véhicule souhaité',
        title4: 'Informations complémentaires',
        required: 'Informations obligatoires',
        lastName: 'Nom',
        lastNamePh: 'Votre nom',
        firstName: 'Prénom',
        firstNamePh: 'Votre prénom',
        telephone: 'Téléphone',
        telephonePh: 'Fixe ou mobile',
        postalCode: 'Code postal',
        postalCodePh: 'Votre code postal',
        city: 'Ville',
        cityPh: 'Votre ville',
        sedan: 'Berline',
        van: 'Van',
        message: 'Vous souhaitez un devis gratuit ou voulez nous poser une question particulière ? N\'hésitez pas à nous faire parvenir toute demande.'
    },

    eng: {
        mainTitle: <h2 className='h-section' dangerouslySetInnerHTML={{__html: '<span class=colored>B</span>ooking'}} />,
        h3: 'Would you like to book a ride or ask for a quote?',
        p1: <p dangerouslySetInnerHTML={{__html: 'Call us at <b>+336.58.22.86.36</b> or book online!'}} />,
        p2: 'Our chauffeur will get in touch with you as soon as possible to answer any of your questions.',
        title1: 'Your information',  
        title2: 'Date Transportation Needed',
        title3: 'Desired Vehicle',
        title4: 'Additional Details',
        required: 'Required',
        lastName: 'Last Name',
        lastNamePh: 'Your Last Name',
        firstName: 'First Name',
        firstNamePh: 'Your First Name',
        telephone: 'Telephone',
        telephonePh: 'Landline or mobile phone',
        postalCode: 'Zip Code',
        postalCodePh: 'Your Zip Code',
        city: 'City',  
        cityPh: 'Your city',
        sedan: 'Sedan',
        van: 'Van',
        message: 'Looking for a free quote or wanting to ask us a question? Don\'t hesitate to reach out with your questions.'
    }
}

const Booking = ({lang}) => {

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
                        {bookingTxt[lang].mainTitle}
                    </div>
                </div>
            <div className="booking-main">
                <div className="static-info">
                    <h3>
                        {bookingTxt[lang].h3}
                    </h3>
                    {bookingTxt[lang].p1}
                    <p>
                        {bookingTxt[lang].p2}
                    </p>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-subtitle'>
                            <h4>{bookingTxt[lang].title1}</h4>
                            <p className='colored'>* : {bookingTxt[lang].required}</p>
                        </div>
                        <div className='input-container basic-info'>
                            <p className='error'>{errors.lastName && errors.lastName.message}</p>
                            <label htmlFor="lastName">{bookingTxt[lang].lastName} : <span className='colored'>*</span></label>
                            <input 
                                type="text" 
                                id="lastName" 
                                name="lastName" 
                                placeholder={bookingTxt[lang].lastNamePh}
                                {...register('lastName')} />
                        </div>
                        <div className='input-container basic-info'>
                            <p className='error'>{errors.firstName && errors.firstName.message}</p>
                            <label htmlFor="firstName">{bookingTxt[lang].firstName} : <span className='colored'>*</span></label>
                            <input 
                                type="text" 
                                id="firstName" 
                                name="firstName"
                                placeholder={bookingTxt[lang].firstNamePh}
                                {...register('firstName')}  />
                        </div>
                        <div className='input-container basic-info'>
                            <p className='error'>{errors.phone && errors.phone.message}</p>
                            <label htmlFor="phone">{bookingTxt[lang].telephone} : <span className='colored'>*</span></label>
                            <input 
                                type="text" 
                                id="phone" 
                                name="phone"
                                placeholder={bookingTxt[lang].telephonePh}
                                {...register('phone')}  />
                        </div>
                        <div className='input-container basic-info'>
                            <p className='error'></p>
                            <label htmlFor="postalCode">{bookingTxt[lang].postalCode} :</label>
                            <input 
                                type="text" 
                                id="postalCode" 
                                name="postalCode" 
                                placeholder={bookingTxt[lang].postalCodePh}
                                {...register('postalCode')} />
                        </div>
                        <div className='input-container basic-info'>
                            <p className='error'></p>
                            <label htmlFor="city">{bookingTxt[lang].city} :</label>
                            <input 
                                type="text" 
                                id="city" 
                                name="city" 
                                placeholder={bookingTxt[lang].cityPh}
                                {...register('city')} />
                        </div>
                        <div className='form-subtitle'>
                            <h4>{bookingTxt[lang].title2}</h4>
                        </div>
                        <div className='input-container'>
                            <input 
                                type="date" 
                                id="date" 
                                {...register('date')} />
                        </div>
                        <div className='form-subtitle'>
                            <h4>{bookingTxt[lang].title3}</h4>
                        </div>
                        <div className='input-container row'>
                            <label htmlFor="sedan">{bookingTxt[lang].sedan}</label>
                            <input 
                                type="checkbox" 
                                id="sedan" 
                                name="sedan" 
                                {...register('sedan')} />
                        </div>
                        <div className='input-container row'>
                            <label htmlFor="van">{bookingTxt[lang].van}</label>
                            <input 
                                type="checkbox" 
                                id="van" 
                                name="van"
                                {...register('van')}  />
                        </div>
                        <div className='form-subtitle'>
                            <h4>{bookingTxt[lang].title4}</h4>
                        </div>
                        <div className='message-container'>
                            <label htmlFor="message">Message :</label>
                            <textarea 
                                id="message" 
                                name="message"
                                placeholder={bookingTxt[lang].message}
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