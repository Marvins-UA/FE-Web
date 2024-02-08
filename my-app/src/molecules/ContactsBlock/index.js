import './style.scss';
import Typography from "../../atoms/Typography";
import PhoneIcon from "../../atoms/Icons/PhoneIcon.png"
import MailIcon from "../../atoms/Icons/MailIcon.png"
import InstagramIcon from "../../atoms/Icons/InstagramIcon.png"
import FacebookIcon from "../../atoms/Icons/FacebookIcon.png"
import WatsAppIcon from "../../atoms/Icons/WatsAppIcon.png"
import TelegramIcon from "../../atoms/Icons/TelegramIcon.png"

function ContactsBlock() {
    return (
        <div className="ContactsBlock">
            <div className='ContactDiv'>
                <div className='PhoneContactTitle'>
                    <img src={PhoneIcon} className='PhoneIcon'/>
                    <Typography variant='title6' fontWeight='body4'>ЗАТЕЛЕФОНУЙТЕ НАМ</Typography>
                </div>
                <a href="tel:+(380) 73 356 50 81">
                    <Typography color='green' fontWeight='body4' variant='title5'>+(380) 73 356 50 81</Typography>
                </a>
            </div>
            <div className='ContactDiv'>
                <div className='MailContactTitle'>
                    <img src={MailIcon} className='MailIcon'/>
                    <Typography variant='title6' fontWeight='body4'>ПОШТА</Typography>
                </div>
                    <a href="mailto:info@marvins.ua">
                        <Typography color='green' fontWeight='body4' variant='title5'>info@marvins.ua</Typography>
                    </a>
            </div>
            <div className='SocialMediaDiv'>
                <img src={InstagramIcon}/>
                <img src={FacebookIcon}/>
                <img src={WatsAppIcon}/>
                <img src={TelegramIcon}/>
            </div>
        </div>
    );
}

export default ContactsBlock;
