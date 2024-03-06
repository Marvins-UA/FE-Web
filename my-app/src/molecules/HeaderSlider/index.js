import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss';
import Typography from "../../atoms/Typography";
import LightArrow from "../../atoms/Icons/LightArrowMobile.svg"
import DarkArrow from "../../atoms/Icons/DarkArrowMobile.svg"

const HeaderSlider = () => {

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
    };

    return (
        <div className='HeaderSlider'>
            <Slider {...settings}>
                <div>
                    <div className='Slide'>
                        <div className='SlideText'>
                            <Typography fontWeight='body3' variant='title15'>Поліпшення вашого рівня обслуговування<br/>
                                за дуже низькою ціною.</Typography>
                        </div>
                        <div className='SlidePage'>
                            <div className='SliderArrows'>
                                <img src={DarkArrow} className='DarkArrowMobile'/>
                                <img src={LightArrow} className='LightArrowMobile'/>
                            </div>
                            <div className='SlideNumber'>
                                <Typography fontWeight='body3' variant='title15' color='green'>1/6</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='Slide'>
                        <div className='SlideText'>
                            <Typography fontWeight='body3' variant='title15'>Додатковий
                                <Typography fontWeight='body3' variant='title15' color='green'> брендований атрибут </Typography>
                                у<br/>вашому закладі, який приверне увагу<br/>вашого клієнта</Typography>
                        </div>
                        <div className='SlidePage'>
                            <div className='SliderArrows'>
                                <img src={DarkArrow} className='DarkArrowMobile'/>
                                <img src={LightArrow} className='LightArrowMobile'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='Slide'>
                        <div className='SlideText'>
                            <Typography fontWeight='body3' variant='title15'>
                                <Typography fontWeight='body3' variant='title15' color='green'>Гігієна</Typography>.
                                Наприклад після страв з часником<br/>
                                Marvins повністю прибере запах часнику з<br/>
                                роту, також marvins прибирає запах після<br/>
                                куріння цигарок, що теж може стати в<br/>
                                нагоді деяким вашим клієнтам</Typography>
                        </div>
                        <div className='SlidePage'>
                            <div className='SliderArrows'>
                                <img src={DarkArrow} className='DarkArrowMobile'/>
                                <img src={LightArrow} className='LightArrowMobile'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='Slide'>
                        <div className='SlideText'>
                            <Typography fontWeight='body3' variant='title15'>Співпраця з
                                <Typography fontWeight='body3' variant='title15' color='green'> українським виробником</Typography>
                                , що<br/>
                                не нехтує стандантартами якості та<br/>
                                безпеки
                            </Typography>
                        </div>
                        <div className='SlidePage'>
                            <div className='SliderArrows'>
                                <img src={DarkArrow} className='DarkArrowMobile'/>
                                <img src={LightArrow} className='LightArrowMobile'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='Slide'>
                        <div className='SlideText'>
                            <Typography fontWeight='body3' variant='title15'>
                                <Typography fontWeight='body3' variant='title15' color='green'>Нативна реклама</Typography>
                                , що нагадає клієнту про<br/>
                                вас в ситуації коли він покладе гумку до<br/>
                                кишені і дістане її через деякий час
                            </Typography>
                        </div>
                        <div className='SlidePage'>
                            <div className='SliderArrows'>
                                <img src={DarkArrow} className='DarkArrowMobile'/>
                                <img src={LightArrow} className='LightArrowMobile'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='Slide'>
                        <div className='SlideText'>
                            <Typography fontWeight='body3' variant='title15'>
                                Зручність для вас, так як наша компанія<br/>
                                приклала значні зусилля, щоб наші<br/>
                                партнери відчували комфорт при<br/>
                                співпраці з нами.
                                <Typography fontWeight='body3' variant='title15' color='green'> Цей сайт надасть вам<br/>всю інформацію, що вас цікавить</Typography>
                            </Typography>
                        </div>
                        <div className='SlidePage'>
                            <div className='SliderArrows'>
                                <img src={LightArrow} className='LightArrowMobile ArrowBack'/>
                                <img src={DarkArrow} className='DarkArrowMobile ArrowBack'/>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default HeaderSlider;
