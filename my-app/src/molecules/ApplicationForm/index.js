import React from "react";
import {useState, useCallback, useEffect, memo} from "react";
import './style.scss';
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import axios from 'axios';
import LogoMarvins from '../../atoms/Icons/logo_Marvins.png'
import CrossIcon from '../../atoms/Icons/CrossIcon.png'

const initialFormData = {
    username: '',
    phoneNumber: '',
    city: '',
    deviceType:'WEB'
};

function ApplicationForm({activeForm, setActiveForm}) {
    const [formData, setFormData] = useState(initialFormData);
    const [response, setResponse] = useState(null);
    const [formIsSent, setFormIsSent] = useState(false);
    const [timeLeft, setTimeLeft] = useState(5);
    const [error, setError] = useState(null);
    const [unfilledError, setUnfilledError] = useState(null);
    const showError = error || unfilledError;

    useEffect(() => {
        let timer;
        if (formIsSent && timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setActiveForm(false);
            setFormData(initialFormData);
            setFormIsSent(false);
        }
        return () => clearTimeout(timer);
    }, [formIsSent, timeLeft]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        console.log(formData);
        if (!formData.username || !formData.phoneNumber || !formData.city) {
            setUnfilledError('unfilled error');
            return;
        }

        axios.post('/contacts', formData).then((response) => {
            if (response.status === 201) {
                localStorage.setItem('username', response.data.username);
                setResponse({
                    username: response.data.username,
                    phoneNumber: response.data.phoneNumber,
                    city: response.data.city,
                });

            }
        })
            .catch((error) => {
                setResponse(null);
                setError(error.message);
            });
        setFormIsSent(true);
    }, [formData])

    return (
        <div className={`Overlay ${activeForm ? "OverlayActive" : ""} ${formIsSent ? "FormIsSentOverlay" : ""}`}>
            <div className='ApplicationForm'>
                <div className='ApplicationFormHeader'>
                    <img src={LogoMarvins} className='LogoMarvins'/>
                    <img src={CrossIcon} className='CrossIcon' onClick={() => setActiveForm(false)}/>
                </div>
                <form className='ApplicationFormBlock ApplicationFormSent' onSubmit={handleSubmit}>
                    <div className='ApplicationFormBlock'>
                        <div className='InputLabels'>
                            <Typography varisnt='title5' fontWeight='body4'>ІМ’Я</Typography>
                            <Typography varisnt='title5' fontWeight='body4'>ТЕЛЕФОН</Typography>
                            <Typography varisnt='title5' fontWeight='body4'>МІСТО</Typography>
                        </div>
                        <div>
                            <div className='InputsDiv'>
                                <div className='InputBlock NameInput'>
                                    <div className='NameInputContainer'>
                                        <input
                                            className='ApplicationFormInput'
                                            type="text"
                                            placeholder="Максим"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='InputBlock PhoneInput'>
                                    <div className='PhoneInputContainer'>
                                        <div className='PhoneType'>
                                            <Typography varisnt='title5' fontWeight='body6' fontStyle='italic'>+
                                                380</Typography>
                                        </div>
                                        <input
                                            className='ApplicationFormInput ApplicationFormInputPhone'
                                            type="tel"
                                            placeholder="73 356 50 81"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='InputBlock CityInput'>
                                    <div className='CityInputContainer'>
                                        <input
                                            className='ApplicationFormInput'
                                            type="text"
                                            placeholder="Київ"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            {showError && (
                                <div className='ErrorMessage'>
                                    <Typography color='red' variant='title7' fontWeight='body4'>
                                        {error ? null : 'Будь ласка, заповніть усі поля'}
                                    </Typography>
                                </div>
                            )}
                            <div className="SendButtonDiv">
                                <Button onSubmit={handleSubmit} backgrndColor={formIsSent ? 'green' : 'blue'} size="big">
                                    {formIsSent ?
                                        <Typography variant='title5' fontWeight='body3'>НАДІСЛАНО</Typography> :
                                        <Typography variant='title5' fontWeight='body3'>НАДІСЛАТИ</Typography>
                                    }
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='FormIsSentText'>
                        {formIsSent && (
                            <Typography variant='title5' fontWeight='body4' color='darkGrey'>
                                Вашу заявку успішно надіслано. Це вікно автоматично закриється
                                через {`${timeLeft}`} секунд.
                            </Typography>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default memo(ApplicationForm);