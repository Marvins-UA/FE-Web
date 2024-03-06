import LogoMarvins from "../../atoms/Icons/logo_Marvins.png"
import Typography from "../../atoms/Typography";
import './style.scss';

function NavMenu() {
    return (
        <div className="NavMenu">
            <div className="MenuBlock">
                <a href='#advantagesSection'><Typography variant='title5' fontWeight='body2'>ПЕРЕВАГИ</Typography></a>
                <a href='#flavorsSection'><Typography variant='title5' fontWeight='body2'>СМАКИ</Typography></a>
                <a href='#cooperationSection'><Typography variant='title5' fontWeight='body2'>СПІВПРАЦЯ</Typography></a>
            </div>
            <img className='LogoMarvins' src={LogoMarvins}/>
            <div className='MenuBlock'>
                <a href='#footerSection'><Typography variant='title5' fontWeight='body2'>КОНТАКТИ</Typography></a>
                <a href='#processSection'><Typography variant='title5' fontWeight='body2'>ПРОЦЕС</Typography></a>
                <a href='#partnersSection'><Typography variant='title5' fontWeight='body2'>ПАРТНЕРИ</Typography></a>
            </div>
        </div>
    );
}

export default NavMenu;
