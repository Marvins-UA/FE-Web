import LogoMarvins from "../../atoms/Icons/logo_Marvins.png"
import Typography from "../../atoms/Typography";
import './style.scss';

function NavMenu() {
    return (
        <div className="NavMenu">
            <div className="MenuBlock">
                <Typography variant='title5' fontWeight='body2'>ПЕРЕВАГИ</Typography>
                <Typography variant='title5' fontWeight='body2'>СМАКИ</Typography>
                <Typography variant='title5' fontWeight='body2'>СПІВПРАЦЯ</Typography>
            </div>
            <img className='LogoMarvins' src={LogoMarvins}/>
            <div className='MenuBlock'>
                <Typography variant='title5' fontWeight='body2'>КОНТАКТИ</Typography>
                <Typography variant='title5' fontWeight='body2'>ПРОЦЕС</Typography>
                <Typography variant='title5' fontWeight='body2'>ПАРТНЕРИ</Typography>
            </div>
        </div>
    );
}

export default NavMenu;
