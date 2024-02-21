import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss';
import Typography from "../../atoms/Typography";
import LightArrow from "../../atoms/Icons/LightArrowMobile.svg"
import DarkArrow from "../../atoms/Icons/DarkArrowMobile.svg"

const ProcessSlider = () => {

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
    };

    return (
        <div className='ProcessSlider'>
            <Slider {...settings}>
                <div>
                    <div className='Slide'>
                        <div className='SlideText'>
                            <Typography fontWeight='body3' variant='title14'>Залиште заявку на сайті, далі після обговорення<br/>
                                <Typography fontWeight='body3' variant='title14' color='green'>всіх важливих для вас питань </Typography>
                                ми з вами<br/>
                                заключаємо договір з обговоренням умов для<br/>
                                подальшої співпраці.
                            </Typography>
                        </div>
                        <div className='SlidePage'>
                            <div className='SliderArrows'>
                                <img src={DarkArrow} className='DarkArrowMobile'/>
                                <img src={LightArrow} className='LightArrowMobile'/>
                            </div>
                            <div className='SlideNumber'>
                                <Typography fontWeight='body3' variant='title15' color='green'>1/6</Typography>
                                <Typography fontWeight='body2' variant='title5' color='green'>Початок</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='Slide'>
                        <div className='SlideText'>
                            <Typography fontWeight='body3' variant='title14'>Обговорення поточної кількості вашого<br/>
                                замовлення. Далі замовник вносить
                                <Typography fontWeight='body3' variant='title14' color='green'> аванс (30%<br/>від
                                    загальної суми)</Typography>
                                , на ці гроші ми виробляємо<br/>упаковку
                                <Typography fontWeight='body3' variant='title14' color='green'> на весь обсяг
                                    замовлення</Typography>
                                . З грошей<br/>
                                внесених на виробництво упаковки ми нічого не<br/>
                                отримуємо, ми заробляємо лише на виготовленні<br/>
                                та продажу жувальної гумки.
                            </Typography>
                        </div>
                        <div className='SlidePage'>
                            <div className='SlideNumber'>
                                <Typography fontWeight='body3' variant='title15' color='green'>2/6</Typography>
                                <Typography fontWeight='body2' variant='title5' color='green'>Кількість</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='Slide'>
                        <div className='SlideText'>
                            <Typography fontWeight='body3' variant='title14'>Наш дизайнер,
                                <Typography fontWeight='body3' variant='title14' color='green'> враховуючи ваші
                                    побажання</Typography>
                                ,<br/>
                                розробляє дизайн упаковки та узгоджує його з<br/>
                                вами.
                            </Typography>
                        </div>
                        <div className='SlidePage'>
                            <div className='SlideNumber'>
                                <Typography fontWeight='body3' variant='title15' color='green'>3/6</Typography>
                                <Typography fontWeight='body2' variant='title5' color='green'>Дизайн</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='Slide'>
                        <div className='SlideText'>
                            <Typography fontWeight='body3' variant='title14'>Після узгодження дизайну ми замовляємо<br/>
                                виробництво упаковки у
                                <Typography fontWeight='body3' variant='title14' color='green'> підприємства, що<br/>
                                    спеціалізується на виготовленні упаковки для<br/>
                                    харчової продукції
                                </Typography>
                                . Майже весь час, що йде на<br/>
                                виробництво замовлення, витрачається саме на<br/>
                                виробництво упаковки з вашим дизайном, цей час<br/>
                                зазвичай становить
                                <Typography fontWeight='body3' variant='title14' color='green'> приблизно 2
                                    тижні</Typography>
                                .
                            </Typography>
                        </div>
                        <div className='SlidePage'>
                            <div className='SlideNumber'>
                                <Typography fontWeight='body3' variant='title15' color='green'>4/6</Typography>
                                <Typography fontWeight='body2' variant='title5' color='green'>Виробництво</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='Slide'>
                        <div className='SlideText'>
                            <Typography fontWeight='body3' variant='title14'>
                                Після того, як ваше замовлення було виготовлено <br/>
                                та укомплектовано, ви можете замовляти його<br/>
                                певними частинами і як раніше вже зазначалося<br/>
                                отримати його
                                <Typography fontWeight='body3' variant='title14' color='green'> у будь-який зручний для
                                    вас час та<br/>
                                    у будь-якому місці
                                </Typography>
                                .
                            </Typography>
                        </div>
                        <div className='SlidePage'>
                            <div className='SlideNumber'>
                                <Typography fontWeight='body3' variant='title15' color='green'>5/6</Typography>
                                <Typography fontWeight='body2' variant='title5' color='green'>Отримання</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='Slide'>
                        <div className='SlideText'>
                            <Typography fontWeight='body3' variant='title14'>
                                Вітаємо з успішним покращенням вашого сервісу!
                            </Typography>
                        </div>
                        <div className='SlidePage'>
                            <div className='SliderArrows'>
                                <img src={DarkArrow} className='DarkArrowMobile'/>
                                <img src={LightArrow} className='LightArrowMobile'/>
                            </div>
                            <div className='SlideNumber'>
                                <Typography fontWeight='body3' variant='title15' color='green'>6/6</Typography>
                                <Typography fontWeight='body2' variant='title5' color='green'>Реалізація</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default ProcessSlider;
